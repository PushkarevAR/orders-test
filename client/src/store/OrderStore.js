import { makeAutoObservable, toJS } from "mobx";

export default class OrderStore {
  constructor() {
    this._isLoading = true;
    this._isError = false;
    this._isSuccess = false;
    this._data = [];
    makeAutoObservable(this);
  }

  setOrder(order) {
    this._isLoading = order.isLoading;
    this._isError = order.isError;
    this._isSuccess = order.isSuccess;
    this._data = order.data;
  }

  get isLoading() {
    return toJS(this._isLoading);
  }

  get isError() {
    return toJS(this._isError);
  }

  get isSuccess() {
    return toJS(this._isSuccess);
  }

  get data() {
    return toJS(this._data);
  }
}
