import { List, Datagrid, TextField, EditButton, DateField } from "react-admin";

const DollarList = () => (
  <List title="Dólar" pagination={false} actions={false}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="rate" label="Valor del dólar" />
      <DateField source="updatedAt" label="Última actualización" showTime />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
);

export default DollarList;
