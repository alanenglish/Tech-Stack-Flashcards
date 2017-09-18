import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

// take global state object (application state) and map it (take some properties
// of that state object) and provide them as props to our component library list
const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(LibraryList);
