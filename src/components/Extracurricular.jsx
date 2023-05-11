import { VerticalTimeline, 
VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { activities } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ActivityCard = ({ activity }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: 
    '#fff' }}
    contentArrowStyle= {{ borderRight: '7px solid #232631' }}
    date={activity.date}
    iconStyle={{ background: activity.iconBg }}
    icon={
      <div className="flex justify-center
      items-center w-full h-full">
        <img 
          src={activity.icon}
          alt={activity.organisation_name}
          className="w-[60%] h-[60%]
          object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]
      font-bold">{activity.title}</h3>
      <p className="text-secondary text-[16px]
      font-semibold" style={{ margin: 0 }}>{activity.organisation_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {activity.points.map((point, index) => (
        <li key={`activity-point-${index}`}
        className="text-white-100 text-[14px]
        pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Extracurricular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Community life</p>
        <h2 className={styles.sectionHeadText}
        >Extracurricular activity.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity=
            {activity} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Extracurricular, "extra")