import { React, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  Button,
  ConfigProvider,
  Form,
  Tag,
  DatePicker,
  Tooltip,
} from "antd";
import dayjs from "dayjs";
import {
  LeftOutlined,
  PhoneOutlined,
  MailOutlined,
  CloseOutlined,
  CheckOutlined,
  StarOutlined,
  DeleteOutlined,
  CaretRightOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import InputComponent from "../../components/input/InputComponent";
import UploadProgress from "../../components/uploadprogress/UploadProgress";
import SelectCandidate from "../../components/popup/SelectCandidate";
import Tags from "../../components/tags/Tags";

import Sort from "../../assets/images/addvacancy/sort.svg";

import AddVacancyStyles from "../addvacancy/Addvacancy.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";
import styles from "./Mapcandidates.module.scss";

const cardsArr = ["one", "two", "three", "four", "five"];

const MapCandidates = () => {
  const { RangePicker } = DatePicker;
  const dateFormat = "DD MMM YYYY";
  const [cards, setCards] = useState(cardsArr);
  const [cardOpen, setCardOpen] = useState("");
  const [iscardOpen, setIscardOpen] = useState(true);
  const [selectedId, setSelectedId] = useState("one");
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [candidateSelect, setCandidateSelect] = useState(null);

  const handleSort = () => {
    setDateSort(!dateSort);
  };

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

  const closeCandidate = (value, index) => {
    setCandidateSelect(value);
    setTimeout(() => {
      let temp = cards;
      temp.splice(index, 1);
      setCards([...temp]);
    }, 500);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section
        className={[AddVacancyStyles.AddJob, styles.MapCandidates].join(" ")}
      >
        <div className={["container", styles.container].join(" ")}>
          <div
            className={[
              AddVacancyStyles.AddJobBreadCrumbWrapper,
              styles.BreadCrumbWrapper,
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
                    <a>Add vacancy</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Map From Candidate Module</Breadcrumb.Item>
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
                  Map From Candidate Module
                </h1>
              </div>
            </div>
          </div>
          <div
            className={[AddVacancyStyles.JobContent, styles.MapContent].join(
              " "
            )}
          >
            {showProgressBar ? (
              <div className={styles.Loader}>
                <UploadProgress info="Do not press back while fetching candidates data" />
              </div>
            ) : (
              <>
                <div className={styles.CandidatesContent}>
                  <div className={styles.CandidatesTotal}>
                    <div className={styles.Filter}>
                      <span className={styles.text}>
                        Showing candidates from
                      </span>
                      <RangePicker
                        className={styles.DateSelect}
                        defaultValue={[
                          dayjs("10 Jan 2023", dateFormat),
                          dayjs("18 Jan 2023", dateFormat),
                        ]}
                        format={dateFormat}
                      />
                      <Button
                        onClick={() => handleSort()}
                        className={["greenBtnOutline", styles.SortBtn].join(
                          " "
                        )}
                      >
                        Date: {dateSort ? "Asc" : "Desc"}
                        <Image
                          alt="sort"
                          src={Sort}
                          className={styles.SortIcon}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.CandidatesWrapper}>
                    <div className={styles.CandidatesList}>
                      {cards.map((value, index) => {
                        return (
                          <div
                            key={value}
                            className={`${
                              candidateSelect === value
                                ? [styles.SingleCandidate, styles.close].join(
                                    " "
                                  )
                                : styles.SingleCandidate
                            }`}
                          >
                            {cardOpen !== value && iscardOpen ? (
                              <>
                                <div
                                  onClick={() => {
                                    setSelectedId(value);
                                  }}
                                  className={[
                                    styles.CandidateActive,
                                    selectedId === value
                                      ? styles.CardActive
                                      : "",
                                  ].join(" ")}
                                >
                                  <CaretRightOutlined
                                    className={styles.FormArrow}
                                  />
                                  <div className={styles.CandidateName}>
                                    <span className={styles.Name}>
                                      Bessie Cooper
                                    </span>
                                    <Tag className={styles.tag}>React JS</Tag>
                                    <Tag className={styles.tag}>React JS</Tag>
                                    <Tooltip title="AngularJs, Mongo DB">
                                      <Tag
                                        className={[
                                          styles.tag,
                                          styles.addNumber,
                                        ].join(" ")}
                                      >
                                        <PlusOutlined /> 3
                                      </Tag>
                                    </Tooltip>
                                    <div className={styles.modify}>
                                      <DeleteOutlined
                                        className={[
                                          styles.EditIcon,
                                          styles.DeleteIcon,
                                        ].join(" ")}
                                        onClick={() => onDeleteCard(value)}
                                      />
                                      <EditOutlined
                                        className={styles.EditIcon}
                                        onClick={() => {
                                          setCardOpen(value);
                                          setIscardOpen(!iscardOpen);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={[
                                      styles.Contact,
                                      styles.ContactMap,
                                    ].join(" ")}
                                  >
                                    <ul>
                                      <li>
                                        <PhoneOutlined
                                          className={[
                                            styles.ContactIcon,
                                            styles.PhoneIcon,
                                          ].join(" ")}
                                        />
                                        9876543245
                                      </li>
                                      <li>
                                        <MailOutlined
                                          className={styles.ContactIcon}
                                        />
                                        coop@mail.com
                                      </li>
                                      <li>
                                        <StarOutlined
                                          className={styles.ContactIcon}
                                        />
                                        3 years
                                      </li>
                                      <li
                                        className={styles.CandidateSelectLink}
                                        onClick={() => {
                                          closeCandidate(value, index);
                                        }}
                                      >
                                        <a
                                          className={
                                            styles.CandidateSelectAnchor
                                          }
                                        >
                                          <CheckOutlined
                                            className={styles.SelectIcon}
                                          />
                                          <span
                                            className={
                                              styles.CandidateSelectText
                                            }
                                          >
                                            {candidateSelect === value
                                              ? "Selected"
                                              : "Select"}
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className={styles.mobileResume}>
                                  {selectedId === value ? (
                                    <div className={styles.CandidatesResume}>
                                      {/* add iframe here without width & height to fit in wrapper */}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </>
                            ) : cardOpen === value && iscardOpen ? (
                              <div className={styles.CandidateForm}>
                                <CaretRightOutlined
                                  className={styles.FormArrow}
                                />
                                <Form
                                  onFinish={() => {}}
                                  onFinishFailed={() => {}}
                                  className={[
                                    FormStyles.form,
                                    styles.form,
                                  ].join(" ")}
                                >
                                  <div
                                    className={[
                                      FormStyles.inputGroup,
                                      styles.inputGroup,
                                    ].join(" ")}
                                  >
                                    <div
                                      className={[
                                        FormStyles.inputWrapper,
                                        styles.inputWrapper,
                                      ].join(" ")}
                                    >
                                      <label>Name</label>
                                      <InputComponent
                                        className={styles.input}
                                        type="text"
                                        placeholder="Enter name"
                                      />
                                    </div>
                                    <div
                                      className={[
                                        FormStyles.inputWrapper,
                                        styles.inputWrapper,
                                      ].join(" ")}
                                    >
                                      <label>Experience (years)</label>
                                      <InputComponent
                                        className={styles.input}
                                        type="text"
                                        placeholder="Enter experience"
                                      />
                                    </div>
                                    <div
                                      className={[
                                        FormStyles.inputWrapper,
                                        styles.inputWrapper,
                                      ].join(" ")}
                                    >
                                      <label>Phone Number</label>
                                      <InputComponent
                                        className={styles.input}
                                        type="text"
                                        placeholder="Enter number"
                                      />
                                    </div>
                                    <div
                                      className={[
                                        FormStyles.inputWrapper,
                                        styles.inputWrapper,
                                      ].join(" ")}
                                    >
                                      <label>Email</label>
                                      <InputComponent
                                        className={styles.input}
                                        type="text"
                                        placeholder="Enter email"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.formTags}>
                                    <Tags />
                                  </div>
                                  <div className={styles.formButtons}>
                                    <CloseOutlined
                                      className={[
                                        styles.Icons,
                                        styles.CloseIcon,
                                      ].join(" ")}
                                      onClick={() => {
                                        setCardOpen(!cardOpen);
                                      }}
                                    />
                                    <CheckOutlined
                                      className={[
                                        styles.Icons,
                                        styles.CheckIcon,
                                      ].join(" ")}
                                      onClick={() => {
                                        setCardOpen(!cardOpen);
                                      }}
                                    />
                                  </div>
                                </Form>
                                <div
                                  className={[
                                    styles.CandidatesResume,
                                    styles.mobile,
                                  ].join(" ")}
                                >
                                  {/* add iframe here without width & height to fit in wrapper */}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className={[styles.CandidatesResume, styles.desktop].join(
                        " "
                      )}
                    >
                      {/* add iframe here without width & height to fit in wrapper */}
                    </div>
                  </div>
                </div>
                <div className={styles.CandidatesBtn}>
                  <Link href="/addvacancy">
                    <a>
                      <Button className="greenBtnOutline">Cancel</Button>
                    </a>
                  </Link>

                  <SelectCandidate />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default MapCandidates;
