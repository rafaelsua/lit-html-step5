import {until} from 'lit-html/directives/until.js';
import { render, html } from "lit-html";


const waitForIt = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved.");
  }, 10000);
});

const mytemplate = html`${until(waitForIt, html`
  <div class="content">
    <div class="lds-circle">
      <div></div>
    </div>
  <span>loading...</span>
  </div>
`)}`

render(mytemplate, document.body.querySelector('section'))