import { useEffect, useState } from "react";

import muiLogo from "./icons/mui.svg";
import esbuildLogo from "./icons/esbuild.svg";
import electronLogo from "./icons/electron.svg";
import "./App.css";

import Button from '@mui/material/Button';

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.myAPI.updateTitle(count);
  }, [count]);

  return (
    <div className="App">
      <div>
        <div
          className="external"
          aria-label="electron-link"
          onClick={() =>
            window.myAPI.openExternal("https://www.electronjs.org/")
          }
        >
          <img
            src={electronLogo}
            className="logo electron"
            alt="Electron logo"
          />
        </div>
        <div
          className="external"
          aria-label="esbuild-link"
          onClick={() =>
            window.myAPI.openExternal("https://esbuild.github.io")
          }
        >
          <img src={esbuildLogo} className="logo" alt="esbuild logo" />
        </div>
        <div
          className="external"
          aria-label="mui-link"
          onClick={() =>
            window.myAPI.openExternal("https://mui.com")
          }
        >
          <img src={muiLogo} className="logo" alt="MUI logo" />
        </div>
      </div>
      <h1>Electron + esbuild + MUI</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} variant="contained">count is {count}</Button>
        <p>
          Edit <code>src/web/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the esbuild, React and MUI logos to learn more
      </p>
    </div>
  );
};
