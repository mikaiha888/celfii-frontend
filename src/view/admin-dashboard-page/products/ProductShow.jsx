import { Show, SimpleShowLayout, TextField, NumberField, ImageField } from 'react-admin';

export const ProductShow = (props) => (
  <Show title="Producto" {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="" />
      <ImageField source="images[1].url" label="" />
      <ImageField source="images[2].url" label="" />
      <ImageField source="images[3].url" label="" />
      <ImageField source="images[4].url" label="" />
      <ImageField source="images[5].url" label="" />
      <ImageField source="images[6].url" label="" />
      <ImageField source="images[7].url" label="" />
      <ImageField source="images[8].url" label="" />
      <ImageField source="images[9].url" label="" />
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
