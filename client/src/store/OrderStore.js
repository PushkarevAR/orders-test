import { makeAutoObservable, toJS } from 'mobx';

export default class OrderStore {
  constructor() {
    this._orders = [];
    makeAutoObservable(this);
  }

  setOrders(orders) {
    this._orders = orders;
  }

  get orders() {
    return toJS(this._orders);
  }
}