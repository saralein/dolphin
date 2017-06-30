import React from 'react';
import {connect} from 'react-redux';

import Nav from '../components/Nav';
import Field from '../components/Field';
import Types from '../components/Types';

import {showTypes} from '../action-creators/types'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Field toggleModal={this.props.toggleModal} />
        {this.props.types.showTypes && <Types toggleModal={this.props.toggleModal} categories={this.props.types.categories} />}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal (){
      dispatch(showTypes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
