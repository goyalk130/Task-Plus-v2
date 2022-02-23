import React, { useState } from 'react'
import List from '../list/list'
import Main from '../list/maincontainer'

export default function WorkTasks(props){

    

    return(<><Main Add={props.add}><List delete={props.delete} done={props.done} data={props.data} /></Main></>)
}