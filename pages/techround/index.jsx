import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, ConfigProvider } from "antd";
import JoinPreview from "../../components/InterviewScreen/joinpreview/JoinPreview";

import Logo from "../../assets/images/logo.svg";

import styles from "./Techround.module.scss";

const TechRound = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={styles.TechroundCandidateSection}>
        <div className="container">
          <div className={styles.JoinWrapper}>
            <div>
              <div className={styles.LogoWrapper}>
                <Image src={Logo} alt="logo" />
              </div>
              <JoinPreview />
              <h3>Joining as</h3>
              <h4>Bessie Cooper</h4>
              <div className={styles.JoinBtn}>
                <Link href="/techround-candidate-joined">
                  <a>
                    <Button className="greenBtn">
                      <span>Join Interview</span>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default TechRound;
