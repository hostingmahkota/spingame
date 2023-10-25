"use client"

import { PropsWithChildren, useState } from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { trpc } from "@/app/_trpc/client";
import {httpBatchLink} from "@trpc/client"

const TrpcProvider = ({children}:PropsWithChildren) => {
  const [queryClient] = useState(()=> new QueryClient())
  const [trpcClient] = useState(()=> trpc.createClient({
    links: [
      httpBatchLink({
        url: process.env.TRPC_URL || "https://spingame.vercel.app/api/trpc",
      })
    ]
  }))
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;