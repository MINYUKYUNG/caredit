import * as S from './style';
import { solutions } from '../../constants';

function Service() {
  const { SOLUTION_SERVICE_SECTIONS } = solutions;

  const solutionServiceSectionList = SOLUTION_SERVICE_SECTIONS.map(({
    enTitle,
    koTitle,
    descriptionsTitle,
    descriptions,
    offersTitle,
    offers,
    connectedButtons,
    image,
  }, index) => {
    const descriptionBox = () => {
      if (!descriptionsTitle && descriptions.length === 0) return null;

      const descriptionList = descriptions.map((description, index) => (
        <p key={index}>
          {description}
        </p>
      ));

      return (
        <S.DescriptionBox>
          <S.DescriptionTitleParagraph>
            {descriptionsTitle}
          </S.DescriptionTitleParagraph>
          <S.DescriptionListBox>
            {descriptionList}
          </S.DescriptionListBox>
        </S.DescriptionBox>
      );
    };

    const offerBox = (sectionIdx: number) => {
      if (!offersTitle && offers.length === 0) return null;

      const offerList = offers.map((offer, index) => (
        <li key={index}>
          {offer}
        </li>
      ));

      return (
        <S.OfferBox>
          <S.OfferTitleParagraph>
            {offersTitle}
          </S.OfferTitleParagraph>
          <S.OfferList className={sectionIdx ? '' : 'firstSectionOffers'}>
            {offerList}
          </S.OfferList>
        </S.OfferBox>
      );
    };

    const buttonBox = () => {
      if (connectedButtons.length === 0) return null;

      const buttonList = connectedButtons.map(({ image, url }, index) => (
        <button type="button" key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`버튼 이미지 ${index}`} />
          </a>
        </button>
      ));

      return (
        <S.ButtonBox>
          {buttonList}
        </S.ButtonBox>
      );
    };

    return (
      <S.ServiceSection
        key={index}
        id={`${index}`}
      >
        <S.ServiceBox
          backGroundImage={image}
          sectionIdx={index}
        >
          <S.TitleBox>
            <S.EnTitleParagraph>
              {enTitle}
            </S.EnTitleParagraph>
            <S.KoTitleParagraph>
              {koTitle}
            </S.KoTitleParagraph>
          </S.TitleBox>
          {descriptionBox()}
          {offerBox(index)}
          {buttonBox()}
        </S.ServiceBox>
      </S.ServiceSection>
    );
  });

  return (
    <main>
      {solutionServiceSectionList}
    </main>
  );
}

export default Service;
