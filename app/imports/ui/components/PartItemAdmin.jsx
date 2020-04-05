import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Part (Admin) table. See pages/ListPartAdmin.jsx. */
class PartItemAdmin extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
              size='large'
              src={ this.props.part.image }
            />
            <Card.Header textAlign="center">
              { this.props.part.name } - { this.props.part.value }
            </Card.Header>
          </Card.Content>
          <Card.Content>
            { this.props.part.owner }
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
PartItemAdmin.propTypes = {
  part: PropTypes.object.isRequired,
};

export default PartItemAdmin;
