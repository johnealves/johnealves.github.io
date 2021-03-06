import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import NoMatch from './Component/NoMatch';
import Projects from './Component/Projects';
import Stacks from './Component/Stacks';

function App() {
  return (
    <div>
      <header>
        <div className="hamburguer"> Menu
          <div className="menu-item"><Link exact to="/">Inicio</Link></div>
          <div className="menu-item"><Link exact to="/stacks">Stacks</Link></div>
          <div className="menu-item"><Link exact to="/projects">Projetos</Link></div>
        </div>
        <nav className="main-menu">
          <Link exact to="/">Inicio</Link>
          <Link exact to="/stacks">Stacks</Link>
          <Link exact to="/projects">Projetos</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/stacks/" component={ Stacks } />
        <Route exact path="/projects/" component={ Projects } />
        <Route component={ NoMatch }/>
      </Switch>
    </div>
  );
}

export default App;
