import styled from 'styled-components';
import media from 'styled-media-query';
import InputMask from "react-input-mask"

const Container = styled.div`
  min-height: 100vh;
`;

const LoaderBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFF;
`;

const TitleBox = styled.div`
  padding-top: 120px;
  margin-bottom: 80px;

  ${media.lessThan('medium')`
    padding-top: 96px;
    margin: 0px 16px 32px 16px;      
  `}

  h1 {
    font-weight: 500;
    font-size: 72px;
    line-height: 110%;
    text-align: center;
    letter-spacing: -0.04em;
    color: #1A1B23;
    margin-bottom: 8px;

    ${media.lessThan('medium')`
      font-weight: 600;
      font-size: 32px;
      line-height: 130%;  
      margin-bottom: 0px;
    `}
  }

  p {
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.04em;
    color: #62636A;
    ${media.lessThan('medium')`
      font-size: 16px;
      line-height: 160%;
    `}
  }
`;

const FormContent = styled.form`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
  max-width: 604px;
  width: 100%;
  margin: 0 auto;

  ${media.lessThan('medium')`
    grid: none;
    display: flex;
    flex-direction: column;
    margin: 0 32px;
    width: auto;
  `}
`;

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 160%;
    color: #62636A;
  }

  .input-error {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    font-family: Inter;
    font-size: 12px;
    line-height: 160%;
    color: #F32525;
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #DFDFE1;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  line-height: 160%;
  color: #1A1B23;

  &:focus {
    border: 2px solid #305BF2;
  }

  &.invalid {
    border: 2px solid #F32525;
  }
`;

const MaskedInput = styled(InputMask)`
  -webkit-appearance: none;
  outline: none;
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #DFDFE1;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  line-height: 160%;
  color: #1A1B23;

  &:focus {
    border: 2px solid #305BF2;
  }

  &.invalid {
    border: 2px solid #F32525;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  height: 48px;
  width: 104px;
  background: #305BF2;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #FFFFFF;
  border: none;
  justify-self: end;
  grid-column: 2;
  margin-top: 8px;
  cursor: pointer;
  margin-bottom: 200px;

  ${media.lessThan('medium')`
    grid: none;
    width: 100%;
    margin-bottom: 32px;
  `}
`;

export {
  Container,
  LoaderBox,
  TitleBox,
  FormContent,
  FormGroup,
  Input,
  MaskedInput,
  Button
}