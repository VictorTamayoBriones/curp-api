import { Container, Spacer, Card, Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PersonalDataForm } from '../../components/PersonalDataForm';
import axios from 'axios';

export const SearchCurp = () =>{

    const[wayToSearch, setWayToSearch]=useState('by curp');
    const[curp, setCurp]=useState('');

    const handleClick = (action) => setWayToSearch(action)

    const handleChange = (e) => setCurp(e.target.value)

    const handleSearch = async(curp) =>{
        let config = {
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-host': 'curp-renapo.p.rapidapi.com',
              'x-rapidapi-key': 'fdbdc85056mshe9b0c25d1983714p1a8efajsn63285b310483'
            },
            data: {curp: curp}
        };

        try{
            const res = await axios.post('https://curp-renapo.p.rapidapi.com/v1/curp', config)
            console.log(res.data)
        }catch(err){
            console.log(err.response)
        }
    }

    return(
        <Container>
            <Card>
                <Card.Header>
                    <Button onClick={()=>handleClick('by curp')} >Consulta CURP</Button>
                    <Spacer x={1}/>
                    <Button onClick={()=>handleClick('by data')} >Consulta CURP con datos personales</Button>
                </Card.Header>
                <Card.Body>
                    { wayToSearch === 'by curp' ? <Input placeholder='Ingresa tu CURP' value={curp} onChange={handleChange} label="CURP" animated={false} /> : <PersonalDataForm/>}
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleSearch} >Search CURP</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}