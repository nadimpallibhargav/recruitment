import { React, useState } from "react";
import Link from "next/link";
import { Form, Select, ConfigProvider } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import InputComponent from "../../../components/input/InputComponent";
import SubmitButton from "../../../components/buttons/SubmitButton";

import SigninStyles from "../../signin/Signin.module.scss";
import styles from "./Setorganizationprofile.module.scss";
import FormStyles from "../../../components/forms/Form.module.scss";
import AddVacancyStyles from "../../addvacancy/Addvacancy.module.scss";

const SetOrganizationProfile = () => {
  const [form] = Form.useForm();
  const [location, setLocation] = useState(false);
  const [locationList, setLocationList] = useState([]);

  const addNewLocation = () => {
    const locationDetail = { location: "", organization: "" };
    setLocationList([...locationList, locationDetail]);
  };
  const handleRemoveLocation = (index) => {
    const temp = [...locationList];
    temp.splice(index, 1);
    setLocationList(temp);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09b48b",
        },
      }}
    >
      <section
        className={[
          SigninStyles.signinSection,
          styles.SetOrganizationSection,
        ].join(" ")}
      >
        <div className="container">
          <div
            className={[
              SigninStyles.signinFormWrapper,
              styles.SetOrganizationFormWrapper,
            ].join(" ")}
          >
            <div className={[FormStyles.form, styles.form].join(" ")}>
              <div className={FormStyles.formHeading}>
                <h1>Set organization profile</h1>
                <h2>Enter the fields below to set organization profile</h2>
              </div>
              <Form
                form={form}
                name="signup"
                onFinish={() => {}}
                onFinishFailed={() => {}}
                className={AddVacancyStyles.form}
                scrollToFirstError
              >
                <div
                  className={[FormStyles.inputWrapper, styles.inputGroup].join(
                    " "
                  )}
                >
                  <label>Organization name *</label>
                  <Form.Item
                    name="userfirstname"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Organization Name",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Organization name"
                    />
                  </Form.Item>
                </div>
                <div
                  className={[
                    FormStyles.inputGroup,
                    styles.inputGroup,
                    styles.LocationInputGroup,
                  ].join(" ")}
                >
                  <div className={FormStyles.inputWrapper}>
                    <label>Pincode</label>
                    <Form.Item
                      name="pincodeone"
                      rules={[
                        { required: true, message: "Please Enter Pincode" },
                      ]}
                    >
                      <InputComponent type="text" placeholder="Pincode" />
                    </Form.Item>
                  </div>
                  <div className={FormStyles.inputWrapper}>
                    <label>Location 1 *</label>
                    <Form.Item
                      name="locationone"
                      rules={[
                        { required: true, message: "Please Select Location 1" },
                      ]}
                    >
                      <Select
                        onChange={() => {}}
                        placeholder="Select City"
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
                        ]}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div>
                  <label>Organization address *</label>
                  <Form.Item
                    name="organizationoneaddress"
                    className={styles.inputWrapper}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter organization address",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Enter organization address"
                    />
                  </Form.Item>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>GSTIN *</label>
                  <Form.Item
                    name="organizationtwoaddress"
                    className={styles.inputWrapper}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter GSTIN Number",
                      },
                    ]}
                  >
                    <InputComponent type="text" placeholder="GSTIN Number" />
                  </Form.Item>
                </div>
                {locationList.length
                  ? locationList.map((item, index) => {
                      return (
                        <div key={index}>
                          <div
                            className={[
                              FormStyles.inputWrapper,
                              styles.LocationTwo,
                            ].join(" ")}
                          >
                            <div
                              className={[
                                FormStyles.inputGroup,
                                styles.inputGroup,
                                styles.LocationInputGroup,
                              ].join(" ")}
                            >
                              <div className={FormStyles.inputWrapper}>
                                <label>Pincode {index + 2} </label>
                                <Form.Item
                                  name={`pincode` + index}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please Enter Pincode",
                                    },
                                  ]}
                                >
                                  <InputComponent
                                    type="text"
                                    placeholder="Pincode"
                                  />
                                </Form.Item>
                              </div>
                              <div
                                className={[FormStyles.inputWrapper].join(" ")}
                              >
                                <label>
                                  Location {index + 2} *
                                  <a
                                    onClick={() => handleRemoveLocation(index)}
                                    className={styles.RemoveBtn}
                                  >
                                    <DeleteOutlined /> Remove location{" "}
                                    {index + 2}
                                  </a>
                                </label>

                                <Form.Item
                                  name="locationtwo"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please Select Location 2",
                                    },
                                  ]}
                                >
                                  <Select
                                    onChange={() => {}}
                                    placeholder="Select City"
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
                                    ]}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                          <div className={FormStyles.inputWrapper}>
                            <label>Organization address *</label>
                            <Form.Item
                              name="organizationtwoaddress"
                              className={styles.inputWrapper}
                              rules={[
                                {
                                  required: true,
                                  message: "Please Enter Organization Address",
                                },
                              ]}
                            >
                              <InputComponent
                                type="text"
                                placeholder="Enter organization address"
                              />
                            </Form.Item>
                          </div>
                          <div className={FormStyles.inputWrapper}>
                            <label>GSTIN (optional)</label>
                            <Form.Item
                              name="organizationtwoaddress"
                              className={styles.inputWrapper}
                              rules={[
                                {
                                  required: true,
                                  message: "Please Enter GSTIN Number",
                                },
                              ]}
                            >
                              <InputComponent
                                type="text"
                                placeholder="GSTIN Number"
                              />
                            </Form.Item>
                          </div>
                        </div>
                      );
                    })
                  : ""}
                <div className={styles.inputGroup}>
                  <a
                    className={styles.AddLocationBtn}
                    onClick={() => addNewLocation()}
                  >
                    <PlusOutlined /> Add Location
                  </a>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>Organization domain URL</label>
                  <Form.Item
                    name="organizationdomain"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Organization Domain URL",
                      },
                    ]}
                  >
                    <InputComponent type="text" placeholder="Copy paste URL" />
                  </Form.Item>
                </div>
                <div className={styles.buttons}>
                  {/* remove link tag for submit button to enable validation */}
                  <Link href="/signin">
                    <a>
                      <SubmitButton text="Set Profile" htmlType="submit" />
                    </a>
                  </Link>
                  <Link href="/vacancy">
                    <a className={styles.SkipBtn}>Skip</a>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default SetOrganizationProfile;
