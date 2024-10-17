import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { ProductList } from './ProductList';
import { CategoryList } from './CategoryList';
import { RoleList } from './RoleList';
import { UserList } from './UserList';
import { ProductShow } from './ProductShow';

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} basename="/admin">
    <Resource name="products" list={ProductList} show={ProductShow} />
    <Resource name="categories" list={CategoryList} />
    <Resource name="roles" list={RoleList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default AdminDashboard;
