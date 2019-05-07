import { action, isObservableProp } from 'mobx';

/**
 * Core
 */
export default class Core {

  @action __set(k, v) {
    if (v !== undefined) {
      if (!isObservableProp(this, k)) {
        console.warn(`sx:warning! '${this.type}' 的 '${k}' is not observable!`); // 不允许更新非监听状态的键值
      }
      this[k] = v;
    }
  }

  /**
   * 更新属性方法
   * @param key {Object|String}
   * @param val
   */
  @action update(key, val) {
    if (typeof key === 'object') {
      const keys = Object.keys(key);
      keys.forEach(k => {
        const v = key[k];
        this.__set(k, v);
      });
    } else {
      this.__set(key, val);
    }
  }

}
