import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Parts } from '../../api/part/Part';
import PartItemAdmin from '../components/PartItemAdmin';

/** Renders a table containing all of the Part documents. Use <PartItem> to render each card. */
class ListPartAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Parts (Admin)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Manufacturer Part No.</Table.HeaderCell>
                <Table.HeaderCell>DigiKey Part No.</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.parts.map((part) => <PartItemAdmin key={part._id} part={part} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Part documents in the props. */
ListPartAdmin.propTypes = {
  parts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Part documents.
  const subscription = Meteor.subscribe('PartAdmin');
  return {
    parts: Parts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListPartAdmin);
