import React from "react";
import Link from "next/link";
import { Button, Dropdown, Tooltip, ConfigProvider } from "antd";
import {
  MoreOutlined,
  LeftOutlined,
  UserOutlined,
  EditOutlined,
  PlusOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import DateSelect from "../../components/dateselect/DateSelect";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PieDonut from "../../components/graphs/PieDonut";
import DemoArea from "../../components/graphs/LineArea";

import CandidatedetailsStyles from "../candidatedetails/Candidatedetails.module.scss";
import styles from "./Analytics.module.scss";
import CloseVacancy from "../../components/popup/CloseVacancy";

const items = [
  {
    key: "1",
    label: (
      <Link href="/addvacancy">
        <a>Update Vacancy</a>
      </Link>
    ),
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: <CloseVacancy>Close Vacancy</CloseVacancy>,
    icon: <CloseOutlined />,
  },
];

const Analytics = () => {
  return (
    <section className={styles.AnalyticsSection}>
      <div className="wideContainer">
        <div className={[styles.Header, "breadCrumbWrapper"].join(" ")}>
          <div className="breadCrumbText">
            <div className="breadCrumbTitle">
              <BreadCrumb />
              <h1>
                <Link href="/vacancy">
                  <a>
                    <LeftOutlined className="backBtn" />
                  </a>
                </Link>
                <div>
                  Front End Developer - React JS - HTML - CSS - JavaScript -
                  Angular JS - Node JS
                </div>
                - 3 to 4 years
              </h1>
              <h2>Posted on 14 Dec 2022</h2>
            </div>
          </div>
          <div
            className={[styles.HeaderButtons, styles.HeaderButtonsDesk].join(
              " "
            )}
          >
            <Link href="/hrround">
              <a>
                <Button
                  className={[styles.greenBtn, "greenBtnOutline"].join(" ")}
                >
                  <UserOutlined />
                  View candidate
                </Button>
              </a>
            </Link>
            <Link href="/addcandidate">
              <a>
                <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                  <PlusOutlined />
                  Add candidates
                </Button>
              </a>
            </Link>
            <Dropdown
              className={["greenBtnOutline", styles.MoreBtn, "icon40"].join(
                " "
              )}
              trigger={["click"]}
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <MoreOutlined className={styles.MoreIcon} />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={styles.DashboardWrapper}>
          <div className={styles.DashboardSide}>
            <div className={styles.SideText}>
              <h5>Vacancy Count</h5>
              <h4>3</h4>
            </div>
            <div className={styles.SideText}>
              <h5>POC</h5>
              <h4>Stephen</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Interview Rounds</h5>
              <div className={styles.LabelWrapper}>
                <span className={styles.Label}>HR &#38; One Tech</span>
              </div>
            </div>
            <div className={styles.SideText}>
              <h5>Work Mode</h5>
              <h4>Hybrid</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Location</h5>
              <h4>Bangalore</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Days working in office</h5>
              <h4>3 days</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Salary Range</h5>
              <h4>3L - 5L</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Experience</h5>
              <h4>3 to 4 years</h4>
            </div>
            <div className={styles.SideText}>
              <h5>Suggest candidates apart from mentioned experience</h5>
              <div className={styles.LabelWrapper}>
                <span className={styles.Label}>Yes</span>
              </div>
            </div>
            <div className={styles.SideText}>
              <h5>HR Round Skill Test</h5>
              <div className={styles.LabelWrapper}>
                <span className={styles.Label}>Interpersonal Skill</span>
                <span className={styles.Label}>Communication Skill</span>
              </div>
            </div>
            <div className={styles.SideText}>
              <h5>Technical Round 1 Skill Test</h5>
              <div className={styles.LabelWrapper}>
                <span className={styles.Label}>Problem - Solving</span>
              </div>
            </div>
            <div className={styles.SideText}>
              <h5>Technical Round 1 Skill Test</h5>
              <div className={styles.LabelWrapper}>
                <span className={styles.Label}>Interpersonal Skill</span>
              </div>
            </div>
          </div>
          <div className={styles.DashboardContent}>
            <div className={styles.TotalCandidates}>
              <div className={styles.card}>
                <h2>Total Candidates</h2>
                <h3>32</h3>
              </div>
              <div className={styles.card}>
                <h2>Active Candidates</h2>
                <h3>3</h3>
              </div>
              <div className={styles.card}>
                <h2>Selected Candidates</h2>
                <h3>6</h3>
              </div>
              <div className={styles.card}>
                <h2>Rejected Candidates</h2>
                <h3>6</h3>
              </div>
            </div>
            <div className={styles.GraphPieWrapper}>
              <div className={[styles.Graphs, styles.GraphPieCard].join(" ")}>
                <div className={styles.GraphHeading}>
                  <h2>Analytics</h2>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#09B48B",
                      },
                    }}
                  >
                    <DateSelect />
                  </ConfigProvider>
                </div>
                <div className={styles.AnalyticsGraphWrapper}>
                  <DemoArea />
                </div>
              </div>
              <div
                className={[
                  [styles.PiegraphCard, styles.GraphPieCard].join(" "),
                  styles.GraphPieCard,
                ].join(" ")}
              >
                <h2>HR Round</h2>
                <div className={styles.PiegraphWrapper}>
                  <PieDonut />
                </div>
              </div>
              <div
                className={[styles.PiegraphCard, styles.GraphPieCard].join(" ")}
              >
                <h2>Technical Round 1</h2>
                <div className={styles.PiegraphWrapper}>
                  <PieDonut />
                </div>
              </div>
              <div
                className={[styles.PiegraphCard, styles.GraphPieCard].join(" ")}
              >
                <h2>Technical Round 2</h2>
                <div className={styles.PiegraphWrapper}>
                  <PieDonut />
                </div>
              </div>
            </div>
            <div className={styles.DetailsWrapper}>
              <div className={styles.Details}>
                <div
                  className={[
                    CandidatedetailsStyles.HrDetailsHeadingIcon,
                    styles.HrDetailsHeadingIcon,
                  ].join(" ")}
                >
                  <h2>Job Description</h2>
                  <div
                    className={CandidatedetailsStyles.HrDetailsProfessionalEdit}
                  >
                    <Tooltip title="Download">
                      <DownloadOutlined
                        className={[
                          CandidatedetailsStyles.HeadingIcon,
                          "icon40",
                        ].join(" ")}
                      />
                    </Tooltip>
                  </div>
                </div>
                <p>
                  We are looking for a great JavaScript developer who is
                  proficient with React.js. Your primary focus will be on
                  developing user interface components and implementing them
                  following well-known React.js workflows (such as Flux or
                  Redux). You will ensure that these components and the overall
                  application are robust and easy to maintain. You will
                  coordinate with the rest of the team working on different
                  layers of the infrastructure. Therefore, a commitment to
                  collaborative problem solving, sophisticated design, and
                  quality product is important.
                </p>
                <h2>Responsibilities</h2>
                <ul>
                  <li>Developing new user-facing features using React.js</li>
                  <li>
                    Building reusable components and front-end libraries for
                    future use
                  </li>
                  <li>
                    Translating designs and wireframes into high quality code
                  </li>
                  <li>
                    Optimizing components for maximum performance across a vast
                    array of web-capable devices and browsers
                  </li>
                </ul>
                <h2>Skills</h2>
                <ul>
                  <li>
                    Strong proficiency in JavaScript, including DOM manipulation
                    and the JavaScript object model
                  </li>
                  <li>
                    Thorough understanding of React.js and its core principles
                  </li>
                  <li>
                    Experience with popular React.js workflows (such as Flux or
                    Redux)
                  </li>
                  <li>Familiarity with newer specifications of EcmaScript</li>

                  <li>
                    Experience with data structure libraries (e.g.,
                    Immutable.js)
                  </li>
                  <li>Knowledge of isomorphic React is a plus</li>
                  <li>Familiarity with RESTful APIs</li>
                  <li>
                    Knowledge of modern authorization mechanisms, such as JSON
                    Web Token
                  </li>
                  <li>
                    Familiarity with modern front-end build pipelines and tools
                  </li>
                  <li>
                    Experience with common front-end development tools such as
                    Babel, Webpack, NPM, etc.
                  </li>
                  <li>
                    Ability to understand business requirements and translate
                    them into technical requirements
                  </li>
                  <li>A knack for benchmarking and optimization</li>
                  <li>
                    Familiarity with code versioning tools &#123;&#123; such as
                    Git, SVN, and Mercurial &#125;&#125;
                  </li>
                  <li>
                    &#123;&#123; Make sure to mention any other framework,
                    libraries, or other technology relevant to your project
                    &#125;&#125;
                  </li>
                  <li>
                    &#123;&#123; List education level or certification you
                    require &#125;&#125;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={[styles.HeaderButtons, styles.HeaderButtonsMobile].join(
            " "
          )}
        >
          <Link href="/hrround">
            <a>
              <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                <UserOutlined />
                View candidate
              </Button>
            </a>
          </Link>
          <Link href="/addcandidate">
            <a>
              <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                <PlusOutlined />
                Add candidates
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
