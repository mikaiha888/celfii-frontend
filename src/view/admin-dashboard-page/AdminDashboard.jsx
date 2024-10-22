import { Admin, Resource, Layout, AppBar, UserMenu} from 'react-admin';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import dataProvider from './dataProvider';
import { ProductList } from './products/ProductList';
import ProductCreate from './products/ProductCreate';
import { CategoryList } from './categories/CategoryList';
import CategoryCreate from './categories/CategoryCreate';
import CategoryEdit from './categories/CategoryEdit';
import { RoleList } from './roles/RoleList';
import { UserList } from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import { ProductShow } from './products/ProductShow';
import ProductEdit from './products/ProductEdit';

const CustomAppBar = (props) => {
  const navigate = useNavigate();

  return (
    <AppBar {...props}>
      <UserMenu />
      <Button
        color="inherit"
        startIcon={<ExitToAppIcon />}
        onClick={() => {
          navigate('/');
        }}
      >
        Salir
      </Button>
    </AppBar>
  );
};

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} basename="/admin" layout={CustomLayout}>
    <Resource
      name="products"
      options={{ label: 'Productos' }}
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="categories"
      options={{ label: 'Categorias' }}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource name="roles" options={{ label: 'Roles' }} list={RoleList} />
    <Resource
      name="users"
      options={{ label: 'Usuarios' }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
);

export default AdminDashboard;
