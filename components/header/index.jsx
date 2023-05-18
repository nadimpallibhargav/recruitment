import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button, Dropdown } from "antd";
import {
  MenuOutlined,
  SettingOutlined,
  CloseOutlined,
  DownOutlined,
  BellOutlined,
} from "@ant-design/icons";
import HeaderSearch from "../popup/HeaderSearch";

import Logo from "../../assets/images/logo.svg";

import styles from "./Header.module.scss";
import ManageSlots from "../popup/ManageSlots";
import Notification from "./Notification";
import { showNotification } from "../toasters/toasters";

const items = [
  {
    className: "pofileList active",
    label: (
      <a>
        Jennie Roy <span className="label">Admin</span>
      </a>
    ),
    key: "0",
  },
  {
    className: "pofileList",
    label: <Link href={"/settings"}>Settings</Link>,
    key: "1",
  },
  {
    className: "pofileList",
    label: <a>Logout</a>,
    key: "2",
  },
];

const manageItems = [
  {
    key: "1",
    label: (
      <Link href="/qr-admin-manageuser">
        <a>User</a>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/qr-admin-manage-language">
        <a>Language</a>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/manage/interviewer-billing">
        <a>Interviewer Settlement</a>
      </Link>
    ),
  },
];

const Header = ({ headerName, headerClass }) => {
  const router = useRouter();

  const [menuactive, setmenuactive] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    setmenuactive(false);
  }, [pathname]);
  return (
    <header className={[styles.headerSection, headerClass].join(" ")}>
      <div className={[styles.header, "container"].join(" ")}>
        <div className={styles.headerWrapper}>
          {headerName == "home" ||
          headerName == "addvacancy" ||
          headerName == "addvacancy" ||
          headerName == "importcandidates" ||
          headerName == "hrround" ||
          headerName == "candidatedetails" ||
          headerName == "unmappeddetails" ||
          headerName == "manageuser" ||
          headerName == "mapcandidates" ? (
            <div
              className={styles.toogle}
              onClick={() => {
                setmenuactive(!menuactive);
              }}
            >
              <MenuOutlined />
            </div>
          ) : (
            ""
          )}
          <div className={styles.headerLogo}>
            <Link href="/signin">
              <a>
                <Image alt="logo" src={Logo} />
              </a>
            </Link>
          </div>
          {headerName == "home" ? (
            <>
              <div className={styles.headerNavlinks}>
                {(() => {
                  if (
                    router.pathname === "/dashboard" ||
                    router.pathname === "/qr-admin-clients" ||
                    router.pathname === "/qr-admin-clients-details" ||
                    router.pathname === "/qr-admin-interview" ||
                    router.pathname === "/qr-admin-candidatedetails" ||
                    router.pathname === "/qr-admin-question-bank" ||
                    router.pathname === "/qr-admin-manageuser" ||
                    router.pathname === "/qr-admin-manage-language" ||
                    router.pathname === "/manage/interviewer-billing" ||
                    router.pathname === "/qr-admin-clients-analytics" ||
                    router.pathname === "/qr-admin-clients-payment-history" ||
                    router.pathname === "/settings"
                  ) {
                    return (
                      <ul>
                        <li
                          className={
                            router.pathname === "/dashboard"
                              ? styles.active
                              : ""
                          }
                        >
                          <Link href="/dashboard">
                            <a>Dashboard</a>
                          </Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/qr-admin-clients" ||
                            router.pathname === "/qr-admin-clients-details" ||
                            router.pathname === "/qr-admin-clients-analytics" ||
                            router.pathname ===
                              "/qr-admin-clients-payment-history"
                              ? styles.active
                              : ""
                          }
                        >
                          <Link href="/qr-admin-clients">
                            <a>Clients</a>
                          </Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/qr-admin-interview" ||
                            router.pathname === "/qr-admin-candidatedetails"
                              ? styles.active
                              : ""
                          }
                        >
                          <Link href="/qr-admin-interview">
                            <a>Interview</a>
                          </Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/qr-admin-question-bank"
                              ? styles.active
                              : ""
                          }
                        >
                          <Link href="/qr-admin-question-bank">
                            <a>Question Bank</a>
                          </Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/qr-admin-manageuser" ||
                            router.pathname === "/qr-admin-manage-language" ||
                            router.pathname === "/manage/interviewer-billing"
                              ? styles.active
                              : ""
                          }
                        >
                          <Dropdown menu={{ items: manageItems }}>
                            <a className={styles.menuDropDown}>
                              Manage
                              <DownOutlined
                                className={styles.menuDropDownArrow}
                              />
                            </a>
                          </Dropdown>
                        </li>
                      </ul>
                    );
                  } else {
                    return (
                      <ul>
                        {router.pathname === "/interviewer" ||
                        router.pathname === "/interview-details" ||
                        router.pathname === "/interviewer-dashboard" ||
                        router.pathname === "/interviewer-earnings" ? (
                          <>
                            <li
                              className={
                                router.pathname === "/interviewer-dashboard"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/interviewer-dashboard">
                                <a>Dashboard</a>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/interviewer" ||
                                router.pathname === "/interview-details"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/interviewer">
                                <a>Interview</a>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/interviewer-earnings"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/interviewer-earnings">
                                <a>Earnings</a>
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li
                              className={
                                router.pathname === "/dashboard/client"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/dashboard/client">
                                <a>Dashboard</a>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/vacancy" ||
                                router.pathname === "/addvacancy" ||
                                router.pathname === "/analytics" ||
                                router.pathname === "/importcandidates" ||
                                router.pathname === "/hrround" ||
                                router.pathname === "/candidatedetails" ||
                                router.pathname === "/addcandidate" ||
                                router.pathname === "/mapcandidates"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/vacancy">
                                <a>Vacancy</a>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/candidates"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/candidates">
                                <a>Candidates</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/manage/interviewer-billing">
                                <a>Billing</a>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/manageuser"
                                  ? styles.active
                                  : ""
                              }
                            >
                              <Link href="/manageuser">
                                <a>Manage User</a>
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    );
                  }
                })()}
              </div>
              <div className={styles.headerProfile}>
                {router.pathname === "/interviewer-earnings" ? (
                  ""
                ) : (
                  <HeaderSearch />
                )}
                <a
                  onClick={() => {
                    setOpenNotification(true);
                    showNotification("success", "success");
                  }}
                  className={
                    openNotification ? styles.bellIconActive : styles.bellIcon
                  }
                >
                  {/* className={styles.bellIconActive}*/}
                  <BellOutlined />
                  <span className={styles.count}></span>
                </a>
                {router.pathname === "/interviewer" ||
                router.pathname === "/interview-details" ||
                router.pathname === "/interviewer-dashboard" ||
                router.pathname === "/interviewer-earnings" ? (
                  <ManageSlots>
                    <Button
                      className={[
                        styles.manageSlotsBtn,
                        "greenBtnOutline",
                      ].join(" ")}
                    >
                      <span>Manage slots</span>
                    </Button>
                  </ManageSlots>
                ) : null}

                <Dropdown
                  className={styles.profileDropdown}
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className={styles.profileIcon}
                  >
                    JR
                  </a>
                </Dropdown>
              </div>
            </>
          ) : (
            ""
          )}
          {headerName == "signin" ? (
            <div className={styles.headerSignin}>
              Don&apos;t have an account?
              <Link href="/signup">
                <a>Create an account</a>
              </Link>
            </div>
          ) : (
            ""
          )}
          {headerName == "signup" ? (
            <div className={styles.headerSignin}>
              Already have an account?
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            </div>
          ) : (
            ""
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
            <div className={styles.mobileProfile}>
              <a
                onClick={(e) => e.preventDefault()}
                className={styles.profileIcon}
              >
                JR
              </a>
            </div>
            <div className={styles.mobileSettings}>
              <span>Jennie Roy</span>
              <Link href="/settings">
                <SettingOutlined />
              </Link>
            </div>
            <div className={styles.MobileNavlinks}>
              <ul>
                {router.pathname === "/interviewer" ||
                router.pathname === "/interview-details" ||
                router.pathname === "/interviewer-dashboard" ||
                router.pathname === "/interviewer-earnings" ? (
                  <>
                    <li
                      className={
                        router.pathname === "/interviewer-dashboard"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/interviewer-dashboard">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/interviewer" ||
                        router.pathname === "/interview-details"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/interviewer">
                        <a>Interview</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/interviewer-earnings"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/interviewer-earnings">
                        <a>Earnings</a>
                      </Link>
                    </li>
                    <li>
                      <ManageSlots>
                        <Button
                          className={[
                            styles.manageSlotsBtn,
                            "greenBtnOutline",
                          ].join(" ")}
                        >
                          <span>Manage slots</span>
                        </Button>
                      </ManageSlots>
                    </li>
                  </>
                ) : router.pathname === "/dashboard" ||
                  router.pathname === "/qr-admin-clients" ||
                  router.pathname === "/qr-admin-clients-payment-history" ||
                  router.pathname === "/qr-admin-candidatedetails" ||
                  router.pathname === "/qr-admin-interview" ||
                  router.pathname === "/qr-admin-question-bank" ||
                  router.pathname === "/qr-admin-manage-language" ||
                  router.pathname === "/manage/interviewer-billing" ||
                  router.pathname === "/qr-admin-clients-analytics" ||
                  router.pathname === "/qr-admin-manageuser" ? (
                  <>
                    <li
                      className={
                        router.pathname === "/dashboard" ? styles.active : ""
                      }
                    >
                      <Link href="/dashboard">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/qr-admin-clients" ||
                        router.pathname === "/qr-admin-clients-details" ||
                        router.pathname === "/qr-admin-clients-analytics" ||
                        router.pathname === "/qr-admin-clients-payment-history"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/qr-admin-clients">
                        <a>Clients</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/qr-admin-interview" ||
                        router.pathname === "/qr-admin-candidatedetails"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/qr-admin-interview">
                        <a>Interview</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/qr-admin-question-bank"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/qr-admin-question-bank">
                        <a>Question Bank</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/qr-admin-manageuser" ||
                        router.pathname === "/qr-admin-manage-language" ||
                        router.pathname === "/manage/interviewer-billing"
                          ? styles.active
                          : ""
                      }
                    >
                      <Dropdown menu={{ items: manageItems }}>
                        <a className={styles.menuDropDown}>
                          Manage
                          <DownOutlined className={styles.menuDropDownArrow} />
                        </a>
                      </Dropdown>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className={
                        router.pathname === "/dashboard/client"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/dashboard/client">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/vacancy" ||
                        router.pathname === "/addvacancy" ||
                        router.pathname === "/analytics" ||
                        router.pathname === "/importcandidates" ||
                        router.pathname === "/hrround" ||
                        router.pathname === "/candidatedetails" ||
                        router.pathname === "/addcandidate" ||
                        router.pathname === "/mapcandidates"
                          ? styles.active
                          : ""
                      }
                    >
                      <Link href="/vacancy">
                        <a>Vacancy</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/candidates" ? styles.active : ""
                      }
                    >
                      <Link href="/candidates">
                        <a>Candidates</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/manage/interviewer-billing">
                        <a>Billing</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/manageuser" ? styles.active : ""
                      }
                    >
                      <Link href="/manageuser">
                        <a>Manage User</a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <ul className={styles.Logout}>
              <li>
                <Link href="/signin">
                  <a>Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <Notification open={openNotification} onClose={setOpenNotification} />
    </header>
  );
};

export default Header;
