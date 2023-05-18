"use client";
import React, { useState } from "react";
import { Form, Button, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import InputComponent from "../../components/input/InputComponent";

import ForgotpasswordStyles from "../../pages/signin/verify-email/Signinverifymail.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";
import styles from "../../pages/signup/verify-email/Verifymail.module.scss";

const Verifymail = () => {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.success("Mail Sent Successfully");
  };

  return (
    <section
      className={[
        ForgotpasswordStyles.forgotpasswordSection,
        styles.verifymailSection,
      ].join(" ")}
    >
      {contextHolder}
      <div className="container">
        <div
          className={[
            ForgotpasswordStyles.formWrapper,
            styles.formWrapper,
          ].join(" ")}
        >
          <div className={FormStyles.form}>
            <div className={ForgotpasswordStyles.formHeading}>
              <h1>Verify your mail to get started</h1>
              <h2>
                Verification link sent to your organization mail
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
                    <a onClick={() => info()} className={styles.resendMailLink}>
                      Resend mail
                    </a>
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
                            message: "Mail domain does not match",
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
                      >
                        Resend mail
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
