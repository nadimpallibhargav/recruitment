import { React } from "react";
import Link from "next/link";
import { Form } from "antd";
import InputComponent from "../../components/input/InputComponent";
import SubmitButton from "../../components/buttons/SubmitButton";

import styles from "../signin/Signin.module.scss";
import signupStyles from "./Signup.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";

const Signup = () => {
  const [form] = Form.useForm();

  return (
    <section
      className={[styles.signinSection, signupStyles.signupSection].join(" ")}
    >
      <div className="container">
        <div
          className={[
            styles.signinFormWrapper,
            signupStyles.signupFormWrapper,
          ].join(" ")}
        >
          <div className={FormStyles.form}>
            <div
              className={[
                FormStyles.formHeading,
                FormStyles.formMainErrorWrapper,
              ].join(" ")}
            >
              <h1>Create your account</h1>
              <h2>Enter the fields below to get started</h2>
              <h3
                className={["formMainError", FormStyles.formMainError].join(
                  " "
                )}
              >
                Incorrect user name or password
              </h3>
            </div>
            <Form
              form={form}
              name="signup"
              onFinish={() => {}}
              onFinishFailed={() => {}}
              scrollToFirstError
            >
              <div className={FormStyles.inputGroup}>
                <div className={FormStyles.inputWrapper}>
                  <label>First Name *</label>
                  <Form.Item
                    name="userfirstname"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first name",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Enter first name"
                    />
                  </Form.Item>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>Last Name *</label>
                  <Form.Item
                    name="userlastname"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                  >
                    <InputComponent type="text" placeholder="Enter last name" />
                  </Form.Item>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>Organization Name *</label>
                  <Form.Item
                    name="userorgname"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your organization name",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Enter organization name"
                    />
                  </Form.Item>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>Organization Email *</label>
                  <Form.Item
                    name="userorgmail"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your organization email",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Enter organization email"
                    />
                  </Form.Item>
                </div>
                <div className={FormStyles.inputWrapper}>
                  <label>Phone Number *</label>
                  <Form.Item
                    name="usemobile"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <InputComponent
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Form.Item>
                </div>
              </div>
              {/* add btnloader={false} to enable button */}
              {/* remove link tag for submit button to enable validation */}
              <Link href="/signup/otp">
                <a>
                  <SubmitButton
                    text="Register"
                    // btnloader={true}
                    // btndisable={false}
                  />
                </a>
              </Link>
            </Form>

            <div className={styles.signUpText}>
              <span>Already have an account?</span>
              <Link href="/signin">
                <a> Sign In </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
