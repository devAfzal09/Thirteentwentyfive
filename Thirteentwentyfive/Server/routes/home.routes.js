import express from "express";
const router = express.Router();

router.get("/hero", (req, res) => {
  res.json({
    title: "Empowering Your Vision with Scalable AI, Web Development, and App Development",
    description:
      "We blend AI, software engineering, and automation with real industry insight to deliver scalable, future-ready solutions while partnering with you for long-term success."
  });
});

export default router;
