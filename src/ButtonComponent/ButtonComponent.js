import { LionButton } from '@lion/button/src/LionButton.js';
import { html } from 'lit-element';
import { ButtonComponentStyle } from './ButtonComponent.style.js';

export class ButtonComponent extends LionButton {
  static get styles() {
    return [super.styles, ButtonComponentStyle];
  }

  render() {
    return html` <lion-button class="btn">CREATE</lion-button> `;
  }
}
