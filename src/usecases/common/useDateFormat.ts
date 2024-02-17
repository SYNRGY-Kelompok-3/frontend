import dayjs from "dayjs";

type TDate = string | number | Date | dayjs.Dayjs;

export const useDateFormatter = () => {
  // const locale = dayjs.locale();

  const isValidDate = (date: TDate) => {
    return dayjs(date).isValid();
  };

  const formatDate = (date: TDate) => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  const formatDateTime = (date: Date) => {
    return dayjs(date).format("DD MMM YYYY HH:mm");
  };

  const formatTime = (date: Date | string | null) => {
    return dayjs(date).format("HH:mm A");
  };

  const formatHour = (date: Date | string | null) => {
    return dayjs(date).format("HH");
  };

  const formatDateMonthYear = (date: Date | undefined | string) => {
    return dayjs(date).format("DD MMM YYYY");
  };

  const formatDayDate = (date: Date) => {
    return dayjs(date).format("ddd, DD MMM YYYY");
  };

  const formatDayDateTime = (date: TDate) => {
    return dayjs(date).format("ddd, DD MMM YYYY - HH:mm");
  };

  const formatDay = (date: Date | string | null) => {
    return dayjs(date).format("dddd");
  };

  const formatFlightDuration = (dateFrom: Date | string | null, dateTo: Date | string | null) => {
    const x = dayjs(dateFrom);
    const y = dayjs(dateTo);
    const diffTime = x.diff(y);
    return dayjs.duration(diffTime, "milliseconds").humanize();
  };

  const formatUTC = (date: Date | undefined | string) => {
    return dayjs(date).toDate();
  };

  return {
    formatUTC,
    isValidDate,
    formatDayDateTime,
    formatDate,
    formatDayDate,
    formatDateTime,
    formatTime,
    formatHour,
    formatDateMonthYear,
    formatDay,
    formatFlightDuration,
  };
};
