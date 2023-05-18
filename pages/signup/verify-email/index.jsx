import React, { useState } from "react";
import Link from "next/link";
import { Form, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import InputComponent from "../../../components/input/InputComponent";

import ForgotpasswordStyles from "../../signin/verify-email/Signinverifymail.module.scss";
import FormStyles from "../../../components/forms/Form.module.scss";
import styles from "./Verifymail.module.scss";

const Verifymail = () => {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);

  const [message, setMessage] = useState(false);

  const mailMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  return (
    <section
      className={[
        ForgotpasswordStyles.forgotpasswordSection,
        styles.verifymailSection,
      ].join(" ")}
    >
      <div className="container">
        <div
          className={[
            ForgotpasswordStyles.formWrapper,
            styles.formWrapper,
          ].join(" ")}
        >
          <div className={FormStyles.form}>
            <div
              className={[
                ForgotpasswordStyles.formHeading,
                styles.SignupVerifyMailHeading,
              ].join(" ")}
            >
              <h1>Verify your email to get started</h1>
              <h2>
                Verification link sent to your organization email
                {!edit ? (
                  <>
                    <span className={styles.mail}>
                      antonydosh@sbsolutions.com
                      <a>
                        <EditOutlined
                          className="editicon"
                          onClick={() => {
                            setEdit(!edit);
                          }}
                        />
                      </a>
                    </span>
                    <div
                      className={[
                        ForgotpasswordStyles.sentMessageWrapper,
                        styles.sentMessageWrapper,
                      ].join(" ")}
                    >
                      {message ? (
                        <p className={ForgotpasswordStyles.sentmessage}>
                          Email sent successfully
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <Link href="">
                      <a
                        onClick={() => mailMessage()}
                        className={styles.resendMailLink}
                      >
                        Resend email
                      </a>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {edit ? (
                  <>
                    <Form
                      className={styles.form}
                      name="signin"
                      onFinishFailed={() => {}}
                      onFinish={() => {}}
                      scrollToFirstError
                    >
                      <Form.Item
                        name="userpassword"
                        rules={[
                          {
                            required: true,
                            message: "Email domain does not match",
                          },
                        ]}
                      >
                        <div
                          className={[
                            FormStyles.inputWrapper,
                            styles.inputWrapper,
                          ].join(" ")}
                        >
                          <InputComponent
                            type="text"
                            placeholder="asdfgh@mail.com"
                          />
                        </div>
                      </Form.Item>
                      <Button
                        className={styles.resendFormBtn}
                        htmlType="submit"
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        Send email
                      </Button>
                    </Form>
                  </>
                ) : (
                  ""
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verifymail;
