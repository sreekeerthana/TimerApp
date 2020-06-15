import { expect, fixture, elementUpdated } from '@open-wc/testing';
import '../clock-timer-component.js';

describe('Register and Instantiation', () => {
  const myTag = 'clock-timer-component';

  it(`<${myTag}> is registered in "../${myTag}.js"`, async () => {
    await import(`../${myTag}.js`);
    await window.customElements.whenDefined(`${myTag}`);
    expect(window.customElements.get(`${myTag}`)).to.not.be.equal(undefined);
  });

  it(`<${myTag}> can be instantiated"`, async () => {
    await import(`../${myTag}.js`);
    const inst = await fixture(`<${myTag}></${myTag}>`);
    expect(inst).to.be.a('HTMLElement');
  });
});

describe('click events of Timer', () => {
  let element;
  beforeEach(async () => {
    element = await fixture('<clock-timer-component></clock-timer-component>');
  });
  it('should trigger delete event', async () => {
    const deleteTag = element.shadowRoot.querySelector('a.deleteTimerCls');
    deleteTag.click();
    expect(element.timerRunning).to.be.false;
  });

  it('should trigger pause event', async () => {
    const pauseTag = element.shadowRoot.querySelector('a.pauseTimerCls');
    pauseTag.click();
    expect(element.pauseBool).to.be.false;
  });

  it('should trigger resume event', async () => {
    element.pauseBool = false;
    await elementUpdated(element);
    const resumeTag = element.shadowRoot.querySelector('a.resumeTimerCls');
    await resumeTag.click();
    expect(element.pauseBool).to.be.true;
  });

  it('should get timer object when timer function triggered with positive value', async () => {
    element.timerValue = 2;
    await elementUpdated(element);
    await element.timer();
    expect(element.timerObj.hours).to.be.equal('00');
    expect(element.timerObj.minutes).to.be.equal('00');
    expect(element.timerObj.seconds).to.be.equal('02');
  });
  it('should reset timer object when timer value comes with negative value', async () => {
    element.timerValue = -2;
    element.pauseBool = '';
    await elementUpdated(element);
    await element.timer();
    expect(element.timerObj.hours).to.be.equal('00');
    expect(element.timerObj.minutes).to.be.equal('00');
    expect(element.timerObj.seconds).to.be.equal('00');
  });
});
