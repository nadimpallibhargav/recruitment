import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Steps,
  theme,
  Tabs,
  Upload,
  Breadcrumb,
  Form,
  Radio,
  Select,
  ConfigProvider,
  Checkbox,
  Slider,
} from "antd";
import {
  LeftOutlined,
  CloudUploadOutlined,
  UserOutlined,
  CloseCircleOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import InputComponent from "../../components/input/InputComponent";
import JobDescription from "../../components/jobdescription/JobDescription";
import PointOfContact from "../../components/popup/AddPoc";
import QuillComponent from "../../components/quill/QuillComponent";
import {
  hrRound,
  techRoundOne,
  techRoundTwo,
  SuggestCandidates,
  techStackOptions,
  pocOptions,
} from "../../data/addVacancy/addVacancy";
import AddLocation from "../../components/popup/AddLocation";

import JobSites from "../../assets/images/addvacancy/jobSites.svg";

import styles from "./Addvacancy.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import JobDescriptionStyles from "../../components/jobdescription/Jobdescription.module.scss";

const experienceFormatter = (value) => `${value} yrs`;
const packageFormatter = (value) => `${value} L`;
const weekFormatter = (value) => `${value} Days`;

const AddVacancy = () => {
  const [current, setCurrent] = useState(0);

  // work preference tabs click handle
  const [workPreferTabs, setWorkPreferTabs] = useState("1");
  const handleWorkPreferTabs = (key) => {
    setWorkPreferTabs(key);
  };

  const next = () => {
    setCurrent(current + 1);
    setWorkPreferTabs("1");
  };
  const prev = () => {
    setCurrent(current - 1);
    setWorkPreferTabs("1");
  };

  const [taboneradio, setTaboneradio] = useState(1);
  const onChangeTabOneRadio = (e) => {
    setTaboneradio(e.target.value);
  };

  const [tabtworadio, setTabtworadio] = useState(1);
  const onChangeTabTwoRadio = (e) => {
    setTabtworadio(e.target.value);
  };

  const [tabthreeradio, setTabthreeradio] = useState(1);
  const onChangeTabThreeRadio = (e) => {
    setTabthreeradio(e.target.value);
  };

  const [fetchdescription, SetFetchdescription] = useState(false);

  const [fileList, setFileList] = useState([]);

  const { Dragger } = Upload;

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: "",
    onChange: handleChange,
    listType: "picture",
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const [experienceInput, setExperienceInput] = useState([0, 2]);
  const onChangeExperience = (newValue) => {
    setExperienceInput(newValue);
  };

  // steps heading
  const AddVacancySteps = [
    {
      icon: <UserOutlined />,
      title: (
        <a
          onClick={() => {
            setCurrent(0);
            setWorkPreferTabs("1");
          }}
        >
          <div className={styles.StepsTitle}>
            <h3>Job details</h3>
            <h4>Add details to add new vacancy</h4>
          </div>
        </a>
      ),
    },
    {
      icon: <UserOutlined />,
      title: (
        <a
          onClick={() => {
            setCurrent(1);
            setWorkPreferTabs("1");
          }}
        >
          <div className={styles.StepsTitle}>
            <h3>Preferences &amp; Skills</h3>
            <h4>Select work preferences and skill tests</h4>
          </div>
        </a>
      ),
    },
    {
      icon: <UserOutlined />,
      title: (
        <a
          onClick={() => {
            setCurrent(2);
            setWorkPreferTabs("1");
          }}
        >
          <div className={styles.StepsTitle}>
            <h3>Add candidates</h3>
            <h4>Select candidates to process interview</h4>
          </div>
        </a>
      ),
    },
  ];

  // tabs inner data
  const StepOneTabItems = [
    {
      key: "1",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabOneRadio} value={taboneradio}>
            <Radio className={styles.JobTabsRadio} value={1}>
              Upload JD
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <Dragger className={styles.JobUpload} {...props} fileList={fileList}>
            {fileList.length < 1 ? (
              <>
                <div className={styles.JobUploadText}>
                  <CloudUploadOutlined className={styles.uploadIcon} />
                  <p>Click to browse or drag and drop here</p>
                  <p>or</p>
                  <a className={[styles.uploadBtn, "greenBtn"].join(" ")}>
                    Upload Description
                  </a>
                  <p className={styles.filesType}>Supported files PDF, Doc</p>
                </div>
              </>
            ) : (
              ""
            )}
          </Dragger>
          <p className={[styles.uploadError, "formMainError"].join(" ")}>
            <CloseCircleOutlined className={styles.uploadCloseIcon} />
            Upload failed: format not supported
          </p>
        </ConfigProvider>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabOneRadio} value={taboneradio}>
            <Radio className={styles.JobTabsRadio} value={2}>
              Copy paste JD
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <div className={JobDescriptionStyles.JobDescription}>
            <DeleteOutlined
              className={JobDescriptionStyles.DeleteIcon}
              onClick={() => SetFetchdescription()}
            />
            <QuillComponent />
          </div>
        </ConfigProvider>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabOneRadio} value={taboneradio}>
            <Radio className={styles.JobTabsRadio} value={3}>
              From link
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <>
            {fetchdescription ? (
              <JobDescription SetFetchdescription={SetFetchdescription} />
            ) : (
              <div className={styles.JobFormLink}>
                <div className={styles.JobFormLinkText}>
                  <Form
                    name="pastelink"
                    onFinish={() => {}}
                    onFinishFailed={() => {}}
                    scrollToFirstError
                    className={styles.FetchLinkForm}
                  >
                    <div
                      className={[
                        FormStyles.inputWrapper,
                        styles.inputWrapper,
                      ].join(" ")}
                    >
                      <Form.Item
                        name="pastelink"
                        className={styles.FetchLinkFormItem}
                        rules={[
                          { required: true, message: "Please paste link" },
                        ]}
                      >
                        <InputComponent
                          type="text"
                          placeholder="Copy paste link from supported sites"
                        />
                      </Form.Item>
                    </div>
                    <a
                      className={[styles.FetchLinkBtn, "greenBtn"].join(" ")}
                      onClick={() => {
                        SetFetchdescription(true);
                      }}
                    >
                      <span>Fetch from link</span>
                    </a>
                  </Form>

                  <p
                    className={[styles.uploadError, "formMainError"].join(" ")}
                  >
                    Coudn&apos;t fetch the link
                  </p>

                  <div>
                    <h3>Supported sites</h3>
                    <div>
                      <Image alt="job" src={JobSites} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </ConfigProvider>
      ),
    },
  ];
  const StepTwoTabItems = [
    {
      key: "1",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabTwoRadio} value={tabtworadio}>
            <Radio className={styles.JobTabsRadio} value={1}>
              Work from home
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <div className={styles.WorkFromHome}>
            <div className={styles.Experience}>
              <div className={styles.ExperienceInputWrapper}>
                <label data="This" className="tittle">
                  Experience *
                </label>
                {current == 1 ? (
                  <>
                    {workPreferTabs === "1" ? (
                      <Slider
                        range={true}
                        defaultValue={[2, 4]}
                        onChange={onChangeExperience}
                        onAfterChange={() => {}}
                        min={0}
                        max={10}
                        tooltip={{
                          open: true,
                          placement: "bottom",
                          formatter: experienceFormatter,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.ExperienceInputWrapper}>
                <label>Salary package *</label>
                {workPreferTabs === "1" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    range={true}
                    defaultValue={[0, 2]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: packageFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.SuggestCandidates}>
              <Checkbox.Group
                className={styles.SuggestCheckBox}
                options={SuggestCandidates}
                onChange={() => {}}
              />
            </div>
          </div>
        </ConfigProvider>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabTwoRadio} value={tabtworadio}>
            <Radio className={styles.JobTabsRadio} value={2}>
              Work from office
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <div className={styles.WorkFromHome}>
            <div className={styles.WorkFromHomeLocation}>
              <Form className={[FormStyles.form, styles.form].join(" ")}>
                <label>
                  Office Location *
                  <AddLocation />
                </label>
                <Select
                  className={styles.LocationSelect}
                  onChange={() => {}}
                  placeholder="Select location"
                  options={[
                    {
                      className: "vacancyFilterItem",
                      value: "Bangalore",
                      label: "Bangalore",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Chennai",
                      label: "Chennai",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Hyderabad",
                      label: "Hyderabad",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Pune",
                      label: "Pune",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Mumbai",
                      label: "Mumbai",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Kolkata",
                      label: "Kolkata",
                    },
                  ]}
                />
              </Form>
            </div>
            <div className={styles.Experience}>
              <div className={styles.ExperienceInputWrapper}>
                <label>Experience *</label>
                {workPreferTabs === "2" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    range={true}
                    defaultValue={[3, 5]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: experienceFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.ExperienceInputWrapper}>
                <label>Salary package *</label>
                {workPreferTabs === "2" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    range={true}
                    defaultValue={[3, 5]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: packageFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.SuggestCandidates}>
              <Checkbox.Group
                className={styles.SuggestCheckBox}
                options={SuggestCandidates}
                onChange={() => {}}
              />
            </div>
          </div>
        </ConfigProvider>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <Radio.Group onChange={onChangeTabTwoRadio} value={tabtworadio}>
            <Radio className={styles.JobTabsRadio} value={3}>
              Hybrid
            </Radio>
          </Radio.Group>
        </span>
      ),
      children: (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <div className={styles.WorkFromHome}>
            <div className={styles.WorkFromHomeLocation}>
              <Form className={[FormStyles.form, styles.form].join(" ")}>
                <label>
                  Office Location *
                  <AddLocation />
                </label>
                <Select
                  className={styles.LocationSelect}
                  onChange={() => {}}
                  placeholder="Select location"
                  options={[
                    {
                      className: "vacancyFilterItem",
                      value: "Bangalore",
                      label: "Bangalore",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Chennai",
                      label: "Chennai",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Hyderabad",
                      label: "Hyderabad",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Pune",
                      label: "Pune",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Mumbai",
                      label: "Mumbai",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Kolkata",
                      label: "Kolkata",
                    },
                  ]}
                />
              </Form>
            </div>
            <div className={styles.Experience}>
              <div className={styles.ExperienceInputWrapper}>
                <label>Experience * </label>
                {workPreferTabs === "3" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    range={true}
                    defaultValue={[2, 5]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: experienceFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.ExperienceInputWrapper}>
                <label>Salary package *</label>
                {workPreferTabs === "3" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    range={true}
                    defaultValue={[3, 9]}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    min={0}
                    max={10}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: packageFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.ExperienceInputWrapper}>
                <label>Days to work at office in a week *</label>
                {workPreferTabs === "3" ? (
                  <Slider
                    className={styles.ExperienceInput}
                    min={0}
                    max={7}
                    defaultValue={6}
                    onChange={() => {}}
                    onAfterChange={() => {}}
                    tooltip={{
                      open: true,
                      placement: "bottom",
                      formatter: weekFormatter,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.SuggestCandidates}>
              <Checkbox.Group
                className={styles.SuggestCheckBox}
                options={SuggestCandidates}
                onChange={() => {}}
              />
            </div>
          </div>
        </ConfigProvider>
      ),
    },
  ];

  const { token } = theme.useToken();
  // form
  const [form] = Form.useForm();
  // AddVacancySteps

  const items = AddVacancySteps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

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
                  <Breadcrumb.Item>Add vacancy</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/vacancy">
                    <a>
                      <LeftOutlined
                        className={[styles.backBtn, "backBtn"].join(" ")}
                      />
                    </a>
                  </Link>
                  Add Vacancy
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.JobWrapper}>
            <div className={styles.JobContent}>
              <div className={styles.JobSteps}>
                <Steps
                  className={[styles.AddJobSteps, styles.StepsDesk].join(" ")}
                  type="navigation"
                  current={current}
                  items={items}
                />
                <div
                  className={[styles.AddJobSteps, styles.StepsMobile].join(" ")}
                >
                  <div className={styles.StepsTitleWrapper}>
                    <div className={styles.StepsTitle}>
                      {current == 0 ? (
                        <h3
                          className={[
                            styles.StepsTitleHeading,
                            styles.StepsTitleHeadingOne,
                          ].join(" ")}
                        >
                          Job details
                        </h3>
                      ) : (
                        " "
                      )}
                      {current == 1 ? (
                        <h3
                          className={[
                            styles.StepsTitleHeading,
                            styles.StepsTitleHeadingTwo,
                          ].join(" ")}
                        >
                          Preferences & Skills
                        </h3>
                      ) : (
                        " "
                      )}
                      {current == 2 ? (
                        <h3
                          className={[
                            styles.StepsTitleHeading,
                            styles.StepsTitleHeadingThree,
                          ].join(" ")}
                        >
                          Add candidates
                        </h3>
                      ) : (
                        " "
                      )}
                    </div>
                    <label className={styles.stepsIndicator}>
                      {current + 1} / 3
                    </label>
                  </div>
                </div>

                <div className={styles.JobDescriptionWrapper}>
                  {current === 0 ? (
                    <>
                      <h2>Job Description</h2>
                      <div className={styles.JobDescription}>
                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimary: "#fff",
                            },
                          }}
                        >
                          <Tabs
                            className={styles.JobTabs}
                            items={StepOneTabItems}
                            onChange={() => {}}
                          />
                        </ConfigProvider>
                      </div>
                      <div className={styles.JobDetails}>
                        <Form
                          form={form}
                          name="addvacancy"
                          onFinish={() => {}}
                          onFinishFailed={() => {}}
                          scrollToFirstError
                          className={[FormStyles.form, styles.form].join(" ")}
                          initialValues={{ userlastname: "Select" }}
                        >
                          <h2>Job Details </h2>
                          <div className={FormStyles.inputGroup}>
                            <div
                              className={[
                                FormStyles.inputWrapper,
                                styles.inputWrapper,
                              ].join(" ")}
                            >
                              <label>Job Title *</label>
                              <Form.Item
                                name="userfirstname"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter first name *",
                                  },
                                ]}
                              >
                                <InputComponent
                                  type="text"
                                  placeholder="Enter job title"
                                />
                              </Form.Item>
                            </div>
                            <div
                              className={[
                                FormStyles.inputWrapper,
                                styles.inputWrapper,
                              ].join(" ")}
                            >
                              <label>Techstack *</label>
                              <Select
                                mode="multiple"
                                allowClear
                                placeholder="Select techstack"
                                defaultValue={[]}
                                className={styles.select}
                                onChange={() => {}}
                                options={techStackOptions}
                              />
                            </div>
                            <div
                              className={[
                                FormStyles.inputWrapper,
                                styles.inputWrapper,
                              ].join(" ")}
                            >
                              <label>Position Count * </label>
                              <Form.Item
                                name="userorgname"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter organization name *",
                                  },
                                ]}
                              >
                                <InputComponent
                                  type="text"
                                  placeholder="Enter position count"
                                />
                              </Form.Item>
                            </div>
                            <div
                              className={[
                                FormStyles.inputWrapper,
                                styles.inputWrapper,
                              ].join(" ")}
                            >
                              <label>
                                Point of contact * <PointOfContact />
                              </label>
                              <Select
                                mode="multiple"
                                allowClear
                                placeholder="Select point of contact"
                                defaultValue={[]}
                                className={styles.select}
                                onChange={() => {}}
                                options={pocOptions}
                              />
                            </div>
                          </div>
                          <h2>Interview Rounds * </h2>
                          <Radio.Group
                            onChange={() => {}}
                            className={styles.JobRounds}
                          >
                            <Radio
                              className={styles.RadioBtn}
                              value="One Tech round"
                            >
                              One Tech round
                            </Radio>
                            <Radio
                              className={styles.RadioBtn}
                              value="Two Tech round"
                            >
                              Two Tech round
                            </Radio>
                            <Radio
                              className={styles.RadioBtn}
                              value="HR One Tech round"
                            >
                              HR &amp; One Tech round
                            </Radio>
                            <Radio
                              className={styles.RadioBtn}
                              value="HR Two Tech round"
                            >
                              HR &amp; Two Tech round
                            </Radio>
                          </Radio.Group>
                        </Form>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {current === 1 ? (
                    <>
                      <h2>Work preference</h2>
                      <div className={styles.JobDescription}>
                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimary: "#fff",
                            },
                          }}
                        >
                          <Tabs
                            className={styles.JobTabs}
                            items={StepTwoTabItems}
                            defaultActiveKey="1"
                            onChange={handleWorkPreferTabs}
                          />
                        </ConfigProvider>
                      </div>
                      <h2>Skill test - HR Round</h2>
                      <div className={styles.JobSkills}>
                        <Checkbox.Group
                          options={hrRound}
                          onChange={() => {}}
                          className={[
                            styles.JobSkillsCheckbox,
                            "JobSkillsCheckbox",
                          ].join(" ")}
                        />
                      </div>
                      <h2>Skill test - Technical Round 1</h2>
                      <div className={styles.JobSkills}>
                        <Checkbox.Group
                          options={techRoundOne}
                          onChange={() => {}}
                          className={[
                            styles.JobSkillsCheckbox,
                            "JobSkillsCheckbox",
                          ].join(" ")}
                        />
                      </div>
                      <h2>Skill test - Technical Round 2</h2>
                      <div className={styles.JobSkills}>
                        <Checkbox.Group
                          options={techRoundTwo}
                          onChange={() => {}}
                          className={[
                            styles.JobSkillsCheckbox,
                            "JobSkillsCheckbox",
                          ].join(" ")}
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {current === 2 ? (
                    <>
                      <h2>
                        You can choose candidates by using these 2 options
                      </h2>
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
                  ) : (
                    ""
                  )}
                </div>
                <div className={styles.JobNextBtn}>
                  {current < AddVacancySteps.length - 1 && (
                    <>
                      <Button className="greenBtnOutline" onClick={() => {}}>
                        Save as Draft
                      </Button>
                      <Button
                        className="greenBtn"
                        onClick={() => {
                          next();
                          setWorkPreferTabs("1");
                        }}
                      >
                        Save &amp; Continue
                      </Button>
                    </>
                  )}
                  {current === AddVacancySteps.length - 1 && (
                    <>
                      <Button className="greenBtnOutline" onClick={() => {}}>
                        Save as Draft
                      </Button>
                      <Button className="greenBtn" onClick={() => {}}>
                        Publish
                      </Button>
                    </>
                  )}
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
