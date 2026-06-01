import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          Coded by Kimmy Brindle and is{" "}
          <a
            href="https://github.com/kimmybrindle/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-project-scodes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify.{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
