import { useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions";
import { ThemeProvider } from "@mui/material/styles";
import { loadFromSessionStorage } from "../../helpers";
import { lightTheme, darkTheme } from "../../components/admin/theme/theme";
import { Admin, Resource, Layout, AppBar, UserMenu } from "react-admin";

import dataProvider from "./dataProvider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import ProductList from "../../components/admin/products/ProductList";
import ProductShow from "../../components/admin/products/ProductShow";
import ProductCreate from "../../components/admin/products/ProductCreate";
import ProductEdit from "../../components/admin/products/ProductEdit";

import UserList from "../../components/admin/users/UserList";
import UserCreate from "../../components/admin/users/UserCreate";
import UserEdit from "../../components/admin/users/UserEdit";

import CategoryList from "../../components/admin/categories/CategoryList";
import CategoryCreate from "../../components/admin/categories/CategoryCreate";
import CategoryEdit from "../../components/admin/categories/CategoryEdit";

import RoleList from "../../components/admin/roles/RoleList";

import DollarList from "../../components/admin/dollar/DollarList";
import DollarEdit from "../../components/admin/dollar/DollarEdit";

const CustomAppBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <AppBar {...props}>
      <UserMenu />
      <Button color="inherit" startIcon={<ExitToAppIcon />} onClick={handleLogout}>
        Salir
      </Button>
    </AppBar>
  );
};

const CustomLayout = (props) => {
  return (
    <div className="mt-10">
      <Layout {...props} appBar={CustomAppBar} />
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = loadFromSessionStorage("userData");
    if (!userData) {
      navigate("/login");
      toast.error("La sesión ha expirado. Vuelve a iniciar sesión para continuar.")
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Admin
        dataProvider={dataProvider}
        basename="/admin"
        layout={CustomLayout}
        theme={lightTheme}
        darkTheme={darkTheme}
      >
        <Resource
          name="products"
          options={{ label: "Productos" }}
          list={ProductList}
          show={ProductShow}
          edit={ProductEdit}
          create={ProductCreate}
        />
        <Resource
          name="categories"
          options={{ label: "Categorias" }}
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
        />
        <Resource name="roles" options={{ label: "Roles" }} list={RoleList} />
        <Resource
          name="users"
          options={{ label: "Usuarios" }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource name="dollar" options={{ label: "Dólar" }} list={DollarList} edit={DollarEdit} />
      </Admin>
    </ThemeProvider>
  );
};

export default AdminDashboard;
