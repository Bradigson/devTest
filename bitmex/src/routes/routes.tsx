import { Routes, Route } from "react-router-dom";
import StartApp from "../components/screens/start.bitmex";
import HomeBitmex from "../components/screens/home.bitmex";


const Routers = ()=>{
    return (
        <Routes>
            <Route index element={<StartApp/>}/>
             <Route path="home" element={<HomeBitmex/>}/>
            {/*<Route path="signup" element={<SignUp/>}/>
            <Route path="modal-students/:userid" element={<EstudianteModal/>}/>
            <Route path="registrar_estudiante" element={<RegistrarEstudiante/>}/>
            <Route path='ediart_estudiantes/:estudentId' element={<EditarEstudiantes/>}/>
            <Route path='docentes' element={<Docentes/>}/> */}
        </Routes>
    )
}


export default Routers;