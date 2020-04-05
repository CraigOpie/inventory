import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the List Part. */
class PartItem extends React.Component {
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
          <Card.Content extra>
            <Link to={`/edit/${ this.props.part._id }`}>Edit</Link>
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
