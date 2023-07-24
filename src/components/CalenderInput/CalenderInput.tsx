import 'react-datepicker/dist/react-datepicker.css';
import './CalenderInput.css';

import ru from 'date-fns/locale/ru';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('ru', ru);

export function CalenderInput(): JSX.Element {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DatePicker
      wrapperClassName="calendar"
      placeholderText="мм/дд/гг   чч:мм:сс UTC+"
      showTimeSelect
      selected={startDate}
      locale="ru"
      dateFormat="MM/dd/yy hh:mm"
      onChange={(date) => setStartDate(date)}
    />
  );
}
