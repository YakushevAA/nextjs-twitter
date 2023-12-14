"use client"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react'

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [queryClient] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
