import { expect, fixture } from '@open-wc/testing';
import '../main-application.js';
import sinon from 'sinon';

describe('textbox exists', () => {
  let element;
  beforeEach(async () => {
    element = await fixture('<main-application></main-application>');
  });

  it('should exists textbox', async () => {
    expect(element.shadowRoot.querySelector('textbox-component')).to.exist;
  });
});

describe('button exists', () => {
  let element;
  beforeEach(async () => {
    element = await fixture('<main-application></main-application>');
  });

  it('should exists button', async () => {
    expect(element.shadowRoot.querySelector('button-component')).to.exist;
  });
});

describe('button click event', () => {
  let element;
  beforeEach(async () => {
    element = await fixture('<main-application></main-application>');
  });

  it('should trigger the click event', async () => {
    const createTimerStub = sinon.stub(element, 'createTimer');
    await element.createTimer();
    expect(createTimerStub.calledOnce).to.be.true;
  });
  it('should load timer component when button triggered with Positive Value', async () => {
    element.shadowRoot.getElementById('timername').serializedValue =
      'testTimerName';
    element.shadowRoot.getElementById('timerVal').serializedValue = 120;
    await element.createTimer();
    expect(element.timerObj.timerName).to.be.equal('testTimerName');
    expect(element.shadowRoot.querySelector('clock-timer-component')).to.exist;
  });

  it('should not load timer component when button triggered with Negative Value', async () => {
    element.shadowRoot.getElementById('timername').serializedValue =
      'testTimerName';
    element.shadowRoot.getElementById('timerVal').serializedValue = -120;
    await element.createTimer();
    expect(element.timerObj).to.be.empty;
    expect(element.shadowRoot.querySelector('clock-timer-component')).to.not
      .exist;
  });
});
