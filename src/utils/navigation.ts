import { useRouter } from 'next/router';

export const useDashboardNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    const basePath = '/dashboard';
    router.push(`${basePath}/${path}`);
  };

  return { navigateTo };
};
