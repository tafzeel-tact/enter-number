import React from "react";
import CueBooking from "../CueBooking";
import styled from "styled-components";
import {
  PoppinsNormalGraniteGray18px,
  PoppinsNormalEerieBlack24px,
  Border1pxBlack2,
  PoppinsNormalBlack24px,
  PoppinsNormalPinkSwan18px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./W1A2EnterNumber.css";

function W1A2EnterNumber(props) {
  const { rectangle447, title, fillText, text3, inputType, inputPlaceholder, button, text, cueBookingProps } = props;

  return (
    <div className="container-center-horizontal">
      <form className="w1-a2-enter-number screen" name="form1" action="form1" method="post">
        <CueBooking bannerImageProps={cueBookingProps.bannerImageProps} />
        <OverlapGroup>
          <Rectangle447 src={rectangle447} />
          <HeaderText>
            <Title>{title}</Title>
            <FillText>{fillText}</FillText>
          </HeaderText>
          <Group38824>
            <Number>
              <Text1>{text3}</Text1>
              <X9xxxxxxxx name="9xxxxxxxx" placeholder={inputPlaceholder} type={inputType} required />
            </Number>
          </Group38824>
          <a href="javascript:SubmitForm('form1')">
            <Button src={button} />
          </a>
          <Text>{text}</Text>
        </OverlapGroup>
      </form>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 732px;
  height: 533px;
  position: relative;
  margin-top: 95px;
  margin-left: 30px;
`;

const Rectangle447 = styled.img`
  position: absolute;
  width: 732px;
  height: 494px;
  top: 0;
  left: 0;
`;

const HeaderText = styled.div`
  position: absolute;
  width: 607px;
  top: 72px;
  left: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 97px;
`;

const Title = styled.h1`
  ${PoppinsNormalEerieBlack24px}
  width: 397px;
  min-height: 35px;
  text-align: center;
  letter-spacing: 1.44px;
  line-height: 31.9px;
  white-space: nowrap;
`;

const FillText = styled.div`
  ${PoppinsNormalGraniteGray18px}
  width: 607px;
  min-height: 54px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 1.08px;
  line-height: 28.6px;
`;

const Group38824 = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  width: 340px;
  height: 56px;
  top: 225px;
  left: 181px;
  display: flex;
  border-radius: 8px;
`;

const Number = styled.div`
  margin-top: 5px;
  width: 218px;
  height: 46.0001220703125px;
  margin-left: 63.4px;
  display: flex;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  width: 44.95892333984375px;
  height: 45.71419906616211px;
  font-family: var(--font-family-poppins);
  font-weight: 400;
  color: var(--granite-gray);
  font-size: var(--font-size-xxxl2);
  letter-spacing: 1.44px;
`;

const X9xxxxxxxx = styled.input`
  ${PoppinsNormalBlack24px}
  margin-top: 0;
  width: 153px;
  height: 46px;
  margin-left: 16px;
  background-color: transparent;
  letter-spacing: 4.92px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #0000001f;
  }
`;

const Button = styled.img`
  position: absolute;
  width: 217px;
  height: 56px;
  top: 337px;
  left: 242px;
  cursor: pointer;
`;

const Text = styled.div`
  ${PoppinsNormalPinkSwan18px}
  position: absolute;
  width: 607px;
  top: 479px;
  left: 48px;
  text-align: center;
  letter-spacing: 1.08px;
  line-height: 28.6px;
`;

export default W1A2EnterNumber;
