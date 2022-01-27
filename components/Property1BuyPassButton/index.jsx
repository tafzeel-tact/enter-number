import React from "react";
import styled from "styled-components";
import { PoppinsNormalPeachCream18px, ValignTextMiddle } from "../../styledMixins";


function Property1BuyPassButton() {
  return (
    <CardButtons>
      <BuyPass5000>Pass ₹450</BuyPass5000>
    </CardButtons>
  );
}

const CardButtons = styled.div`
  height: 35px;
  margin-left: 457px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-end;
  min-width: 204px;
`;

const BuyPass5000 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPeachCream18px}
            width: 174px;
  height: 16px;
  text-align: center;
  letter-spacing: 1.08px;
`;

export default Property1BuyPassButton;
