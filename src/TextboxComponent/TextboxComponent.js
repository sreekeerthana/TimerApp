import { LionInput } from '@lion/input/src/LionInput.js';
import { TextboxComponentStyle } from './TextboxComponent.style.js';

export class TextboxComponent extends LionInput {
  static get is() {
    return 'textbox-component';
  }
  static get styles() {
    return [super.styles, TextboxComponentStyle];
  }
}
