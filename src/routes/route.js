
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
      path: "/",
      component: <Home />
    },
    {
      path: "/login",
      component: <Login />
    },
    {
      path: "/contact",
      component: <Contact />
    },
    {
      path: "/register",
      component: <Register />
    },
    {
      path: "/header",
      component: <Header />
    },
    {
      path: "/main",
      component: <Main />
    },
    {
      path: "/footer",
      component: <Footer />
    },
    {
      path: "*",
      component: <PageNotFound/>
    }

  ]