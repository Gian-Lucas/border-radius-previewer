import { useState } from "react";
import "./App.css";
import "./global.css";

import GitHubImg from "./assets/github.svg";

export function App() {
  const [topLeft, setTopLeft] = useState(50);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  return (
    <>
      <a
        className="repo-link"
        href="https://github.com/Gian-Lucas/border-radius-previewer"
        target="_blank"
        title="Go to github repository"
      >
        <img src={GitHubImg} alt="GitHub" />
      </a>

      <main className="container">
        <div className="title">
          <h1>[Previewer]</h1>
          <h1>border-radius:</h1>
        </div>

        <div className="code-container">
          <div className="code-result">
            border-radius: {topLeft !== 0 ? `${topLeft}px ` : `${topLeft} `}
            {topRight !== 0 ? `${topRight}px ` : `${topRight} `}
            {bottomLeft !== 0 ? `${bottomLeft}px ` : `${bottomLeft} `}
            {bottomRight !== 0 ? `${bottomRight}px` : bottomRight};
          </div>

          <div className="border-viewer">
            <div className="inputs">
              <div>
                <label htmlFor="top-left">Top Left</label>
                <input
                  min={0}
                  value={topLeft}
                  onChange={(e) => setTopLeft(Number(e.target.value))}
                  id="top-left"
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="top-right">Top Right</label>
                <input
                  min={0}
                  value={topRight}
                  onChange={(e) => setTopRight(Number(e.target.value))}
                  id="top-right"
                  type="number"
                />
              </div>
            </div>

            <div
              className="border-result"
              style={{
                borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
              }}
            />

            <div className="inputs">
              <div>
                <label htmlFor="bottom-left">Bottom Left</label>
                <input
                  min={0}
                  value={bottomLeft}
                  onChange={(e) => setBottomLeft(Number(e.target.value))}
                  id="bottom-left"
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="bottom-right">Bottom Right</label>
                <input
                  min={0}
                  value={bottomRight}
                  onChange={(e) => setBottomRight(Number(e.target.value))}
                  id="bottom-right"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
