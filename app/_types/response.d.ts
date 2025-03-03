export interface ResponseApi<T> {
  message: string;
  data: T;
  error?: ResponseError;
}

export interface ResponseError extends Error {
  errors: ErrorField[];
  message: string;
  statusCode: number;
}

export interface ErrorField {
  field: string;
  errors: string[];
}

export interface Pagination<T> {
  [key: string]: T;
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
