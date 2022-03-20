import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Authentication from "./containers/Authentication";
import CustomerPageWrapper from "./containers/CustomerPageWrapper";
import UserPageWrapper from "./containers/UserPageWrapper";
import "./index.css";

const UserDashboard = React.lazy(() => import("./containers/UserDashboard"));
const UserProducts = React.lazy(() => import("./containers/UserProducts"));
const Account = React.lazy(() => import("./containers/Account"));
const UserPreferences = React.lazy(
  () => import("./containers/UserPreferences")
);

const isUser = true;

function App() {
  const PageWrapper = isUser ? UserPageWrapper : CustomerPageWrapper;

  return (
    <Router>
      <Authentication>
        <PageWrapper>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="/products" element={<UserProducts />} />
              <Route path="/preferences" element={<UserPreferences />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </React.Suspense>
        </PageWrapper>
      </Authentication>
    </Router>
  );
}

export default App;
