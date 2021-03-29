/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  ${(props) => {
    if (props.destaque) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return CardWrapper.CardDefault;
  }};
`;

CardWrapper.CardDefault = css`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  height: 250px;
  /* border: 2px solid ${({ theme }) => theme.mainUi.background.light.tertiary}; */
  border-radius: 12px;
  margin: 1px 0px;
  /* padding: 20px 20px; */
  background-color: white;
  /* box-shadow: 2px 2px 10px #85738c; */
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
}
`;

CardWrapper.CardTitle = styled.div`
  position: relative;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight:bold;
  background-color:#545454;;
  color: white;
`;

CardWrapper.CardDestaqueLabel = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size:12px;
  font-weight: bold;
  background-color: #545454;
  color: white;
`;

CardWrapper.CardImage = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-color: #545454;
  
  & > img {
    height: 100%;
    width: inherit;
    object-fit: cover;
  }
`;

CardWrapper.CardText = styled.div`
  font-size: 16px;
  /* background:#545454; */
`;

CardWrapper.CardDestaque = styled.div`
  order: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  height: 300px;
  margin: 1px 0px;
  background-color: #e9e9e9;
  & > div > ${CardWrapper.CardText} {
    display: none;
  }
  ${breakpointsMedia({
    sm: css`
      
      & > div {
        & > ${CardWrapper.CardText} {
          display: none;
        }
      }
    `,
    md: css`
      width: 100%;
      max-width: 1100px;
      display: flex;
      flex-direction: row;
      margin-top:92px;
      & > div {
        max-width: 340px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > ${CardWrapper.CardTitle} {
          top: 0;
          margin-bottom: 10px;
        }
        & > ${CardWrapper.CardDestaqueLabel} {
          position: relative;
          bottom: 0;
          margin-top: 10px;
        }
        & > ${CardWrapper.CardText} {
          display: block;
          padding: 12px;
          & > a {
            display: inline-block;
            font-size: 12px;
            color: black;
            padding-top: 20px;
            text-decoration: none;
            & > span > img {
              height: 120px;
              filter: invert(16%) sepia(66%) saturate(565%) hue-rotate(332deg) brightness(90%) contrast(93%);
              
            }
          }
        }
      }
      & > ${CardWrapper.CardImage} {
        width: auto;
        height: 100%;
        max-width: 760px;
        & > img {
          object-fit: cover;
          height: inherit;
          width: 100%;
        }
      }
    `,
  })}
`;
