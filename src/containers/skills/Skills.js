import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";



export default function Skills(props) {
  const theme = props.theme;
  const repo = [{
    id: '145',
    name: 'משפחה',
    description: 'תיאור לדוגמה',
    url: '',
    img: "family.png"

  },
  {
    id: '1',
    name: 'מקרקעין',
    description: 'תיאור לדוגמה',
    url: '',
    img: "home.png"
    
  },{
    id: '2',
    name: 'יפוי כוח מתמשך',
    description: 'תיאור לדוגמה',
    url: '',
    img: "document.png"
    
  },
  {
    id: '13',
    name: 'ניסוח הסכמים',
    description: 'תיאור לדוגמה',
    url: '',
    img: "handshake.png"
    
  },
  {
    id: '13',
    name: 'ביטוח לאומי',
    description: 'תיאור לדוגמה',
    url: '',
    img: "balance.png"
    
  }
  ,
  {
    id: '13',
    name: 'ניסוח הסכמים',
    description: 'תיאור לדוגמה',
    url: '',
    img: "family.png"
    
  }]
  return (
    <div className="main" id="skills" style={{padding: 20}}>
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text, fontFamily: 'Rubik-Bold' }}>
            תחומי ההתמחות שלנו
          </h1>
        </Fade>
        <div className="repo-cards-div-mains">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} theme={theme} key={v.id} />;
        })}
      </div>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
