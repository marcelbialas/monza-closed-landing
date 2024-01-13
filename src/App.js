import logo from "./monza_logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Wir haben geschlossen.</h2>
          <p>
            Nach über 27 Jahren haben wir am 18.12.2023 unseren Betrieb
            eingestellt. <br />
            <br />
            Wir möchten uns herzlich bei allen Kund:innen, Mitarbeiter:innen und
            Freunden für die zahlreichen spannenden Rennen und die
            unvergesslichen Momente bedanken, die wir gemeinsam erlebt haben.
            Diese 27 Jahre waren für uns eine großartige Reise, und es war uns
            eine Ehre, sie mit euch zu teilen.
          </p>
        </div>
        <p>
          Mit herzlichen Grüßen
          <br />
          Team Monza
        </p>
      </header>
    </div>
  );
}

export default App;
