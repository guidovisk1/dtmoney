import { Container } from "./styles";
import incomeImge from '../../assets/income.svg'
import outcomeImge from '../../assets/outcome.svg'
import totalImge from '../../assets/total.svg'




export function Summary(){
    return(
         <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImge} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImge} alt="Entradas" />
                </header>
                <strong> - R$500,00</strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImge} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
         </Container>
    )
}