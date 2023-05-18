import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import HrroundStyles from "../../pages/hrround/HrRound.module.scss";

function CallCredit({ creditData }) {
  const [editMode, setEditMode] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    if (creditData) {
      setInputValue(creditData);
    }
    else{
       setInputValue(0); 
    }
  }, [creditData]);

  return editMode ? (
    <span className={HrroundStyles.TableCellEditWrapper}>
      <Input
        className={HrroundStyles.TableCellEditInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Tooltip title="Ok">
        <CheckOutlined
          onClick={() => {
            setEditMode(false);
            setShowEdit(false);
          }}
          className={[HrroundStyles.TableEditConfirmIcon, "OkIcon"].join(" ")}
        />
      </Tooltip>
      <Tooltip title="Close">
        <CloseOutlined
          onClick={() => {
            setEditMode(false);
            setShowEdit(false);
          }}
          className={[HrroundStyles.TableEditConfirmIcon, "CloseIcon"].join(
            " "
          )}
        />
      </Tooltip>
    </span>
  ) : (
    <>
      <span
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
      >
        {inputValue}{" "}
        {showEdit && (
          <EditOutlined
            onClick={() => setEditMode(true)}
            className={HrroundStyles.TableCellEditIcon}
          />
        )}
      </span>
    </>
  );
}

export default CallCredit;
