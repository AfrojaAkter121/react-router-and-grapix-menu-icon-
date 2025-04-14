import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Markschart = ({marksPromise}) => {

    const marksRes = use(marksPromise);
    const marksData = marksRes.data
    
    const marksChartData = marksData.map(studentData => {
        const student = {
            name : studentData.name, 
            math : studentData.marks.math,
            english : studentData.marks.english,
            science : studentData.marks.science
        }
        const avg = student.english + student.math + student.science / 3;
        student.avg = avg
        return student
    })


    return (
        <div className='mt-10'>
            <BarChart width={800} height={300} barGap={50} barSize={30} data={marksChartData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="english" fill='purple'></Bar>
                <Bar dataKey="math" fill='green'></Bar>
                <Bar dataKey="science" fill='salmon'></Bar>
            </BarChart>
        </div>
    );
};

export default Markschart;