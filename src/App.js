import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { pushElements, clearCash } from './store/reducers/mainSlice'

import Validation from './components/Validation'
import { clearCashes } from './store/reducers/validatedData'


const App = () => {

  const [drag, setDrag] = useState(false)
  const [files, setFiles] = useState()
  const dispatch = useDispatch()
  const data = useSelector(state=>state.main.data)


  const dragStartHandler = (e) =>{
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e) =>{
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e) => {
    e.preventDefault()
    setFiles([...e.dataTransfer.files])
    setDrag(false)
  }

  useEffect(()=>{
    if(files !== undefined){
      for(let i =0; i < files.length; i++){
        const reader = new FileReader()
        reader.readAsText(files[i])
        reader.onloadend = () => {
          let obj = eval('({obj:' + reader.result + '})').obj
          dispatch(pushElements({credential: obj}))
        }
      }
    }
  },[files])

  const PrintHandler = () => {
    console.log('print')
    console.log(data)
  }

  const endHandler = () => {
    dispatch(clearCash())
    dispatch(clearCashes())
    console.log('end')
    console.log(data)
  }

  return (
    <div className='App'>
      <Validation className='validation'/>
      <div className='container'>
        <button className='button' onClick={PrintHandler}>Роздрукувати Звіт</button>
        <button className='button' onClick={endHandler}>Завершити</button> 
      </div>
      {drag
      ? <div 
          onDragStart={e=>dragStartHandler(e)}
          onDragLeave={e=>dragLeaveHandler(e)}
          onDragOver={e=>dragStartHandler(e)}
          onDrop={e=>onDropHandler(e)}
          className='drop-area'
        >
        Відпустіть файли щоб завантажити їх</div>
      : <div 
          onDragStart={e=>dragStartHandler(e)}
          onDragLeave={e=>dragLeaveHandler(e)}
          onDragOver={e=>dragStartHandler(e)}
          className='drop-finish-area'
        >
          Перетягніть файли щоб завантажити їх</div>
      }
    </div>
  )
}

export default App