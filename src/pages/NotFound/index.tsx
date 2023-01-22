import { Link } from 'react-router-dom';
import * as S from './style';

function NotFound() {
  return (
    <S.NotFoundContainer>
      <Link to="/">
        <p>존재하지 않는 페이지입니다.</p>
        <p>(화면을 클릭하면 솔루션 화면으로 돌아갑니다)</p>
      </Link>
    </S.NotFoundContainer>
  );
}

export default NotFound;
