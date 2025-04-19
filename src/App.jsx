import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GettingStarted from "./pages/Getting Started/GettingStarted";
import Faq from "./pages/Faq/Faq";
import NoPage from "./pages/No Page/NoPage";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      {/* Wrap all routes in the Layout */}
      <Route path="/" element={<Layout />}>
        {/* Child Routes */}
        <Route index element={<Home />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="faq" element={<Faq />} />
      </Route>

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
