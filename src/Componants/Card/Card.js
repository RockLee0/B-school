import React from 'react';
const Card = (props) => {
console.log(props.course);
const {courseName,tutor,courseFee,img}=props.course;

    return ( 
        <div>
      <div className='h-100 p-2 bg-light bg-gradient border border-secondary rounded col'>
          <div>
          <img className='w-100 h-50 img-fluid' src={img} alt="..."/>
          </div>
          
          <div className='p-2 mt-2'> 
          <h4>Course Name:{courseName}</h4>
          <h5>Tutors Name:{tutor}</h5>
          <h5>Fee: $ {courseFee}</h5>

          </div>

      </div>
    
    </div>
        
    );
};

export default Card;