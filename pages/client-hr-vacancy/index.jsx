import React, { useState } from "react";
import Link from "next/link";
import { Button, Select } from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import VacancyCard from "../../components/vacancyCard";

import ButtonStyles from "../../components/buttons/Buttons.module.scss";
import styles from "./Vacancy.module.scss";

const Vacancy = () => {
  const [vacancyFilter, setVacancyFilter] = useState("open");
  const [video, setVideo] = useState(false);

  const handleChange = (value) => {
    setVacancyFilter(value.value);
  };

  return (
    <section className={styles.vacancy}>
      <div className="container">
        {video ? (
          <>
            <div className={styles.openVacancy}>
              <Select
                onChange={handleChange}
                className={[
                  ButtonStyles.vacancyFilter,
                  styles.vacancyFilter,
                ].join(" ")}
                labelInValue
                defaultValue={{
                  value: "open",
                  label: "Open Vacancy (5)",
                }}
                options={[
                  {
                    className: "vacancyFilterItem",
                    value: "open",
                    label: "Open Vacancy (5)",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "close",
                    label: "Closed Vacancy (3)",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "draft",
                    label: "Draft Vacancy (3)",
                  },
                ]}
              />
              <Link href="/addvacancy">
                <Button className={["greenBtn", styles.AddBtnDesk].join(" ")}>
                  <PlusOutlined />
                  Add Vacancy
                </Button>
              </Link>
            </div>
            <div className={styles.vacancyWrapper}>
              <VacancyCard name={vacancyFilter} />
              <VacancyCard name={vacancyFilter} />
              <VacancyCard name={vacancyFilter} />
              <VacancyCard name={vacancyFilter} />
              <VacancyCard name={vacancyFilter} />
            </div>
            <div className={styles.AddBtnWrapper}>
              <Link href="/addvacancy">
                <Button className={["greenBtn", styles.AddBtnMobile].join(" ")}>
                  <PlusOutlined />
                  Add Vacancy
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.video}>
            <div className={styles.videoHeading}>
              <h1>No vacancy found! </h1>
              <h2>Learn how to add vacancy</h2>
            </div>
            <div className={styles.videoWrapper}>
              {/* add iframe here without width & height to fit in wrapper */}
            </div>
            <div className={styles.videoSteps}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepText}> Add job details </span>
              <RightOutlined className={styles.righticon} />
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepText}>Add preferences & Skills</span>
              <RightOutlined className={styles.righticon} />
              <span className={styles.stepNumber}>3</span>
              <span className={styles.stepText}> Add candidates </span>
            </div>
            <div className={styles.AddBtn}>
              <Button
                className="greenBtn"
                onClick={() => {
                  setVideo(!video);
                }}
              >
                <PlusOutlined />
                Add Vacancy
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Vacancy;
