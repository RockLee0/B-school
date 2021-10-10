import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./tools.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div>
            <h1 className='container mx-auto text-center border border-secondary rounded fw-light fs-1 p-3'>Our all services</h1>
            <div className='container mx-auto my-2 row row-cols-3'>
            {
                courses.map(course=><Card course={course} key={course.id}></Card>)
            }
            </div>

        </div>
    );
};

export default Services;