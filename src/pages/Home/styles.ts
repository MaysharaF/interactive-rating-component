import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

export const CardRating = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 25.75rem; 
  height: 26rem; 
  border-radius: 1.875rem; 
  background: var(--black-gradient);
  padding: 2rem;
  
  font-feature-settings: 'clig' off, 'liga' off;

  @media (width: 375px) {
    padding: 1.5rem;
    width: 20.4375rem;
    height: 22.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    color: var(--white);
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: .4375rem;
  }

  p {
    color: var(--light-grey);
    font-weight: 400;
    line-height: 1.5rem;
    font-style: normal;
  }

  @media (width: 375px) {
    h2{
      font-size: 1.5rem;
    }

    p {
      font-size: .75rem;
      line-height: 1.375rem;
    }
  }
`

const CircleCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.1875rem;
  height: 3.1875rem;
  background-color: var(--dark-blue);
  border-radius: 100%;

  @media (width: 375px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const CircleIcon = styled.div`
  ${CircleCSS}
`;

interface ICircleRate {
  actived: boolean
}

export const CircleRate = styled.button<ICircleRate>`
  ${CircleCSS}
  
  cursor: pointer;
  user-select: none;
  color: var(--medium-gray);
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.2px;

  transition: 0.5s;

  :hover {
    color: var(--white);
    background-color: var(--orange);
  }

  ${({ actived }) => actived && css`
    color: var(--white);
    background-color: var(--medium-gray);
  `}
    
`;


export const RateSelectContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 2.8125rem;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 1.4063rem;

  font-weight: 700;
  line-height: normal;
  letter-spacing: .125rem;

  transition: 0.5s;

  :hover {
    color: var(--orange);
    background-color: var(--white);
  }
`;