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
    return dayjs(date).format("DD MMM YYYY hh:mm A");
  };

  const formatTime = (date: Date) => {
    return dayjs(date).format("hh:mm A");
  };

  const formatDateMonthYear = (date: Date) => {
    return dayjs(date).format("DD MMM YYYY");
  };

  const formatDayDate = (date: Date) => {
    return dayjs(date).format("ddd, DD MMM YYYY");
  };

  const formatDayDateTime = (date: Date) => {
    return dayjs(date).format("ddd, DD MMM YYYY - hh:mm");
  };

  const formatDay = (date: Date) => {
    return dayjs(date).format("dd");
  };

  return {
    isValidDate,
    formatDayDateTime,
    formatDate,
    formatDayDate,
    formatDateTime,
    formatTime,
    formatDateMonthYear,
    formatDay,
  };
};
