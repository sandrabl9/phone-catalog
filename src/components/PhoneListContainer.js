import React from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';

import './PhoneListContainer.css';

const PhoneListContainer = ({phones}) => {
    



    return (

    
        
        <div className= 'grid'>

            {
                phones.map((item) => (
                    <div key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt='mobile'/>
                            <h2>{item.title}</h2>
                            <p>{item.color}</p>
                            <h3>{item.price}</h3>
                            

                             <PhoneDetailComponent phone={item.description} />
                            
                        </div>

                        

                        
                    </div>
                    

                ))
            }


        </div>
        

    )

};



export default PhoneListContainer;