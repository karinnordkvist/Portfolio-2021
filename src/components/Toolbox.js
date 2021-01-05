import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export const Toolbox = ({ offset }) => {
  const wrapperRef = useRef();
  const [currentOffset, setCurrentOffset] = useState();
  const [currentHeight, setCurrentHeight] = useState();

  useEffect(() => {
    setCurrentOffset(wrapperRef.current.offsetTop);
    setCurrentHeight(wrapperRef.current.scrollHeight);
  }, []);

  return (
    <ToolsWrapper
      offset={offset}
      ref={wrapperRef}
      currentOffset={currentOffset}
      currentHeight={currentHeight}
    >
      {/* <ToolsText>Toolbox</ToolsText> */}
      <ToolsText>
        I work in <Highlighted>VS Code</Highlighted>, run version control on{' '}
        <Highlighted>Git/Github</Highlighted>, look h4cky typing in the{' '}
        <Highlighted>Command Line</Highlighted>, design/wireframe in{' '}
        <Highlighted>Figma (or Sketch)</Highlighted>, modify my content in{' '}
        <Highlighted>Adobe Creative Suite</Highlighted> and communicate on{' '}
        <Highlighted>Slack</Highlighted>.
      </ToolsText>
      {/* <Stroke></Stroke>
      <ToolsText>
        And: UX, Design/Art Direction, Editorial design, Image Editing,
        Affiliate marketing, Print production
      </ToolsText> */}
    </ToolsWrapper>
  );
};

const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight
      ? '#fff'
      : '#f4f0ec'};
  opacity: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight ? '0' : '1'};
  padding: 80px;
  transition: all 1s ease-in-out;
`;

const ToolsText = styled.p`
  font-size: 24px;
  line-height: 1.6;
  text-align: center;
  width: 60vw;
  max-width: 1050px;
  margin: 20px auto;

  @media (max-width: 380px) {
    font-size: 20px;
  }
`;

const Highlighted = styled.span`
  border-bottom: 2px solid #000;
`;
