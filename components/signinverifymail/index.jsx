"use client";
import React from "react";
import { message } from "antd";

import styles from "../../pages/signin/verify-email/Signinverifymail.module.scss";
import FormStyles from "../forms/Form.module.scss";

const SigninVerifyMail = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.success("Mail Sent Successfully");
  };

  return (
    <section className={styles.forgotpasswordSection}>
      {contextHolder}

      <div className="container">
        <div className={styles.formWrapper}>
          <div className={FormStyles.form}>
            <div className={styles.formHeading}>
              <h1>Verify your mail to reset password</h1>
              <h2>
                A password reset link will be sent to your email. If you
                don&apos;t get an email within few minutes, Please click resend
                mail. <span>antonydosh@sbsolutions.com</span>
              </h2>
            </div>

            <a onClick={() => info()}>Resend mail</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninVerifyMail;
