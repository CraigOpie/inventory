import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListPartAdmin.jsx. */
class PartItemAdmin extends React.Component {
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
          <Table.Cell>{this.props.part.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
PartItemAdmin.propTypes = {
  part: PropTypes.object.isRequired,
};

export default PartItemAdmin;
