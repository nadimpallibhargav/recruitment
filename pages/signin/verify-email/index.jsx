import React, { useState } from "react";

import styles from "./Signinverifymail.module.scss";
import FormStyles from "../../../components/forms/Form.module.scss";

const SigninVerifyMail = () => {
  const [message, setMessage] = useState(false);

  const mailMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  return (
    <section className={styles.forgotpasswordSection}>
      <div className="container">
        <div className={styles.formWrapper}>
          <div className={FormStyles.form}>
            <div className={styles.formHeading}>
              <h1>Verify your email to set password</h1>
              <h2>
                Please check your email to set new password. If you don&apos;t
                get an email within few minutes, Please click resend email.{" "}
                <span>antonydosh@sbsolutions.com</span>
              </h2>

              <div className={styles.sentMessageWrapper}>
                {message ? (
                  <p className={styles.sentmessage}>Email sent successfully</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <a onClick={() => mailMessage()}>Resend email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninVerifyMail;
