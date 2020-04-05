import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single card in the List Part. */
class UpdatePartItem extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content textAlign="center">
            <Image
              size='small'
              src={ this.props.part.image }
            />
            <Card.Header textAlign="center">
              { this.props.part.name } - { this.props.part.value }
            </Card.Header>
            <Label circular as='a'>Qty { this.props.part.quantity }</Label>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
UpdatePartItem.propTypes = {
  doc: PropTypes.object,
  part: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UpdatePartItem);
