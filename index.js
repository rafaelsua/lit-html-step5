import {until} from 'lit-html/directives/until.js';
import { render, html } from "lit-html";

const mytemplate = html`${until('content', html`
  <div class="content">
    <div class="lds-circle">
      <div></div>
    </div>
  <span>loading...</span>
  </div>
`)}`

render(mytemplate, document.body.querySelector('section'))