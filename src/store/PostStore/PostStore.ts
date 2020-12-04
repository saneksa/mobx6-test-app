import { action, makeObservable, observable } from "mobx";
import Store, { IStoreParams } from "../../utils/Store/Store";

export class PostStore<TModel> extends Store<TModel> {
  private _text = "";

  constructor(params: IStoreParams) {
    super(params);

    makeObservable<this, "_text">(this, {
      _text: observable,
      setText: action,
      clearData: action,
    });
  }

  public clearData() {
    super.clearData();
    this._text = "";
  }

  public get text() {
    return this._text;
  }

  public setText(text: string) {
    this._text = text;
  }
}
