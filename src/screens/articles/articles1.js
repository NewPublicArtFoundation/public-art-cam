import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ListView,
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet,
} from 'react-native-ui-kitten';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import { SocialBar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';

const moment = require('moment');

export class Articles1 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  _loadMoreContentAsync = async () => {
    // Fetch more data here.
    // After fetching data, you should update your ListView data source
    // manually.
    // This function does not have a return value.
  }

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = ({ item }) => {
    this.props.navigation.navigate('Article', { id: item.id });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <RkCard rkType='backImg'>
        <Image rkCardImg source={item.photo} />
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header2 inverseColor'>{item.header}</RkText>
          <RkText rkType='secondary2 inverseColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
          <View rkCardFooter style={styles.footer}>
            <SocialBar rkType='leftAligned' />
          </View >
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={styles.root}
    />
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240,
  },
}));
