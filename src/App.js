
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostState from './context/posts/PostState';


function App() {
  return (
      <>
        <PostState>
          <Router>
            <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </PostState>
      </>
  );
}

export default App;
