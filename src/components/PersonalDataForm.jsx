import { Input, Spacer } from '@nextui-org/react'

export const PersonalDataForm =()=>{
    return(
        <>
            <Input placeholder='Names' label='Names' animated={false} />
            <Spacer y={1}/>
            <Input placeholder='Paternal Surname' label='Paternal Surname' animated={false} />
            <Spacer y={1}/>
            <Input placeholder='Mothers surname' label='Mothers Surname' animated={false} />
            <Spacer y={1}/>
            <Input placeholder='09/16/2000' label='Birthday' animated={false} />
            <Spacer y={1}/>
            <Input placeholder='Sex' label='Sex' animated={false} />
            <Spacer y={1}/>
            <Input placeholder='Entity Birth' label='Entity Birth' animated={false} />
        </>
    )
}