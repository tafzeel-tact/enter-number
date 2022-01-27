import React from "react";
import BannerImage from "../BannerImage";
import TimeTag from "../TimeTag";
import Property1BuyPassButton from "../Property1BuyPassButton";
import styled from "styled-components";
import { PoppinsNormalWhite18px } from "../../styledMixins";


function CueBooking(props) {
  const { bannerImageProps } = props;

  return (
    <CueBooking1>
      <Frame38825>
        <FormIcons src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/form-icons@2x.png" />
        <Frame38824>
          <BannerImage src={bannerImageProps.src} />
          <CardTitle>
            <TimeTag />
            <Title>Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai</Title>
          </CardTitle>
        </Frame38824>
      </Frame38825>
      <Property1BuyPassButton />
    </CueBooking1>
  );
}

const CueBooking1 = styled.div`
  height: 96px;
  position: relative;
  margin-left: 0.43px;
  display: flex;
  padding: 0 53px;
  align-items: center;
  min-width: 1680px;
  background-color: var(--woodsmoke);
`;

const Frame38825 = styled.div`
  width: 913px;
  display: flex;
`;

const FormIcons = styled.img`
  margin-top: 29.5px;
  width: 21px;
  height: 21px;
  margin-left: 0;
`;

const Frame38824 = styled.div`
  height: 80px;
  position: relative;
  margin-left: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 852.234619140625px;
`;

const CardTitle = styled.div`
  width: 687px;
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  align-items: flex-start;
  min-height: 80px;
`;

const Title = styled.div`
  ${PoppinsNormalWhite18px}
  min-height: 25px;
  margin-top: 8px;
  letter-spacing: 1.08px;
  line-height: 23.9px;
  white-space: nowrap;
`;

export default CueBooking;
