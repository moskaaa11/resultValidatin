import React, { useEffect, useState } from 'react'
import './resultFormation.css'
import { useDispatch, useSelector } from 'react-redux'
import { pushElements } from '../../store/reducers/finalData'

const ResultFormation = () => {

    const [data,setData] = useState([])
    const dispatch = useDispatch()
    const rawData = useSelector(state=>state.validatedData)

    useEffect(()=>{
        if(rawData.validated){
            let arr = [
                {
                    type:'test',
                    results: []
                }
            ]
            rawData.data.forEach(item=>{
                let find = false
                arr.forEach((element)=>{
                    if(element.type == item.result.type){find = true}
                })
                if(find){
                    arr.forEach((element)=>{
                        if(element.type == item.result.type){element.results.push(item)}
                    })
                } else if (!find){
                    let obj = {
                        type: item.result.type,
                        results: [item]
                    }
                    arr.push(obj)
                }
            })
            setData(arr)
        }
    },[rawData])

    useEffect(()=>{
        if(data.length>1){
            dispatch(pushElements({credential: data}))
        }
    },[data])

  return (
    <div className='validation'>ResultFormation</div>
  )
}

export default ResultFormation