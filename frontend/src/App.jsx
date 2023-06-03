
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from "./Components/Admin/Index";
import Home from "./Pages/Website/Index";
import Store from "./Pages/Website/Store";
import Dashboard from "./Pages/Admin/Dashboard";
import AddCategory from "./Pages/Admin/Category/Add";
import EditCategory from "./Pages/Admin/Category/Edit";
import ViewCategory from "./Pages/Admin/Category/View";

import AddColor from "./Pages/Admin/Color/Add";
import EditColor from "./Pages/Admin/Color/Edit";
import ViewColor from "./Pages/Admin/Color/View";

import AddProduct from "./Pages/Admin/Product/Add";
import ViewProduct from "./Pages/Admin/Product/View";
import ContextHolder from "./Context/ContextHolder";
import Login from "./Pages/Admin/Login";
import Cart from "./Pages/Website/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "category",
        element: <ViewCategory />
      },
      {
        path: "category/add/",
        element: <AddCategory />
      },
      {
        path: "category/edit/:id",
        element: <EditCategory />
      },
      {
        path: "color",
        element: <ViewColor />
      },
      {
        path: "color/add/",
        element: <AddColor />
      },
      {
        path: "color/edit/:id",
        element: <EditColor />
      },
      {
        path: "product/add",
        element: <AddProduct />
      },
      {
        path: "product/",
        element: <ViewProduct />
      }
    ]
  }
]);
function App() {
  return (
    <ContextHolder>
      {/* Group of Admin */}
      <RouterProvider router={router} />
      {/* Group of Website */}
    </ContextHolder>
  );
}

export default App;
