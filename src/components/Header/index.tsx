import * as S from './style';
import { solutions } from '../../constants';

function Header() {
  const { SOLUTION_TITLES, SOLUTION_SUB_TITLE } = solutions;

  const solutionTitleList = SOLUTION_TITLES.map((title, index) => (
    <p key={index}>
      {title}
    </p>
  ));

  return (
    <S.Header>
      <S.TitleBox>
        <p>
          {SOLUTION_SUB_TITLE}
        </p>
        <div>
          {solutionTitleList}
        </div>
      </S.TitleBox>
    </S.Header>
  );
}

export default Header;
