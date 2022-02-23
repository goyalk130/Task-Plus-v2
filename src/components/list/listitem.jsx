import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HomeIcon from '@mui/icons-material/Home';
export default function ListItem(props){

    
    const data = props.data;

    function toggleDone(){
        props.done(data.id)
        
    }

    function deleteItem(){
        props.delete(data.id)
    }
        return (<div onClick={toggleDone} className='list-item'>
            {data.done ? <input type="checkbox" className='donecheckbox' checked></input> :<input className='donecheckbox' type="checkbox"></input>}
            {data.done ? <span style={{background : "linear-gradient(#a8c0ff,#3f2b96)", border : 0}}/> : <span/>}
            <p style={data.done ? {textDecoration:"line-through"} : {textDecoration: "none"}}>{data.content}</p>
            <button style={{zindex : 10}} onClick={deleteItem}><DeleteOutlineIcon htmlColor='#3f2b96' fontSize='large'/></button>            
        </div>)
}