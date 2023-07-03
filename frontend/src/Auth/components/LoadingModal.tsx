import ScaleLoader from "react-spinners/ScaleLoader";
import "../../App.css";
import styled from "styled-components";

const LoadingContainer = styled.div`
  z-index: 999;
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingMsg = styled.h2`
  font-family: "NanumGothic";
`;

const LoadingModal = () => {
  return (
    <LoadingContainer>
      <ScaleLoader color="#000" />
      <LoadingMsg>Loading</LoadingMsg>
    </LoadingContainer>
  );
};

export default LoadingModal;
