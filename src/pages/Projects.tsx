import { motion } from 'framer-motion'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { BACKGROUND_DARK, BACKGROUND_LIGHT } from '~/styled/Themes'
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 48rem;
  padding: 0 2rem;
`
const Title = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    padding-bottom: 0;
  }
`
const WrapProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-height: 30rem;
  overflow: auto;
  @media screen and (max-width: 767px) {
    max-height: 12rem;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .project {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      vertical-align: top;
    }
    .project-panel {
      background: ${(props: ThemePropsType) =>
        props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      padding: 0.5rem 1rem;
      top: 0;
      left: 0;
      transform: translateY(calc(100% - 45px));
      z-index: 10;
      display: block;
      vertical-align: top;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease-out;
      @media screen and (max-width: 767px) {
        transform: translateY(calc(100% - 22px));
        padding: 0.25rem 0.5rem;
      }
      .title {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0;
        @media screen and (max-width: 767px) {
          font-size: 0.75rem;
        }
      }
      .description {
        margin: 0;
        text-align: left;
        margin-top: 0.5rem;
        font-size: 0.8rem;
      }
    }
    &:hover {
      .project-panel {
        transform: translateY(0);
      }
    }
  }
`
function Projects() {
  const toggle = useToggleStore((state) => state.toggle)
  const variants = {
    initial: { opacity: 0, y: '100px', scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      <Wrapper>
        <Title>Projects</Title>
        <WrapProject toggle={toggle}>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
          <div className='project'>
            <img src='/images/projects/project-1.jpg' />
            <a href='/' className='project-panel'>
              <p className='title'>Project</p>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                temporibus
              </p>
            </a>
          </div>
        </WrapProject>
      </Wrapper>
    </motion.div>
  )
}

export default Projects
