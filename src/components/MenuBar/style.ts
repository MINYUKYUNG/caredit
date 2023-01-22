import styled from 'styled-components';

export const MenuList = styled.ul`
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.WHITE};

  @media ${({ theme }) => theme.size.md} {
    height: 60px;
  }
`;

export const MenuItem = styled.li`
  width: 240px;
  text-align: center;
  position: relative;
  :not(:last-child)::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.color.GRAY};
    width: 1px;
    height: 20px;
  }
  a {
    width: 100%;
    height: 100%;
    position: relative;
    :hover {
      color: ${({ theme }) => theme.color.BLUE};
      font-weight: ${({ theme }) => theme.fontWeight.BOLD};
      border-bottom: 4px solid ${({ theme }) => theme.color.BLUE};
    }
    > span {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;

      @media ${({ theme }) => theme.size.md} {
        white-space: normal;
        word-break: keep-all;
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.color.BLUE};
    font-weight: ${({ theme }) => theme.fontWeight.BOLD};
    border-bottom: 4px solid ${({ theme }) => theme.color.BLUE};
  }

  @media ${({ theme }) => theme.size.xl} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.size.sm} {
    font-size: 10px;
  }
`;
