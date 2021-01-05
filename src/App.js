import React, { useState } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from 'GlobalStyles';
import _ from 'lodash';

import { Header } from './components/Header';
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';
import { Toolbox } from './components/Toolbox';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

export const App = () => {
  const [offset, setOffset] = useState('');

  // Find out page offset and use for various styling
  window.addEventListener(
    'scroll',
    _.throttle(() => {
      setOffset(Math.round(window.pageYOffset));
    }, 200)
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <GlobalStyles /> {/* Global styling */}
        <Header />
      </InnerWrapper>
      <Tech offset={offset} />
      <InnerWrapper>
        <Projects offset={offset} />
      </InnerWrapper>
      <Toolbox offset={offset} />
      <InnerWrapper>
        <Articles offset={offset} />
      </InnerWrapper>
      <Contact offset={offset} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  width: 60vw;
  max-width: 1050px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    width: 80vw;
  }
`;
