/* eslint-disable react/jsx-key */
import { List, Datagrid, TextField, NumberField, TextInput, SelectInput, Filter } from 'react-admin';
import ProductModal from '../../components/modal/ProductModal';
import { useState } from 'react';

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput source="name" label="Buscar por Nombre" alwaysOn />
    <TextInput source="minPrice" label="Precio Mínimo" />
    <TextInput source="maxPrice" label="Precio Máximo" />
    <SelectInput 
      source="sort" 
      label="Ordenar por" 
      choices={[
        { id: 'most popular', name: 'Más Popular' },
        { id: 'highest price', name: 'Precio más Alto' },
        { id: 'lowest price', name: 'Precio más Bajo' },
        { id: 'newest', name: 'Más Nuevo' },
      ]}
      alwaysOn
    />
  </Filter>
);

export const ProductList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-4"></div>
      <ProductModal isOpen={modalOpen} closeModal={closeModal} />
      <List
        {...props}
        filters={<ProductFilter />}
        perPage={25}
      >
        <Datagrid rowClick="edit">
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
