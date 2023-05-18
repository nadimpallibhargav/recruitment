import React from 'react'
import { Checkbox } from 'antd';

import styles from './Checkbox.module.scss'

const CheckBoxInput = () => {
  return (
    <Checkbox className={styles.Checkbox}>
        QR Verified Candidates
    </Checkbox>
  )
}

export default CheckBoxInput