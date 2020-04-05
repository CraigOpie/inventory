import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='custom-background-image'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='users'/>
              <Header inverted as='h1'>Multiple Users</Header>
              <Header inverted as='h3'>This parts inventory enables users to register and save their parts. You can
                only see the parts assigned to your group.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='file alternate'/>
              <Header inverted as='h1'>Parts Details</Header>
              <Header inverted as='h3'>For each part, you can save its name, value, quantity, location, manufacturer
                part number, digikey part number, and image.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='grey' size='huge' name='calendar check outline'/>
              <Header inverted as='h1'>Easy Access</Header>
              <Header inverted as='h3'>Each time you use or receive a part, you can adjust the part number by scanning
                the qr label and using the feature buttons.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
