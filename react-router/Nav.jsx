import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/game/number-baseball">숫자야구</Link>
        </li>
        <li>
          <Link to="/game/response-check">반응속도체크</Link>
        </li>
        <li>
          <Link to="/game/rsp">가위바위보</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
