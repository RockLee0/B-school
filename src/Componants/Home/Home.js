import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./tools.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
const someCourse=courses.slice(0,4);

    return (
        <div>
            <div className='container bg-secondary bg-gradient p-4 text-black'>
            <h1 className='fw-bold'>B-SCHOOL</h1>
            <h5>A business school is a university-level institution that confers degrees in business administration or management.[1] A business school may also be referred to as school of management, management school, school of business administration, or colloquially b-school or biz school</h5>
            </div>

            
            <div className='container mx-auto my-2 row row-cols-2'>
            {
                someCourse.map(course=><Card course={course} key={course.id}></Card>)
            }
            </div>



  
    




        </div>
    );
};

export default Home;