import "./scss/main.scss";
import Home from "./pages/Home";
import Support from "./pages/Support";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnTop from "./components/OnTop";
import Button from "./components/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:code" exact component={ProductDetail} />
          <Route path="/support" exact component={Support} />
        </Switch>
        <Footer />
        <OnTop />
      </div>
    </Router>
  );
}

export default App;
