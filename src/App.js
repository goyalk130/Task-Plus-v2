import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router';
import DailyTasks from './components/dailytask/dailytask';
import Header from './components/header/header';
import ListWrapper from './components/listwrapper/listwrapper';
import WorkTasks from './components/worktask/worktask';

function App() {

  const [dailyTaskData,setDailyTaskData] = useState([])

    function AddDailyTask(e){
        console.log(e)
        setDailyTaskData(preValue => {
          const data = {
            id: preValue.length,
            content : e,
            done : false
          } 
            console.log(preValue)

            return [...preValue,data]
        })
    }

    function dailyTaskDone(index){
      setDailyTaskData(preValue => {
        const newValue = preValue.map((eachItem) => {
            if(eachItem.id === index){
              return {...eachItem,done : !eachItem.done}
            }else{
              return eachItem
            }
        })
        return newValue;
      })
    }

    function deleteDailyTask(index){
      setDailyTaskData(preValue => {
        const newValue = preValue.filter((eachItem) => {
            return eachItem.id !== index;
        })
        return newValue;
      })
    }

    const [workTaskData,setWorkTaskData] = useState([])

    function AddWorkTask(e){
        console.log(e)
        setWorkTaskData(preValue => {
          const data = {
            id: preValue.length,
            content : e,
            done : false
          } 
            console.log(preValue)

            return [...preValue,data]
        })
    }

    function workTaskDone(index){
      setWorkTaskData(preValue => {
        const newValue = preValue.map((eachItem) => {
            if(eachItem.id === index){
              return {...eachItem,done : !eachItem.done}
            }else{
              return eachItem
            }
        })

        return newValue;
      })
    }

    function deleteWorkTask(index){
      setWorkTaskData(preValue => {
        const newValue = preValue.filter((eachItem) => {
            return eachItem.id !== index;
        })
        return newValue;
      })
    }

  return (<><Header/>
  <ListWrapper><Routes>
    
    <Route path='/' exact element={<DailyTasks delete={deleteDailyTask} done={dailyTaskDone} add={AddDailyTask} data={dailyTaskData} />} />
    <Route path='/work' element={<WorkTasks delete={deleteWorkTask} done={workTaskDone} add={AddWorkTask} data={workTaskData} />} />

  </Routes></ListWrapper>
  </>);
}

export default App;
