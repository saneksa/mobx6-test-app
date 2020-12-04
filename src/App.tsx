import { FC, useCallback } from "react";
import Post from "./components/Post/Post";
import { postStore } from "./store";
import { observer } from "mobx-react-lite";
import Title from "./components/Title/Title";

const App: FC = () => {
  const handleRequesPost = useCallback(() => {
    postStore.requestData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleRequesPostWithError = useCallback(() => {
    postStore.requestData("htps://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      postStore.setText(e.currentTarget.value);
    },
    []
  );

  console.warn("App rerender");

  return (
    <div className="App">
      <button onClick={handleRequesPost}>Загрузить пост</button>
      <button onClick={handleRequesPostWithError}>
        Загрузить пост c ошибкой
      </button>
      <button onClick={postStore.clearData}>Очистить стор</button>
      <input
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
