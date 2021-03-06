import {
  makeObservable,
  computed,
  action,
  observable,
  runInAction,
} from "mobx";

interface IModel {
  new (args: any): any;
}

type TPrivateStoreField = "_data" | "_loading" | "_model" | "_error";

export interface IStoreParams {
  model: IModel;
}

class Store<Params extends IStoreParams> {
  private _data = undefined;
  private _loading = false;
  private _error = undefined;
  private _model?: InstanceType<Params["model"]>;
  private tModel;

  constructor(params: Params) {
    this.tModel = params.model;

    makeObservable<this, TPrivateStoreField>(
      this,
      {
        _data: observable.ref,
        _loading: observable,
        _model: observable.ref,
        _error: observable,
        data: computed,
        isLoading: computed,
        model: computed,
        error: computed,
        requestData: action.bound,
        clearData: action.bound,
      }
      // {
      //   autoBind: true, // не работает :(
      // }
    );
  }

  //----------------------------------------COMPUTED------------------------------------//
  public get data() {
    return this._data;
  }

  public get model(): InstanceType<Params["model"]> | undefined {
    return this._model;
  }

  public get error() {
    return this._error;
  }

  public get isLoading() {
    return this._loading;
  }

  //----------------------------------------ACTIONS------------------------------------//

  public clearData() {
    this._data = undefined;
    this._model = undefined;
    this._error = undefined;
  }

  public async requestData(url: string) {
    runInAction(() => {
      this._loading = true;
    });

    let data: any;

    try {
      data = await (await fetch(url)).json();
    } catch (error) {
      runInAction(() => {
        this._data = undefined;
        this._model = undefined;
        this._error = error;
        this._loading = false;
      });
    }

    if (data) {
      runInAction(() => {
        this._data = data?.[Math.round(Math.random() * 50)];
        this._error = undefined;
        this._model = new this.tModel(this._data);
        this._loading = false;
      });
    }
  }
}

export default Store;
