import React from 'react'
import ListItem from './listitem'

export default function List(props){

    const Data = props.data;
    return(<div className='all-tasks'>
        {Data?.map((eachitemdata) => {
            return <ListItem delete={props.delete} done={props.done} data={eachitemdata} />
        })}
        
    </div>)
}