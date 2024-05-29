import { Route, Routes } from "react-router-dom"

//Importando las vistas
import TasksPage from "./pages/TasksPage"
import TaskForm from "./pages/TaskForm"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
