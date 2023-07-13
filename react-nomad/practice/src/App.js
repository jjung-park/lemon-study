import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Switch> 
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
)}

export default App;

// BrowserRouter : 일바적인 url
// HashRouter : /#/movie
//Switch : 한번에 하나만 렌더링 해줌
// react-router-dom 6.0 은 Switch > Routes로 제공
// Link : link이동 제공 컴포넌트
