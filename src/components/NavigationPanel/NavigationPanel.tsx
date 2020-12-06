import type { FC } from "react";
import { useHistory } from "react-router-dom";

const NavigationPanel: FC = (props) => {
  const history = useHistory();

  return (
    <div className="navigation">
      <button
        onClick={() => {
          history.push("/1");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          history.push("/2");
        }}
      >
        2
      </button>
    </div>
  );
};

export default NavigationPanel;
