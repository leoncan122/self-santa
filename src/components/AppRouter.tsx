import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Forms/Login/Login";
import { Header } from "./Header/Header";
import { Layout } from "./Forms";
import { AuthProvider } from "../context/AuthContext/auth.provider";
import { AuthGuard } from "../guards/AuthGuard";
import { MyList } from "./List/MyList";
import { Funds } from "./Fund/Fund";
import { AddGift } from "./Forms/AddGift/AddGift";
import { ModalProvider } from "../context/ModalContext/modal.provider";
// import { PrivateRouter } from "./private/PrivateRouter"
export const AppRouter = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path={"/me"}
              element={
                <Layout>
                  <MyList />
                </Layout>
              }
            />
            <Route
              path={"/login"}
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path={"/add-funds"}
              element={
                <Layout>
                  <Funds />
                </Layout>
              }
            />
        {/* PRIVATE part */}
            <Route element={<AuthGuard />}>
              <Route
                path="/add-gift"
                element={
                  <Layout>
                    <AddGift />
                  </Layout>
                }
              />
              <Route
                path={"/settings"}
                element={
                  <Layout>
                    <center>Loading..</center>
                  </Layout>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </AuthProvider>
  );
};
