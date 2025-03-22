import { useCallback } from 'react';

export const usePaginationFunctions = (setSearchParams, mappedPagination) => {
  const firstPage = useCallback(() => {
    setSearchParams((params) => {
      params.set('page', '1');
      return params;
    });
  }, [setSearchParams]);

  const previousPage = useCallback(() => {
    if (mappedPagination.page - 1 <= 0) return;
    setSearchParams((params) => {
      params.set('page', String(mappedPagination.page - 1));
      return params;
    });
  }, [mappedPagination.page, setSearchParams]);

  const nextPage = useCallback(() => {
    if (mappedPagination.page + 1 > mappedPagination.total_pages) return;
    setSearchParams((params) => {
      params.set('page', String(mappedPagination.page + 1));
      return params;
    });
  }, [mappedPagination.page, mappedPagination.total_pages, setSearchParams]);

  const lastPage = useCallback(() => {
    setSearchParams((params) => {
      params.set('page', String(mappedPagination.total_pages));
      return params;
    });
  }, [mappedPagination.total_pages, setSearchParams]);

  return {
    firstPage,
    previousPage,
    nextPage,
    lastPage,
  };
};
