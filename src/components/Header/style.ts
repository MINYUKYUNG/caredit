import styled from 'styled-components';
import { headerImage } from '../../assets/commonImages';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 556px;
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${({ theme }) => theme.size.xl} {
    height: 532px;
  }
  @media ${({ theme }) => theme.size.md} {
    height: 390px;
  }
  @media ${({ theme }) => theme.size.sm} {
    height: 260px;
  }
`;

export const TitleBox = styled.div`
  position: absolute;
  top: 40%;
  left: 18%;
  color: ${({ theme }) => theme.color.WHITE};
  animation: fadeInUp 1s;
  > p {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.THIN};

    @media ${({ theme }) => theme.size.xl} {
      font-size: 14px;
    }
    @media ${({ theme }) => theme.size.md} {
      font-size: 12px;
    }
    @media ${({ theme }) => theme.size.sm} {
      font-size: 10px;
    }
  }
  > div {
    font-size: ${({ theme }) => theme.fontSize.TITLE};
    font-weight: ${({ theme }) => theme.fontWeight.EXTRA_BOLD};
    padding-top: 16px;
    white-space: nowrap;
    > * {
      padding: 3px 0;

      @media ${({ theme }) => theme.size.md} {
        padding: 0;
        line-height: 1.11;
      }
    }
    > :first-child {
      position: relative;
      ::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        background-color: ${({ theme }) => theme.color.WHITE};
        width: 120px;
        height: 4px;

        @media ${({ theme }) => theme.size.md} {
          right: 15%;
          width: 80px;
          height: 5px;
        }
        @media ${({ theme }) => theme.size.sm} {
          right: 20%;
          width: 60px;
        }
      }
    }
    > :last-child {
      opacity: 0.5;
    }

    @media ${({ theme }) => theme.size.xl} {
      font-size: 46px;
    }
    @media ${({ theme }) => theme.size.md} {
      font-size: 35px;
      padding-top: 10px;
    }
    @media ${({ theme }) => theme.size.sm} {
      font-size: 28px;
    }
  }

  @media ${({ theme }) => theme.size.xxl} {
    left: 5%;
  }
`;
