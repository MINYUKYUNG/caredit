import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width:100vw;
  height:100vh;
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    padding-bottom: 20px;
  }
`;
