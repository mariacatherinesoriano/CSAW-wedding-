import Details from "./Details"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./context/Home"
import Program from "./Program"
import RSVP from "./RSVP"
import Registry from "./Registry"


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/Details" component={Details} />
        <Route path="/Program" component={Program} />
        <Route path="/RSVP" component={RSVP} />
        <Route path="/Registry" component={Registry} />
      </Switch>
    </BrowserRouter>);
}
 
export default App;