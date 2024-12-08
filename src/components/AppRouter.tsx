import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Forms/Login/Login";
import { AddLink } from "./Forms/AddLink/AddLink";
import { Header } from "./Header/Header";
import { Layout } from "./Forms";
import { AuthProvider } from "../context/AuthContext/auth.provider";
import { AuthGuard } from "../guards/AuthGuard";
import { MyList } from "./User/MyList/MyList";
import { Funds } from "./Fund/Fund";
// import { PrivateRouter } from "./private/PrivateRouter"
export const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/me"} element={<Layout><MyList /></Layout>} />
          <Route path={"/login"} element={<Layout><Login /></Layout>} />
          <Route
            path={"/add-funds"}
            element={
              <Layout>
                <Funds />
              </Layout>
            }
          />
          
          <Route element={<AuthGuard />}>
            <Route path="/add-gift" element={<Layout><AddLink /></Layout>} />
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
    </AuthProvider>
  );
};
