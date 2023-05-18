import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Select,
  Input,
  Tag,
  Tooltip,
  Slider,
  ConfigProvider,
  Checkbox,
  DatePicker,
} from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import Tables from "../../components/tables/Tables";
import DropDownComponent from "../../components/CandidatesDropdown/DropDownComponent";
import {
  candidateSelectItems,
  candidateSelectPoc,
  candidateSelectTechStack,
} from "../../data/dropDownData/dropDownData";
import MapCandidateModal from "../../components/popup/MapCandidate";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import AddVacancyStyles from "../addvacancy/Addvacancy.module.scss";
import HrRoundStyles from "../hrround/HrRound.module.scss";
import ButtonStyles from "../../components/buttons/Buttons.module.scss";
import MapcandidatesStyles from "../mapcandidates/Mapcandidates.module.scss";
import VacancyStyles from "../vacancy/Vacancy.module.scss";
import styles from "./Candidates.module.scss";

const dateFormat = "DD/MM/YY";

const { Search } = Input;

const Candidates = () => {
  const [vacancyFilter, setVacancyFilter] = useState("mapped");
  const [candidateSelect, setCandidateSelect] = useState(false);

  const handleChange = (value) => {
    setVacancyFilter(value.value);
  };

  const [experienceInput, setExperienceInput] = useState([0, 2]);
  const onChangeExperience = (newValue) => {
    setExperienceInput(newValue);
  };

  // Mapped Candidates table start
  const MappedCandidatesColumns = [
    {
      title: "Candidate Name",
      dataIndex: "CandidateName",
      key: "Candidate Name",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "Experience",
      key: "Experience",
      sorter: (a, b) => a.Experience - b.Experience,
    },
    {
      title: "Techstack",
      dataIndex: "TechStack",
      key: "TechStack",
    },
    {
      title: "Point of Contact",
      dataIndex: "PointOfContact",
      key: "PointOfContact",
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const MappedCandidatesData = [
    {
      key: "1",
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      PointOfContact: "Adan Lauzon",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      CandidateName: "Jacob Jones",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      PointOfContact: "Audrey Simmmons",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      CandidateName: "Ronald Richards",
      Experience: 5,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Angular JS
          </Tag>
        </div>
      ),
      PointOfContact: "Calvin Steward",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      PointOfContact: "Adan Lauzon",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      CandidateName: "Jacob Jones",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      PointOfContact: "Audrey Simmmons",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "6",
      CandidateName: "Ronald Richards",
      Experience: 5,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Angular JS
          </Tag>
        </div>
      ),
      PointOfContact: "Calvin Steward",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "7",
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      PointOfContact: "Adan Lauzon",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "8",
      CandidateName: "Jacob Jones",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      PointOfContact: "Audrey Simmmons",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "9",
      CandidateName: "Ronald Richards",
      Experience: 5,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Angular JS
          </Tag>
        </div>
      ),
      PointOfContact: "Calvin Steward",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "10",
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      PointOfContact: "Adan Lauzon",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "11",
      CandidateName: "Jacob Jones",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      PointOfContact: "Audrey Simmmons",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "12",
      CandidateName: "Ronald Richards",
      Experience: 5,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Angular JS
          </Tag>
        </div>
      ),
      PointOfContact: "Calvin Steward",
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Mapped Candidates table end

  // UnMapped Candidates table start
  const UnMappedCandidatesColumns = [
    {
      title: (
        <Checkbox
          onChange={() => {
            setCandidateSelect(true);
          }}
        ></Checkbox>
      ),
      dataIndex: "SelectCandidate",
      key: "SelectCandidate",
      render: () => (
        <Checkbox
          onChange={() => {
            setCandidateSelect(true);
          }}
        ></Checkbox>
      ),
    },
    {
      title: "Candidate Name",
      dataIndex: "CandidateName",
      key: "Candidate Name",
    },
    {
      title: <>Exp (Years)</>,
      dataIndex: "Experience",
      key: "Experience",
      sorter: (a, b) => a.Experience - b.Experience,
    },
    {
      title: "Techstack",
      dataIndex: "TechStack",
      key: "TechStack",
    },
    {
      title: "Added by",
      dataIndex: "AddedBy",
      key: "AddedBy",
    },
    {
      title: "",
      dataIndex: "MapCandidate",
      key: "MapCandidate",
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const UnMappedCandidatesData = [
    {
      key: "1",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Jacob Jones",
      Experience: 2,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Ronald Richards",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Jacob Jones",
      Experience: 2,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "6",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Ronald Richards",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "7",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "8",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Jacob Jones",
      Experience: 2,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "9",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Ronald Richards",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "10",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Bessie Cooper",
      Experience: 6,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "11",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Jacob Jones",
      Experience: 2,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            Node JS
          </Tag>
          <Tooltip title="AngularJs, Mongo DB">
            <Tag
              className={[
                MapcandidatesStyles.tag,
                HrRoundStyles.tableTag,
                MapcandidatesStyles.addNumber,
                HrRoundStyles.tableTagNumber,
              ].join(" ")}
            >
              <PlusOutlined /> 3
            </Tag>
          </Tooltip>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "12",
      // SelectCandidate: <Checkbox></Checkbox>,
      CandidateName: "Ronald Richards",
      Experience: 4,
      TechStack: (
        <div
          className={[
            VacancyStyles.formTags,
            HrRoundStyles.tableTagsWrapper,
          ].join(" ")}
        >
          <Tag
            className={[MapcandidatesStyles.tag, HrRoundStyles.tableTag].join(
              " "
            )}
          >
            React JS
          </Tag>
        </div>
      ),
      AddedBy: (
        <span>
          Hire <br /> hire@sketchbrahma.com
        </span>
      ),
      MapCandidate: (
        <MapCandidateModal>
          <Button
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Map Candidate
          </Button>
        </MapCandidateModal>
      ),
      View: (
        <Link href="/unmappeddetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // UnMapped Candidates table end

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
          VacancyStyles.vacancy,
          AnalyticsStyles.AnalyticsSection,
          HrRoundStyles.HrRoundSection,
        ].join(" ")}
      >
        <div className="container">
          <div className={VacancyStyles.openVacancy}>
            <Select
              onChange={handleChange}
              className={[ButtonStyles.vacancyFilter, styles.MappedFilter].join(
                " "
              )}
              labelInValue
              defaultValue={{
                value: "mapped",
                label: "Mapped Candidates ",
              }}
              options={[
                {
                  className: "vacancyFilterItem",
                  value: "mapped",
                  label: "Mapped Candidates ",
                },
                {
                  className: "vacancyFilterItem",
                  value: "unmapped",
                  label: "Unmapped Candidates",
                },
              ]}
            />
            {vacancyFilter == "unmapped" ? (
              <Link href="/addcandidate">
                <Button
                  className={["greenBtn", VacancyStyles.AddBtnDesk].join(" ")}
                >
                  <PlusOutlined />
                  Add Candidates
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
          {vacancyFilter == "mapped" ? (
            <div
              className={[
                AnalyticsStyles.DashboardWrapper,
                VacancyStyles.HrRoundsWrapper,
                styles.CandidatesWrapper,
              ].join(" ")}
            >
              <div
                className={[
                  AnalyticsStyles.DashboardSide,
                  VacancyStyles.RoundsWrapper,
                  styles.AsideFiltersWrapper,
                ].join(" ")}
              >
                <div className={styles.FilterSelectWrapper}>
                  <h3>Vacancy </h3>
                  <DropDownComponent
                    placeHolder={"Select vacancy"}
                    itemDropDown={candidateSelectItems}
                    overlayClassName="candidatesVacancyDropdown"
                  />
                </div>
                <div className={styles.FilterSelectWrapper}>
                  <h3>Vacancy Status</h3>
                  <Select
                    className="SingleSelection"
                    onChange={() => {}}
                    placeholder="Select vacancy status  "
                    options={[
                      {
                        className: "vacancyFilterItem",
                        value: "open",
                        label: "Open",
                      },
                      {
                        className: "vacancyFilterItem",
                        value: "Closed",
                        label: "Closed",
                      },
                    ]}
                  />
                </div>
                <div className={styles.FilterSelectWrapper}>
                  <h3>Techstack </h3>
                  <DropDownComponent
                    placeHolder={"Select techstack"}
                    itemDropDown={candidateSelectTechStack}
                    overlayClassName="candidatesVacancyDropdown"
                  />
                </div>
                <div className={styles.FilterSelectWrapper}>
                  <h3>Point of contact </h3>
                  <DropDownComponent
                    placeHolder={"Select poc"}
                    itemDropDown={candidateSelectPoc}
                    overlayClassName="candidatesVacancyDropdown"
                  />
                </div>
                <div className={styles.FilterSelectWrapper}>
                  <h3>Interview round</h3>
                  <Select
                    className="SingleSelection"
                    onChange={() => {}}
                    placeholder="Select Interview round"
                    options={[
                      {
                        className: "vacancyFilterItem",
                        value: "hr",
                        label: "HR",
                      },
                      {
                        className: "vacancyFilterItem",
                        value: "techlead",
                        label: "Tech Lead",
                      },
                    ]}
                  />
                </div>
                <h3>Experience </h3>
                <div className={styles.ExperienceInputWrapper}>
                  <Slider
                    className={[
                      AddVacancyStyles.ExperienceInput,
                      styles.ExperienceInput,
                    ].join(" ")}
                    range={true}
                    defaultValue={[3, 5]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    // tooltip={{
                    //   open: true,
                    //   placement: "bottom",
                    // }}
                  />
                </div>
              </div>
              <div
                className={[
                  AnalyticsStyles.DashboardContent,
                  HrRoundStyles.HrRoundsContent,
                  styles.TableContent,
                ].join(" ")}
              >
                <div className={HrRoundStyles.DetailsWrapper}>
                  <div
                    className={[
                      HrRoundStyles.TableHeading,
                      HrRoundStyles.SelectedHeading,
                    ].join(" ")}
                  >
                    <h2>&nbsp;</h2>
                    <div
                      className={[
                        HrRoundStyles.SelectedSearchWrapper,
                        styles.SelectedSearchWrapper,
                      ].join(" ")}
                    >
                      <Search
                        className={[
                          ButtonStyles.search,
                          HrRoundStyles.search,
                          HrRoundStyles.SelectedSearch,
                        ].join(" ")}
                        placeholder="Search candidate"
                        onSearch={() => {}}
                      />
                    </div>
                  </div>
                  <div className={HrRoundStyles.tableWrapper}>
                    <Tables
                      columns={MappedCandidatesColumns}
                      data={MappedCandidatesData}
                      className={HrRoundStyles.HrRoundTable}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={[
                AnalyticsStyles.DashboardWrapper,
                VacancyStyles.HrRoundsWrapper,
                styles.CandidatesWrapper,
              ].join(" ")}
            >
              <div
                className={[
                  AnalyticsStyles.DashboardSide,
                  VacancyStyles.RoundsWrapper,
                  styles.AsideFiltersWrapper,
                ].join(" ")}
              >
                <div className={styles.FilterSelectWrapper}>
                  <h3>Techstack </h3>
                  <DropDownComponent
                    placeHolder={"Select techstack"}
                    itemDropDown={candidateSelectTechStack}
                    overlayClassName="candidatesVacancyDropdown"
                  />
                </div>

                <div className={styles.FilterSelectWrapper}>
                  <h3>Added By </h3>
                  <DropDownComponent
                    placeHolder={"Added by"}
                    itemDropDown={candidateSelectPoc}
                    overlayClassName="candidatesVacancyDropdown"
                  />
                </div>
                <div className={styles.DateFilterWrapper}>
                  <div className={styles.DateFilterOption}>
                    <h3>From Date</h3>
                    <DatePicker
                      placeholder={"06/01/23"}
                      className={styles.DatePick}
                      format={dateFormat}
                    />
                  </div>
                  <div className={styles.DateFilterOption}>
                    <h3>To Date</h3>
                    <DatePicker
                      placeholder={"06/01/23"}
                      className={styles.DatePick}
                      format={dateFormat}
                    />
                  </div>
                </div>
              </div>
              <div
                className={[
                  AnalyticsStyles.DashboardContent,
                  HrRoundStyles.HrRoundsContent,
                ].join(" ")}
              >
                <div className={HrRoundStyles.DetailsWrapper}>
                  <div
                    className={[
                      HrRoundStyles.TableHeading,
                      HrRoundStyles.SelectedHeading,
                      styles.SelectedHeading,
                    ].join(" ")}
                  >
                    {candidateSelect ? (
                      <MapCandidateModal>
                        <Button
                          className={[
                            AnalyticsStyles.greenBtn,
                            styles.BreadcrumbMapBtn,
                            "greenBtn",
                          ].join(" ")}
                        >
                          Map Candidates
                        </Button>
                      </MapCandidateModal>
                    ) : (
                      <MapCandidateModal>
                        <Button
                          disabled={true}
                          className={[
                            AnalyticsStyles.greenBtn,
                            styles.BreadcrumbMapBtn,
                            "greenBtn",
                          ].join(" ")}
                        >
                          Map Candidates
                        </Button>
                      </MapCandidateModal>
                    )}

                    <div
                      className={[
                        HrRoundStyles.SelectedSearchWrapper,
                        styles.SelectedSearchWrapper,
                      ].join(" ")}
                    >
                      <Search
                        className={[
                          ButtonStyles.search,
                          HrRoundStyles.search,
                          HrRoundStyles.SelectedSearch,
                        ].join(" ")}
                        placeholder="Search candidate"
                        onSearch={() => {}}
                      />
                    </div>
                  </div>
                  <div className={HrRoundStyles.tableWrapper}>
                    <Tables
                      columns={UnMappedCandidatesColumns}
                      data={UnMappedCandidatesData}
                      className={HrRoundStyles.HrRoundTable}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {vacancyFilter == "unmapped" ? (
            <div className={VacancyStyles.AddBtnWrapper}>
              <Link href="/addcandidate">
                <Button
                  className={["greenBtn", VacancyStyles.AddBtnMobile].join(" ")}
                >
                  <PlusOutlined />
                  Add Candidates
                </Button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Candidates;
