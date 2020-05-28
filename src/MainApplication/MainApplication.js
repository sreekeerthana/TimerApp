import { html, LitElement } from 'lit-element';
import { MainApplicationStyle } from './MainApplication.style.js';
import { LionButton } from '@lion/button/src/LionButton.js';

export class MainApplication extends LitElement {
  static get properties() {
    return {
      timerData: { type: Array },
      timerObj: { type: Object },
      formValue: { type: String },
      timerName: { type: String },
      counter: { type: String },
    };
  }
  static get is() {
    return 'main-application';
  }

  static get styles() {
    return [MainApplicationStyle];
  }

  constructor() {
    super();
    this.timerData = [];
    this.timerObj = {};
    this.btn = 'CREATE';
  }

  createTimer() {
    this.timerName = this.shadowRoot.getElementById(
      'timername'
    ).serializedValue;
    this.formValue = this.shadowRoot.getElementById('timerVal').serializedValue;
    if (!(this.formValue < 0)) {
      this.timerObj = { timerName: this.timerName, timerValue: this.formValue };
      this.timerData.push(this.timerObj);
    }
  }
  
  render() {
    return html`
      <div class="bgColor">
        <div class="mainDiv">
          <textbox-component
            placeholder="Enter a timer name"
            name="timername"
            id="timername"
            class="txtCls"
          >
          </textbox-component>
          <textbox-component
            type="number"
            placeholder="Enter a valid timer time in seconds"
            name="timerval"
            id="timerVal"
            class="txtCls"
          >
          </textbox-component>
          <button-component @click=${this.createTimer} id="createTimerId"
            >CREATE</button-component
          >
          <div class="clearfix"></div>
        </div>
        <ul class="timer-div">
          ${this.timerData.map(
            timer => html`
              <li>
                <clock-timer-component
                  .timObj=${timer}
                  id="timerComponent"
                ></clock-timer-component>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
