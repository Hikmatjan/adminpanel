import type { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "../../redux";

interface Providertype {
  children: React.ReactNode;
}

const ProviderConfig: FC<Providertype> = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>{children}</Provider>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default ProviderConfig;
