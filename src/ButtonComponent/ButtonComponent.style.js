import { css } from 'lit-element';

export const ButtonComponentStyle = css`
  .btn {
    background-color: rgb(52, 152, 219);
    text-align: center;
    display: inline-block;
    margin-left: 15px;
    margin-top: 2px;
    cursor: pointer;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    width: 220px;
    padding: 1.9rem;
    border-style: none;
    border-radius: 3px;
  }
  :host(:active) .btn,
  :host([active]) .btn,
  :host(:hover) .btn {
    background: rgb(52, 152, 219);
  }
  :host(:focus:not([disabled])) .btn {
    outline: none;
  }
`;
