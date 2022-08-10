// Import data

// Import components
import './App.css';
import SearchBar from './components/SearchBar.js';
import Sidebar from './components/Sidebar.js';
import Directory from './components/Directory.js';
import Gallery from './components/Gallery.js';

function App(){
  return (
    <div>
      <h1>CRAIGSLIST CLONE</h1>
      <div className="App">
        <SearchBar />
        <Sidebar />
        <Directory />
        <Gallery />
        
      </div>
    </div>
  );
}

export default App;
