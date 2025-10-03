import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../shared/api/query-client";
import { ToastContainer } from "react-toastify";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      {children}
    </QueryClientProvider>
  );
}
