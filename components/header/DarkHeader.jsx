import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { EditOutlined } from "@ant-design/icons";
import { DatePicker, ConfigProvider, Select, Button } from "antd";
import EndCall from "../popup/EndCall";

import {
  MenuOutlined,
  CloseOutlined,
  PhoneOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import InterviewInvite from "../popup/InterviewInvite";

import Logo from "../../assets/images/circleLogo.svg";
import Recording from "../../assets/images/recording.svg";

import styles from "./Header.module.scss";
import { HeaderContext } from "../../context/Header";

const dateFormat = "DD MMM YYYY | HH:mm A";

const DarkHeader = ({ headerName }) => {
  const route = useRouter();
  const { questionBankEdit, setQuestionBankEdit } = useContext(HeaderContext);

  const [menuactive, setmenuactive] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    setmenuactive(false);
  }, []);
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
      <header className={[styles.headerSection, styles.DarkHeader].join(" ")}>
        <div className={[styles.header, "container"].join(" ")}>
          <div className={styles.headerWrapper}>
            <div
              className={styles.toogle}
              onClick={() => {
                setmenuactive(!menuactive);
              }}
            >
              <MenuOutlined />
            </div>
            <div className={styles.headerLogo}>
              <Link href="/signin">
                <a>
                  <Image alt="logo" src={Logo} />
                </a>
              </Link>
              {headerName == "techround-interviewer-joined" ? (
                <Select
                  className={styles.LanguageSelector}
                  defaultValue="React JS"
                  bordered={false}
                  popupClassName="darkDropdownPopup"
                  options={[
                    {
                      value: "HTML",
                      label: "HTML",
                      className: ["languageOption", styles.languageOption].join(
                        " "
                      ),
                    },
                    {
                      value: "CSS",
                      label: "CSS",
                      className: ["languageOption", styles.languageOption].join(
                        " "
                      ),
                    },
                    {
                      value: "Javascript",
                      label: "Javascript",
                      className: ["languageOption", styles.languageOption].join(
                        " "
                      ),
                    },
                  ]}
                />
              ) : null}
            </div>
            {headerName == "techround-candidate-joined" ? (
              <div className={styles.headerNavlinks}>
                <ul>
                  {route.pathname === "/interviewer-feedback" ? (
                    <>
                      <Button
                        className={[
                          styles.manageSlotsBtn,
                          "greenBtnOutline",
                        ].join(" ")}
                      >
                        <span>Cancel</span>
                      </Button>
                      <Button
                        className={[styles.manageSlotsBtn, "greenBtn"].join(
                          " "
                        )}
                      >
                        <span>Submit</span>
                      </Button>
                    </>
                  ) : (
                    <Link href="/techround-candidate-exited">
                      <a>
                        <li className={styles.EndCallLink}>
                          <PhoneOutlined /> End Interview
                        </li>
                      </a>
                    </Link>
                  )}
                </ul>
              </div>
            ) : route.pathname === "/qr-admin-question-bank-add-question" ? (
              <div className={styles.headerNavlinks}>
                <ul className={styles.QrAdminQuestionBankNav}>
                  {!questionBankEdit ? (
                    <li>
                      <Button
                        onClick={() => setQuestionBankEdit(true)}
                        className={["greenBtn", styles.manageSlotsBtn].join(
                          " "
                        )}
                      >
                        <EditOutlined />
                        Edit
                      </Button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Button
                          onClick={() => setQuestionBankEdit(false)}
                          className={[
                            "greenBtnOutline",
                            styles.manageSlotsBtn,
                          ].join(" ")}
                        >
                          Cancel
                        </Button>
                      </li>
                      <li>
                        <Button
                          onClick={() => setQuestionBankEdit(false)}
                          className={["greenBtn", styles.manageSlotsBtn].join(
                            " "
                          )}
                        >
                          Save
                        </Button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ) : (
              <div className={styles.headerNavlinks}>
                <ul>
                  <li className={styles.RecordingLink}>
                    <Image alt="recording" src={Recording} />
                    10:23
                  </li>
                  {headerName == "techround-candidate-joined" ||
                  headerName == "interview" ? (
                    <li className={styles.RescheduleLink}>
                      {selectedDate === "" ? (
                        <DatePicker
                          className={styles.ReschedulePicker}
                          placeholder="Reminder"
                          bordered={false}
                          showTime={{ use12Hours: true, format: "HH:mm A" }}
                          format={dateFormat}
                          onChange={onChange}
                          showNow={false}
                        />
                      ) : (
                        <DatePicker
                          className={[
                            styles.ReschedulePicker,
                            styles.ReschedulePickerActive,
                          ].join(" ")}
                          placeholder="Reminder"
                          bordered={false}
                          showTime={{ use12Hours: true, format: "HH:mm A" }}
                          defaultValue={dayjs("23 Feb 2023 | 2:20", dateFormat)}
                          format={dateFormat}
                          onChange={onChange}
                          showNow={false}
                        />
                      )}
                    </li>
                  ) : (
                    <InterviewInvite>
                      <li
                        className={[styles.EndCallLink, styles.InviteLink].join(
                          " "
                        )}
                      >
                        <UserAddOutlined />
                        Invite
                      </li>
                    </InterviewInvite>
                  )}

                  <EndCall>
                    <li className={styles.EndCallLink}>
                      <PhoneOutlined />
                      End Call
                    </li>
                  </EndCall>
                </ul>
              </div>
            )}
          </div>
        </div>
        {menuactive ? (
          <div className={styles.mobileMenuWrapper}>
            <div className={styles.mobileMenu}>
              <CloseOutlined
                onClick={() => {
                  setmenuactive(!menuactive);
                }}
                className={styles.mobileMenuClose}
              />
              {headerName == "techround-candidate-joined" ? (
                <div className={styles.MobileNavlinks}>
                  <ul>
                    {route.pathname === "/interviewer-feedback" ? (
                      <>
                        <li>
                          <Button
                            className={[
                              styles.manageSlotsBtn,
                              "greenBtnOutline",
                            ].join(" ")}
                          >
                            <span>Cancel</span>
                          </Button>
                        </li>
                        <li>
                          <Button
                            className={[styles.manageSlotsBtn, "greenBtn"].join(
                              " "
                            )}
                          >
                            <span>Submit</span>
                          </Button>
                        </li>
                      </>
                    ) : (
                      <li className={styles.EndCallLink}>
                        <PhoneOutlined /> End Interview
                      </li>
                    )}
                  </ul>
                </div>
              ) : route.pathname === "/qr-admin-question-bank-add-question" ? (
                <div className={styles.MobileNavlinks}>
                  <ul className={styles.QrAdminQuestionBankNav}>
                    <li>
                      <Button
                        className={["greenBtn", styles.manageSlotsBtn].join(
                          " "
                        )}
                      >
                        <EditOutlined />
                        Edit
                      </Button>
                    </li>

                    <li>
                      <Button
                        className={[
                          "greenBtnOutline",
                          styles.manageSlotsBtn,
                        ].join(" ")}
                      >
                        Cancel
                      </Button>
                    </li>
                    <li>
                      <Button
                        className={["greenBtn", styles.manageSlotsBtn].join(
                          " "
                        )}
                      >
                        Save
                      </Button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.MobileNavlinks}>
                  <ul>
                    <li className={styles.RecordingLink}>
                      <Image alt="recording" src={Recording} />
                      10:23
                    </li>
                    <li className={styles.RescheduleLink}>
                      {selectedDate === "" ? (
                        <DatePicker
                          className={styles.ReschedulePicker}
                          placeholder="Reminder"
                          bordered={false}
                          showTime={{ use12Hours: true, format: "HH:mm A" }}
                          format={dateFormat}
                          onChange={onChange}
                          showNow={false}
                        />
                      ) : (
                        <DatePicker
                          className={[
                            styles.ReschedulePicker,
                            styles.ReschedulePickerActive,
                          ].join(" ")}
                          placeholder="Reminder"
                          bordered={false}
                          showTime={{ use12Hours: true, format: "HH:mm A" }}
                          defaultValue={dayjs("23 Feb 2023 | 2:20", dateFormat)}
                          format={dateFormat}
                          onChange={onChange}
                          showNow={false}
                        />
                      )}
                    </li>
                    <EndCall>
                      <li className={styles.EndCallLink}>
                        <PhoneOutlined />
                        End Call
                      </li>
                    </EndCall>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </ConfigProvider>
  );
};

export default DarkHeader;
