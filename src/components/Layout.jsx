import React from "react";
import SideNav from "./SideNav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <div>
        <SideNav children={props.children} />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
