import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}> </RouterProvider>
    </>
  );
}

export default App;
