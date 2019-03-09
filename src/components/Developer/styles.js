import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #f1eded;

  .info-developer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      border-radius: 23px;
      margin-right: 15px;
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 3px;
        color: #3a3a3a;
      }

      span {
        color: #777;
        font-size: 12px;
      }
    }
  }

  .actions-developer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    button,
    a {
      border: none;
      padding: 5px;
      font-size: 20px;
      margin-left: 10px;
      cursor: pointer;
      background: #fff;

      .fa-times-circle {
        color: #d84b4b;
      }
      .fa-angle-right {
        color: #8a8a8a;
      }
    }
  }
`;
