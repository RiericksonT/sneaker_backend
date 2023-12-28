export class PaginatedOutputDto<CreateSneakerDto> {
  data: CreateSneakerDto[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}
