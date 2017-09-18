import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  // lifecycle method, instant component is about to be rendered to device, any code
  // inside will be automatically called
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow() {
    
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// take global state object (application state) and map it (take some properties
// of that state object) and provide them as props to our component library list
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
