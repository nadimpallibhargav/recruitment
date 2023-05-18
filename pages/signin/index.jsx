import React from "react";
import Link from "next/link";
import { Form } from "antd";
import SubmitButton from "../../components/buttons/SubmitButton";
import InputComponent from "../../components/input/InputComponent";

import styles from "./Signin.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";

const Signin = () => {
  const [form] = Form.useForm();

  return (
    <section className={styles.signinSection}>
      <div className="container">
        <div className={styles.signinFormWrapper}>
          <div className={FormStyles.form}>
            <div
              className={[
                FormStyles.formHeading,
                styles.formHeading,
                FormStyles.formMainErrorWrapper,
              ].join(" ")}
            >
              <h1>Sign in to your account</h1>
              <h2>Enter the fields below to sign in</h2>
              <h3
                className={["formMainError", FormStyles.formMainError].join(
                  " "
                )}
              >
                Incorrect user name or password
              </h3>
            </div>

            <Form
              className={styles.form}
              name="signin"
              onFinishFailed={() => {}}
              onFinish={() => {}}
              scrollToFirstError
            >
              <label>Enter Your Organization Email</label>
              <Form.Item
                name="useremail"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "The input is not valid email!" },
                ]}
              >
                <InputComponent type="text" placeholder="example@mail.com" />
              </Form.Item>

              <label htmlFor="">
                Password
                <Link href="/forgot-password">
                  <a>Forgot Password?</a>
                </Link>
              </label>
              <Form.Item
                name="userpassword"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <InputComponent type="Password" placeholder="Password" />
              </Form.Item>
              {/* remove link tag for submit button to enable validation */}
              <Link href="/vacancy">
                <a>
                  <SubmitButton text="Sign in" />
                </a>
              </Link>
            </Form>

            <div className={styles.signUpText}>
              <span>Don&apos;t have an account?</span>
              <Link href="/signup">
                <a>Create an account</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
