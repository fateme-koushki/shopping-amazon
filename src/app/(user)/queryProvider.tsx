"use client";  

import React, { ReactNode } from "react";  
import { QueryClientProvider, QueryClient } from "react-query";  

interface ReactQueryProviderProps {  
  children: ReactNode;  
}  

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {  
  const client = new QueryClient();  

  return (  
    <QueryClientProvider client={client}>  
      {children}  
    </QueryClientProvider>  
  );  
}  