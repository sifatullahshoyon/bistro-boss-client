import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Home/Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <Cover bgImg={menuImg} title='our menu' details='Would you like to try a dish?'/>
      </div>
    </section>
  );
};

export default Menu;
