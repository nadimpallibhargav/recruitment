import { React, useEffect, useState } from "react";
import Link from "next/link";
import { Breadcrumb, Button, ConfigProvider, Form } from "antd";
import {
  LeftOutlined,
  PhoneOutlined,
  MailOutlined,
  CloseOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  CaretRightOutlined,
  StarOutlined,
} from "@ant-design/icons";
import InputComponent from "../../components/input/InputComponent";
import UploadProgress from "../../components/uploadprogress/UploadProgress";

import AddVacancyStyles from "../addvacancy/Addvacancy.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";
import MapStyles from "../mapcandidates/Mapcandidates.module.scss";
import styles from "./Importcandidates.module.scss";

const cardsArr = ["one", "two", "three", "four", "five"];

const ImportCandidates = () => {
  const [cards, setCards] = useState(cardsArr);
  const [cardOpen, setCardOpen] = useState("");
  const [iscardOpen, setIscardOpen] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [selectedId, setSelectedId] = useState("one");

  const onDeleteCard = (card) => {
    const result = cards.filter((item) => item !== card);
    setCards(result);
  };

  useEffect(() => {
    setIscardOpen(true);
  }, [cardOpen]);

  useEffect(() => {
    setTimeout(() => {
      setShowProgressBar(false);
    }, 1000);
  }, [showProgressBar]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section
        className={[AddVacancyStyles.AddJob, MapStyles.MapCandidates].join(" ")}
      >
        <div className={["container", MapStyles.container].join(" ")}>
          <div
            className={[
              AddVacancyStyles.AddJobBreadCrumbWrapper,
              MapStyles.BreadCrumbWrapper,
            ].join(" ")}
          >
            <div
              className={[
                "breadCrumbText",
                AddVacancyStyles.AddJobBreadCrumbText,
              ].join(" ")}
            >
              <Breadcrumb
                separator=">"
                className={[
                  BreadcrumbStyles.Breadcrumb,
                  AddVacancyStyles.Breadcrumb,
                ].join(" ")}
              >
                <Breadcrumb.Item>
                  <Link href="/vacancy">
                    <a>Vacancy</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href="/addvacancy">
                    <a>Add Vacancy</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Import Candidates</Breadcrumb.Item>
              </Breadcrumb>
              <div className={AddVacancyStyles.breadCrumbTitle}>
                <h1>
                  <Link href="/vacancy">
                    <a>
                      <LeftOutlined
                        className={[AddVacancyStyles.backBtn, "backBtn"].join(
                          " "
                        )}
                      />
                    </a>
                  </Link>
                  Import Candidates (7){" "}
                </h1>
              </div>
            </div>
          </div>
          <div
            className={[AddVacancyStyles.JobContent, MapStyles.MapContent].join(
              " "
            )}
          >
            {showProgressBar ? (
              <div className={MapStyles.Loader}>
                <UploadProgress info="Do not press back while Uploading pdf" />
              </div>
            ) : (
              <>
                <div className={MapStyles.CandidatesContent}>
                  <div
                    className={[
                      MapStyles.CandidatesWrapper,
                      styles.CandidatesWrapper,
                    ].join(" ")}
                  >
                    <div
                      className={[
                        MapStyles.CandidatesList,
                        styles.CandidatesList,
                      ].join(" ")}
                    >
                      {cards.map((value) => {
                        return (
                          <div
                            key={value}
                            className={MapStyles.SingleCandidate}
                          >
                            {cardOpen !== value && iscardOpen ? (
                              <>
                                <div
                                  onClick={() => {
                                    setSelectedId(value);
                                  }}
                                  className={[
                                    MapStyles.CandidateActive,
                                    selectedId === value
                                      ? MapStyles.CardActive
                                      : "",
                                  ].join(" ")}
                                >
                                  <CaretRightOutlined
                                    className={MapStyles.FormArrow}
                                  />
                                  <div className={MapStyles.CandidateName}>
                                    <span className={MapStyles.Name}>
                                      Bessie Cooper
                                    </span>

                                    <div className={MapStyles.modify}>
                                      <DeleteOutlined
                                        className={[
                                          MapStyles.EditIcon,
                                          MapStyles.DeleteIcon,
                                        ].join(" ")}
                                        onClick={() => onDeleteCard(value)}
                                      />
                                      <EditOutlined
                                        className={MapStyles.EditIcon}
                                        onClick={() => {
                                          setCardOpen(value);
                                          setIscardOpen(!iscardOpen);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className={MapStyles.Contact}>
                                    <ul>
                                      <li>
                                        <PhoneOutlined
                                          className={[
                                            MapStyles.ContactIcon,
                                            MapStyles.PhoneIcon,
                                          ].join(" ")}
                                        />
                                        9876543245
                                      </li>
                                      <li>
                                        <MailOutlined
                                          className={MapStyles.ContactIcon}
                                        />
                                        coop@mail.com
                                      </li>
                                      <li>
                                        <StarOutlined
                                          className={MapStyles.ContactIcon}
                                        />
                                        3 years
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className={MapStyles.mobileResume}>
                                  {selectedId === value ? (
                                    <div className={MapStyles.CandidatesResume}>
                                      {/* <iframe src="https://docs.google.com/gview?url=https://sketck-one-hr.s3.amazonaws.com/sketch-one/1675422011245_Naukri_HarshavardhanVemula%5B2y_0m%5D.docx&amp;embedded=true"></iframe> */}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </>
                            ) : cardOpen === value && iscardOpen ? (
                              <>
                                <div className={MapStyles.CandidateForm}>
                                  <CaretRightOutlined
                                    className={[
                                      MapStyles.FormArrow,
                                      MapStyles.FormArrowFirst,
                                    ].join(" ")}
                                  />
                                  <Form
                                    onFinish={() => {}}
                                    onFinishFailed={() => {}}
                                    className={[
                                      FormStyles.form,
                                      MapStyles.form,
                                    ].join(" ")}
                                  >
                                    <div
                                      className={[
                                        FormStyles.inputGroup,
                                        MapStyles.inputGroup,
                                      ].join(" ")}
                                    >
                                      <div
                                        className={[
                                          FormStyles.inputWrapper,
                                          MapStyles.inputWrapper,
                                        ].join(" ")}
                                      >
                                        <label>Name</label>
                                        <InputComponent
                                          className={MapStyles.input}
                                          type="text"
                                          placeholder="Enter name"
                                        />
                                      </div>
                                      <div
                                        className={[
                                          FormStyles.inputWrapper,
                                          MapStyles.inputWrapper,
                                        ].join(" ")}
                                      >
                                        <label>Experience (years)</label>
                                        <InputComponent
                                          className={MapStyles.input}
                                          type="text"
                                          placeholder="Enter experience"
                                        />
                                      </div>
                                      <div
                                        className={[
                                          FormStyles.inputWrapper,
                                          MapStyles.inputWrapper,
                                        ].join(" ")}
                                      >
                                        <label>Phone Number</label>
                                        <InputComponent
                                          className={MapStyles.input}
                                          type="text"
                                          placeholder="Enter number"
                                        />
                                      </div>
                                      <div
                                        className={[
                                          FormStyles.inputWrapper,
                                          MapStyles.inputWrapper,
                                        ].join(" ")}
                                      >
                                        <label>Email</label>
                                        <InputComponent
                                          className={MapStyles.input}
                                          type="text"
                                          placeholder="Enter email"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={[
                                        MapStyles.formButtons,
                                        styles.formButtons,
                                      ].join(" ")}
                                    >
                                      <CloseOutlined
                                        className={[
                                          MapStyles.Icons,
                                          MapStyles.CloseIcon,
                                        ].join(" ")}
                                        onClick={() => {
                                          setCardOpen(!cardOpen);
                                        }}
                                      />
                                      <CheckOutlined
                                        className={[
                                          MapStyles.Icons,
                                          MapStyles.CheckIcon,
                                        ].join(" ")}
                                        onClick={() => {
                                          setCardOpen(!cardOpen);
                                        }}
                                      />
                                    </div>
                                  </Form>
                                </div>
                                <div
                                  className={[
                                    MapStyles.CandidatesResume,
                                    MapStyles.mobile,
                                  ].join(" ")}
                                >
                                  {/* <iframe src="https://docs.google.com/gview?url=https://sketck-one-hr.s3.amazonaws.com/sketch-one/1675422011245_Naukri_HarshavardhanVemula%5B2y_0m%5D.docx&amp;embedded=true"></iframe> */}
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className={[
                        MapStyles.CandidatesResume,
                        styles.CandidatesResume,
                        MapStyles.desktop,
                      ].join(" ")}
                    >
                      {/* <iframe src="https://docs.google.com/gview?url=https://sketck-one-hr.s3.amazonaws.com/sketch-one/1675422011245_Naukri_HarshavardhanVemula%5B2y_0m%5D.docx&amp;embedded=true"></iframe> */}
                    </div>
                  </div>
                </div>
                <div className={MapStyles.CandidatesBtn}>
                  <Link href="/addvacancy">
                    <a>
                      <Button className="greenBtnOutline">Cancel</Button>
                    </a>
                  </Link>
                  <Link href="/addvacancy">
                    <a>
                      <Button className="greenBtn">Save</Button>
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default ImportCandidates;
