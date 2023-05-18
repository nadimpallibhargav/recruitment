import { React } from "react";
import { Form } from "antd";
import Link from "next/link";
import InputComponent from "../../components/input/InputComponent";
import SubmitButton from "../../components/buttons/SubmitButton";

import styles from "./Signinresetmail.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";

const SigninResetMail = () => {
  const [form] = Form.useForm();

  return (
    <section
      className={[
        styles.changePhoneNumberSection,
        styles.SigninResetMailSection,
      ].join(" ")}
    >
      <div className="container">
        <div
          className={[
            styles.changePhoneNumberFormWrapper,
            styles.formWrapper,
          ].join(" ")}
        >
          <div className={FormStyles.form}>
            <div
              className={[
                FormStyles.formHeading,
                FormStyles.formMainErrorWrapper,
              ].join(" ")}
            >
              <h1 className={styles.formMainHeading}>Forgot password</h1>
              <h3
                className={["formMainError", FormStyles.formMainError].join(
                  " "
                )}
              >
                Incorrect email
              </h3>
            </div>
            <Form
              form={form}
              name="signup"
              onFinish={() => {}}
              onFinishFailed={() => {}}
              scrollToFirstError
            >
              <div className={FormStyles.inputWrapper}>
                <label>Enter Your Organization Email</label>
                <Form.Item
                  name="usemobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your organization email",
                    },
                  ]}
                >
                  <InputComponent
                    type="text"
                    placeholder="Enter your organization email"
                  />
                </Form.Item>
              </div>
              <div className={styles.submitWrapper}>
                {/* remove link tag for submit button to enable validation */}
                <Link href="/signin/verify-email">
                  <a>
                    <SubmitButton
                      className={styles.submitBtn}
                      text="Send verification email"
                      htmlType="submit"
                      // btnloader={true}
                      // btndisable={false}
                    />
                  </a>
                </Link>
                <Link href="/signin">
                  <a className={styles.BackBtn}>Back to sign in</a>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninResetMail;
