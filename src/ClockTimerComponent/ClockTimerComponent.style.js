import { css } from 'lit-element';

export const ClockTimerComponentStyle = css`
  .wraper {
    clear: both;
    width: 200px;
    background: #2ecc71;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .timer {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    padding: 7px;
  }

  .link ul {
    padding: 0px;
    margin: 0px;
  }

  .link ul li {
    display: inline-block;
    font-size: 14px;
    padding: 5px;
  }

  .link ul li a {
    cursor: pointer;
  }

  .title {
    height: 20px;
  }

  .pauseCls {
    background-color: #c4b731;
  }

  .resumeCls {
    background-color: #2ecc71;
  }

  .deleteCls {
    background-color: #e74c3c;
  }

  .hiddenCls {
    display: none;
  }
`;
