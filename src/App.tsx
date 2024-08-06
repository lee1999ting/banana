import type { Component, createEffect, createSignal, onCleanup } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const popSuccess = () => window.alert('Success!');
  const popError = () => window.alert('Error!');
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button class={'success'} onClick={popSuccess}>
          Success
        </button>
        <button class={'error'} onClick={popError}>
          Error
        </button>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
