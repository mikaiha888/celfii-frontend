import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ProductList } from './ProductList';
import { CategoryList } from './CategoryList';
import { RoleList } from './RoleList';
import { UserList } from './UserList';

const dataProvider = jsonServerProvider('http://localhost:3001');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} basename="/admin">
    <Resource name="products" list={ProductList} />
    <Resource name="categories" list={CategoryList} />
    <Resource name="roles" list={RoleList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default AdminDashboard;
