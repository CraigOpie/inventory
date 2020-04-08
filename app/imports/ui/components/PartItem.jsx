import React from 'react';
import { Card, Image, Label, Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the List Part. */
class PartItem extends React.Component {
  render() {
    let url = 'https://api.qrserver.com/v1/create-qr-code/?data=http://192.168.154.21:3000/#/update/';
    url += `${this.props.part._id}&amp;size=50x50`;
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
            <Label circular as='a'>Qty: { this.props.part.quantity }</Label>
            <Label circular as='a'>Part No: { this.props.part.manufacturerPartNumber }</Label>
            <Label circular as='a'>{ this.props.part.location }: { this.props.part.container }</Label>
          </Card.Content>
          <Card.Content extra>
            <Header size='tiny' floated='left'><Link to={`/edit/${this.props.part._id}`}>Edit</Link></Header>
            <Header floated='right'>
              <a href={url} target='new' >
                <Icon name='qrcode' color='blue' />
              </a>
            </Header>
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
