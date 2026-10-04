import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import Cart from './components/Cart';
import Pizza from './components/Pizza';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;

