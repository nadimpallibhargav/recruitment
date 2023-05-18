import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, ConfigProvider, Divider, Rate } from "antd";

import Logo from "../../assets/images/logo.svg";

import TechroundStyles from "../techround/Techround.module.scss";
import styles from "./Techroundcandidateexited.module.scss";

const TechroundCandidateExited = () => {
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
          TechroundStyles.TechroundCandidateSection,
          styles.CandidateExited,
        ].join(" ")}
      >
        <div className="container">
          <div className={TechroundStyles.JoinWrapper}>
            <div className={styles.CandidateExitedWrapper}>
              <div className={TechroundStyles.LogoWrapper}>
                <Image src={Logo} alt="logo" />
              </div>
              <h1>You exited the interview</h1>
              <div className={TechroundStyles.JoinBtn}>
                <Link href="/techround-candidate-joined">
                  <a>
                    <Button className="greenBtn">
                      <span>Rejoin</span>
                    </Button>
                  </a>
                </Link>
              </div>
              <Divider className={styles.divider} />
              <div className={styles.experince}>
                <h2>How was your experience</h2>
                <Rate
                  className={[styles.Rating, "interviewRating"].join(" ")}
                  allowHalf
                  defaultValue={5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default TechroundCandidateExited;
