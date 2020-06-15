import { html, LitElement } from 'lit-element';
import { ClockTimerComponentStyle } from './ClockTimerComponent.style.js';

export class ClockTimerComponent extends LitElement {
  static get properties() {
    return {
      timerValue: { type: String },
      timerName: { type: String },
      counter: { type: String },
      timerObj: { type: Object },
      counterObj: { type: Object },
      pauseBool: { type: Boolean },
      timerRunning: { type: Boolean },
    };
  }

  static get styles() {
    return [ClockTimerComponentStyle];
  }

  constructor() {
    super();
    this.timerObj = {};
    this.counterObj = [];
    this.timObj = { timerName: '', timerValue: '' };
    this.pauseBool = true;
    this.timerRunning = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.counterObj = this.timObj;
    this.createTimerCountdown();
  }

  deleteTimer() {
    this.pauseBool = false;
    this.timerRunning = false;
  }

  pauseTimer() {
    this.pauseBool = false;
    clearInterval(this.counter);
  }

  resumeTimer() {
    this.pauseBool = true;
    this.counter = setInterval(this.timer, 1000);
  }

  createTimerCountdown() {
    this.timerName = this.counterObj.timerName;
    this.timerValue = this.counterObj.timerValue;
    this.counter = setInterval(this.timer, 1000);
  }

  timer = () => {
    if (this.timerValue < 0) {
      this.timerRunning = false;
      this.timerObj = { hours: '00', minutes: '00', seconds: '00' };
      return clearInterval(this.counter);
    }
    let h = Math.floor(this.timerValue / 3600);
    let m = Math.floor(this.timerValue / 60) % 60;
    let s = this.timerValue % 60;
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    this.timerObj = { hours: h, minutes: m, seconds: s };
    this.timerValue -= 1;
    return this.timerValue;
  };

  getDynamicClassDiv() {
    if (this.pauseBool && this.timerRunning) {
      return 'resumeCls';
    }
    if (!this.pauseBool && this.timerRunning) {
      return 'pauseCls';
    }
    if (this.pauseBool && !this.timerRunning) {
      return 'deleteCls';
    }
    return 'hiddenCls';
  }

  render() {
    return html`
      <div class="wraper ${this.getDynamicClassDiv()}" id="wraperId" >
                    <div class="title">${this.counterObj.timerName}</div>
                    <div class="timer">${this.timerObj.hours}:${
      this.timerObj.minutes
    }:${this.timerObj.seconds}</div>
                    <div class="link">
                       <ul>
                          <li><a @click=${
                            this.deleteTimer
                          } class="deleteTimerCls">delete</a></li>
                              ${
                                this.pauseBool && this.timerRunning
                                  ? html`
                                      <li>
                                        <a
                                          @click=${this.pauseTimer}
                                          class="pauseTimerCls"
                                          >pause</a
                                        >
                                      </li>
                                    `
                                  : html``
                              }
                                  ${
                                    !this.pauseBool && this.timerRunning
                                      ? html`<li>
                                          <a
                                            @click=${this.resumeTimer}
                                            class="resumeTimerCls"
                                            >resume</a
                                          >
                                        </li>`
                                      : html``
                                  }
                        <ul>
                       <div class="clearfix"></div>
                     </div>
                `;
  }
}
