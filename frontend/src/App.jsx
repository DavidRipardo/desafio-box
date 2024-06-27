import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard, TableDashboard, Login } from "./pages";

import { Tarefas } from "./pages/Tarefas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/usuarios"
          element={<TableDashboard title={"Usuários"} />}
        />
        <Route
          path="/funcionarios"
          element={<TableDashboard title={"Funcionários"} />}
        />
        <Route
          path="/clientes"
          element={<TableDashboard title={"Clientes"} />}
        />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
