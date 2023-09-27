import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, demo, notion } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description,
tags, image, source_code_link, demo_link, art_link }) => {

  const Demo = () => demo_link === "" ? <></> : <div
    onClick={() => window.open
      (demo_link, "_blank")}
    className="red2-gradient w-10 h-10 mx-[0.5%]
    rounded-full flex justify-center
    items-center cursor-pointer"
  >
    <img
      src={demo}
      alt="demo"
      className="w-3 h-3
      object-conntain"
    />
  </div>

  const Art = () => art_link === "" ? <></> : <div
  onClick={() => window.open
    (art_link, "_blank")}
  className="blue-gradient w-10 h-10 mx-[0.5%]
  rounded-full flex justify-center
  items-center cursor-pointer"
  >
  <img
    src={notion}
    alt="notion"
    className="w-4 h-4
    object-conntain"
  />
  </div>

  return (
    <motion.div
      variants={fadeIn("up", "spring",
      index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover
            rounded-2xl"
          />

          <div className="absolute inset-0 flex
          justify-end m-3 card-img-hover">
            <Art />
            <Demo />
            <div
              onClick={() => window.open
                (source_code_link, "_blank")}
              className="black2-gradient w-10 h-10
              rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2
                object-conntain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold
          text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary 
          text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] 
            ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >My work</p>
        <h2 className={styles.sectionHeadText}
        >Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]"
        >
          The projects listed below demonstrate my skills 
          and knowledge via real-world examples of my work. 
          Each project has a brief description as well as 
          links to source repositories and live demos. 
          It demonstrates my ability to work with various 
          technologies, and effectively manage projects .
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")