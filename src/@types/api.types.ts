export type APIResponse<TBody> = {
  statusCode: number;
  body: TBody;
};

export type APIInfinityLoaderResponse<Param> = {
  page: number;
  limit: number;
  previousPage: number | null;
  nextPage: null | number;
  totalElements: number;
} & Param;
