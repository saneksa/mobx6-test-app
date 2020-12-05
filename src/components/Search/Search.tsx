import { FC, memo, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

interface ISearchProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Search: FC<ISearchProps> = ({ value, onChange, placeholder }) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  const debouncedValue = useCallback(
    debounce((value: string) => {
      onChange(value);
    }, 500),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value);
      debouncedValue(e.currentTarget.value);
    },
    [debouncedValue]
  );

  return (
    <input value={state} onChange={handleChange} placeholder={placeholder} />
  );
};

export default memo(Search);
