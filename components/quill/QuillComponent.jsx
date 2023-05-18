import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import { quillModules, quillFormats } from "../../data/addVacancy/addVacancy";

import styles from "./Quillcomponent.module.scss";

const QuillComponent = () => {
  const [quillvalue, setQuillvalue] = useState("");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div className={styles.QuillWrapper}>
      <ReactQuill
        placeholder="Paste description"
        className={styles.quill}
        theme="snow"
        value={quillvalue}
        onChange={setQuillvalue}
        modules={quillModules}
        formats={quillFormats}
      />
    </div>
  );
};

export default QuillComponent;
