import React from 'react'
import { useState, useEffect } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import './printFormating.css'
import { pushElements } from '../../store/reducers/print'

const PrintFormating = () => {

  const [groupA, setGroupA] = useState()
  const [groupAB, setGroupAB] = useState()
  const [groupB, setGroupB] = useState()
  const [group0, setGroup0] = useState()
  const [formatedData, setFormatedData] = useState()
  const dispatch = useDispatch()
  const rawData = useSelector(state=>state.finalData.patientData)

  useEffect(()=>{
    if(rawData.length > 1){
      let A =[]
      let B = []
      let AB = []
      let O = []
      rawData.forEach(item=>{
        item.results.forEach(el=>{
          if(el.result.type == '08 ABO(FWD/RVS)/Rh-00'){
            let result = el.result.result[0].initialTestAnalysisResult
            let formatedresult = el.result.result[0].editedTestAnalysisResult
            if(result == 'A' || formatedresult == 'A'){
              A.push(item)
            } else if(result == 'B' || formatedresult == 'B'){
              B.push(item)
            } else if(result == 'AB' || formatedresult == 'AB'){
              AB.push(item)
            } else {
              O.push(item)
            }
          }
        })
      })
      setGroupA(A)
      setGroupB(B)
      setGroupAB(AB)
      setGroup0(O)
      let obj = {
        firstGroup: group0,
        secondGroup: groupA,
        thirdGroup: groupB,
        fourthGroup: groupAB
      }
      setFormatedData(obj)
    }
  },[rawData])

  useEffect(()=>{
    if(formatedData !== undefined){
      dispatch(pushElements({credential: formatedData}))
    }
  },[formatedData])

  return (
    <div className='validation'>printFormating</div>
  )
}

export default PrintFormating