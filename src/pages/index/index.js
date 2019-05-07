import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import PropTypes from 'prop-types';

import css from './index.scss';

@inject('appStore')
@observer
class Index extends Component {
  static propTypes = {
    abc: PropTypes.string,
  };
  static defaultProps = {
    abc: 'abc',
  };

  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
    console.log('componentWillMount props', this.props);
  }

  componentDidMount() {
    console.log('componentDidMount props', this.props);
  }

  render() {
    console.log('render props', this.props);
    return (
      <View className={css.index}>
          test1111
      </View>
    );
  }
}
export default Index;
