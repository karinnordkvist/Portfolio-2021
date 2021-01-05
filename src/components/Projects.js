import React from 'react';
import styled from 'styled-components';

import { projects } from '../data/projects';
import { FeaturedProject, NonFeaturedProject } from './Project';

export const Projects = ({ offset }) => {
  const featured = projects.filter((project) => project.featured === true);
  const otherProjects = projects.filter(
    (project) => project.featured === false
  );

  return (
    <ProjectsWrapper>
      <h2>Featured Projects</h2>
      {featured.map((project, index) => {
        return <FeaturedProject key={index} project={project} />;
      })}

      <h2>Other Projects</h2>
      <OtherProjectsWrapper>
        {otherProjects.map((project, index) => {
          return <NonFeaturedProject key={index} project={project} />;
        })}
      </OtherProjectsWrapper>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0 80px 0;

  h2 {
    font-weight: 400;
    margin: 50px auto;

    @media (max-width: 380px) {
      margin: 20px auto;
    }
  }
`;

const OtherProjectsWrapper = styled.div`
  text-align: left;
`;
