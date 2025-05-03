import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: 'rgba(255, 255, 255, .5)',    border: 'solid black'
    }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo?.id} onClick={() => openRepoinNewTab(repo?.nav)}>
          <div className="repo-name-div">
          <img
              className="imagss"
              width={50}
              height={50}
							src={require("../../assets/images/icons/" + repo?.img)}
						></img>
            <p className="repo-name" style={{ color: 'black', fontFamily: 'Rubik-Bold' }}>
              {repo?.name}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
