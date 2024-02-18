import { DEFAULT_CURRENCY } from "src/constants";
export const priceFormatter = (price: number | string): string => {
  const defaultCurrency = DEFAULT_CURRENCY;
  const formattedPrice = Number(price).toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: false,
  });
  return `${defaultCurrency}${formattedPrice.replace(/^([\d,]+)(.\d*)?$/g, "$1")}`;
};
