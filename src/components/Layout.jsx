import React from "react";
import SideNav from "./SideNav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <SideNav children={props.children} />
      <hr />
      <Footer />
    </>
  );
};

export default Layout;
