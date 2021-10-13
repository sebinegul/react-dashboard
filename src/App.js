import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/Home/UserTables/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import ProductItem from "./components/Product/ProductItem";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product-item/:productId">
            <ProductItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
