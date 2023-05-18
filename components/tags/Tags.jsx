import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag, theme, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

import styles from "../../pages/mapcandidates/Mapcandidates.module.scss";

const Tags = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState(["React JS", "HTML"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };
  const tagInputStyle = {
    width: 100,
    verticalAlign: "middle",
    height: 28,
    background: "#EAF4F2",
    borderStyle: "none",
  };
  return (
    <>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={tag}
            closable={true}
            className={[styles.tag, styles.formTag].join(" ")}
            style={{
              userSelect: "none",
            }}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          className={[styles.tag, styles.tagInput].join(" ")}
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          className={[styles.tag, styles.formtag, styles.tagInput].join(" ")}
          onClick={showInput}
        >
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};
export default Tags;
