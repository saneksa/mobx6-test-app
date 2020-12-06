import type { FC } from "react";
import First from "./containers/First/First";
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Second from "./containers/Second/Second";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavigationPanel />
      <Switch>
        <Route path="/1" component={First} />
        <Route path="/2" component={Second} />
      </Switch>

      <Redirect to="/1" />
    </BrowserRouter>
  );
};

export default App;
