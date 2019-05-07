import { observable, configure } from 'mobx';
import Core from '@/common/model/core';

// mobx 全局配置
// https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#configure
configure({
  enforceActions: 'always', // 不允许在动作之外进行状态修改
});

export default class AppStore extends Core {
  @observable name = 1;
}
