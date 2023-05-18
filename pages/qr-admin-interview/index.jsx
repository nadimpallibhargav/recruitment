import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileTextOutlined,
  PhoneOutlined,
  RightOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Input, Progress, DatePicker } from "antd";
import dayjs from "dayjs";
import ResumePopup from "../../components/popup/ResumePopup";
import GiveFeedback from "../../components/popup/GiveFeedback";
import Schedulepopup from "../../components/popup/ScheduleInterview";
import FiltersWrapper from "../../components/filters/FiltersWrapper";
import FixedTableTabs from "../../components/tables/FixedTableTabs";
import TableSearch from "../../components/tables/TablesSearch";

import ManageUserStyles from "../manageuser/Manageuser.module.scss";
import InterviewerStyles from "../interviewer/Interviewer.module.scss";
import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import CandidateDetailsStyles from "../candidatedetails/Candidatedetails.module.scss";
import TableStyles from "../../components/tables/Tables.module.scss";
import styles from "../hrround/HrRound.module.scss";

import QrAdminInterviewStyles from "./QrAdminInterview.module.scss";

const dateFormat = "DD MMM YYYY | HH:mm A";

const { Search } = Input;

const QrAdminInterview = () => {
  // rounds radio start
  const [roundValue, setRoundValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");

  const RoundsChange = (e) => {
    setRoundValue(e.target.value);
  };
  // rounds radio end

  // date picker start
  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  // date picker end

  // Hr Round Yet to interview table start
  const HrRoundInterviewColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      // className: TableStyles.candidateNameFixedColumn,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",

      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "HR",
      dataIndex: "hr",
      key: "hr",
    },
    {
      title: "Available at",
      dataIndex: "availableAt",
      key: "availableAt",
      fixed: "right",
      className: TableStyles.AvailableAtFixedColumn,
    },
    {
      title: "Resume",
      dataIndex: "resume",
      className: "CenterColumn",
      key: "resume",
      align: "center",
      fixed: "right",
      className: TableStyles.ResumeFixedColumn,
      render: () => (
        <>
          <ResumePopup />
        </>
      ),
    },
    {
      title: "",
      dataIndex: "mobile",
      key: "mobile",
      fixed: "right",
      className: TableStyles.MobileFixedColumn,
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const HrRoundInterviewData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
      availableAt: (
        <>
          23 Feb 2023 <br /> 02:20 pm
        </>
      ),
      resume: Image,
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "9",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "10",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "11",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>Sb solutions</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
  ];
  // Hr Round Yet to interview table end

  // Hr Round Yet to Pending table start
  const HrRoundPendingColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "HR",
      dataIndex: "hr",
      key: "hr",
    },
    {
      title: "",
      dataIndex: "giveFeedback",
      key: "giveFeedback",
      render: () => <GiveFeedback clickText="Give feedback" />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const HrRoundPendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "4",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "6",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "8",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "9",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "10",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "11",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
    {
      key: "12",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
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
      resume: Image,
    },
  ];
  // Hr Round Yet to Pending table end

  // Hr Round Rejected table start
  const HrRoundRejectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      className: TableStyles.candidateNameFixedColumn,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",

      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
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
      title: "HR",
      dataIndex: "hr",
      key: "hr",
    },
    {
      title: "Report",
      dataIndex: "report",
      className: "CenterColumn",
      key: "report",
      align: "center",
      fixed: "right",
      className: TableStyles.ResportFixedColumn,
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const HrRoundRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "2",
      candidateName: "Ronald Richards",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "4",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "6",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "8",
      candidateName: "Bessie Cooper",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
  ];
  // Hr Round Rejected table end

  // Technical Round 1 Unscheduled table start
  const TechnicalOneUnscheduledColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "HR",
      dataIndex: "hr",
      key: "hr",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      align: "center",
      key: "rating",
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
      key: "mobile",
      fixed: "right",
      className: TableStyles.MobileFixedColumn,
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "schedule",
      key: "schedule",
      fixed: "right",
      className: TableStyles.ScheduleFixedColumn,
      render: () => <Schedulepopup />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalOneUnscheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
  ];
  // Technical Round 1 Unscheduled table end

  // Technical Round 1 scheduled table start
  const TechnicalOneScheduledColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewer",
      dataIndex: "interviewer",
      key: "interviewer",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "rating",
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
      dataIndex: "interviewDateTime",
      key: "interviewDateTime",
      fixed: "right",
    },
    {
      title: "Interview Link",
      dataIndex: "interviewlink",
      key: "interviewlink",
      align: "center",
      fixed: "right",
      render: () => <LinkOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalOneScheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
  ];
  // Technical Round 1 scheduled table end

  // Technical Round 1 Feedback pending table start
  const TechnicalOnePendingColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewed by",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "rating",
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
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalOnePendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
  ];
  // Technical Round 1 Feedback pending table end

  // Technical Round 1 Rejected table start
  const TechnicalOneRejectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      className: TableStyles.candidateNameFixedColumn,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",

      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewed by",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "HR Rating",
      dataIndex: "hrRating",
      key: "hrRating",
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
      title: "Tech 1 Rating",
      dataIndex: "techOneRating",
      key: "techOneRating",
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
      title: "Report",
      dataIndex: "report",
      className: "CenterColumn",
      key: "report",
      align: "center",
      fixed: "right",
      className: TableStyles.ResportFixedColumn,
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalOneRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
  ];
  // Technical Round 1 Rejected table end

  // Technical Round 2 Unscheduled table start
  const TechnicalTwoUnscheduledColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "HR",
      dataIndex: "hr",
      key: "hr",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "rating",
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
      title: "Tech 1 Rating",
      dataIndex: "techOneRating",
      key: "techOneRating",
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
      key: "mobile",
      fixed: "right",
      className: TableStyles.MobileFixedColumn,
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "",
      dataIndex: "schedule",
      key: "schedule",
      fixed: "right",
      className: TableStyles.ScheduleFixedColumn,
      render: () => <Schedulepopup />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalTwoUnscheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      hr: "Richards",
    },
  ];
  // Technical Round 2 Unscheduled table end

  // Technical Round 2 scheduled table start
  const TechnicalTwoScheduledColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewer",
      dataIndex: "interviewer",
      key: "interviewer",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "rating",
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
      title: "Tech 1 Rating",
      dataIndex: "techOneRating",
      key: "techOneRating",
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
      dataIndex: "interviewDateTime",
      key: "interviewDateTime",
      fixed: "right",
    },
    {
      title: "Interview Link",
      dataIndex: "interviewlink",
      key: "interviewlink",
      align: "center",
      fixed: "right",
      render: () => <LinkOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalTwoScheduledData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 3, 2022 | 1:30 pm",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewer: "Cooper",
      interviewDateTime: "Jan 2, 2022 | 12:30 pm",
    },
  ];
  // Technical Round 2 scheduled table end

  // Technical Round 2 Feedback pending table start
  const TechnicalTWoPendingColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",
      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewed by",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "HR Rating",
      dataIndex: "rating",
      key: "rating",
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
      title: "Tech 1 Rating",
      dataIndex: "techOneRating",
      key: "techOneRating",
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
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalTwoPendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 1,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
  ];
  // Technical Round 2 Feedback pending table end

  // Technical Round 2 Rejected table start
  const TechnicalTwoRejectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      className: TableStyles.candidateNameFixedColumn,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",

      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: TableStyles.vacancyOrganizationColumn,
    },
    {
      title: "Interviewed by",
      dataIndex: "interviewedBy",
      key: "interviewedBy",
    },
    {
      title: "HR Rating",
      dataIndex: "hrRating",
      key: "hrRating",
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
      title: "Tech 1 Rating",
      dataIndex: "techOneRating",
      key: "techOneRating",
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
      title: "Tech 2 Rating",
      dataIndex: "techTwoRating",
      key: "techTwoRating",
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
      dataIndex: "report",
      className: "CenterColumn",
      key: "report",
      align: "center",
      fixed: "right",
      className: TableStyles.ResportFixedColumn,
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      fixed: "right",
      className: TableStyles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const TechnicalTwoRejectedData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Cooper",
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
      interviewedBy: "Richards",
    },
  ];
  // Technical Round 2 Rejected table end

  // Selected table start
  const SelectedColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      className: styles.candidateNameFixedColumn,
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "experience",
      key: "experience",

      sorter: (a, b) => a.experience - b.experience,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "vacancyOrganization",
      key: "vacancyOrganization",
      className: styles.vacancyOrganizationColumn,
    },
    {
      title: "Overall Rating",
      dataIndex: "overallRating",
      key: "overallRating",
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
      key: "mobile",
      className: styles.MobileFixedColumn,
      render: () => (
        <PhoneOutlined
          className={[styles.tableCellIcon, "phoneIcon"].join(" ")}
        />
      ),
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      className: "CenterColumn",
      key: "feedback",
      align: "center",
      className: styles.ResportFixedColumn,
      render: () => <FileTextOutlined className={styles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      className: styles.ViewLinkFixedColumn,
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={styles.viewDetailsLink}>
              <RightOutlined
                className={[
                  "IconBlue",
                  styles.QrAdminInterviewArrow,
                  styles.tableCellIcon,
                ].join(" ")}
              />
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
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "3",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "4",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "5",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "6",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "7",
      candidateName: "Bessie Cooper",
      experience: 3,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
      ),
    },
    {
      key: "8",
      candidateName: "Jacob Jones",
      experience: 2,
      vacancyOrganization: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span className={styles.tableCellCompany}>ABC Technologies</span>
        </>
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
          InterviewerStyles.InterviewerSection,
          QrAdminInterviewStyles.QrAdminInterviewSection,
        ].join(" ")}
      >
        <div className="wideContainer">
          <div className={ManageUserStyles.TableHeading}>
            <h2>Vacancy</h2>
          </div>
          <div
            className={[
              AnalyticsStyles.DashboardWrapper,
              styles.HrRoundsWrapper,
              QrAdminInterviewStyles.ContentWrapper,
            ].join(" ")}
          >
            <FiltersWrapper
              RoundsChange={RoundsChange}
              RoundValue={roundValue}
              overlayClassName="QrClientCustomDrop"
              RadiosOptions={[
                { label: "HR Round(27)" },
                { label: "Technical Round 1 (18)" },
                { label: "Technical Round 2 (19)" },
                { label: "Selected (5)" },
              ]}
            ></FiltersWrapper>
            <div
              className={[
                AnalyticsStyles.DashboardContent,
                styles.HrRoundsContent,
              ].join(" ")}
            >
              {roundValue == 0 ? (
                <FixedTableTabs
                  style={{ maxWidth: 1042 }}
                  title="HR Round"
                  items={[
                    {
                      tabName: "Yet to interview",
                      tabLabel: 27,
                      tableColumns: HrRoundInterviewColumns,
                      tableData: HrRoundInterviewData,
                    },
                    {
                      tabName: "Feedback pending",
                      tabLabel: 13,
                      tableColumns: HrRoundPendingColumns,
                      tableData: HrRoundPendingData,
                    },
                    {
                      tabName: "Rejected",
                      tabLabel: 13,
                      tableColumns: HrRoundRejectedColumns,
                      tableData: HrRoundRejectedData,
                    },
                  ]}
                />
              ) : roundValue == 1 ? (
                <FixedTableTabs
                  style={{ maxWidth: 1042 }}
                  title="Technical Round 1"
                  items={[
                    {
                      tabName: "Unscheduled",
                      tabLabel: 10,
                      tableColumns: TechnicalOneUnscheduledColumns,
                      tableData: TechnicalOneUnscheduledData,
                    },
                    {
                      tabName: "Scheduled",
                      tabLabel: 10,
                      tableColumns: TechnicalOneScheduledColumns,
                      tableData: TechnicalOneScheduledData,
                    },
                    {
                      tabName: "Feedback pending",
                      tabLabel: 13,
                      tableColumns: TechnicalOnePendingColumns,
                      tableData: TechnicalOnePendingData,
                    },
                    {
                      tabName: "Rejected",
                      tabLabel: 13,
                      tableColumns: TechnicalOneRejectedColumns,
                      tableData: TechnicalOneRejectedData,
                    },
                  ]}
                />
              ) : roundValue == 2 ? (
                <FixedTableTabs
                  style={{ maxWidth: 1042 }}
                  title="Technical Round 2"
                  items={[
                    {
                      tabName: "Unscheduled",
                      tabLabel: 10,
                      tableColumns: TechnicalTwoUnscheduledColumns,
                      tableData: TechnicalTwoUnscheduledData,
                    },
                    {
                      tabName: "Scheduled",
                      tabLabel: 10,
                      tableColumns: TechnicalTwoScheduledColumns,
                      tableData: TechnicalTwoScheduledData,
                    },
                    {
                      tabName: "Feedback pending",
                      tabLabel: 13,
                      tableColumns: TechnicalTWoPendingColumns,
                      tableData: TechnicalTwoPendingData,
                    },
                    {
                      tabName: "Rejected",
                      tabLabel: 13,
                      tableColumns: TechnicalTwoRejectedColumns,
                      tableData: TechnicalTwoRejectedData,
                    },
                  ]}
                />
              ) : roundValue == 3 ? (
                <TableSearch
                  title="Selected"
                  columns={SelectedColumns}
                  data={SelectedData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminInterview;
