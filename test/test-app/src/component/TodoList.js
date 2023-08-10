import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
//import Table from 'react-bootstrap/Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//import Paper from '@mui/material/Paper';




const TodoList = () => {
    const [todos ,settodos]=useState()

    //const [Message, setMessage] = useState('');
   
    const[FilteredResults, setFilteredResults]=useState('')

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => settodos(json))

        localStorage.setItem('todos', JSON.stringify(todos));

        


        

    },[todos])


    const handleChange =(event) => {
        //setMessage(event)
      
       
    
        if(event !== ''){
         const filteredData=todos.filter((todo)=>{
    
        
              return Object.values(todo).join(' ').toLowerCase().includes(event.toLowerCase())
        //    return(
        //      event && todo && todo.title && todo.title.toLowerCase().includes(event)
        //   ) 
           

        
         })  
         setFilteredResults(filteredData)
        }
        else{
        
         setFilteredResults(todos) 
        }
        
        
       
       // console.log(FilteredResults)
      }

      







  

  


 return <div>
     <h1>TodoList</h1>
     <input
        type="text"
        id="message"
        name="message"
        onChange={(e) => handleChange(e.target.value)}
        
      />

<TableContainer>
    <Table sx={{ minWidth: 600 }} size="small" aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>USERID</TableCell>
          <TableCell>TITLE</TableCell>
          <TableCell align="right">STATUS</TableCell>
      
        </TableRow>
      </TableHead>
      <TableBody>
{
  FilteredResults && FilteredResults
  .map((todo)=><TodoItem completed={todo.completed} id={todo.id} userid={todo.userId}>
     {todo.title}  
   
  </TodoItem>
  )
}
      </TableBody>
      </Table>
  </TableContainer>
 




       {/* <div className="Todo-list"> 
     { 
      
      //  todos && todos
     FilteredResults && FilteredResults
      // .filter((todo)=>todo.userId===3)
       .map((todo)=><TodoItem completed={todo.completed}>
                        {todo.title} 
         </TodoItem>
    
                         
        
            )
     }
     </div>  */}
 </div>
 



}  
        
        

    


  

 export default TodoList;