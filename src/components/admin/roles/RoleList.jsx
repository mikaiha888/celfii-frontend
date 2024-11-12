import { List, Datagrid, TextField } from "react-admin";

const RoleList = () => (
  <List title="Roles" pagination={false} actions={false}>
    <Datagrid isRowSelectable={() => false}>
      <TextField source="name" label="Role Name" sortable={false} />
    </Datagrid>
  </List>
);

export default RoleList;
