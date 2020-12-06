import { observer } from "mobx-react";
import { Component } from "react";
import Counter from "../../components/Counter/Counter";
import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";
import { postStore } from "../../store";

class First extends Component {
  private handleRequestPost() {
    postStore.requestData("https://jsonplaceholder.typicode.com/posts");
  }

  public handleRequestPostWithError() {
    postStore.requestData("htps://jsonplaceholder.typicode.com/posts");
  }

  public handleEditModelTitle() {
    postStore.model?.setTitle("sdsdssdsd");
  }

  public handleChangeInput(value: string) {
    postStore.setText(value);
  }

  public render() {
    console.warn("First rerender");

    return (
      <div className="App">
        <Counter />
        <button onClick={this.handleRequestPost}>Загрузить пост</button>
        <button onClick={this.handleRequestPostWithError}>
          Загрузить пост c ошибкой
        </button>
        <button onClick={this.handleEditModelTitle}>Edit model title</button>
        <button onClick={postStore.clearData}>Очистить стор</button>
        <Search
          placeholder="Текст"
          value={postStore.text}
          onChange={this.handleChangeInput}
        />
        <Title title="Тут будут посты:" />
        {!!postStore.model ? (
          <Post model={postStore.model} />
        ) : postStore.error ? (
          `Произошла ошибка :(`
        ) : postStore.isLoading ? (
          "Loading..."
        ) : (
          "Ничего нет :("
        )}
      </div>
    );
  }
}

export default observer(First);
