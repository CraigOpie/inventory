import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the List Part. */
class PartItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content textAlign="center">
            <Link to={`/update/${this.props.part._id}`}>
              <Image
                size='small'
                src={ this.props.part.image }
              />
            </Link>
            <Card.Header textAlign="center">
              { this.props.part.name } - { this.props.part.value }
            </Card.Header>
            <Label circular as='a'>Qty { this.props.part.quantity }</Label>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.part._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
PartItem.propTypes = {
  part: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(PartItem);
