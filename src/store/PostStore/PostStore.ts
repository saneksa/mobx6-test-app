import { action, makeObservable, observable } from "mobx";
import Store, { IStoreParams } from "../../utils/Store/Store";

export class PostStore<Params extends IStoreParams> extends Store<Params> {
  private _text = "";

  constructor(params: Params) {
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
