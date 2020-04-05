import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
              Death Star Development, LLC <br />
              643 Ilalo Street<br />
              Honolulu, HI 96813 <br />
          </div>
        </footer>
    );
  }
}

export default Footer;
