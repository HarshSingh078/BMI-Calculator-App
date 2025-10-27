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
            return ;
        }

        const 
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
                <input type="number" value={height} placeholder='Enter your height' onChange={(event)=>setHeight(event.target.value)} />
            </label>
        </div>
        <button onClick={calculateBMI}>Calculate</button> 
        {
            bmi && ( 
                <div>
                    <h3>Your bmi : {bmi}</h3>
                    <h3>Your status : {status}</h3>
                </div>
            )
        }
    </div>
  )
}

export default BMICalculator