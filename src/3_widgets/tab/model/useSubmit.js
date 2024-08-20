import { useState } from "react";
import { parseTime } from "@shared/util";

export const useSubmit = ( props ) => {
    
  const [ dateRange, setDateRange ] = useState({});

  const handleButtonClick = () => {
    const startDate = props.current.props.startDate;
    const endDate = props.current.props.endDate;
    setDateRange({
      startDate: parseTime(startDate),
      endDate: parseTime(endDate),
    });
  };

  return { dateRange, handleButtonClick };
};
