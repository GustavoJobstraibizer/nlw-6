import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Test } from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeContextProvider> */}
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Test} />
          {/* <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} /> */}
        </Switch>
      </AuthContextProvider>
      {/* </ThemeContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
