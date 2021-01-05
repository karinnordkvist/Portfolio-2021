import React from 'react';
import styled from 'styled-components';

import { articles } from '../data/articles';

export const Articles = ({ offset }) => {
  return (
    <ArticlesWrapper>
      <h2>My latest thoughts on development</h2>
      <InfoText>
        Sometimes I write. All thoughts can be read in full{' '}
        <a href="https://karinnordkvist.medium.com/">here</a>.
      </InfoText>

      {articles.map((article, index) => {
        return (
          <Article key={index}>
            <ArticleImage src={article.imgPath} />
            <ArticleTextBox>
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>
                <a href={article.url}>{article.title}</a>
              </ArticleTitle>
              <ArticleText>
                {article.text} Continue reading <a href={article.url}>>></a>
              </ArticleText>
            </ArticleTextBox>
          </Article>
        );
      })}
    </ArticlesWrapper>
  );
};
const ArticlesWrapper = styled.div`
  width: 100%;
  margin: 80px auto;

  h2 {
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const InfoText = styled.p`
  text-align: center;
  margin-bottom: 60px;
`;

const Article = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const ArticleTextBox = styled.div`
  margin-left: 30px;

  @media (max-width: 650px) {
    margin-left: 0;
    width: 100%;
  }
`;

const ArticleDate = styled.p`
  font-size: 12px;
  margin-bottom: 10px;

  @media (max-width: 380px) {
    font-size: 14px;
  }
`;

const ArticleTitle = styled.h3`
  @media (max-width: 380px) {
    line-height: 28px;
  }
`;

const ArticleText = styled.p`
  margin-top: 10px;
`;

const ArticleImage = styled.img`
  width: 250px;

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
