import { Summary } from '../Summary';
import { TransactionsTtable } from '../TransactionsTable';
import {Container} from './styles'

export function Dashboard(){
    return(
       <Container>
        <Summary/>
        <TransactionsTtable/>
       </Container>
    );
}