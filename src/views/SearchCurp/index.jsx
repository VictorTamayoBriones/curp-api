import { Container, Spacer, Card, Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PersonalDataForm } from '../../components/PersonalDataForm';

export const SearchCurp = () =>{

    const[wayToSearch, setWayToSearch]=useState('by curp');

    const handleClick = (action) => setWayToSearch(action)

    return(
        <Container>
            <Card>
                <Card.Header>
                    <Button onClick={()=>handleClick('by curp')} >Consulta CURP</Button>
                    <Spacer x={1}/>
                    <Button onClick={()=>handleClick('by data')} >Consulta CURP con datos personales</Button>
                </Card.Header>
                <Card.Body>
                    { wayToSearch === 'by curp' ? <Input placeholder='Ingresa tu CURP' label="CURP" animated={false} /> : <PersonalDataForm/>}
                </Card.Body>
                <Card.Footer>
                    <Button>Search CURP</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

// {
//     "paternal_surname": "BENITEZ",
//     "entity_birth": "MN",
//     "birthdate": "09/16/1988",
//     "names": "JUAN",
//     "sex": "H",
//     "mothers_maiden_name": "HERNANDEZ"
// }