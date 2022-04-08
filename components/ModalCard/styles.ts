import styled, { css } from 'styled-components';

import { IModalCardProps } from './interface';

const widthVariations = {
  sm: css`
    width: 300px;
    max-width: 90%;
  `,
  md: css`
    width: 600px;
    max-width: 90%;
  `,
  lg: css`
    width: 900px;
    max-width: 90%;
  `,
  xl: css`
    width: 80%;
    max-width: 900px;
  `,
};

export const Container = styled.div<IModalCardProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background: red;
  ${props => widthVariations[props.size]};
`;
