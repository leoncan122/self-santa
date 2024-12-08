import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from "./Forms/Login/Login"
import { AddLink } from './Forms/AddLink/AddLink'
import { Header } from './Header/Header'
import { Layout } from './Forms'
// import { PrivateGuard } from "./guard/PrivateGuard"
// import { PrivateRouter } from "./private/PrivateRouter"
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add-gift" element={<AddLink/>} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/add-funds'} element={<Layout ><center>Loading..</center></Layout>} />
        <Route path={'/me'} element={<Layout ><center>Loading..</center></Layout>} />

        {/* <Route element={<PrivateGuard />}> */}
          {/* <Route path={`${AppRoutes.private.root}/*`} element={<PrivateRouter />} /> */}
        {/* </Route> */}
      </Routes>
        
    </BrowserRouter>
  )
} 