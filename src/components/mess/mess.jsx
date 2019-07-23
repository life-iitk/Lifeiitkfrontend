import React from 'react';
import moment from 'moment';
import MessFilter from './messFilter';
import MessContent from './messContent';
import messMenus from './messMenus.json';

const Mess = props => {
  const halls = Object.keys(messMenus);
  const [day, setDay] = React.useState(moment(new Date()).isoWeekday() - 1);
  const [hall, setHall] = React.useState(halls[0]);
  return (
    <React.Fragment>
      <MessFilter
        setHall={setHall}
        setDay={setDay}
        allHalls={halls}
        day={day}
        hall={hall}
      />
      <MessContent menu={messMenus[hall][day]} />
    </React.Fragment>
  );
};

export default Mess;
