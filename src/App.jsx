import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTopBtn from "./components/ScrollToTopBtn";

import routes from "./routes";

function App() {
   return (
      <Router>
         <Routes>
            {routes.map((route, index) => {
               const path = route.path;
               const Page = route.component;
               const Layout = route.layout;

               return (
                  <Route
                     key={index}
                     path={path}
                     element={
                        <Layout>
                           <Page />
                           <ScrollToTopBtn />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
