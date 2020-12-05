import React, { FC, useCallback } from "react";
import Post from "./components/Post/Post";
import { postStore } from "./store";
import { observer } from "mobx-react";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Counter from "./components/Counter/Counter";

const App: FC = () => {
  const handleRequesPost = useCallback(() => {
    postStore.requestData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleRequesPostWithError = useCallback(() => {
    postStore.requestData("htps://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleChangeInput = useCallback((value: string) => {
    postStore.setText(value);
  }, []);

  console.warn("App rerender");

  return (
    <div className="App">
      <Counter />
      <button onClick={handleRequesPost}>Загрузить пост</button>
      <button onClick={handleRequesPostWithError}>
        Загрузить пост c ошибкой
      </button>
      <button onClick={postStore.clearData}>Очистить стор</button>
      <Search
        placeholder="Текст"
        value={postStore.text}
        onChange={handleChangeInput}
      />
      <Title title="Тут будут посты:" />
      {!!postStore.model ? (
        <Post
          id={postStore.model.id}
          body={postStore.model.body}
          title={postStore.model.title}
          userId={postStore.model.userId}
        />
      ) : postStore.error ? (
        `Произошла ошибка :(`
      ) : postStore.isLoading ? (
        "Loading..."
      ) : (
        "Ничего нет :("
      )}
    </div>
  );
};

export default observer(App);
