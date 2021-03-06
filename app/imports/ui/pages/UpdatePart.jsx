import React from 'react';
import { Grid, Loader, Header, Card, Segment, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, HiddenField, NumField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Parts, PartSchema } from '../../api/part/Part';
import UpdatePartItem from '../components/UpdatePartItem';

/** Renders the Page for editing a single document. */
class UpdatePart extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, value, quantity, location, image, manpartnum, digipartnum, _id } = data;
    Parts.update(_id, { $set: { name, value, quantity, location, image, manpartnum, digipartnum } },
        (error) => (swal('Error', error.message, 'error')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column centered width={8}>
            <Header as="h2" textAlign="center">Update Part</Header>
            <Card.Group>
              { this.props.parts.filter(part => part._id === this.props.doc._id).map((part) => <UpdatePartItem
                  key={ part._id } part={ part } />) }
            </Card.Group>
            <AutoForm align='center' schema={PartSchema} onSubmit={data => this.submit(data)}
                      model={this.props.doc}>
              <Segment width={6}>
                <HiddenField name='name'/>
                <HiddenField name='value'/>
                <NumField name='quantity' decimal={false}/>
                <HiddenField name='location'/>
                <HiddenField name='image'/>
                <HiddenField name='manpartnum'/>
                <HiddenField name='digipartnum'/>
                <Button type='submit' color='green'>Update</Button>
                <ErrorsField/>
                <HiddenField name='owner' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Part document in the props object. Uniforms adds 'model' to the props, which we use. */
UpdatePart.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  parts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Part documents.
  const subscription = Meteor.subscribe('Part');
  return {
    doc: Parts.findOne(documentId),
    parts: Parts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(UpdatePart);
