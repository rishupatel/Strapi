
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";

 export const route = [
    
   
    {
      path: "contact",
      component: <Contact />
    },
   
    {
      path: "header",
      component: <Header />
    },
    {
      path: "main",
      component: <Main />
    },
    {
      path: "footer",
      component: <Footer />
    },
    {
      path: "*",
      component: <PageNotFound/>
    }

  ]