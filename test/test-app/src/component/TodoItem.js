

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';



  

export default function TodoItem(props){

const{children,id,...rest}= props
// const data = {
//   products:[
//     {children},
//     {completed}
//   ]
// };

return( <>
      <TableRow
             key={id}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
             <TableCell>
              {id}
            </TableCell> 
            <TableCell>
              {rest.userid}
            </TableCell> 
             <TableCell>
              {children}
            </TableCell> 
          
           {/* <TableCell align="right"> <input type="checkbox" checked={rest.completed} /></TableCell> */}
           <TableCell> <Checkbox  defaultChecked color="secondary"
                               checked={rest.completed}
                               inputProps={{ 'aria-label': 'controlled' }}
                        
    
    /></TableCell>
            </TableRow>
    

     </> 
      
 


      

)

}