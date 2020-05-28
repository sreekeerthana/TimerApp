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

  static get is() {
    return 'clock-timer-component';
  }

  static get styles() {
    return [ClockTimerComponentStyle];
  }

  constructor() {
    super();
    this.timer = this.timer.bind(this);
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

  timer() {
    if (this.timerValue < 0) {
      this.timerRunning = false;
      this.timerObj = { hours: '00', minutes: '00', seconds: '00' };
      return clearInterval(this.counter);
    }
    var h = Math.floor(this.timerValue / 3600),
      m = Math.floor(this.timerValue / 60) % 60,
      s = this.timerValue % 60;
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    this.timerObj = { hours: h, minutes: m, seconds: s };
    this.timerValue--;
  }

  render() {
    return html`
    <div class="wraper ${
      this.pauseBool && this.timerRunning
        ? 'resumeCls'
        : !this.pauseBool && this.timerRunning
        ? 'pauseCls'
        : this.pauseBool && this.timerRunning === false
        ? 'deleteCls'
        : 'hiddenCls'
    }" id="wraperId" >
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
                                  : !this.pauseBool && this.timerRunning
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
