import React, { useState } from "react";
import {
  MoreOutlined,
  CloseOutlined,
  CheckOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Dropdown, Input } from "antd";
import styles from "./noteTime.module.scss";
const { TextArea } = Input;

function NoteTime() {
  const [firstNote, setFirstNote] = useState(
    "Candidate performance was good,check logical thinking in tech round 2"
  );
  const [selectedOptionDropdown, setSelectedOptionDropdown] = useState("");
  const NoteDropDownItems = {
    items: [
      {
        label: "Edit",
        key: "1",
        icon: <EditOutlined />,
      },
      {
        label: "Delete",
        key: "2",
        icon: <CloseOutlined />,
      },
    ],
    selectable: true,
    onClick: (e) => setSelectedOptionDropdown(e.key),
  };
  const [textBoxNote, setTextBoxNote] = useState(firstNote);
  return (
    <div className={styles.NotesWrapper}>
      <div className={styles.NoteTime}>
        <h3>23 Jan 2023 - 01.23 pm</h3>
        <Dropdown
          menu={NoteDropDownItems}
          trigger={"click"}
          className={["icon28", styles.NoteModifyBtn].join(" ")}
        >
          <MoreOutlined />
        </Dropdown>
      </div>

      {selectedOptionDropdown === "1" ? (
        <div>
          <TextArea
            rows={4}
            value={textBoxNote}
            style={{
              resize: "none",
            }}
            onChange={(e) => setTextBoxNote(e.target.value)}
          />
          <div className={styles.cancleandcheckbtn}>
            {" "}
            <CloseOutlined
              onClick={() => setSelectedOptionDropdown("")}
              className={[styles.HeadingIcon, styles.CloseIcon, "icon34"].join(
                " "
              )}
            />{" "}
            <CheckOutlined
              onClick={() => {
                setFirstNote(textBoxNote);
                setSelectedOptionDropdown("");
              }}
              className={[styles.HeadingIcon, styles.OkIcon, "icon34"].join(
                " "
              )}
            />{" "}
          </div>
        </div>
      ) : (
        <div className={styles.NoteDetails}>
          <p>{firstNote}</p>
        </div>
      )}
    </div>
  );
}

export default NoteTime;
