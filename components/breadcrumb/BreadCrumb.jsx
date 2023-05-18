import React from "react";
import { Breadcrumb } from "antd";

import styles from "./Breadcrumb.module.scss";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <Breadcrumb separator=">" className={styles.Breadcrumb}>
      <Breadcrumb.Item>
        <Link href="/vacancy">
          <a>Open Jobs </a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Front End Developer - React JS - HTML - CSS - JavaScript - Angular js -
        Node js - 3 to 4 years
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
