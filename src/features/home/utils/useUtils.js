import { useSearchParams } from 'react-router';

export function useUtils() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const per_page = parseInt(searchParams.get('per_page')) || 10;
  return {
    page,
    per_page,
    setSearchParams,
  };
}
