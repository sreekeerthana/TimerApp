import { html, LitElement } from 'lit-element';
import { MainApplicationStyle } from './MainApplication.style.js';

export class MainApplication extends LitElement {
  static get properties() {
    return {
      timerData: { type: Array },
      timerObj: { type: Object },
      timerValue: { type: String },
      timerName: { type: String },
      counter: { type: String },
    };
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
    if (!(this.timerValue < 0)) {
      this.timerObj = {
        timerName: this.timerName,
        timerValue: this.timerValue,
      };
      this.timerData.push(this.timerObj);
    }
  }

  onChangeTimerName({ currentTarget: { modelValue } }) {
    this.timerName = modelValue;
  }

  onChangeTimerValue({ currentTarget: { modelValue } }) {
    this.timerValue = modelValue;
  }

  render() {
    return html`
      <div class="bgColor">
        <div class="mainDiv">
          <textbox-component
            placeholder="Enter a timer name"
            name="timername"
            class="txtCls"
            .modelValue="timername"
            @model-value-changed="${this.onChangeTimerName}"
          >
          </textbox-component>
          <textbox-component
            type="number"
            placeholder="Enter a valid timer time in seconds"
            name="timerval"
            class="txtCls"
            .modelValue="timerval"
            @model-value-changed="${this.onChangeTimerValue}"
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
