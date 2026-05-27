export interface APIResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  statusCode?: number;
}

export interface APIErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  statusCode: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedAPIResponse<T> extends APIResponse<T[]> {
  meta: PaginationMeta;
}
