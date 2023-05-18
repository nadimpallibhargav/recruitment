import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "antd";

import RightArrow from "../../assets/images/rightArrowGreen.svg";

import styles from "./Vacancycard.module.scss";

const VacancyCard = ({ name }) => {
  return (
    <>
      <div className={styles.job}>
        <div className={styles.jobRole}>
          <div className={styles.jobRoleName}>
            <h3>Front End Developer </h3>
          </div>
          {name == "open" ? (
            <div className={styles.jobTotalOpen}>
              <span>8 Open</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <h4>
          <span className={styles.skills}>
            Angular / Javascript / HTML / CSS
          </span>
          <span> - </span>
          <span> 7 to 9 years</span>
        </h4>
        {name == "open" || name == "close" ? (
          <div className={styles.jobCandidates}>
            <div className={styles.jobCandidatesDetails}>
              <h5>Total Candidates</h5>
              <span>4</span>
            </div>
            <div className={styles.jobCandidatesDetails}>
              <h5>{name == "open" ? "Active" : "Selected"}</h5>
              <span>5</span>
            </div>
            <div className={styles.jobCandidatesDetails}>
              <h5>{name == "open" ? "Selected" : "Rejected"}</h5>
              <span>5</span>
            </div>
          </div>
        ) : (
          <div
            className={[styles.jobCandidates, styles.jobCandidatesDraft].join(
              " "
            )}
          >
            <div className={styles.jobCandidatesDetails}>
              <h5>Total Candidates</h5>
              <span>5</span>
            </div>
          </div>
        )}
        <div className={styles.jobRounds}>
          <span>HR</span>
          <span>Two Tech</span>
        </div>
        <div className={styles.jobDate}>
          {name == "open" || name == "close" ? (
            <div className={styles.jobTime}>
              <span>Posted on</span>
              <h6>28 Dec 22</h6>
            </div>
          ) : (
            ""
          )}
          <div className={styles.jobInterviewer}>
            <span>POC</span>
            <div className={styles.jobPocProfiles}>
              <Tooltip title="Jerome Bell">
                <label>A</label>
              </Tooltip>
              <Tooltip title="Jerome Bell">
                <label>S</label>
              </Tooltip>
              <Tooltip title="Jerome Bell">
                <label>J</label>
              </Tooltip>
            </div>
          </div>
          <div className={styles.jobLink}>
            {name == "open" || name == "close" ? (
              <Link href="/analytics">
                <a>
                  View Vacancy
                  <Image alt="arrow" src={RightArrow} />
                </a>
              </Link>
            ) : (
              <Link href="/analytics">
                <a>
                  Edit Vacancy
                  <Image alt="arrow" src={RightArrow} />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VacancyCard;
