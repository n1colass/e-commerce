import React from "react";
import Header from "./Header";
import Main from "./MainPage/Main";
import Footer from "./Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";

const Home = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default Home;
