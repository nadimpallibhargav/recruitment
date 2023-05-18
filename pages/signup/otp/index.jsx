import React, { useState } from "react";
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import OtpInput from "../../../components/input/OtpInput";
import InputComponent from "../../../components/input/InputComponent";

import styles from "../../signin/Signin.module.scss";
import OtpStyles from "./Otp.module.scss";
import FormStyles from "../../../components/forms/Form.module.scss";

const Otp = () => {
  const [edit, setEdit] = useState(false);

  return (
    <section className={[styles.signinSection, OtpStyles.otpSection].join(" ")}>
      <div className="container">
        <div
          className={[styles.signinFormWrapper, OtpStyles.otpFormWrapper].join(
            " "
          )}
        >
          <div className={FormStyles.form}>
            <div className={FormStyles.formHeading}>
              <h1>Please enter the OTP to verify your account</h1>
              {!edit ? (
                <h2
                  className={[
                    OtpStyles.otpMobile,
                    OtpStyles.otpMobileHeading,
                  ].join(" ")}
                >
                  OTP has been sent to your mobile number
                  <span className={OtpStyles.number}>
                    9987865324
                    <a
                      onClick={() => {
                        setEdit(!edit);
                      }}
                    >
                      <EditOutlined
                        className={["editicon", OtpStyles.EditIcon].join(" ")}
                      />
                    </a>
                  </span>
                </h2>
              ) : (
                ""
              )}
              {edit ? (
                <h2
                  className={[OtpStyles.otpMobile, OtpStyles.otpEdit].join(" ")}
                >
                  Change phone number
                  <span className={OtpStyles.InputEditWrapper}>
                    <InputComponent
                      type="text"
                      placeholder="9521876311"
                      className={OtpStyles.InputEdit}
                    />
                    <a
                      onClick={() => {
                        setEdit(!edit);
                      }}
                    >
                      Send OTP
                    </a>
                  </span>
                </h2>
              ) : (
                ""
              )}
            </div>
            <OtpInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
