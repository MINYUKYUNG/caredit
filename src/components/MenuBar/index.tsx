import { Link } from 'react-scroll';
import * as S from './style';
import { solutions } from '../../constants';

function MenuBar() {
  const { SOLUTION_MENUS } = solutions;

  const solutionMenuList = SOLUTION_MENUS.map((menu, index) => (
    <S.MenuItem key={index}>
      <Link
        to={`${index}`}
        smooth
        duration={500}
        activeClass="active"
        spy
      >
        <span>
          {menu}
        </span>
      </Link>
    </S.MenuItem>
  ));

  return (
    <S.MenuList>
      {solutionMenuList}
    </S.MenuList>
  );
}

export default MenuBar;
