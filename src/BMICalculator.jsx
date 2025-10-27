import React from 'react'
import { useState } from 'react'
import './BMICalculator.css'
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

        const heightInMeters = parseFloat(height) / 100 ;
        const bmiValue = (parseFloat(weight)/(heightInMeters*heightInMeters)).toFixed(2) ;
        setBmi(bmiValue) ;

        let bmiStatus = '' ;
        if(bmiValue < 18.5) {
            bmiStatus = 'Underweight' 
        }
        else if (bmiValue < 24.9) {
            bmiStatus = 'Normal Weight' ;
        }
        else if (bmiValue < 29.9) {
            bmiStatus = 'Overweight' ;
        }
        else {
            bmiStatus = 'Obesity' ;
        }
        setStatus(bmiStatus) ; 
    }
  return (
    <div className='container'>
        <h1>BMI Calculator</h1>
        <div className='input-group'>
            <label> 
                Weight (kg) :
                <input type="number" value={weight} placeholder='Enter your weight' onChange={(event)=>setWeight(event.target.value)} />
            </label>
        </div>
        <div className='input-group'>
            <label> 
                Height (cm) :
                <input type="number" value={height} placeholder='Enter your height' onChange={(event)=>setHeight(event.target.value)} />
            </label>
        </div>
        <button onClick={calculateBMI}>Calculate</button> 
        {
            bmi && ( 
                <div className='result'>
                    <h3>Your BMI : {bmi}</h3>
                    <h3>Status : {status}</h3>
                </div>
            )
        }
    </div>
  )
}

export default BMICalculator