import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import { Navigation } from "./common";
import CandleDataTimeline from "./components/candleDataTimeline";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Navigation basename={process.env.PUBLIC_URL}/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/timeline" component={CandleDataTimeline} />
        <Route component={() => <div>404 Not found</div>} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
