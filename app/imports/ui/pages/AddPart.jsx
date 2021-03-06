import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Parts } from '../../api/part/Part';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  value: String,
  quantity: Number,
  location: String,
  image: String,
  manpartnum: String,
  digipartnum: String,
  owner: String,
});

/** Renders the Page for adding a document. */
class AddPart extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, value, quantity, location, image, manpartnum, digipartnum } = data;
    const owner = Meteor.user().username;
    Parts.insert({ name, value, quantity, location, image, manpartnum, digipartnum, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Part added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Part</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={ formSchema } onSubmit={ data => this.submit(data, fRef) } >
              <Segment>
                <TextField name='name'/>
                <TextField name='value'/>
                <NumField name='quantity' decimal={ false }/>
                <TextField name='location'/>
                <TextField name='image'/>
                <TextField name='manpartnum'/>
                <TextField name='digipartnum'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddPart;
