import { Button, Progress } from "antd";
import { RightOutlined } from "@ant-design/icons";

export const cardData = [
  {
    title: "Open Vacancy",
    content: 19,
  },
  {
    title: "Total Position",
    content: 20,
  },
  {
    title: "Shortlisted Candidates",
    content: 36,
  },
];

export const interviewsData = [
  // {
  //   round: "HR",
  //   day: "Mon",
  //   count: 0,
  // },
  // {
  //   round: "HR",
  //   day: "Tue",
  //   count: 0,
  // },
  // {
  //   round: "HR",
  //   day: "Thu",
  //   count: 0,
  // },
  // {
  //   round: "HR",
  //   day: "Fri",
  //   count: 0,
  // },
  // {
  //   round: "HR",
  //   day: "Sat",
  //   count: 0,
  // },
  // {
  //   round: "HR",
  //   day: "Sun",
  //   count: 0,
  // },
  {
    round: "Technical Round 1",
    day: "Mon",
    count: 10,
  },
  {
    round: "Technical Round 1",
    day: "Tue",
    count: 14,
  },
  {
    round: "Technical Round 1",
    day: "Thu",
    count: 16,
  },
  {
    round: "Technical Round 1",
    day: "Fri",
    count: 2,
  },
  {
    round: "Technical Round 1",
    day: "Sat",
    count: 0,
  },
  {
    round: "Technical Round 1",
    day: "Sun",
    count: 0,
  },
  {
    round: "Technical Round 2",
    day: "Mon",
    count: 4,
  },
  {
    round: "Technical Round 2",
    day: "Tue",
    count: 19,
  },
  {
    round: "Technical Round 2",
    day: "Thu",
    count: 8,
  },
  {
    round: "Technical Round 2",
    day: "Fri",
    count: 3,
  },
  {
    round: "Technical Round 2",
    day: "Sat",
    count: 0,
  },
  {
    round: "Technical Round 2",
    day: "Sun",
    count: 0,
  },
];

export const candidatesData = [
  {
    round: "HR Round",
    count: 34,
  },
  {
    round: "Technical round 1",
    count: 28,
  },
  {
    round: "Technical round 2",
    count: 22,
  },
  {
    round: "Rejected candidates",
    count: 21,
  },
  {
    round: "Shortlisted candidates",
    count: 13,
  },
];

export const vacancyData = [
  {
    vacancy: (
      <div className="wrapper">
        <h4>Angular / Javascript / HTML / CSS - 2 to 4 years</h4>
        <p>Front End Developer</p>
      </div>
    ),
    position: 2,
    selected: 4,
    rejected: 8,
  },
  {
    vacancy: (
      <>
        <h4>Node js / DBMS ... - 3 to 4 years</h4>
        <p>Back End Developer</p>
      </>
    ),
    position: 2,
    selected: 4,
    rejected: 8,
  },
  {
    vacancy: (
      <>
        <h4>ReactJS / HTML - 3 to 4 years</h4>
        <p>Front End Developer</p>
      </>
    ),
    position: 2,
    selected: 4,
    rejected: 8,
  },
  {
    vacancy: (
      <>
        <h4>Angular / Javascript / HTML / CSS - 2 to 4 years</h4>
        <p>Front End Developer</p>
      </>
    ),
    position: 2,
    selected: 4,
    rejected: 8,
  },
  {
    vacancy: (
      <>
        <h4>Python / DBMS ... - 2 to 4 years</h4>
        <p>Back End Developer</p>
      </>
    ),
    position: 2,
    selected: 4,
    rejected: 8,
  },
];

export const selectedCandidatesData = [
  {
    name: (
      <>
        <h4>Bessie Cooper</h4>
        <p>Front end developer - React Js... - 1 to 2 years </p>
      </>
    ),
    rating: (
      <Progress
        type="circle"
        percent={85}
        format={(percent) => `${percent}`}
        width={36}
      />
    ),
    aciton: <Button icon={<RightOutlined />} type="text" />,
  },
  {
    name: (
      <>
        <h4>Marvin McKinney</h4>
        <p>Front end developer - React Js... - 1 to 2 years </p>
      </>
    ),
    rating: (
      <Progress
        type="circle"
        percent={95}
        format={(percent) => `${percent}`}
        width={36}
      />
    ),
    aciton: <Button icon={<RightOutlined />} type="text" />,
  },
  {
    name: (
      <>
        <h4>John Smith</h4>
        <p>Front end developer - React Js... - 1 to 2 years </p>
      </>
    ),
    rating: (
      <Progress
        type="circle"
        percent={65}
        format={(percent) => `${percent}`}
        width={36}
      />
    ),
    aciton: <Button icon={<RightOutlined />} type="text" />,
  },
  {
    name: (
      <>
        <h4>Ralph Edwards</h4>
        <p>Front end developer - React Js... - 1 to 2 years </p>
      </>
    ),
    rating: (
      <Progress
        type="circle"
        percent={70}
        format={(percent) => `${percent}`}
        width={36}
      />
    ),
    aciton: <Button icon={<RightOutlined />} type="text" />,
  },
  {
    name: (
      <>
        <h4>Ralph Edwards</h4>
        <p>Front end developer - React Js... - 1 to 2 years </p>
      </>
    ),
    rating: (
      <Progress
        type="circle"
        percent={70}
        format={(percent) => `${percent}`}
        width={36}
      />
    ),
    aciton: <Button icon={<RightOutlined />} type="text" />,
  },
];
