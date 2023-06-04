import { Route, Routes } from 'react-router';

import NumberBaseball from '../3. 숫자야구/NumberBaseballClass';
import ResponseCheck from '../4. 반응속도체크/ResponseCheckClass';
import RSP from '../5. 가위바위보/RSPClass';

const Router = () => {
  return (
    <Routes>
      <Route path="number-baseball" element={<NumberBaseball />} />
      <Route path="response-check" element={<ResponseCheck />} />
      <Route path="rsp" element={<RSP />} />
      <Route path="*" element={<div>일치하는 게임이 없습니다.</div>} />
    </Routes>
  );
};

export default Router;
