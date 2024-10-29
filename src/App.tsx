import router from '@routes/routing';

import * as ga from '@lib/utils/ga';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import React, { useEffect } from 'react';
import { RouterProvider, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url); // 페이지 변경 시 GA pageview 호출
    };

    const unsubscribe = router.subscribe(() => {
      handleRouteChange(window.location.pathname);
    });

    return () => {
      unsubscribe(); // 이벤트 제거
    };
  }, [navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
