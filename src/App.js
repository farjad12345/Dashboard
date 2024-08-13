import './App.css';
import Sidbar from './components/sidebar/Sidbar';
import Topbar from './components/topbar/Topbar';
import routes from './routes';
import {useRoutes}from "react-router-dom";

function App() {
  const  router=useRoutes(routes)
  return (
    <div className="App">
      <Topbar/>
    
    <div className='container'>

    
      <Sidbar/>
{router}

    </div>
    </div>
  );
}

export default App;
