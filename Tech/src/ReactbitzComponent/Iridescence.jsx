import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor1;   // Blue
uniform vec3 uColor2;   // Pink
uniform vec3 uColor3;   // White
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  float t = uTime * 0.25 * uSpeed;

  // Wavy distortion
  uv.x += sin(uv.y * 4.0 + t) * 0.05 * uAmplitude;
  uv.y += cos(uv.x * 3.0 + t) * 0.05 * uAmplitude;

  // Existing color blend
  float mixWave = sin(uv.x * 4.0 + t * 1.5) * 0.5 + 0.5;
  float mixWave2 = sin(uv.y * 3.0 - t) * 0.5 + 0.5;
  float intensity = (mixWave + mixWave2) * 0.5;

  // Mix blue → pink
  vec3 bpMix = mix(uColor1, uColor2, intensity);

  // Mix in white on top (soft overlay)
  float whiteStrength = sin(t + uv.x * 2.0 + uv.y * 3.0) * 0.25 + 0.25;

  vec3 finalColor = mix(bpMix, uColor3, whiteStrength);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export default function Iridescence({
  speed = 1.0,
  amplitude = 0.3,
  mouseReact = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    let program;

    function resize() {
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }

    window.addEventListener("resize", resize);
    resize();

    const geometry = new Triangle(gl);

    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new Color(0.78, 0.89, 0.97) }, 
        uColor2: { value: new Color(1.00, 0.78, 0.82) }, 
        uColor3: { value: new Color(1.0, 1.0, 1.0) }, 
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function update(t) {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }

    if (mouseReact) {
      ctn.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (mouseReact) ctn.removeEventListener("mousemove", handleMouseMove);
      ctn.removeChild(gl.canvas);
    };
  }, [speed, amplitude, mouseReact]);

  return <div ref={ctnDom} className="w-full h-full" {...rest} />;
}
