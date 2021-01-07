import React from 'react';
import styled from 'styled-components';

export const FeaturedProject = ({ project }) => {
  return (
    <ProjectWrapper>
      <ImageLink href={project.url} target="_blank">
        <ProjectImage src={project.imgSrc} />
      </ImageLink>
      <ProjectTextWrapper>
        <ProjectTitle href={project.repository}>→ {project.title}</ProjectTitle>{' '}
        <ProjectText>
          {project.text}
          <a href={project.url}>>></a>
        </ProjectText>
        <TagsWrapper>
          {project.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </TagsWrapper>
      </ProjectTextWrapper>
    </ProjectWrapper>
  );
};

export const NonFeaturedProject = ({ project }) => {
  return (
    <NonFeaturedProjectWrapper>
      <ImageLink href={project.url} target="_blank">
        <NonFeaturedImg src={project.imgSrc} />
      </ImageLink>
      <NonFeaturedProjectTextWrapper>
        <ProjectTitle href={project.repository}>{project.title}</ProjectTitle>{' '}
        <ProjectText>
          {project.text}
          <a href={project.url}>>></a>
        </ProjectText>
        <TagsWrapper>
          {project.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </TagsWrapper>
      </NonFeaturedProjectTextWrapper>
    </NonFeaturedProjectWrapper>
  );
};

const NonFeaturedProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px auto;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const NonFeaturedImg = styled.img`
  width: 130px;
  height: 100px;
  margin-right: 30px;
  object-fit: cover;

  @media (max-width: 380px) {
    display: none;
  }
`;

const NonFeaturedProjectTextWrapper = styled.div`
  width: 80%;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    img {
      margin-left: 50px;
    }

    @media (max-width: 650px) {
      flex-direction: column;

      img {
        margin-left: 0;
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }

  &:nth-child(even) {
    img {
      margin-right: 50px;

      @media (max-width: 650px) {
        margin-right: 0;
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
`;

const ProjectImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 850px) {
    width: 300px;
  }
`;

const ImageLink = styled.a`
  border-bottom: none;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectTextWrapper = styled.div``;

const ProjectText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const ProjectTitle = styled.a`
  font-size: 18px;
  line-height: 1.5;
  border-bottom: 2px solid #000;
  text-align: center;
`;

const TagsWrapper = styled.div`
  margin-top: 10px;
`;

const Tag = styled.div`
  padding: 3px 10px;
  font-size: 14px;
  background: #f5f0ec;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
`;
