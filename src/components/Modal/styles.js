import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 3;

  .modal-main {
    position: fixed;
    width: 300px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    background: #fff;
    box-shadow: 0px 0px 20px 0px #3a3a3a;

    b {
      font-size: 15px;
      color: #2d2d2d;
      font-weight: bold;
      padding-bottom: 20px;
      align-self: center;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        border: 1px solid #d2d2d2;
        border-radius: 5px;
        padding: 10px 15px;
        margin-bottom: 10px;
        flex: 1;

        &::placeholder {
          color: #cacaca;
          font-size: 14px;
        }
      }

      div {
        display: flex;
        height: 40px;
        justify-content: space-around;

        button {
          border: 0;
          border-radius: 5px;
          padding: 10px 15px;
          flex: 1;
          color: #fff;
          font-weight: bold;

          &.success {
            margin-left: 15px;
            background: #85c47c;

            &:hover {
              background: #7ab572;
            }
          }

          &.default {
            background: #d2d2d2;
            &:hover {
              background: #bfbebe;
            }
          }
        }
      }
    }
  }
`;
