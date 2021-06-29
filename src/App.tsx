import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Test } from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Switch>
            <Route path="/" exact component={Test} />
            {/* <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} /> */}
          </Switch>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
