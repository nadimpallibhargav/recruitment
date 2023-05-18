import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

import styles from './Dateselect.module.scss';

const dateFormat = 'DD MMM YYYY';

const DateSelect = () => {
  return (
    <RangePicker
        className={styles.DateSelect}
        defaultValue={[dayjs('10 Jan 2023', dateFormat), dayjs('18 Jan 2023', dateFormat)]}
        format={dateFormat}
    />
  )
}

export default DateSelect


