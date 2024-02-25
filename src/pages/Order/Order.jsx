import React, { useState } from "react";
import Cover from "../Home/Home/Shared/Cover/Cover";
import shopCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "./OrderTab/OrderTab";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu?.filter((item) => item.category === "drinks");
  const desserts = menu?.filter((item) => item.category === "dessert");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const pizza = menu?.filter((item) => item.category === "pizza");
  return (
    <section>
      {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      {/* Main Cover */}
      <Cover
        bgImg={shopCoverImg}
        title="our shop"
        details="Would you like to try a dish?"
      />
      <div className="container mx-auto py-20 px-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center uppercase">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
