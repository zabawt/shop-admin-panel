import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./../../commons/Theme";
import { AppContainer } from "./styled";
import AuthPage from "../AuthPage";

const App = (props: {}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Link to="/">Admin panel</Link>
          <Switch>
            <Route path="/">
              <AuthPage />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
