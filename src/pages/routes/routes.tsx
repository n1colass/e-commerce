import { createBrowserRouter } from "react-router-dom";
import Main from "../Home/MainPage/Main";
import ErrorPage from "../../components/ErrorPage";
import SingleProduct from "../Home/ProductView/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
    errorElement: <ErrorPage />,
  },
]);
