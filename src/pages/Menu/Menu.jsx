import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Home/Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../hooks/useMenu";
import chefServicePic from '../../assets/home/chef-service.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu?.filter(item => item.category === 'offered');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    const pizza = menu?.filter(item => item.category === 'pizza');
  return (
    <section>
        {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <div>
        <Cover bgImg={menuImg} title='our menu' details='Would you like to try a dish?'/>
      </div>
      {/* Offered Item Section */}
      <div className="container mx-auto py-20 px-5">
        <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER" />
        <MenuCategory items={offered}/>
      </div>
      <div>
      <Cover bgImg={chefServicePic} subTitle='dessert' longDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
      </div>
    </section>
  );
};

export default Menu;
