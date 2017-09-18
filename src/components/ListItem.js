import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  // called whenever app is about to be rerendered to the device
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDesription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDesription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
};

// any props that we pass into list item component, will show up in map state
// to props as ownProps
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
