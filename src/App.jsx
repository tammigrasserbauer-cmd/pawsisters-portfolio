import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import StartPage from "./pages/StartPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
