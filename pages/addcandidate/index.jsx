import { React } from "react";
import Link from "next/link";
import { Button, theme, Breadcrumb, ConfigProvider } from "antd";
import {
  LeftOutlined,
  CloudUploadOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import styles from "../addvacancy/Addvacancy.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";

const AddVacancy = () => {
  const { token } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={styles.AddJob}>
        <div className="wideContainer">
          <div
            className={[
              styles.AddJobBreadCrumbWrapper,
              "breadCrumbWrapper",
            ].join(" ")}
          >
            <div
              className={["breadCrumbText", styles.AddJobBreadCrumbText].join(
                " "
              )}
            >
              <div className="breadCrumbTitle">
                <Breadcrumb
                  separator=">"
                  className={[
                    BreadcrumbStyles.Breadcrumb,
                    styles.Breadcrumb,
                  ].join(" ")}
                >
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Vacancy</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/analytics">
                      <a>Front End Developer - React JS - 3 to 4 years</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Candidates List</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Add Candidates</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/analytics">
                    <a>
                      <LeftOutlined
                        className={[styles.backBtn, "backBtn"].join(" ")}
                      />
                    </a>
                  </Link>
                  Add Candidates
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.JobWrapper}>
            <div className={styles.JobContent}>
              <div className={styles.JobSteps}>
                <div className={styles.JobDescriptionWrapper}>
                  <>
                    <h2>You can choose candidates by using these 2 options</h2>
                    <div className={styles.JobDescription}>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: "#fff",
                          },
                        }}
                      >
                        <div className={styles.ImportCandiates}>
                          <div className={styles.ImportOptionsWrapper}>
                            <div className={styles.ImportOption}>
                              <div className={styles.ImportOptionText}>
                                <div className={styles.OptionIcon}>
                                  <CloudUploadOutlined
                                    className={styles.uploadIcon}
                                  />
                                </div>
                                <div className={styles.OptionHeading}>
                                  <h3>Import Candidate</h3>
                                  <p>
                                    Upload the resume from your computer.
                                    Supported formats PDF, DOC
                                  </p>
                                </div>
                              </div>
                              <div className={styles.ImportOptionBtn}>
                                <Link href="/importcandidates">
                                  <a className={styles.ImportOptionLink}>
                                    View Candidates(7)
                                  </a>
                                </Link>
                                <Link href="/importcandidates">
                                  <a>
                                    <Button className="greenBtnOutline">
                                      Upload Candidates
                                    </Button>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className={styles.ImportOption}>
                              <div className={styles.ImportOptionText}>
                                <div className={styles.OptionIcon}>
                                  <UsergroupAddOutlined
                                    className={styles.uploadIcon}
                                  />
                                </div>
                                <div className={styles.OptionHeading}>
                                  <h3>Map from candidate module</h3>
                                  <p>
                                    Choose the candidates from unmapped
                                    candidates module
                                  </p>
                                </div>
                              </div>
                              <div className={styles.ImportOptionBtn}>
                                <Link href="/mapcandidates">
                                  <a className={styles.ImportOptionLink}>
                                    View Candidates(35)
                                  </a>
                                </Link>
                                <Link href="/mapcandidates">
                                  <Button className="greenBtnOutline">
                                    Map Candidates
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ConfigProvider>
                    </div>
                  </>
                </div>

                <div className={styles.JobNextBtn}>
                  <Link href="/analytics">
                    <a>
                      <Button className="greenBtnOutline" onClick={() => {}}>
                        Cancel
                      </Button>
                    </a>
                  </Link>
                  <Link href="/importcandidates">
                    <a>
                      <Button className="greenBtn" onClick={() => {}}>
                        Upload Candidates
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default AddVacancy;
