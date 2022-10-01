import { StyledComponent } from "styled-components"
import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./styles"
import React from "react";
import Modal from 'react-modal'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}



export function Header({onOpenNewTransactionModal} : HeaderProps) {

    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money logo" />
                <button type="button" onClick={onOpenNewTransactionModal} > Nova transação </button>
                
            </Content>
        </Container>
    )
}