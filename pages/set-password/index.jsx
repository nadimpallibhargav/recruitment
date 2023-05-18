import React from "react";
import Link from "next/link";
import { Form } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import InputComponent from "../../components/input/InputComponent";
import SubmitButton from "../../components/buttons/SubmitButton";

import styles from "../signin/Signin.module.scss";
import stylesSetPassword from "./Setpassword.module.scss";
import FormStyles from "../../components/forms/Form.module.scss";

const SetPassword = () => {
  const [form] = Form.useForm();

  return (
    <section
      className={[
        styles.signinSection,
        stylesSetPassword.setPasswordSection,
      ].join(" ")}
    >
      <div className="container">
        <div
          className={[
            styles.signinFormWrapper,
            stylesSetPassword.SetPasswordFormWrapper,
          ].join(" ")}
        >
          <div className={FormStyles.form}>
            <div className={FormStyles.formHeading}>
              <h1>Set Password</h1>
            </div>

            <Form
              layout="vertical"
              form={form}
              name="register"
              onFinish={() => {}}
              scrollToFirstError
              onFinishFailed={() => {}}
            >
              <label htmlFor="">Password *</label>
              <Form.Item
                name="usernewpassword"
                rules={[{ required: true, message: "Please enter password" }]}
              >
                <InputComponent type="Password" placeholder="Password" />
              </Form.Item>

              <label htmlFor="">Confirm Password * </label>
              <Form.Item
                className={stylesSetPassword.confirmPasswordWrapper}
                name="userconfirmpassword"
                rules={[
                  {
                    required: true,
                    message: "Password confirmation does not match",
                  },
                ]}
              >
                <InputComponent
                  type="Password"
                  placeholder="Confirm password"
                />
                {/* uncomment for password match valid info */}
                {/* <p className="validPassword">Password match successfully</p> */}
              </Form.Item>
              <ul className={stylesSetPassword.info}>
                <li className={stylesSetPassword.valid}>
                  <CheckCircleOutlined
                    className={stylesSetPassword.checkicon}
                  />

                  <CloseCircleOutlined
                    className={stylesSetPassword.closeicon}
                  />
                  <span className="validPassword">Minimum 8 characters</span>
                </li>
                <li className={stylesSetPassword.valid}>
                  <CheckCircleOutlined
                    className={stylesSetPassword.checkicon}
                  />

                  <CloseCircleOutlined
                    className={stylesSetPassword.closeicon}
                  />
                  <span className="validPassword">At least one uppercase</span>
                </li>
                <li className={stylesSetPassword.invalid}>
                  <CheckCircleOutlined
                    className={stylesSetPassword.checkicon}
                  />

                  <CloseCircleOutlined
                    className={stylesSetPassword.closeicon}
                  />
                  <span className="inValidPassword">
                    At least one special character
                  </span>
                </li>
                <li className={stylesSetPassword.valid}>
                  <CheckCircleOutlined
                    className={stylesSetPassword.checkicon}
                  />

                  <CloseCircleOutlined
                    className={stylesSetPassword.closeicon}
                  />
                  <span className="validPassword">At least one number</span>
                </li>
              </ul>
              {/* remove link tag for submit button to enable validation */}
              <Link href="/signin">
                <a>
                  <SubmitButton text="Set Password" />
                </a>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetPassword;
