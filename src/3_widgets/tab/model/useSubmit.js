import { useState } from "react";
import { parseTime } from "@shared/util";

export const useSubmit = ( props ) => {
    
  const [ dateRange, setDateRange ] = useState(null);

  const handleButtonClick = () => {
    const startDate = props.current.props.startDate;
    const endDate = props.current.props.endDate;
    if( !startDate && !endDate ) return setDateRange(null);

    setDateRange({
      startDate: parseTime(startDate),
      endDate: parseTime(endDate),
    });
  };

  return { dateRange, handleButtonClick };
};
