import { Routes, Route } from 'react-router-dom';
import { SearchCurp } from '../views/SearchCurp';
import { ViewCurp } from '../views/ViewCurp';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<SearchCurp/>}/>
            <Route path='/view-curp' element={<ViewCurp/>} />
        </Routes>
    )
}