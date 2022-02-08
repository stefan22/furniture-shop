import React, { Component, createRef } from "react";
import styled, { keyframes } from "styled-components";
import { FadeInDiv } from "./animations/FadeInDiv";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const size = {
  small: 0,
  medium: 414,
  large: 1279
};

const SpinnerDiv = styled.div`
  position: absolute;
  z-index: 20;
  border: 1px solid #03a9f4;
  display: flex;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  visibility: visible;
  animation: ${rotate} 1s infinite ease-in-out;
`;

const LargeCircle = styled.div`
  width: 60px;
  background: linear-gradient(45deg, #032b65, transparent);
  height: 60px;
  border-radius: 50%;
  clip-path: circle(38%);
`;

const SmallCircle = styled.div`
  width: 40px;
  height: 40px;
  clip-path: circle(25%);
  border-radius: 50%;
  background: #3868f6;
  border: 2px solid #0b1558;
`;

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.elemRef = createRef(null);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleSpinner, false);
    this.handleSpinner();
  }

  handleSpinner = () => {
    let screenSize = window.innerWidth;
    if (this.elemRef.current !== null) {
      if (screenSize <= size.large && screenSize > size.medium) {
        this.elemRef.current.style.left = "45vw";
        this.elemRef.current.style.top = "40%";
      } else if (screenSize <= size.medium && screenSize > size.small) {
        this.elemRef.current.style.left = "40vw";
        this.elemRef.current.style.top = "33%";
      } else {
        this.elemRef.current.style.left = "39vw";
        this.elemRef.current.style.top = "45%";
      }
    }
  };

  comonentWillUnmount() {
    window.removeEventListener("resize", this.handleSpinner, false);
  }

  render() {
    return (
      <FadeInDiv>
        <SpinnerDiv ref={this.elemRef}>
          <LargeCircle />
          <SmallCircle />
        </SpinnerDiv>
      </FadeInDiv>
    );
  }
}

export default Spinner;
