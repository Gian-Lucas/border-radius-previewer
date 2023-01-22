import "./App.css";
import "./global.css";

export function App() {
  return (
    <main className="container">
      <div className="title">
        <h1>[Previewer]</h1>
        <h1>border-radius:</h1>
      </div>

      <div className="code-container">
        <div className="code-result">border-radius: 50px 0 0 0;</div>

        <div className="border-viewer">
          <div className="inputs">
            <div>
              <label htmlFor="top-left">Top Left</label>
              <input id="top-left" type="number" />
            </div>
            <div>
              <label htmlFor="top-right">Top Right</label>
              <input id="top-right" type="number" />
            </div>
          </div>

          <div className="border-result"></div>

          <div className="inputs">
            <div>
              <label htmlFor="bottom-left">Bottom Left</label>
              <input id="bottom-left" type="number" />
            </div>
            <div>
              <label htmlFor="bottom-right">Bottom Right</label>
              <input id="bottom-right" type="number" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
