import React from 'react';

import Nav from '../components/Nav';
import Field from '../components/Field';
import Types from '../components/Types';

let showTypes = true;

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Field />
        {showTypes && <Types />}
      </div>
    )
  }
}

export default Main;
