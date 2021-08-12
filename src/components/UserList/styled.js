import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  padding-top: 120px;
  margin-bottom: 48px;

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
  margin: 8px auto 32px auto;
  cursor: pointer;

  ${media.lessThan('medium')`
    grid: none;
    width: 100%;
    margin-bottom: 32px;
  `}
`;

export {
  Container,
  TitleBox,
  Button
}