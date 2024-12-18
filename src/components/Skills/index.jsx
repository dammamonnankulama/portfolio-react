import React from 'react'
import { skills } from '../../data/constants'
import {Container,Wrapper,Title,Desc,Skill,SkillsContainer,SkillTitle,SkillList,SkillItem,SkillImage} from './SkillsStyles'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Over the past two years, I have been honing my expertise in various skills, continuously learning and growing to enhance my proficiency
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills