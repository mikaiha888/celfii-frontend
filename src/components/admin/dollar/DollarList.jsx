import { List, Datagrid, TextField, EditButton, DateField } from "react-admin";

const DollarList = () => (
  <List title="Dólar" pagination={false} actions={false}>
    <Datagrid isRowSelectable={() => false} >

      <TextField source="id" label="ID" sortable={false} />
      <TextField source="rate" label="Valor del dólar" sortable={false} />
      <DateField source="updatedAt" label="Última actualización" showTime sortable={false} />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
);

export default DollarList;
