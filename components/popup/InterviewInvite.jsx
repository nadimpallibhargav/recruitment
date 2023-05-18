import { React, useState } from "react";
import { Modal, Popover } from "antd";

import styles from "./Popups.module.scss";



const InterviewInvite = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);


  const content = (
    <div
      className={[styles.InterviewRemovePerson, styles.InterviewInvite].join(
        " "
      )}
    >
      <h2>Invite Candidate</h2>
      <div className={styles.CopyInvite}>
        <h3>https://qr.co/ztc-fiwp-tnz</h3>
        {isCopied ? (
          <a>Copied</a>
        ) : (
          <a
            onClick={() => {
              setIsCopied(true);
            }}
          >
            Copy
          </a>
        )}
      </div>
      <p>Share this link with candidates to join your interview.</p>
    </div>
  );


  return (
    <>
      <Popover
        content={content}
        trigger={"click"}
        className={styles.invitePopup}
      >
        <a>{children}</a>
      </Popover>
    </>
  );
};
export default InterviewInvite;
