import Button from '@restart/ui/esm/Button';
import React from 'react';

const Tutors = () => {
    return (
        <div className='container'>
            <div className=' d-flex text-center'>

            <div className='w-50' >

            <img className='w-100 p-3' src="https://alumni.harvard.edu/sites/default/files/styles/large/public/feature/main_image/Unity.jpeg?itok=vRw_wDEx" alt="" />

            </div>
            <div className='w-50 text-center'>
               <h1>Alumni Come Together for Virtual Unity Weekend</h1>
                 <br />

               <h4>A first-of-its-kind virtual conference led by—and in celebration of—Harvard alumni of color, Unity Weekend provided a forum for alumni to discuss issues at the intersection of identity, inclusion, and impact. Author, producer, and television host Baratunde Thurston AB ’99 spoke about the intersection of art and democracy in his keynote.</h4>

               <Button className='bg-danger text-white p-3 my-2 border rounded fs-4'>Read More</Button>


            </div>

        </div>
            <div className=' d-flex text-center'>

          
            <div className='w-50 text-center'>
               <h1>Harvard Names Vice Provost for Climate and Sustainability</h1>
                 <br />

               <h4>In his new role, James H. Stock will work closely with faculty, students, staff, and academic leadership across the University to guide Harvard’s strategies for advancing climate research and its global impact.</h4>

               <Button className='bg-white text-black px-4 my-2 border border-dark  rounded fs-4'>Read More</Button>


            </div>
            <div className='w-50' >

              <img className='w-100 p-3' src="https://alumni.harvard.edu/sites/default/files/styles/large/public/feature/main_image/Stock2500-900x600.jpeg?itok=GysO1IXm" alt="" />

            </div>

        </div>
           
        </div>
    );
};

export default Tutors;