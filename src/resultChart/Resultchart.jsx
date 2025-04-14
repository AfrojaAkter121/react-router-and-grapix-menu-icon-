import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const students =  [
    {
      "name": "Alif",
      "math": 85,
      "english": 89,
      "science": 87
    },
    {
      "name": "Bushra",
      "math": 90,
      "english": 95,
      "science": 92
    },
    {
      "name": "Chayon",
      "math": 75,
      "english": 80,
      "science": 78
    },
    {
      "name": "Deepa",
      "math": 80,
      "english": 85,
      "science": 84
    },
    {
      "name": "Imran",
      "math": 65,
      "english": 70,
      "science": 69
    },
    {
      "name": "Farhana",
      "math": 93,
      "english": 97,
      "science": 95
    },
    {
      "name": "Gautam",
      "math": 78,
      "english": 83,
      "science": 81
    },
    {
      "name": "Habib",
      "math": 70,
      "english": 78,
      "science": 75
    },
    {
      "name": "Jannat",
      "math": 88,
      "english": 90,
      "science": 89
    },
    {
      "name": "Kamrul",
      "math": 68,
      "english": 73,
      "science": 72
    }
  ]
  

  

const Resultchart = () => {
    
    return (
        <div className='mt-20'>
            <LineChart width={900} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="english" stroke='red'></Line>
                <Line dataKey="science" stroke='purple'></Line>
            </LineChart>
        </div>
    );
};

export default Resultchart;