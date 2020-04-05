import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListPart.jsx. */
class PartItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.part.name}</Table.Cell>
          <Table.Cell>{this.props.part.value}</Table.Cell>
          <Table.Cell>{this.props.part.quantity}</Table.Cell>
          <Table.Cell>{this.props.part.location}</Table.Cell>
          <Table.Cell>{this.props.part.image}</Table.Cell>
          <Table.Cell>{this.props.part.manpartnum}</Table.Cell>
          <Table.Cell>{this.props.part.digipartnum}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.part._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
PartItem.propTypes = {
  part: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(PartItem);
