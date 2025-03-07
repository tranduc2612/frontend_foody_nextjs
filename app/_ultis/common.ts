import dayjs, { Dayjs } from "dayjs";
import { ResponseApi, ResponseError } from "../_types/response";

export function handleResponseError(responseError: ResponseError) {
  const errorInfo: { [key: string]: string } = {};
  if (responseError.statusCode === 400) {
    if (responseError.errors?.length > 0) {
      responseError.errors.forEach(error => {
        if (error.field) {
          errorInfo[error.field] = error.errors[0];
        }
      });
    }
  }
  return errorInfo;
}

export function checkResponseSuccess(responseSuccess: ResponseApi<any>) {
  if (responseSuccess.data && !responseSuccess.error) {
    return true;
  }
  return false;
}

export function formatDayjsToString(date: Dayjs | null) {
  if (!date) {
    return undefined;
  }
  try {
    const formattedDate = dayjs(date);
    return formattedDate.format("DD/MM/YYYY");
  } catch (error) {
    if (error) {
      return undefined;
    }
  }
}

export function upperCaseString(str: string) {
  if (str) {
    return str.toUpperCase();
  }
}

export function convertPercentStringtoNumber(value: string | number) {
  if (typeof value === "number") {
    return value;
  }
  if (value) {
    const valueWithoutPercent = value.replace("%", "");
    const finalValue = parseFloat(valueWithoutPercent) || 0;
    return finalValue;
  }
}

/**
 *
 * @param value "Fri, 31 Jan 2025 06:09:11 GMT"
 * @returns
 */
export function convertDateToMinutes(value: string | number) {
  if (typeof value === "number") {
    return value;
  }
  const date = new Date(value);
  const minutes = Math.floor(date.getTime() / 60000);
  return minutes;
}
