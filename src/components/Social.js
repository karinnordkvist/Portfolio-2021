import React from 'react';
import styled from 'styled-components';

export const HeaderSocial = () => {
  return (
    <SocialWrapper>
      <HeaderSocialIconWrapper>
        <a href="https://www.linkedin.com/in/karin-nordkvist/">
          <SocialImage src="./images/linkedin-gray.svg" />
          <p>Linkedin</p>
        </a>
      </HeaderSocialIconWrapper>
      <HeaderSocialIconWrapper>
        <a href="https://github.com/karinnordkvist">
          <SocialImage src="./images/github-gray.svg" />
          <p>Github</p>
        </a>
      </HeaderSocialIconWrapper>
    </SocialWrapper>
  );
};

export const FooterSocial = () => {
  return (
    <SocialWrapper>
      <FooterSocialIconWrapper>
        <a href="https://www.linkedin.com/in/karin-nordkvist/">
          <SocialImage src="./images/linkedin-gray.svg" />
          <p>Linkedin</p>
        </a>
      </FooterSocialIconWrapper>
      <FooterSocialIconWrapper>
        <a href="https://github.com/karinnordkvist">
          <SocialImage src="./images/github-gray.svg" />
          <p>Github</p>
        </a>
      </FooterSocialIconWrapper>
    </SocialWrapper>
  );
};

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderSocialIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 20px 0 20px;

  a {
    text-align: center;
  }
`;

const FooterSocialIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 20px 0 20px;

  a {
    text-align: center;
  }
`;

const SocialImage = styled.img`
  height: 20px;
  width: auto;
  margin-bottom: 10px;
`;
