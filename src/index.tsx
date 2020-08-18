import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const onInit = () => {
  ReactDOM.render(<App />, document.querySelector("#app"));
};

document.addEventListener("DOMContentLoaded", () => {
  try {
    onInit();
  } catch (e) {
    console.error(e);
  }
});
