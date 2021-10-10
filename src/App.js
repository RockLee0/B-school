import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Services from './Componants/Services/Services';
import AlumniNews from './Componants/AlumniNews/AlumniNews';
import NotFound from './Componants/NotFound/NotFound';
function App() {
  return (
    <div>
      {/* all the routing section */}
<BrowserRouter>

<Header></Header>
<Switch>

<Route exact path="/">
  <Home></Home>

</Route>
<Route exact path="/Home">
  <Home></Home>

</Route>
<Route exact path="/About">
<About></About>

</Route>
<Route exact path="/Services">
<Services></Services>

</Route>
<Route exact path="/AlumniNews">
<AlumniNews></AlumniNews>
</Route>
<Route exact path="*">
<NotFound></NotFound>

</Route>

</Switch>

<Footer></Footer>
</BrowserRouter>

    </div>
  );
}

export default App;
