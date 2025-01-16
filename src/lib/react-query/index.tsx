import { childrenProps } from "@/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export * from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export const ReactQueryLib = ({ children }: childrenProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default ReactQueryLib;
