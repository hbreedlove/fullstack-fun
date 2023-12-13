import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {

     const queryClient = new QueryClient({
         defaultOptions: {
             queries: {
                 refetchOnWindowFocus: false, // default: true
             },
         },
     });

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <React.Suspense fallback={null}>
                <ReactQueryDevtools initialIsOpen={false} />
            </React.Suspense>
        </QueryClientProvider>
    );
}

export default App;
