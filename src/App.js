import { Routes, Route } from "react-router-dom"

import Title from "./pages/Front/Title"
import Circle from "./pages/Front/Circle"
import Rectangle from "./pages/Front/Rectangle"
import NotFound from "./pages/Special/NotFound"
import { FrontLayout } from "./pages/Front"

import './App.css';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<FrontLayout />}>
        <Route index element={<Title />} />
        <Route path="circle/:radius" element={<Circle />} />
        <Route path="circle" element={<Circle />} />
        <Route path="rectangle" element={<Rectangle />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
