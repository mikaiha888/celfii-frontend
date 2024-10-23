import { List, Datagrid, TextField , ExportButton } from 'react-admin';

export const RoleList = () => (
  <List title="Roles" pagination={false} actions={
    <div>
      <ExportButton label="Exportar Roles" />
    </div>
  }>
    <Datagrid>
      <TextField source="name" label="Role Name" />
    </Datagrid>
  </List>
);
