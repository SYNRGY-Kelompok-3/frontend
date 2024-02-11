export type StatusCode = 200 | 201 | 400 | 403 | 404 | 500 | 501 | 503 | 504;

export const STATUS_CODE: Record<StatusCode, string> = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
  501: "Not Implemented",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

export const PAGE_SIZE = 10;
export const DEFAULT_CURRENCY = `Rp `;

export const ARTICLE_FILTER = {
  SEMUA: "Semua",
  TERBARU: "Terbaru",
  WISATA: "Wisata",
  KULINER: "Kuliner",
};

export const FORGOT_PWD_FLOW = {
  EMAIL_INPUT: "EMAIL_INPUT",
  CHECK_EMAIL: "CHECK_EMAIL",
  INPUT_OTP: "INPUT_OTP",
  RESET_PASSWORD: "RESET_PASSWORD",
  END_FLOW: "END_FLOW",
};

export const CHECKOUT_FLOW = {
  FILL_IDENTITY: 1,
  FILL_PAYMENT_METHOD: 2,
  INVOICE_SUMMARY: 3,
  END_FLOW: 4,
};

export type TForgotPasswordFlow = "EMAIL_INPUT" | "CHECK_EMAIL" | "INPUT_OTP" | "RESET_PASSWORD" | "END_FLOW";
export type TCheckoutFlow = "FILL_IDENTITY" | "INVOICE_SUMMARY" | "FILL_PAYMENT_METHOD" | "END_FLOW";
