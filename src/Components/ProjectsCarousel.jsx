import { Button, Carousel, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { PROJECTS } from "../constants/projects";

const ProjectsCarousel = () => {
  return (
    <StyledWrapper>
      <Carousel fade>
        {PROJECTS.map((project, index) => (
          <Carousel.Item key={index} className="custom-item p-5">
            <Image
              className="d-block w-100"
              src={project.imgURL}
              alt={"progetto" + project.title}
            />
            <Carousel.Caption className="custom-caption">
              <h3>{project.title}</h3>
              <p style={{ textAlign: "justify" }}>{project.description}</p>
              <div className="d-flex justify-content-center gap-3 ">
                {project.githubURL_BackEnd && (
                  <Button
                    className="custom-button"
                    href={project.githubURL_BackEnd}
                    target="_blank"
                  >
                    Back-End Github
                  </Button>
                )}
                {project.githubURL_FrontEnd && (
                  <Button
                    className="custom-button"
                    href={project.githubURL_FrontEnd}
                    target="_blank"
                  >
                    Front-End Github
                  </Button>
                )}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .custom-item {
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  img {
    max-width: 1000px;
    max-height: 600px;
    margin-inline: auto;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
  }

  .custom-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    color: #10181b;
    font-weight: 500;
    transform: rotateX(-90deg);
    box-sizing: border-box;
    padding: 20px;
    transition: all 0.3s ease-in-out;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.05);
      z-index: -1;
    }
  }

  .custom-item:hover img {
    filter: blur(5px);
  }

  .custom-item:hover .custom-caption {
    transform: rotateX(0deg);
  }

  .custom-button {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default ProjectsCarousel;
