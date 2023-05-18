import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import {
  Breadcrumb,
  Tabs,
  DatePicker,
  Progress,
  Button,
  Dropdown,
  Timeline,
  ConfigProvider,
  Input,
  Menu,
  Tooltip,
} from "antd";
import {
  MoreOutlined,
  LeftOutlined,
  EditOutlined,
  CloseOutlined,
  PhoneOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  DownloadOutlined,
  CheckOutlined,
  MailOutlined,
  StarOutlined,
  DeleteOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Tables from "../../components/tables/Tables";
import EditCandidateDetails from "../../components/popup/EditCandidateDetails";
import CloseCandidateRound from "../../components/popup/CloseCandidateRound";
import GiveFeedback from "../../components/popup/GiveFeedback";
import Schedulepopup from "../../components/popup/ScheduleInterview";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import MapCandidateModal from "../../components/popup/MapCandidate";
import NoteTime from "../../components/candidateDetailComponent/NoteTime";

import AnalyticsStyles from "../analytics/Analytics.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import styles from "./Candidatedetails.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import AudioPlayerStyles from "../../components/audioPlayer/AudioPlayer.module.scss";
import VideoCall from "../../components/popup/VideoCall";

const { TextArea } = Input;

const dateFormat = "DD MMM YYYY | HH:mm A";

export const EditNoteDropDownItems = {
  items: [
    {
      label: "Edit",
      key: "1",
      icon: <EditOutlined />,
    },
    {
      label: "Delete",
      key: "2",
      icon: <CloseOutlined />,
    },
  ],
  selectable: true,
};

const newitems = (
  <Menu className="hrRoundEditDropdown">
    <Menu.Item>
      <EditOutlined /> Edit
    </Menu.Item>
    <Menu.Item>
      <DeleteOutlined /> Delete
    </Menu.Item>
  </Menu>
);

// edit candiate dropdown
const items = [
  {
    key: "1",
    label: <EditCandidateDetails clickText="Edit Candidate" />,
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: "Remove Candidate",
    icon: <CloseOutlined />,
  },
];

// Hr Round Details table start
const HrRoundDetailsColumns = [
  {
    title: "Rounds",
    dataIndex: "rounds",
    key: "rounds",
  },
  {
    title: "Scheduled Date & Time",
    dataIndex: "scheduled",
    key: "scheduled",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    align: "center",
  },
  {
    title: "Audio/Video",
    dataIndex: "audiovideo",
    className: "centerColumn",
    key: "audiovideo",
    align: "center",
  },
  {
    title: "",
    dataIndex: "feedback",
    key: "feedback",
    align: "center",
  },
];

const HrRoundDetails = () => {
  const [editProfessional, setEditProfessional] = useState(false);

  const [isInterviewed, setIsInterviewed] = useState(true);

  const [notesData, setNotesData] = useState(true);

  const [historyData, setHistoryData] = useState(true);

  const [audioArray, setAudioArray] = useState([false, false, false]);
  const [selectedDate, setSelectedDate] = useState("");

  const editProfessionalHandle = () => {
    setEditProfessional(!editProfessional);
  };

  const handleAudio = (e, index) => {
    if (index === 0) {
      setAudioArray([e, false, false]);
    } else if (index === 1) {
      setAudioArray([false, e, false]);
    } else if (index === 2) {
      setAudioArray([false, false, e]);
    }
  };

  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
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
        className={[
          AnalyticsStyles.AnalyticsSection,
          HrroundStyles.HrRoundSection,
          styles.HrRoundDetailsSection,
          "HrRoundDetailsSection",
        ].join(" ")}
      >
        <div className="container">
          <div
            className={[
              AnalyticsStyles.Header,
              styles.BreadCrumbWrapper,
              "breadCrumbWrapper",
            ].join(" ")}
          >
            <div className="breadCrumbText">
              <div className="breadCrumbTitle">
                <Breadcrumb
                  separator=">"
                  className={BreadcrumbStyles.Breadcrumb}
                >
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Open Jobs </a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Front End Developer - React JS - 3 to 4 years</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Candidates List</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Bessie Copper</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/vacancy">
                    <a>
                      <LeftOutlined className="backBtn" />
                    </a>
                  </Link>
                  Bessie Cooper
                </h1>
                <h2 className={styles.BreadcrumbContactInfo}>
                  <span className={styles.BreadcrumbIconWrapper}>
                    <PhoneOutlined
                      className={[styles.BreadcrumbIcon, "phoneIcon"].join(" ")}
                    />
                    9876543245
                  </span>
                  <span className={styles.BreadcrumbIconSeperator}>-</span>
                  <span className={styles.BreadcrumbIconWrapper}>
                    <MailOutlined className={styles.BreadcrumbIcon} />
                    bessie@mail.com
                  </span>
                  <span className={styles.BreadcrumbIconSeperator}>-</span>
                  <span className={styles.BreadcrumbIconWrapper}>
                    <StarOutlined className={styles.BreadcrumbIcon} />2 years
                  </span>
                </h2>
              </div>
            </div>
            <div
              className={[
                AnalyticsStyles.HeaderButtons,
                AnalyticsStyles.HeaderButtonsDesk,
              ].join(" ")}
            >
              <MapCandidateModal>
                <Button
                  className={[
                    AnalyticsStyles.greenBtn,
                    styles.BreadcrumbMapBtn,
                    "greenBtn",
                  ].join(" ")}
                >
                  Map Candidate
                </Button>
              </MapCandidateModal>
              <Button
                className={[
                  AnalyticsStyles.greenBtn,
                  styles.BreadcrumbCallBtn,
                  "greenBtn",
                ].join(" ")}
              >
                <PhoneOutlined
                  className={[AnalyticsStyles.phoneIcon, "phoneIcon"].join(" ")}
                />
                Call
              </Button>
              <Dropdown
                className={[styles.HeaderMoreBtn, "icon40"].join(" ")}
                trigger={["click"]}
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MoreOutlined className={AnalyticsStyles.MoreIcon} />
                </a>
              </Dropdown>
            </div>
          </div>
          {isInterviewed ? (
            <div className={styles.TabsWrapper}>
              <Tabs
                className={["HrRoundAllTabs", styles.InterviewTabs].join(" ")}
                items={[
                  {
                    label: (
                      <span
                        className={[
                          HrroundStyles.HrRoundTab,
                          styles.HrRoundTab,
                          styles.InterviewTab,
                        ].join(" ")}
                      >
                        Current Interview
                      </span>
                    ),
                    key: 1,
                    children: (
                      <div className={styles.HrDetailsWrapper}>
                        <div className={styles.HrDetailsContent}>
                          <div className={styles.HrDetailsStatus}>
                            <div className={styles.PreviousInterviewStatus}>
                              <h2>Interview Status</h2>
                              <Button
                                className={[
                                  "greenBtnOutline",
                                  styles.EvaluationBtn,
                                ].join(" ")}
                              >
                                <FileTextOutlined />
                                Evaluation Report
                              </Button>
                            </div>
                            <div
                              className={[
                                styles.PreviousInterviewStatusPercentage,
                                // styles.PreviousInterviewStatusPositive,
                                styles.PreviousInterviewStatusNegative,
                              ].join(" ")}
                            >
                              <p>
                                Overall Rating: <span>35%</span>
                              </p>
                            </div>
                            <div className={styles.tableWrapper}>
                              <Tables
                                columns={HrRoundDetailsColumns}
                                data={[
                                  {
                                    key: "1",
                                    rounds: "HR",
                                    scheduled: (
                                      <>
                                        <Tooltip title="Schedule Date">
                                          {selectedDate === "" ? (
                                            <DatePicker
                                              className={
                                                HrroundStyles.HrRoundDatePicker
                                              }
                                              showTime
                                              bordered={false}
                                              allowClear={false}
                                              format={dateFormat}
                                              onChange={onChange}
                                              popupClassName={
                                                HrroundStyles.HrRoundDatePicker
                                              }
                                            />
                                          ) : (
                                            <>
                                              <DatePicker
                                                className={
                                                  styles.InterviewDatePicker
                                                }
                                                showTime
                                                bordered={false}
                                                defaultValue={dayjs(
                                                  "23 Feb 2023 | 2:20 AM",
                                                  dateFormat
                                                )}
                                                format={dateFormat}
                                                onChange={onChange}
                                              />
                                            </>
                                          )}
                                        </Tooltip>
                                      </>
                                    ),
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <VideoCall play="dark" />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <GiveFeedback clickText="Give feedback" />
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.RejectText,
                                          ].join(" ")}
                                        >
                                          Rejected
                                        </span>
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.SelectText,
                                          ].join(" ")}
                                        >
                                          Selected
                                        </span>
                                      </>
                                    ),
                                  },
                                  {
                                    key: "2",
                                    rounds: "Technical round 1",
                                    scheduled: <>-</>,
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <PlayCircleOutlined
                                          className={[
                                            HrroundStyles.tableCellIcon,
                                            styles.AudioPlayIcon,
                                          ].join(" ")}
                                        />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <Schedulepopup />
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.RejectText,
                                          ].join(" ")}
                                        >
                                          Rejected
                                        </span>
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.SelectText,
                                          ].join(" ")}
                                        >
                                          Selected
                                        </span>
                                      </>
                                    ),
                                  },
                                  {
                                    key: "3",
                                    rounds: "Technical round 2",
                                    scheduled: <>-</>,
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <PlayCircleOutlined
                                          className={[
                                            HrroundStyles.tableCellIcon,
                                            styles.AudioPlayIcon,
                                          ].join(" ")}
                                        />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <span className={styles.EditCellIcons}>
                                          <Tooltip title="Close">
                                            <CloseCandidateRound />
                                          </Tooltip>
                                          <Tooltip title="Edit">
                                            <Schedulepopup scheduleType="reschedule" />
                                          </Tooltip>
                                          <a
                                            className={[
                                              "greenBtn",
                                              "btnSmall",
                                              HrroundStyles.feedbackBtn,
                                            ].join(" ")}
                                          >
                                            Join
                                          </a>
                                        </span>
                                      </>
                                    ),
                                  },
                                ]}
                                className={[
                                  HrroundStyles.HrRoundTable,
                                  styles.InterviewStatusTable,
                                ].join(" ")}
                              />
                            </div>
                          </div>
                          <div
                            className={[
                              styles.HrDetailsProfessional,
                              editProfessional === true
                                ? styles.HrDetailsProfessionalActive
                                : "",
                            ].join(" ")}
                          >
                            <div className={styles.HrDetailsHeadingIcon}>
                              <h2>Professional details</h2>
                              <div className={styles.HrDetailsProfessionalEdit}>
                                <Tooltip title="Edit">
                                  <EditOutlined
                                    onClick={() => {
                                      editProfessionalHandle();
                                    }}
                                    className={[
                                      styles.HeadingIcon,
                                      styles.EditIcon,
                                      "icon40",
                                    ].join(" ")}
                                  />
                                </Tooltip>
                                <div className={styles.ProfessionalEditIcons}>
                                  <div className={styles.EditIconsWrapper}>
                                    <Tooltip title="Close">
                                      <CloseOutlined
                                        onClick={() => {
                                          editProfessionalHandle();
                                        }}
                                        className={[
                                          styles.HeadingIcon,
                                          styles.CloseIcon,
                                          "icon40",
                                        ].join(" ")}
                                      />
                                    </Tooltip>
                                    <Tooltip title="Ok">
                                      <CheckOutlined
                                        onClick={() => {
                                          editProfessionalHandle();
                                        }}
                                        className={[
                                          styles.HeadingIcon,
                                          styles.OkIcon,
                                          "icon40",
                                        ].join(" ")}
                                      />
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={[
                                styles.HrDetailsProfessionalDetails,
                              ].join(" ")}
                            >
                              <div className={styles.ProfessionalContent}>
                                <h3>Current CTC</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>3 LPA</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input defaultValue="3 LPA" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Expected CTC</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>5 LPA</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input defaultValue="5 LPA" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Notice Period</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>30 days</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input defaultValue="30" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Expected Joining Date</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>17 Feb 2023</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <DatePicker
                                    className={styles.JoinDatePicker}
                                    format="DD MMM YYYY"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.HrDetailsResume}>
                            <div className={styles.HrDetailsHeadingIcon}>
                              <h2>Resume</h2>
                              <div className={styles.HrDetailsProfessionalEdit}>
                                <Tooltip title="Download">
                                  <DownloadOutlined
                                    className={[
                                      styles.HeadingIcon,
                                      "icon40",
                                    ].join(" ")}
                                  />
                                </Tooltip>
                              </div>
                            </div>
                            <div className={styles.ResumeWrapper}>
                              {/* add iframe here without width & height to fit in wrapper */}
                            </div>
                          </div>
                        </div>
                        <div className={styles.HrDetailsActivity}>
                          <div className={styles.TabsWrapper}>
                            <Tabs
                              className={[
                                HrroundStyles.HrRoundTabs,
                                "HrRoundAllTabs",
                                styles.HrRoundTabs,
                              ].join(" ")}
                              items={[
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Notes (2)
                                    </span>
                                  ),
                                  key: 1,
                                  children: (
                                    <div className={styles.TabsContent}>
                                      {notesData ? (
                                        <div
                                          className={styles.NotesListWrapper}
                                        >
                                          <NoteTime />
                                          <NoteTime />
                                          <NoteTime />
                                          <NoteTime />
                                        </div>
                                      ) : (
                                        <div className={styles.EmptyNotes}>
                                          <p>No notes</p>
                                        </div>
                                      )}
                                      <div className={styles.NotesInputWrapper}>
                                        <Input
                                          placeholder="Type notes"
                                          className={[
                                            "input38",
                                            styles.NoteInput,
                                          ].join(" ")}
                                        />
                                        <a>
                                          <SendOutlined
                                            className={[
                                              "icon38",
                                              styles.NoteSubmit,
                                            ].join(" ")}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  ),
                                },
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Activity
                                    </span>
                                  ),
                                  key: 2,
                                  children: (
                                    <Timeline
                                      className={styles.TimelineWrapper}
                                    >
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>04 Oct 2022 12:04 pm</h3>
                                          <p>David Made a call | 4:00 mins</p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                    </Timeline>
                                  ),
                                },
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Call History
                                    </span>
                                  ),
                                  key: 3,
                                  children: historyData ? (
                                    <Timeline
                                      className={styles.TimelineWrapper}
                                    >
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Video call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <VideoCall />
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Screening call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <AudioPlayer
                                            handleAudio={(e) =>
                                              handleAudio(e, 1)
                                            }
                                            isPlayerPlaying={audioArray[1]}
                                          />
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Screening call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <AudioPlayer
                                            handleAudio={(e) =>
                                              handleAudio(e, 2)
                                            }
                                            isPlayerPlaying={audioArray[2]}
                                          />
                                        </div>
                                      </Timeline.Item>
                                    </Timeline>
                                  ) : (
                                    <div className={styles.EmptyNotes}>
                                      <p>No recordings</p>
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: (
                      <span
                        className={[
                          HrroundStyles.HrRoundTab,
                          styles.InterviewTab,
                        ].join(" ")}
                      >
                        Interviewed on 15 Nov 2022
                      </span>
                    ),
                    key: 2,
                    children: (
                      <div className={styles.HrDetailsWrapper}>
                        <div className={styles.HrDetailsContent}>
                          <div className={styles.HrDetailsStatus}>
                            <h2>
                              Front End Developer - React JS - 3 to 4 years
                            </h2>
                            <div className={styles.tableWrapper}>
                              <Tables
                                columns={HrRoundDetailsColumns}
                                data={[
                                  {
                                    key: "1",
                                    rounds: "HR",
                                    scheduled: (
                                      <>
                                        <Tooltip title="Schedule Date">
                                          {selectedDate === "" ? (
                                            <DatePicker
                                              className={
                                                HrroundStyles.HrRoundDatePicker
                                              }
                                              showTime
                                              bordered={false}
                                              allowClear={false}
                                              format={dateFormat}
                                              onChange={onChange}
                                            />
                                          ) : (
                                            <>
                                              <DatePicker
                                                className={
                                                  styles.InterviewDatePicker
                                                }
                                                showTime
                                                bordered={false}
                                                defaultValue={dayjs(
                                                  "23 Feb 2023 | 2:20 AM",
                                                  dateFormat
                                                )}
                                                format={dateFormat}
                                                onChange={onChange}
                                              />
                                            </>
                                          )}
                                        </Tooltip>
                                      </>
                                    ),
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <VideoCall play="dark" />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <GiveFeedback clickText="Give feedback" />
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.RejectText,
                                          ].join(" ")}
                                        >
                                          Rejected
                                        </span>
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.SelectText,
                                          ].join(" ")}
                                        >
                                          Selected
                                        </span>
                                      </>
                                    ),
                                  },
                                  {
                                    key: "2",
                                    rounds: "Technical round 1",
                                    scheduled: <>-</>,
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <PlayCircleOutlined
                                          className={[
                                            HrroundStyles.tableCellIcon,
                                            styles.AudioPlayIcon,
                                          ].join(" ")}
                                        />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <Schedulepopup />
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.RejectText,
                                          ].join(" ")}
                                        >
                                          Rejected
                                        </span>
                                        <span
                                          className={[
                                            styles.FeedbackText,
                                            styles.SelectText,
                                          ].join(" ")}
                                        >
                                          Selected
                                        </span>
                                      </>
                                    ),
                                  },
                                  {
                                    key: "3",
                                    rounds: "Technical round 2",
                                    scheduled: <>-</>,
                                    rating: (
                                      <Progress
                                        className={HrroundStyles.ratingIcon}
                                        type="circle"
                                        percent={30}
                                        format={(percent) => `${percent} `}
                                      />
                                    ),
                                    audiovideo: (
                                      <Tooltip title="Play Audio">
                                        <PlayCircleOutlined
                                          className={[
                                            HrroundStyles.tableCellIcon,
                                            styles.AudioPlayIcon,
                                          ].join(" ")}
                                        />
                                      </Tooltip>
                                    ),
                                    feedback: (
                                      <>
                                        <span className={styles.EditCellIcons}>
                                          <Tooltip title="Close">
                                            <CloseCandidateRound />
                                          </Tooltip>
                                          <Tooltip title="Edit">
                                            <Schedulepopup scheduleType="reschedule" />
                                          </Tooltip>
                                          <a
                                            className={[
                                              "greenBtn",
                                              "btnSmall",
                                              HrroundStyles.feedbackBtn,
                                            ].join(" ")}
                                          >
                                            Join
                                          </a>
                                        </span>
                                      </>
                                    ),
                                  },
                                ]}
                                className={[
                                  HrroundStyles.HrRoundTable,
                                  styles.InterviewStatusTable,
                                ].join(" ")}
                              />
                            </div>
                          </div>
                          <div
                            className={[
                              styles.HrDetailsProfessional,
                              editProfessional === true
                                ? styles.HrDetailsProfessionalActive
                                : "",
                            ].join(" ")}
                          >
                            <div className={styles.HrDetailsHeadingIcon}>
                              <h2>Professional details</h2>
                              <div className={styles.HrDetailsProfessionalEdit}>
                                <Tooltip title="Edit">
                                  <EditOutlined
                                    onClick={() => {
                                      editProfessionalHandle();
                                    }}
                                    className={[
                                      styles.HeadingIcon,
                                      styles.EditIcon,
                                      "icon40",
                                    ].join(" ")}
                                  />
                                </Tooltip>
                                <div className={styles.ProfessionalEditIcons}>
                                  <div className={styles.EditIconsWrapper}>
                                    <Tooltip title="Close">
                                      <CloseOutlined
                                        onClick={() => {
                                          editProfessionalHandle();
                                        }}
                                        className={[
                                          styles.HeadingIcon,
                                          styles.CloseIcon,
                                          "icon40",
                                        ].join(" ")}
                                      />
                                    </Tooltip>
                                    <Tooltip title="Ok">
                                      <CheckOutlined
                                        onClick={() => {
                                          editProfessionalHandle();
                                        }}
                                        className={[
                                          styles.HeadingIcon,
                                          styles.OkIcon,
                                          "icon40",
                                        ].join(" ")}
                                      />
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={[
                                styles.HrDetailsProfessionalDetails,
                              ].join(" ")}
                            >
                              <div className={styles.ProfessionalContent}>
                                <h3>Current CTC</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>3 LPA</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input placeholder="3 LPA" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Expected CTC</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>5 LPA</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input placeholder="5 LPA" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Notice Period</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>30 days</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <Input placeholder="30" />
                                </div>
                              </div>
                              <div className={styles.ProfessionalContent}>
                                <h3>Expected Joining Date</h3>
                                <div className={styles.ProfessionalText}>
                                  <p>17 Feb 2023</p>
                                </div>
                                <div className={styles.EditProfessional}>
                                  <DatePicker
                                    className={styles.JoinDatePicker}
                                    format="DD MMM YYYY"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.HrDetailsResume}>
                            <div className={styles.HrDetailsHeadingIcon}>
                              <h2>Resume</h2>
                              <div className={styles.HrDetailsProfessionalEdit}>
                                <Tooltip title="Download">
                                  <DownloadOutlined
                                    className={[
                                      styles.HeadingIcon,
                                      "icon40",
                                    ].join(" ")}
                                  />
                                </Tooltip>
                              </div>
                            </div>
                            <div className={styles.ResumeWrapper}>
                              {/* add iframe here without width & height to fit in wrapper */}
                            </div>
                          </div>
                        </div>
                        <div className={styles.HrDetailsActivity}>
                          <div className={styles.TabsWrapper}>
                            <Tabs
                              className={[
                                HrroundStyles.HrRoundTabs,
                                "HrRoundAllTabs",
                                styles.HrRoundTabs,
                              ].join(" ")}
                              items={[
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Notes (2)
                                    </span>
                                  ),
                                  key: 1,
                                  children: (
                                    <div className={styles.TabsContent}>
                                      {notesData ? (
                                        <div
                                          className={styles.NotesListWrapper}
                                        >
                                          <NoteTime />
                                          <NoteTime />
                                          <NoteTime />
                                          <NoteTime />
                                        </div>
                                      ) : (
                                        <div className={styles.EmptyNotes}>
                                          <p>No notes</p>
                                        </div>
                                      )}
                                      <div className={styles.NotesInputWrapper}>
                                        <Input
                                          placeholder="Type notes"
                                          className={[
                                            "input38",
                                            styles.NoteInput,
                                          ].join(" ")}
                                        />
                                        <a>
                                          <SendOutlined
                                            className={[
                                              "icon38",
                                              styles.NoteSubmit,
                                            ].join(" ")}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  ),
                                },
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Activity
                                    </span>
                                  ),
                                  key: 2,
                                  children: (
                                    <Timeline
                                      className={styles.TimelineWrapper}
                                    >
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>04 Oct 2022 12:04 pm</h3>
                                          <p>David Made a call | 4:00 mins</p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3>06 Oct 2022 11:28 am</h3>
                                          <p>
                                            <span>HR Round</span> conducted by
                                            <span> David</span>
                                          </p>
                                        </div>
                                      </Timeline.Item>
                                    </Timeline>
                                  ),
                                },
                                {
                                  label: (
                                    <span
                                      className={[
                                        HrroundStyles.HrRoundTab,
                                        styles.HrRoundTab,
                                      ].join(" ")}
                                    >
                                      Call History
                                    </span>
                                  ),
                                  key: 3,
                                  children: historyData ? (
                                    <Timeline
                                      className={styles.TimelineWrapper}
                                    >
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Video call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <PlayCircleOutlined
                                            className={
                                              AudioPlayerStyles.PlayIcon
                                            }
                                          />
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Screening call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <AudioPlayer />
                                        </div>
                                      </Timeline.Item>
                                      <Timeline.Item
                                        className={styles.TimelineItem}
                                      >
                                        <div
                                          className={styles.TimelineTextWrapper}
                                        >
                                          <h3
                                            className={styles.callHeadingLabel}
                                          >
                                            04 Oct 2022 12:04 pm
                                            <label>Screening call</label>
                                          </h3>
                                          <p>David Made a call | 4:00 mins</p>

                                          <AudioPlayer />
                                        </div>
                                      </Timeline.Item>
                                    </Timeline>
                                  ) : (
                                    <div className={styles.EmptyNotes}>
                                      <p>No recordings</p>
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          ) : (
            <div className={styles.HrDetailsWrapper}>
              <div className={styles.HrDetailsContent}>
                <div className={styles.HrDetailsResume}>
                  <div className={styles.HrDetailsHeadingIcon}>
                    <h2>Resume</h2>
                    <div className={styles.HrDetailsProfessionalEdit}>
                      <DownloadOutlined
                        className={[styles.HeadingIcon, "icon40"].join(" ")}
                      />
                    </div>
                  </div>
                  <div className={styles.ResumeWrapper}>
                    {/* add iframe here without width & height to fit in wrapper */}
                  </div>
                </div>
              </div>
              <div className={styles.HrDetailsActivity}>
                <div className={styles.TabsWrapper}>
                  <Tabs
                    className={[
                      HrroundStyles.HrRoundTabs,
                      "HrRoundAllTabs",
                      styles.HrRoundTabs,
                    ].join(" ")}
                    items={[
                      {
                        label: (
                          <span
                            className={[
                              HrroundStyles.HrRoundTab,
                              styles.HrRoundTab,
                            ].join(" ")}
                          >
                            Notes (2)
                          </span>
                        ),
                        key: 1,
                        children: (
                          <div className={styles.TabsContent}>
                            <div className={styles.NotesListWrapper}>
                              <NoteTime />
                              <NoteTime />
                              <NoteTime />
                              <NoteTime />
                            </div>
                            <div className={styles.NotesInputWrapper}>
                              <Input
                                placeholder="Type notes"
                                className={["input38", styles.NoteInput].join(
                                  " "
                                )}
                              />
                              <a>
                                <SendOutlined
                                  className={["icon38", styles.NoteSubmit].join(
                                    " "
                                  )}
                                />
                              </a>
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: (
                          <span
                            className={[
                              HrroundStyles.HrRoundTab,
                              styles.HrRoundTab,
                            ].join(" ")}
                          >
                            Activity
                          </span>
                        ),
                        key: 2,
                        children: (
                          <Timeline className={styles.TimelineWrapper}>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>04 Oct 2022 12:04 pm</h3>
                                <p>David Made a call | 4:00 mins</p>

                                <AudioPlayer />
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3>06 Oct 2022 11:28 am</h3>
                                <p>
                                  <span>HR Round</span> conducted by
                                  <span> David</span>
                                </p>
                              </div>
                            </Timeline.Item>
                          </Timeline>
                        ),
                      },
                      {
                        label: (
                          <span
                            className={[
                              HrroundStyles.HrRoundTab,
                              styles.HrRoundTab,
                            ].join(" ")}
                          >
                            Call History
                          </span>
                        ),
                        key: 3,
                        children: (
                          <Timeline className={styles.TimelineWrapper}>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3 className={styles.callHeadingLabel}>
                                  04 Oct 2022 12:04 pm
                                  <label>Video call</label>
                                </h3>
                                <p>David Made a call | 4:00 mins</p>

                                <PlayCircleOutlined
                                  className={AudioPlayerStyles.PlayIcon}
                                />
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3 className={styles.callHeadingLabel}>
                                  04 Oct 2022 12:04 pm
                                  <label>Screening call</label>
                                </h3>
                                <p>David Made a call | 4:00 mins</p>

                                <AudioPlayer />
                              </div>
                            </Timeline.Item>
                            <Timeline.Item className={styles.TimelineItem}>
                              <div className={styles.TimelineTextWrapper}>
                                <h3 className={styles.callHeadingLabel}>
                                  04 Oct 2022 12:04 pm
                                  <label>Screening call</label>
                                </h3>
                                <p>David Made a call | 4:00 mins</p>

                                <AudioPlayer />
                              </div>
                            </Timeline.Item>
                          </Timeline>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
          <div
            className={[
              AnalyticsStyles.HeaderButtons,
              AnalyticsStyles.HeaderButtonsMobile,
            ].join(" ")}
          >
            <Button
              className={[AnalyticsStyles.greenBtn, "greenBtn"].join(" ")}
            >
              <PhoneOutlined
                className={[AnalyticsStyles.phoneIcon, "phoneIcon"].join(" ")}
              />
              Call
            </Button>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default HrRoundDetails;
