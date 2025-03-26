import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo?.id} onClick={() => openRepoinNewTab(repo?.url)}>
          <div className="repo-name-div">
          <img
              className="imagss"
              width={50}
              height={50}
							src={require("../../assets/images/icons/" + repo?.img)}
						></img>
            <p className="repo-name" style={{ color: 'white', fontFamily: 'Rubik-Bold' }}>
              {repo?.name}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
