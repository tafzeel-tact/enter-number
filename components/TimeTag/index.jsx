import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite14px, ValignTextMiddle } from "../../styledMixins";


function TimeTag() {
  return (
    <TimeTag1>
      <Address>08 Aug 21&nbsp;&nbsp; l&nbsp;&nbsp; 09:30 PM</Address>
    </TimeTag1>
  );
}

const TimeTag1 = styled.div`
  width: 189px;
  height: 21px;
  display: flex;
  border-radius: 20.48px;
`;

const Address = styled.p`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite14px}
            flex: 1;
  width: 173px;
  text-align: center;
  letter-spacing: 0.84px;
`;

export default TimeTag;
