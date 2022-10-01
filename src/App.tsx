import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import React from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";

Modal.setAppElement("#root")


export function App() {

const [modalIsOpen, setIsOpen] = React.useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


{
  return (
    <>
      <Header onOpenNewTransactionModal={openModal}/>

      <Dashboard />
      <NewTransactionModal
      isOpen = {modalIsOpen}
      onRequestClose = {closeModal}/>
      <GlobalStyle />
    </>
  );
}

}