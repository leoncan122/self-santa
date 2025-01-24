import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Forms/Login/Login";
import { Header } from "./Layout/Header/Header";
import { Layout } from "./Forms";
import { AuthProvider } from "../context/AuthContext/auth.provider";
import { AuthGuard } from "../guards/AuthGuard";
import { MyList } from "./User/List/MyList";
import { Funds } from "./Fund/Fund";
import { AddGift } from "./Forms/AddGift/AddGift";
import { ModalProvider } from "../context/ModalContext/modal.provider";
import { MessagingPanel } from "./Messaging/Messaging";
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
               <Route
                path={"/Messages"}
                element={
                  <Layout>
                    <MessagingPanel />
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
