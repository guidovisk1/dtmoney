import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer,RadioBox } from './styles'
import incomeImage from '../../assets/income.svg'
import outImage from '../../assets/outcome.svg'
import { useState } from 'react'


interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    
    const [type,setType] = useState('deposit')

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="imagem de fechar" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                />

                <input
                    placeholder='Valor'
                    type='number'
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={()=> {setType('deposit');}}
                        isActive = {type === 'deposit'}
                    >
                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={()=> {setType('withdraw');}}
                        isActive = {type === 'withdraw'}
                    >
                        <img src={outImage} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}