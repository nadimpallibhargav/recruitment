import React from "react";
import { Collapse, ConfigProvider } from "antd";

const { Panel } = Collapse;

import styles from "./Accordion.module.scss";

const Accordion = ({ className }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <Collapse
        expandIconPosition="end"
        ghost
        className={[styles.accordionWrapper, className].join(" ")}
      >
        <Panel
          header={
            <div className={styles.accordionTitle}>
              <h3>Question</h3>
              <h4>Circle push task</h4>
            </div>
          }
          key="1"
          className={styles.accordionItem}
        >
          <ol>
            <li>Create Add circle button</li>
            <li>Click on Add circle button should create a Circle </li>
            <li>By default Circle background should be white </li>
            <li>Click on Circle color should change from white to grey </li>
            <li>In label show grey coloured circle count</li>
          </ol>
        </Panel>
      </Collapse>
    </ConfigProvider>
  );
};

export default Accordion;
