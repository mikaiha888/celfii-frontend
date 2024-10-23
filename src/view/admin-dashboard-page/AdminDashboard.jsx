import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { ProductList } from './products/ProductList';
import { CategoryList } from './categories/CategoryList';
import CategoryCreate from './categories/CategoryCreate';
import CategoryEdit from './categories/CategoryEdit';
import { RoleList } from './roles/RoleList';
import { UserList } from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import { ProductShow } from './products/ProductShow';
import ProductCreate from './products/ProductCreate';
import ProductEdit from './products/ProductEdit';

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} basename="/admin">
    <Resource
      name="products"
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
    <Resource name="roles" list={RoleList} />
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
);

export default AdminDashboard;
