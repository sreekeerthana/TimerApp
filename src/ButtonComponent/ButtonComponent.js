import { LionButton } from '@lion/button/src/LionButton.js';
import { ButtonComponentStyle } from './ButtonComponent.style.js';

export class ButtonComponent extends LionButton {
  static get is() {
    return 'button-component';
  }

  static get styles() {
    return [super.styles, ButtonComponentStyle];
  }
}
