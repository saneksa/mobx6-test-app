import { runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import { FC, useCallback, useEffect } from "react";

const Counter: FC = () => {
  const numbersArr = useLocalObservable<number[]>(() => []);

  useEffect(() => {
    console.warn("isArray ", Array.isArray(numbersArr));
  }, [numbersArr]);

  console.warn("Counter rerender");

  const handleAddElement = useCallback(() => {
    runInAction(() => {
      numbersArr.push(Math.round(Math.random() * 100));
    });
  }, [numbersArr]);

  return (
    <div>
      <button onClick={handleAddElement}>Add Number</button>
      Numbers: {numbersArr.slice()}
    </div>
  );
};

export default observer(Counter);
