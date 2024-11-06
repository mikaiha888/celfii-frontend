import { List, Datagrid, TextField } from "react-admin";

const RoleList = () => (
  <List title="Roles" pagination={false} actions={false}>
    <Datagrid>
      <TextField source="name" label="Role Name" />
    </Datagrid>
  </List>
);

export default RoleList;
