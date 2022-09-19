import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/shared/header";
import { Erro404 } from "./pages/Erro404";

import { Home } from "./pages/Home";
import { RegisterList } from "./pages/RegisterList";
import { View } from "./pages/View";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterList />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/details/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}
