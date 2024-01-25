import React from 'react';
import { motion } from 'framer-motion';
import { Frontend_skill, Backend_skill } from './index'; // index.ts에서 데이터 가져오기
import './skills.css';

const allSkills = [...Frontend_skill, ...Backend_skill]; // Frontend와 Backend 스킬 합치기

// 스킬 아이템에 적용할 애니메이션의 초기 상태와 전환 설정
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-row">
        {allSkills.slice(0, 4).map((skill, index) => (
          <SkillItem skill={skill} index={index} />
        ))}
      </div>
      <div className="skills-row">
        {allSkills.slice(4, 7).map((skill, index) => (
          <SkillItem skill={skill} index={index} />
        ))}
      </div>
      <div className="skills-row">
        {allSkills.slice(7, 10).map((skill, index) => (
          <SkillItem skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ skill, index }: any) => (
  <motion.div 
    key={skill.skill_name}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.7 }}
    className="skill-item"
  >
    <img src={skill.Image} alt={skill.skill_name} width={skill.width} height={skill.height} />
    {/* <p>{skill.skill_name}</p> */}
  </motion.div>
);

export default Skills;