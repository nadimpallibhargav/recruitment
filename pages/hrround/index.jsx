import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LeftOutlined,
  PlusOutlined,
  FileTextOutlined,
  PhoneOutlined,
  RightOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import {
  Button,
  Radio,
  ConfigProvider,
  Tabs,
  Input,
  Progress,
  Breadcrumb,
  DatePicker,
} from "antd";
import dayjs from "dayjs";
import Tables from "../../components/tables/Tables";
import ResumePopup from "../../components/popup/ResumePopup";
import GiveFeedback from "../../components/popup/GiveFeedback";
import Schedulepopup from "../../components/popup/ScheduleInterview";
import EmptyData from "../../components/EmptyData/EmptyData";

import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import SearchStyles from "../../components/buttons/Buttons.module.scss";
import CandidateDetailsStyles from "../candidatedetails/Candidatedetails.module.scss";
import InterviewerStyles from "../interviewer/Interviewer.module.scss";
import styles from "./HrRound.module.scss";

const dateFormat = "DD MMM YYYY | HH:mm A";

const { Search } = Input;

const HrRound = () => {
  const CandidatesList = 1;

  // rounds radio start
  const [hrRoundValue, setHrRoundValue] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const HrRoundChange = (e) => {
    setHrRoundValue(e.target.value);
  };
  // rounds radio end

  // date picker start
  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  // date picker end

  // search btn start
  const SearchElement = (
    <Search
      className={[SearchStyles.search, styles.search, styles.searchDesk].join(
        " "
      )}
      placeholder="Search candidate"
      onSearch={() => {}}
    />
  );
  // search btn end

  // Hr Round Yet to interview table start
  const HrRoundInterviewColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "Experience",
      key: "Experience",
      sorter: (a, b) => a.Experience - b.Experience,
    },
    {
      title: "Contact Number",
      dataIndex: "ContactNumber",
      key: "ContactNumber",
    },
    {
      title: "Available at",
      dataIndex: "availableAt",
      key: "availableAt",
      className: styles.YetToInterviewAvailable,
    },
    {
      title: "Resume",
      dataIndex: "Resume",
      className: "CenterColumn",
      key: "Resume",
      align: "center",
      render: () => (
        <>
          <ResumePopup />
        </>
      ),
    },
    {
      title: "",
      dataIndex: "Mobile",
      key: "Mobile",
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const HrRoundInterviewData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      availableAt: (
        <>
          {selectedDate === "" ? (
            <DatePicker
              className={styles.HrRoundDatePicker}
              showTime
              bordered={false}
              allowClear={false}
              format={dateFormat}
              onChange={onChange}
            />
          ) : (
            <>
              <DatePicker
                className={CandidateDetailsStyles.InterviewDatePicker}
                showTime
                bordered={false}
                defaultValue={dayjs("23 Feb 2023 | 2:20 AM", dateFormat)}
                format={dateFormat}
                onChange={onChange}
              />
            </>
          )}
        </>
      ),
      Resume: Image,
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 9521876311,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      Experience: 4,
      ContactNumber: 9414301933,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      Experience: 1,
      ContactNumber: 9111004178,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      candidateName: "Jerome Bell",
      Experience: 6,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "6",
      candidateName: "Brooklyn Simmons",
      Experience: 3,
      ContactNumber: 9602249797,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "7",
      candidateName: "Theresa Webb",
      Experience: 2,
      ContactNumber: 9414301933,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "8",
      candidateName: "Darrell Steward",
      Experience: 1,
      ContactNumber: 9521876311,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "9",
      candidateName: "Floyd Miles",
      Experience: 2,
      ContactNumber: 7568054837,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "10",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "11",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "12",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "13",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "14",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "15",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "16",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "17",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "18",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "19",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "20",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      availableAt: "-",
      Resume: "",
      Details: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Hr Round Yet to interview table end

  // Hr Round Yet to interview table start
  const HrRoundPendingColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "Experience",
      key: "Experience",
      sorter: (a, b) => a.Experience - b.Experience,
    },
    {
      title: "Contact Number",
      dataIndex: "ContactNumber",
      key: "ContactNumber",
    },
    {
      title: "",
      dataIndex: "giveFeedback",
      key: "giveFeedback",
      render: (text) => <GiveFeedback clickText={text} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const HrRoundPendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 9521876311,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      Experience: 4,
      ContactNumber: 9414301933,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      Experience: 1,
      ContactNumber: 9111004178,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      candidateName: "Jerome Bell",
      Experience: 6,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "6",
      candidateName: "Brooklyn Simmons",
      Experience: 3,
      ContactNumber: 9602249797,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "7",
      candidateName: "Theresa Webb",
      Experience: 2,
      ContactNumber: 9414301933,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "8",
      candidateName: "Darrell Steward",
      Experience: 1,
      ContactNumber: 9521876311,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "9",
      candidateName: "Floyd Miles",
      Experience: 2,
      ContactNumber: 7568054837,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "10",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "11",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "12",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "13",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "14",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "15",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "16",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "17",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "18",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "19",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "20",
      candidateName: "Brooklyn Simmons",
      Experience: 2,
      ContactNumber: 9893929779,
      giveFeedback: "Give feedback",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Hr Round Yet to interview table end

  // Hr Round Rejected table start
  const HrRoundRejectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "Experience",
      key: "Experience",
      sorter: (a, b) => a.Experience - b.Experience,
    },
    {
      title: "Contact Number",
      dataIndex: "ContactNumber",
      key: "ContactNumber",
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={30}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      key: "Feedback",
      align: "center",
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const HrRoundRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      Experience: 4,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      Experience: 6,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "9",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "10",
      candidateName: "Jacob Jones",
      Experience: 1,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "11",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "12",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "13",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "14",
      candidateName: "Jacob Jones",
      Experience: 7,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "15",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "16",
      candidateName: "Jacob Jones",
      Experience: 6,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "17",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "18",
      candidateName: "Jacob Jones",
      Experience: 2,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "19",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "20",
      candidateName: "Jacob Jones",
      Experience: 7,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "21",
      candidateName: "Bessie Cooper",
      Experience: 3,
      ContactNumber: 7568054837,
      Feedback: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Hr Round Rejected table end

  // Technical Round One Unscheduled table start
  const TechOneUnscheduledCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={30}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "",
      dataIndex: "mobile",
      key: "Mobile",
      align: "center",
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "giveFeedback",
      key: "giveFeedback",
      render: () => <Schedulepopup />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechOneUnscheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 3,
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 4,
    },
    {
      key: "5",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "6",
      candidateName: "Ronald Richards",
      experience: 3,
    },
    {
      key: "7",
      candidateName: "Cody Fisher",
      experience: 4,
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "9",
      candidateName: "Ronald Richards",
      experience: 3,
    },
    {
      key: "10",
      candidateName: "Cody Fisher",
      experience: 4,
    },
    {
      key: "11",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "12",
      candidateName: "Ronald Richards",
      experience: 3,
    },
    {
      key: "13",
      candidateName: "Cody Fisher",
      experience: 4,
    },
    {
      key: "14",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "15",
      candidateName: "Ronald Richards",
      experience: 3,
    },
    {
      key: "16",
      candidateName: "Cody Fisher",
      experience: 4,
    },
  ];
  // Technical Round One Unscheduled table end

  // Technical Round One Scheduled table start
  const TechOneScheduledCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={30}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Interview Date & Time",
      dataIndex: "interviewdateandtime",
      key: "Interview Date and Time",
      render: (text) => <>{text}</>,
    },
    {
      title: "Interview link",
      dataIndex: "interviewlink",
      key: "interviewlink",
      align: "center",
      render: () => <LinkOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechOneScheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 9,
      interviewdateandtime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "2",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewdateandtime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "4",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewdateandtime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "6",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewdateandtime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "8",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "9",
      candidateName: "Bessie Cooper",
      experience: 1,
      interviewdateandtime: "Jan 2, 2022 | 10:00 am",
    },
    {
      key: "10",
      candidateName: "Ronald Richards",
      experience: 1,
      interviewdateandtime: "Jan 2, 2022 | 10:00 am",
    },
    {
      key: "11",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewdateandtime: "Jan 2, 2022 | 9:00 am",
    },
  ];
  // Technical Round One Scheduled table end

  // Technical Round One Pending table start
  const TechOnePendingCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={30}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Interviewed By",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechOnePendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 9,
      interviewedBy: "Narasihman",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 8,
      interviewedBy: "David",
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 7,
      interviewedBy: "Dharshan",
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 6,
      interviewedBy: "David",
    },
    {
      key: "5",
      candidateName: "Jacob Jones",
      experience: 5,
      interviewedBy: "Dharshan",
    },
    {
      key: "6",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewedBy: "David",
    },
    {
      key: "7",
      candidateName: "Cody Fisher",
      experience: 3,
      interviewedBy: "David",
    },
    {
      key: "8",
      candidateName: "Ronald Richards",
      experience: 2,
      interviewedBy: "Dharshan",
    },
    {
      key: "9",
      candidateName: "Cody Fisher",
      experience: 1,
      interviewedBy: "David",
    },
    {
      key: "10",
      candidateName: "Jacob Jones",
      experience: 0,
      interviewedBy: "David",
    },
    {
      key: "11",
      candidateName: "Ronald Richards",
      experience: 1,
      interviewedBy: "David",
    },
    {
      key: "12",
      candidateName: "Cody Fisher",
      experience: 2,
      interviewedBy: "David",
    },
  ];
  // Technical Round One Pending table end

  // Technical Round One Rejected table start
  const TechOneRejectedCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 1 Rating",
      dataIndex: "TechOneRating",
      key: "Tech One Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={30}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      key: "Feedback",
      align: "center",
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechOneRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 1,
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 2,
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 4,
    },
    {
      key: "5",
      candidateName: "Ronald Richards",
      experience: 4,
    },
    {
      key: "6",
      candidateName: "Cody Fisher",
      experience: 2,
    },
    {
      key: "7",
      candidateName: "Ronald Richards",
      experience: 1,
    },
    {
      key: "8",
      candidateName: "Cody Fisher",
      experience: 3,
    },
    {
      key: "9",
      candidateName: "Ronald Richards",
      experience: 5,
    },
    {
      key: "10",
      candidateName: "Cody Fisher",
      experience: 2,
    },
    {
      key: "11",
      candidateName: "Ronald Richards",
      experience: 4,
    },
    {
      key: "12",
      candidateName: "Cody Fisher",
      experience: 1,
    },
  ];
  // Technical Round One Rejected table end

  // Technical Round Two Unscheduled table start
  const TechTwoUnscheduledCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 1 Rating",
      dataIndex: "TechOneRating",
      key: "Tech One Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={76}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "",
      dataIndex: "mobile",
      key: "Mobile",
      align: "center",
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "giveFeedback",
      key: "giveFeedback",
      render: () => <Schedulepopup />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechTwoUnscheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 1,
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 2,
    },
    {
      key: "5",
      candidateName: "Jerome Bell",
      experience: 4,
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 6,
    },
    {
      key: "7",
      candidateName: "Ronald Richards",
      experience: 1,
    },
    {
      key: "8",
      candidateName: "Cody Fisher",
      experience: 2,
    },
    {
      key: "10",
      candidateName: "Jerome Bell",
      experience: 0,
    },
    {
      key: "11",
      candidateName: "Cody Fisher",
      experience: 1,
    },
    {
      key: "12",
      candidateName: "Jerome Bell",
      experience: 3,
    },
  ];
  // Technical Round Two Unscheduled table end

  // Technical Round Two Scheduled table start
  const TechTwoScheduledCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 1 Rating",
      dataIndex: "TechOneRating",
      key: "Tech One Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={76}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Interview Date & Time",
      dataIndex: "interviewdateandtime",
      key: "Interview Date and Time",
      render: (text) => <>{text}</>,
    },
    {
      title: "Interview link",
      dataIndex: "interviewlink",
      key: "interviewlink",
      align: "center",
      render: () => <LinkOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechTwoScheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewdateandtime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewdateandtime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 2,
      interviewdateandtime: "Dec 30, 2022 | 4:00 pm",
    },
    {
      key: "5",
      candidateName: "Jerome Bell",
      experience: 4,
      interviewdateandtime: "Dec 30, 2022 | 2:30 pm",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewdateandtime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "7",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "8",
      candidateName: "Cody Fisher",
      experience: 2,
      interviewdateandtime: "Dec 30, 2022 | 4:00 pm",
    },
    {
      key: "9",
      candidateName: "Jerome Bell",
      experience: 4,
      interviewdateandtime: "Dec 30, 2022 | 2:30 pm",
    },
    {
      key: "10",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewdateandtime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "11",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewdateandtime: "Jan 2, 2022 | 11:00 am",
    },
    {
      key: "12",
      candidateName: "Cody Fisher",
      experience: 2,
      interviewdateandtime: "Dec 30, 2022 | 4:00 pm",
    },
    {
      key: "13",
      candidateName: "Jerome Bell",
      experience: 4,
      interviewdateandtime: "Dec 30, 2022 | 2:30 pm",
    },
  ];
  // Technical Round Two Scheduled table end

  // Technical Round Two Pending table start
  const TechTwoPendingCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Exp (Years)",
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      align: "center",
      key: "Rating",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 1 Rating",
      dataIndex: "TechOneRating",
      key: "Tech One Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={76}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Interviewed By",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechTwoPendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewedBy: "Narasihman",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewedBy: "David",
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewedBy: "Dharshan",
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 1,
      interviewedBy: "David",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewedBy: "Dharshan",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewedBy: "David",
    },
    {
      key: "7",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewedBy: "David",
    },
    {
      key: "8",
      candidateName: "Cody Fisher",
      experience: 1,
      interviewedBy: "Dharshan",
    },
    {
      key: "9",
      candidateName: "Bessie Cooper",
      experience: 3,
      interviewedBy: "David",
    },
    {
      key: "10",
      candidateName: "Jacob Jones",
      experience: 2,
      interviewedBy: "Dharshan",
    },
    {
      key: "11",
      candidateName: "Ronald Richards",
      experience: 4,
      interviewedBy: "David",
    },
    {
      key: "12",
      candidateName: "Cody Fisher",
      experience: 1,
      interviewedBy: "Dharshan",
    },
  ];
  // Technical Round Two Pending table Two

  // Technical Round Two Rejected table start
  const TechTwoRejectedCol = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "Experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 1 Rating",
      dataIndex: "TechOneRating",
      key: "Tech One Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={76}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Tech 2 Rating",
      dataIndex: "TechTwoRating",
      key: "Tech Two Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={82}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      key: "Feedback",
      align: "center",
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechTwoRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      experience: 4,
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      experience: 1,
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
    },
    {
      key: "7",
      candidateName: "Ronald Richards",
      experience: 4,
    },
    {
      key: "8",
      candidateName: "Cody Fisher",
      experience: 1,
    },
    {
      key: "9",
      candidateName: "Bessie Cooper",
      experience: 3,
    },
    {
      key: "10",
      candidateName: "Jacob Jones",
      experience: 2,
    },
    {
      key: "11",
      candidateName: "Ronald Richards",
      experience: 4,
    },
    {
      key: "12",
      candidateName: "Cody Fisher",
      experience: 1,
    },
  ];
  // Technical Round Two Rejected table end

  // Selected table start
  const SelectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "Candidate Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Contact info",
      dataIndex: "ContactInfo",
      key: "ContactInfo",
    },
    {
      title: "Overall Rating",
      dataIndex: "Rating",
      key: "Rating",
      align: "center",
      render: () => (
        <Progress
          className={styles.ratingIcon}
          type="circle"
          percent={85}
          format={(percent) => `${percent} `}
        />
      ),
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      key: "Feedback",
      align: "center",
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "Mobile",
      key: "Mobile",
      align: "center",
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              View Details
              <RightOutlined className={styles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const SelectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      ContactInfo: (
        <span>
          bessie@mail.com <br /> 9414301933
        </span>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      ContactInfo: (
        <span>
          jessi@mail.com <br /> 9521876311
        </span>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      ContactInfo: (
        <span>
          cody@mail.com <br /> 9414301933
        </span>
      ),
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      ContactInfo: (
        <span>
          jbell@mail.com <br /> 9521876311
        </span>
      ),
    },
  ];
  // Selected table end

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
          styles.HrRoundSection,
        ].join(" ")}
      >
        <div className="container">
          <div
            className={[AnalyticsStyles.Header, "breadCrumbWrapper"].join(" ")}
          >
            <div className="breadCrumbText">
              <div className="breadCrumbTitle">
                <Breadcrumb
                  separator=">"
                  className={BreadcrumbStyles.Breadcrumb}
                >
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Vacancy</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/vacancy">
                      <a>Front End Developer - React JS - 3 to 4 years</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Candidates List</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/vacancy">
                    <a>
                      <LeftOutlined className="backBtn" />
                    </a>
                  </Link>
                  <div>Candidates List</div>
                </h1>
                <h2>Posted on 14 Dec 2022</h2>
              </div>
            </div>
            {CandidatesList >= 1 ? (
              <div
                className={[
                  AnalyticsStyles.HeaderButtons,
                  AnalyticsStyles.HeaderButtonsDesk,
                ].join(" ")}
              >
                <Link href="/addcandidate">
                  <a>
                    <Button
                      className={[AnalyticsStyles.greenBtn, "greenBtn"].join(
                        " "
                      )}
                    >
                      <PlusOutlined />
                      Add candidates
                    </Button>
                  </a>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          {CandidatesList >= 1 ? (
            <div
              className={[
                AnalyticsStyles.DashboardWrapper,
                styles.HrRoundsWrapper,
              ].join(" ")}
            >
              <div
                className={[
                  AnalyticsStyles.DashboardSide,
                  styles.RoundsWrapper,
                ].join(" ")}
              >
                <h5>Rounds</h5>
                <Radio.Group
                  onChange={HrRoundChange}
                  value={hrRoundValue}
                  className={styles.HrRoundRadioGroup}
                >
                  <Radio className={styles.HrRoundRadio} value={1}>
                    HR Round(27)
                  </Radio>
                  <Radio className={styles.HrRoundRadio} value={2}>
                    Technical Round 1 (18)
                  </Radio>
                  <Radio className={styles.HrRoundRadio} value={3}>
                    Technical Round 2 (19)
                  </Radio>
                  <Radio className={styles.HrRoundRadio} value={4}>
                    Selected (5)
                  </Radio>
                </Radio.Group>
              </div>
              <div
                className={[
                  AnalyticsStyles.DashboardContent,
                  styles.HrRoundsContent,
                ].join(" ")}
              >
                {hrRoundValue == 1 ? (
                  <div className={styles.DetailsWrapper}>
                    <div className={styles.TableHeading}>
                      <h2>HR Round</h2>
                      {/* mobile search button  */}
                      <div>
                        <Search
                          className={[
                            SearchStyles.search,
                            styles.search,
                            styles.searchMobile,
                          ].join(" ")}
                          placeholder="Search candidate"
                          onSearch={() => {}}
                        />
                      </div>
                    </div>
                    <div className={styles.TabsWrapper}>
                      <Tabs
                        tabBarExtraContent={SearchElement}
                        className={[styles.HrRoundTabs, "HrRoundAllTabs"].join(
                          " "
                        )}
                        items={[
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Yet to interview <label>27</label>
                              </span>
                            ),
                            key: 1,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={HrRoundInterviewColumns}
                                  data={HrRoundInterviewData}
                                  className={styles.HrRoundTable}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Feedback pending <label>13</label>
                              </span>
                            ),
                            key: 2,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={HrRoundPendingColumns}
                                  data={HrRoundPendingData}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Rejected <label>13</label>
                              </span>
                            ),
                            key: 3,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={HrRoundRejectedColumns}
                                  data={HrRoundRejectedData}
                                />
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {hrRoundValue == 2 ? (
                  <div className={styles.DetailsWrapper}>
                    <div className={styles.TableHeading}>
                      <h2>Technical Round 1</h2>
                      {/* mobile search button  */}
                      <div>
                        <Search
                          className={[
                            SearchStyles.search,
                            styles.search,
                            styles.searchMobile,
                          ].join(" ")}
                          placeholder="Search candidate"
                          onSearch={() => {}}
                        />
                      </div>
                    </div>
                    <div className={styles.TabsWrapper}>
                      <Tabs
                        tabBarExtraContent={SearchElement}
                        className={[styles.HrRoundTabs, "HrRoundAllTabs"].join(
                          " "
                        )}
                        items={[
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Unscheduled <label>18</label>
                              </span>
                            ),
                            key: 1,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechOneUnscheduledCol}
                                  data={TechOneUnscheduledData}
                                  className={styles.HrRoundTable}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Scheduled <label>13</label>
                              </span>
                            ),
                            key: 2,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechOneScheduledCol}
                                  data={TechOneScheduledData}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Feedback pending <label>13</label>
                              </span>
                            ),
                            key: 3,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechOnePendingCol}
                                  data={TechOnePendingData}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Rejected <label>13</label>
                              </span>
                            ),
                            key: 4,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechOneRejectedCol}
                                  data={TechOneRejectedData}
                                />
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {hrRoundValue == 3 ? (
                  <div className={styles.DetailsWrapper}>
                    <div className={styles.TableHeading}>
                      <h2>Technical Round 2</h2>
                      {/* mobile search button  */}
                      <div>
                        <Search
                          className={[
                            SearchStyles.search,
                            styles.search,
                            styles.searchMobile,
                          ].join(" ")}
                          placeholder="Search candidate"
                          onSearch={() => {}}
                        />
                      </div>
                    </div>
                    <div className={styles.TabsWrapper}>
                      <Tabs
                        tabBarExtraContent={SearchElement}
                        className={[styles.HrRoundTabs, "HrRoundAllTabs"].join(
                          " "
                        )}
                        items={[
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Unscheduled <label>18</label>
                              </span>
                            ),
                            key: 1,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechTwoUnscheduledCol}
                                  data={TechTwoUnscheduledData}
                                  className={styles.HrRoundTable}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Scheduled <label>13</label>
                              </span>
                            ),
                            key: 2,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechTwoScheduledCol}
                                  data={TechTwoScheduledData}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Feedback pending <label>13</label>
                              </span>
                            ),
                            key: 3,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechTwoPendingCol}
                                  data={TechTwoPendingData}
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <span className={styles.HrRoundTab}>
                                Rejected <label>13</label>
                              </span>
                            ),
                            key: 4,
                            children: (
                              <div className={styles.tableWrapper}>
                                <Tables
                                  columns={TechTwoRejectedCol}
                                  data={TechTwoRejectedData}
                                />
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {hrRoundValue == 4 ? (
                  <div className={styles.DetailsWrapper}>
                    <div
                      className={[
                        styles.TableHeading,
                        styles.SelectedHeading,
                      ].join(" ")}
                    >
                      <h2>Selected</h2>
                      <div className={styles.SelectedSearchWrapper}>
                        <Search
                          className={[
                            SearchStyles.search,
                            styles.search,
                            styles.SelectedSearch,
                          ].join(" ")}
                          placeholder="Search candidate"
                          onSearch={() => {}}
                        />
                      </div>
                    </div>
                    <div className={styles.TabsWrapper}>
                      <div className={styles.tableWrapper}>
                        <Tables
                          columns={SelectedColumns}
                          data={SelectedData}
                          className={styles.HrRoundTable}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className={InterviewerStyles.EmptyInterviewsWrapper}>
              <EmptyData heading="No  Candidate Found">
                <h3>
                  You don’t have any candidates for this vacancy. Please add new
                  position using Add candidates button
                </h3>
                <Link href="/addcandidate">
                  <Button
                    className={["greenBtn", InterviewerStyles.AddDataBtn].join(
                      " "
                    )}
                  >
                    <PlusOutlined /> Add Candidates
                  </Button>
                </Link>
              </EmptyData>
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default HrRound;
