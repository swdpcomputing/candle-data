import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Main from "./components/main";
import { Navigation } from "./common";
import CandleDataTimeline from "./components/candleDataTimeline";

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
      <Navigation basename={process.env.PUBLIC_URL} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/timeline" component={CandleDataTimeline} />
        <Route component={() => <div>404 Not found</div>} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
