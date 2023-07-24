import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <HashRouter>
            <div className="container">
                <Routes>
                    <Route path="/"         element={<Navigate to="/labs"/>}/>
                    <Route path="/hello"    element={<HelloWorld/>}/>
                    <Route path="/labs/*"   element={<Labs/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;