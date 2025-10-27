import React from 'react'
import { useState } from 'react'
function BMICalculator() {
    const [weight , setWeight] = useState('') 
    const [height , setHeight] = useState('') 
    const [bmi , setBmi] = useState(null)
    const [status , setStatus] = useState('')

    const calculateBMI = () => {
        if(!weight || !height) {
            alert('Please enter both height and weight')
        }
    }
  return (
    <div>
        <h1>BMI Calculator</h1>
        <div>
            <label> 
                Weight (kg) :
                <input type="number" value={weight} placeholder='Enter your weight' onChange={(event)=>setWeight(event.target.value)} />
            </label>
        </div>
        <div>
            <label> 
                Height (cm) :
                <input type="number" value={height} placeholder='Enter your height' />
            </label>
        </div>
    </div>
  )
}

export default BMICalculator