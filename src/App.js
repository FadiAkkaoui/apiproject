import Home from './home'
import Navbar from './navbar'
import Members from './Members'
import Weather from './Crimes'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/Medlemmar" component={Members}></Route>
        <Route path="/Weather" component={Weather}></Route>
        <Route exact path="/" component={Home}></Route>
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;