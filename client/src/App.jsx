import { Route, Routes } from "react-router-dom"
import { TaskContextProvider } from './context/TaskContext' 

//Importando las vistas
import NavBar from "./components/NavBar"
import TasksPage from "./pages/TasksPage"
import TaskForm from "./pages/TaskForm"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <TaskContextProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TaskContextProvider>
  );
}

export default App
