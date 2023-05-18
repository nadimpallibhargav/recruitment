import { React, useState } from 'react'
import { Radio, Space } from 'antd'

import styles from './Radiobuttons.module.scss'

const RadioButtons = () => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };

  return (
    <Radio.Group onChange={onChange} value={value} className={styles.JobRadio}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
      </Space>
    </Radio.Group>
  )
}

export default RadioButtons