import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Layout from "./LoginNavbar/Layout";
import Body from "./Pages/Body";
import Introduction from "./LoginNavbar/ConceptPages/Introduction";
import Installation from "./LoginNavbar/ConceptPages/Installation";
import Jsxrules from "./LoginNavbar/ConceptPages/jsxrule";
import Help from "./Pages/Help";
import Login from "./Login/ReactLogin";
import ReactComponent from "./LoginNavbar/ConceptPages/ReactComponent";
import Prop from "./LoginNavbar/ConceptPages/Reactprop";
import Conditionalreendering from "./LoginNavbar/ConceptPages/Conditionalreendering";
import PageNotFound from "./LoginNavbar/PageNotFound";
import Dashboard from "./LoginNavbar/Dashboard";
import Loginreact from "./LoginNavbar/Loginreact";
import Register from "./LoginNavbar/Register";
import Privaterouting from "./LoginNavbar/PrivateRouting/Privaterouting";

const App = () => {
  const paths = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",   
          element: <Body />,
         
        },
        {
          path:"/dashboard",
          element:<Privaterouting>
            <Dashboard/>
          </Privaterouting>,
          children: [
            {
              path: "/dashboard/introduction", 
              element: <Introduction />
            },
            {
                path:"/dashboard/installation",
                element:<Installation/>
            },
            {
                path:"/dashboard/jsxrules",
                element:<Jsxrules/>
            },
            {
                path:"/dashboard/components",
                element:<ReactComponent/>
            },
            {
                path:"/dashboard/props",
                element:<Prop/>
            },
            {
                path:"/dashboard/conditional reendering",
                element:<Conditionalreendering/>
            }
          ]
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "career", element: <Career /> },
        {path:"help",element:<Help/>},
        {path:"login",element:<Loginreact/>},
        {path:"sign",element:<Register/>},
        {path:"homelogin",element:<Loginreact/> }
    ],
    errorElement:<PageNotFound/>
    }
  ]);

  return <RouterProvider router={paths} />;
};

export default App;
