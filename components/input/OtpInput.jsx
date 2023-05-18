import React, { useState } from "react";
import Link from "next/link";
import SubmitButton from "../../components/buttons/SubmitButton";
import OtpInput from "react18-input-otp";

import styles from "./Input.module.scss";
import OtpStyles from "../../pages/signup/otp/Otp.module.scss";

const OtpInputComponent = () => {
  const [OTP, setOTP] = useState("");
  const handleChange = (OTP) => {
    setOTP(OTP);
  };
  return (
    <>
      <div className={styles.otp}>
        <OtpInput
          value={OTP}
          onChange={handleChange}
          numInputs={6}
          onSubmit={() => {}}
          inputStyle={styles.inputStyle}
        />
      </div>
      <div className={OtpStyles.formMainErrorWrapper}>
        <h3 className={["formMainError", OtpStyles.formMainError].join(" ")}>
          The OTP entered is invalid/incorrect. Please try again.
        </h3>
      </div>
      <div className={OtpStyles.submitBtnWrapper}>
        <Link href="/signup/verify-email">
          <a>
            <SubmitButton text="Verify" />
          </a>
        </Link>
      </div>
      <p className={OtpStyles.otpStatus}>
        Didn&apos;t receive the OTP? <span> 30 Sec </span>
        <a>
          <span> Resend OTP</span>
        </a>
      </p>
    </>
  );
};
export default OtpInputComponent;
