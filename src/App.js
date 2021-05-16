import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './routes';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes/>
        <ToastContainer/>
      </Router>
    </div>
  );
}

export default App;
