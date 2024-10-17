/* eslint-disable react/jsx-key */
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  TextInput,
  NumberInput,
  Button,
} from 'react-admin';
import ProductModal from '../../components/modal/ProductModal';
import { useState } from 'react';

export const ProductList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button label="Agregar Producto" onClick={openModal} />
      <ProductModal isOpen={modalOpen} closeModal={closeModal} />
      <List
        pagination={false}
        {...props}
        filters={[
          <TextInput source="name" label="Buscar por Nombre" alwaysOn />,
          <TextInput source="minPrice" label="Precio Mínimo" />,
          <TextInput source="maxPrice" label="Precio Máximo" />,
          <NumberInput source="page" label="Página" alwaysOn={true} />,
          <NumberInput source="perPage" label="Por Página" alwaysOn={true} />,
        ]}
      >
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="name" label="Nombre del Producto" />
          <TextField source="description" label="Descripción" />
          <TextField source="category.name" label="Categoría" />
          <NumberField source="priceArs" label="Precio (ARS)" />
          <NumberField source="priceUsd" label="Precio (USD)" />
          <NumberField source="stock" label="Stock" />
          <TextField source="code" label="Código" />
          <TextField source="imei" label="IMEI" />
          <NumberField source="view.counter" label="Vistas" />
        </Datagrid>
      </List>
    </div>
  );
};
