import { useLocation, useNavigate } from 'react-router-dom';
import CardNav from '../../ReactbitzComponent/CardNav';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [activeLabel, setActiveLabel] = useState("");

  const routeMap = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/services': 'Services',
    '/contact': 'Contact'
  };

  useEffect(() => {
    const label = routeMap[location.pathname];
    if (label) setActiveLabel(label);
  }, [location.pathname]);

  const items = [
    {
      label: "Home",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      defaultColor: "#170D27",
      links: [
        {
          label: "Home", ariaLabel: "About Company",
          onClick: () => {
            setActiveLabel("Home");
            navigate("/");
          },
        },
      ]
    },
    {
      label: "About",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      defaultColor: "#170D27",
      links: [
        {
          label: "Company", ariaLabel: "About Company",
          onClick: () => {
            setActiveLabel("About");
            navigate("/about");
          },
        },
      ]
    },
    {
      label: "Projects",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      defaultColor: "#170D27",
      links: [
        {
          label: "Featured", ariaLabel: "Featured Projects", onClick: () => {
            setActiveLabel("Projects");
            navigate("/projects");
          },
        },
      ]
    },
    {
      label: "Services",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      defaultColor: "#170D27",
      links: [
        {
          label: "Company", ariaLabel: "About Company", onClick: () => {
            setActiveLabel("Services");
            navigate("/services");
          },
        },
      ]
    },
    {
      label: "Contact",
      bgColor: "linear-gradient(135deg, #9CC6DB 0%, #F2AEBB 50%, #FFFFFF 100%)",
      textColor: "#171414ff",
      defaultColor: "#170D27",
      links: [
        {
          label: "Email", ariaLabel: "Email us", onClick: () => {
            setActiveLabel("Contact");
            navigate("/contact");
          },
        },
        // { label: "Twitter", ariaLabel: "Twitter" },
        // { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  const updatedItems = items.map((item) => ({
    ...item,
    bgColor: activeLabel === item.label ? item.bgColor : item.defaultColor,
    textColor: activeLabel === item.label ? item.textColor : "#fff",
  }));

  return (
    <CardNav
      logoAlt="Logo"
      items={updatedItems}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
