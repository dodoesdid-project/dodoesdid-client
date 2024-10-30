import router from '@routes/routing';

import * as ga from '@lib/utils/ga';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
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
  useEffect(() => {
    const sendPageview = () => {
      ga.pageview(window.location.pathname + window.location.search);
    };

    sendPageview(); // 초기 페이지 로드 시 한 번 실행

    const unsubscribe = router.subscribe((state) => {
      // 경로 변경마다 페이지뷰 전송
      if (state.location) {
        sendPageview();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
