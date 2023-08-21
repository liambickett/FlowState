import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setDate } from '../store/slices/taskSlice';

interface DataProviderInterface {
  children: ReactNode;
}

export default function DataProvider({ children }: DataProviderInterface) {
  const dispatch = useDispatch();

  const date = useSelector((state: RootState) => state.tasks.date);

  useEffect(() => {
    if (date.year === 0) {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      dispatch(
        setDate({
          day: currentDay,
          month: currentMonth,
          year: currentYear,
        })
      );
    }
  }, [date, dispatch]);

  return <>{children}</>;
}
