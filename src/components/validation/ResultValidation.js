import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './resultValidation.css'
import { validation } from '../../store/reducers/finalData'

const ResultValidation = () => {

    const [surg, setSurg] = useState()
    const [group, setGroup] = useState()
    const [patient, setPatient] = useState()
    const finalData = useSelector(state=>state.finalData.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(finalData.length > 1){
            finalData.forEach(item=>{
                if(item.type == '08 ABO(FWD/RVS)/Rh-00'){
                    setGroup(item.results)
                } else if (item.type == '08 AbScr Surg Poly') {
                    setSurg(item.results)
                }
            })
        }
    },[finalData])

    useEffect(()=>{
        if(group !== undefined){
            let patients = []
            group.forEach(item=>{
                surg.forEach(el=> {
                    if(el.id == item.id){
                        let obj = {
                            id: item.id,
                            results: [
                                el,
                                item
                            ]
                        }
                        patients.push(obj)
                    }
                })
            })
            setPatient(patients)
        }
    },[group])

    useEffect(()=>{
        if(patient !== undefined){
            dispatch(validation({credential: patient}))
        }
    },[patient])

    return (
        <div className='validation'>validationresult</div>
      )
}

export default ResultValidation