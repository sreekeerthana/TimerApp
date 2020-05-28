import { expect, fixture } from '@open-wc/testing';
import '../textbox-component';

describe('Register and Instantiation', () => {
  const myTag = 'textbox-component';

  it(`<${myTag}> is registered in "../${myTag}.js"`, async () => {
    await import(`../${myTag}.js`);
    await window.customElements.whenDefined(`${myTag}`);
    expect(window.customElements.get(`${myTag}`)).to.not.be.equal(undefined);
  });
  it(`<${myTag}> can be instantiated"`, async () => {
    await import(`../${myTag}.js`);
    const inst = await fixture(`<${myTag}></${myTag}>`);
    expect(inst).to.be.a('HTMLElement');
  });
});
