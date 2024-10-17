import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushElements } from '../../store/reducers/validatedData'
import './validation.css'

const Validation = () => {
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const rawData = useSelector(state=>state.main.data)

    useEffect(()=>{
        if(rawData.length > 1){
            let arr = []
            rawData.forEach(item => {
                let obj = {
                    id: item.testResult.tmResult.patientSample1ID,
                    instrument: {
                        id: item.testResult.instrument.serialNumber
                    },
                    type: item.testResult.sampleTypeCode,
                    dateResult: (new Date(item.testResult.testCompletionDateUtc)).getMonth() + 1,
                    result:{
                        type: item.testResult.tmResult.testID,
                        result: item.testResult.tmResult.testAnalysisTypes
                    }
                }
                if (obj.type !== 'Q'){
                    arr.push(obj)
                }
            });
            setData(arr)
        }
    },[rawData])

    useEffect(()=>{
        if(data !== undefined){
            dispatch(pushElements({credential: data}))
        }
    },[data])

  return (
    <div className='validation'>validationData</div>
  )
}

export default Validation