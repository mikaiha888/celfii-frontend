import { Edit, SimpleForm, TextInput, Toolbar, SaveButton } from "react-admin";

const CustomToolbar = () => (
  <Toolbar className="flex justify-end pt-4">
    <SaveButton
      className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 active:bg-green-800 transition duration-300"
      label="Guardar"
    />
  </Toolbar>
);

const DollarEdit = (props) => (
  <Edit {...props} className="flex justify-center items-center pt-10">
    <SimpleForm toolbar={<CustomToolbar />} className="max-w-md p-6 border border-gray-300 rounded-lg shadow-md ">
      <TextInput source="rate" label="Valor del dólar" className="w-full" />
    </SimpleForm>
  </Edit>
);

export default DollarEdit;
