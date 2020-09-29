import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import { Navigation} from "./common";
import CandleDataTimeline from "./components/candleDataTimeline";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/timeline" exact component={() => <CandleDataTimeline />} />
        </Switch>
      </Router>
  </ThemeProvider>
);

export default App;