import ScaleLoader from "react-spinners/ScaleLoader";
import "../../App.css";
import { Modal } from "react-bootstrap";
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

const LoadingModal = () => {
  return (
    <LoadingContainer>
      <ScaleLoader color="#000" />
      <h2>Loading...</h2>
    </LoadingContainer>
  );
};

export default LoadingModal;
