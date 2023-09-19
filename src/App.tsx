import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import styles from "./App.module.scss";
import Child from "./Child";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* TODO: think about a nice way to build class names, keeping it type-safe */}
      <p className={[
        styles.app, 
        name.length === 0 ? "" : styles.appExample
      ].join(" ")}>
        Click on the Tauri, Vite, and React logos <code>to learn mode</code>
      </p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>

      {/* TODO: example of allowing to extend styles from the parent */}
      <Child mixClassName={{
        childDiv1: styles.appDiv1Extension,
        childDiv1Mod: [styles.appSubtitle, styles.appSubtitle].join(" ")
      }}/>
    </div>
  );
}

export default App;
