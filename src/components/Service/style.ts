import styled from 'styled-components';

interface ServiceBoxStyle {
  backGroundImage: string,
  sectionIdx: number,
}

export const ServiceSection = styled.section`
  position: relative;
  height: 980px;
  animation: fadeInUp 1s;
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.color.VERY_LIGHT_GRAY};
  }
  :nth-child(even) {
    background-color: ${({ theme }) => theme.color.WHITE};
  }

  @media ${({ theme }) => theme.size.xl} {
    height: 918px;
  }
  @media ${({ theme }) => theme.size.lg} {
    height: 735px;
  }
`;

export const ServiceBox = styled.div<ServiceBoxStyle>`
  width: 1200px;
  padding: 68px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${(props) => (props.backGroundImage)});
  background-repeat: no-repeat;
  background-position: right;
  background-size: ${(props) => (props.sectionIdx ? '50%' : '38%')};

  @media ${({ theme }) => theme.size.xl} {
    width: 920px;
    padding: 0;
    background-size: ${(props) => (props.sectionIdx ? '40%' : '36%')};
  }
  @media ${({ theme }) => theme.size.lg} {
    width: 720px;
  }
  @media ${({ theme }) => theme.size.md} {
    width: 80%;
    background-size: 0%;
  }
`;

export const TitleBox = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.EXTRA_BOLD};
`;

export const EnTitleParagraph = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.color.BLUE};
  margin-bottom: 16px;
  line-height: 1;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 25px;
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const KoTitleParagraph = styled.p`
  font-size: 40px;
  line-height: 1.4;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 35px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 28px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 20px;
  }
`;

export const DescriptionBox = styled.div`
  margin-top: 48px;

  @media ${({ theme }) => theme.size.lg} {
    margin-top: 35px;
  }
`;

export const DescriptionTitleParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  margin-bottom: 16px;
  line-height: 1;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 13px;
  }
`;

export const DescriptionListBox = styled.div`
  color: ${({ theme }) => theme.color.DEEP_GRAY_OPACITY};
  line-height: 1.77;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 12px;
    > * {
      display: inline;
    }
  }
`;

export const OfferBox = styled.div`
  margin-top: 48px;

  .firstSectionOffers {
    display: grid;
    grid-template-columns: 230px auto;

    @media ${({ theme }) => theme.size.lg} {
      grid-template-columns: 160px auto;
    }
    @media ${({ theme }) => theme.size.md} {
      display: block;
    }
  }

  @media ${({ theme }) => theme.size.lg} {
    margin-top: 30px;
  }
`;

export const OfferTitleParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  margin-bottom: 16px;
  line-height: 1;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 13px;
  }
`;

export const OfferList = styled.ul`
  color: ${({ theme }) => theme.color.DEEP_GRAY_OPACITY};
  line-height: 1.77;

  @media ${({ theme }) => theme.size.xl} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.size.lg} {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.size.md} {
    font-size: 12px;
  }

  li {
    position: relative;
    padding-left: 12px;
    ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.BLUE};
    }
  }
`;

export const ButtonBox = styled.div`
  margin-top: 30px;
  height: 48px;
  > button {
    height: 100%;
    margin-right: 8px;
    > a {
      height: 100%;
    }
  }
  img {
    height: 100%;
    border-radius: 4px;
  }

  @media ${({ theme }) => theme.size.xl} {
    height: 40px;
  }
  @media ${({ theme }) => theme.size.md} {
    height: 35px;
  }
`;
