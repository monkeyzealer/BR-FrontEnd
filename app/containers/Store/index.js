/*
 *
 * Store
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Store extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Store" meta={[ { name: 'description', content: 'Description of Store' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
