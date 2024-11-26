import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';


function App() {
  return (
    <div className="App">
      <header>
      <CustomNavbar></CustomNavbar>
      </header>
      <main>
        <Welcome></Welcome>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
