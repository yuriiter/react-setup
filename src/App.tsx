import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import "./styles/main.scss";
import store from "./store/rootStore";

function App() {
  const routing = useRoutes(routes);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>{routing}</Suspense>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
