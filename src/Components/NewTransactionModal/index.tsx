import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer,RadioBox } from './styles'
import incomeImage from '../../assets/income.svg'
import outImage from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'


interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    
    const [type,setType] = useState('deposit')
    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event : FormEvent){

        event.preventDefault();
        console.log(
            title,
            value,
            category
        )
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                    value={title}
                    onChange = {e => setTitle(e.target.value)}
                />

                <input
                    placeholder='Valor'
                    type='number'
                    value={value}
                    onChange = {e => setValue(+e.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={()=> {setType('deposit');}}
                        isActive = {type === 'deposit'}
                        activeColor = 'green'
                    >
                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={()=> {setType('withdraw');}}
                        isActive = {type === 'withdraw'}
                        activeColor = 'red'
                    >
                        <img  src={outImage} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange = {e => (setCategory(e.target.value))}
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}