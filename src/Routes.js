import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hints from "./pages/Hints";
import Asylum from "./pages/Hints/asylum";
import Burgup from "./pages/Hints/burgup";
import Home from "./pages/Home";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Hints' element={<Hints/>}></Route>
                <Route path='/Hints/Asylum' element={<Asylum/>}></Route>
                <Route path='/Hints/Burgup' element={<Burgup/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;