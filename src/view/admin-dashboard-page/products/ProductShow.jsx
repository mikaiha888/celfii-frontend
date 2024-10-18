import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
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
    </SimpleShowLayout>
  </Show>
);
