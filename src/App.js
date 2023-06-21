import logo from './logo.svg';
import './App.css';
import {StlViewer} from "react-stl-viewer";
import { AppContainer } from './app.styles';

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"


function App() {

  const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
  }

  return (
    <AppContainer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <StlViewer
          style={style}
          orbitControls
          shadows
          url={url}
        />
    </AppContainer>
  );
}

export default App;
