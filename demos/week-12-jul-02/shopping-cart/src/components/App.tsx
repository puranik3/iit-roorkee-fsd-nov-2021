import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/shopping" element={<ShoppingCart />}></Route>
            </Routes>
        </div>
    );
}

export default App;
