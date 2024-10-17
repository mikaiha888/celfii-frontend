import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ProductList } from './ProductList';

const dataProvider = jsonServerProvider('http://localhost:3001');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="products" list={ProductList} />
  </Admin>
);

export default AdminDashboard;
