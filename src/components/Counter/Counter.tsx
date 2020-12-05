import { runInAction } from "mobx";
import { observer, useLocalStore } from "mobx-react";
import { FC, useCallback, useEffect } from "react";

const Counter: FC = (props) => {
  const numbersArr = useLocalStore<number[]>(() => []);

  useEffect(() => {
    console.warn("isArray ", Array.isArray(numbersArr));
  }, []);

  console.warn("Counter rerender");

  const handleAddElement = useCallback(() => {
    runInAction(() => {
      numbersArr.push(Math.round(Math.random() * 100));
    });
  }, []);

  return (
    <div>
      <button onClick={handleAddElement}>Add Number</button>
      Numbers: {numbersArr.slice()}
    </div>
  );
};

export default observer(Counter);
