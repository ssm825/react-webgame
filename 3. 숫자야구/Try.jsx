import React, { memo } from "react";

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
// 개발자 도구에서 이름이 바뀌는 것을 방지
Try.displayName = "Try";

export default Try;
