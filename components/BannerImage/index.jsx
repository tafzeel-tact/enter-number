import React from "react";
import styled from "styled-components";


function BannerImage(props) {
  const { src } = props;

  return <BannerImage1 style={{ backgroundImage: `url(${src})` }}></BannerImage1>;
}

const BannerImage1 = styled.div`
  width: 141px;
  height: 80px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default BannerImage;
