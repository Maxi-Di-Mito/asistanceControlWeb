import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource, jsonServerRestClient, List, Datagrid,TextField,DateField,TextInput, DateInput,SimpleForm, Create,ReferenceField } from 'admin-on-rest';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const PersonList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='name'/>
      <TextField source='lastName' />
    </Datagrid>
  </List>
)

const CreatePerson = (props) => (
  <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="lastName" />
        </SimpleForm>
    </Create>
)


const AsistanceList = (props) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField source="person" reference="persons">
        <TextField source='name'/>
        <TextField source='lastName' />
      </ReferenceField>
      <DateField source='date'/>
    </Datagrid>
  </List>

)

const AsistanceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput source="lastName" />
    </SimpleForm>
  </Create>
)

const App = () => (
  <div style={styles}>
    <Admin restClient={jsonServerRestClient('http://localhost:9001/api')}>
      <Resource name='persons' list={PersonList} create={CreatePerson}/>
      <Resource name='asistances' list={AsistanceList} create={AsistanceCreate}/>
    </Admin>
  </div>
);

render(<App />, document.getElementById('root'));
