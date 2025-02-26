// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Paciente from './Paciente'; // Importa el componente Paciente
import DatosMedicos from './DatosMedicos';
import PatientSearch from './PatientSearch';
import './App.css'; // Puedes usar App.css para añadir estilos a tu menú
import Login from './Login';

const App = () => {
  return (

      <div>
        {/* Menú de navegación */}
        <nav className="menu">
          <ul>
          <li><Link to="/paciente">Paciente</Link></li>
           <li><Link to="/DatosMedicos">Datos Medicos</Link></li>
           <li><Link to="/PatientSearch">Buscar Paciente</Link></li>
          </ul>
        </nav>

        {/* Rutas */}
        <div className="content">
          <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/DatosMedicos" element={<DatosMedicos />} />
          <Route path="/PatientSearch" element={<PatientSearch />} />
          </Routes>
        </div>
      </div>

  );
};

export default App;
