import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Parts } from '../../api/part/Part';
import PartItem from '../components/PartItem';

/** Renders a table containing all of the Parts documents. Use <PartItem> to render each card. */
class ListPart extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Parts</Header>
          <Card.Group>
            { this.props.parts.map((part) => <PartItem key={ part._id } part={ part } />) }
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Part documents in the props. */
ListPart.propTypes = {
  parts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Part documents.
  const subscription = Meteor.subscribe('Part');
  return {
    parts: Parts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListPart);
