import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet"
import { ToastContainer} from "react-toastify";


const Layout = ({ children, title, description, Keywords,author }) => {
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <meta name="description" content={description}/>
          <meta name="Keywords" content={Keywords}/>
          <meta name="author" content={author}/>
          <title>{title}</title>
        </Helmet>
      </div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer/>
        {children}
        </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
}

export default Layout;
