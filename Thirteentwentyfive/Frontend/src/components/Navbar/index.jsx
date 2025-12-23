import { useNavigate } from 'react-router-dom';
import CardNav from '../../ReactbitzComponent/CardNav';

const Navbar = () => {

  const navigate = useNavigate();

  const items = [
    {
      label: "About",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      
      links: [
        { label: "Company", ariaLabel: "About Company", onClick: () => navigate("/about") },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
     {
      label: "Services",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logoAlt="Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
