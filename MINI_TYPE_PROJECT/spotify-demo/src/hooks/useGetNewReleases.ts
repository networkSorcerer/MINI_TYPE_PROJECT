import { useQuery } from '@tanstack/react-query';

const useGetNewReleases = () => {
  return useQuery({
    queryKey: ['new-release'],
    queryFn: async () => {
      return getNewReleases();
    },
  });
};
