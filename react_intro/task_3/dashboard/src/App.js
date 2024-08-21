import logo from '../src/Holberton Logo.jpg';
import './App.css';

// Function that will return the current year
function getFullYear() {
  return new Date().getFullYear();
}
// Function that change footer
function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }
  else {
    return "Holberton School main dashboard"
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access to the full dashboard</p>
        <div className="Login">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="button">OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
