import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TasksProvider } from "./hooks/useTasks";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function handleModalisOpen(){
    setIsOpen(true)
  }

  function handleModalIsClose(){
    setIsOpen(false)
  }


  return (
    <>
     <TasksProvider>
      <Header openModal={handleModalisOpen}/>
      <Dashboard/>
      <NewTaskModal 
          isOpen={isOpen}
          onRequestClose={handleModalIsClose}
      />
      <GlobalStyle/>
     </TasksProvider>
    </>
  );
}

export default App;
