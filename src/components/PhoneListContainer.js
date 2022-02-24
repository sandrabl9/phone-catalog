import React, {useState} from 'react';

import './PhoneListContainer.css';

const PhoneListContainer = ({phones}) => {
    const [detail, setDetail] = useState(false);


    const moreDetail = () => {
        setDetail(true);
    };

    const lessDetail = () => {
        setDetail(false);
    };

  



    return (

    
        
        <div className= 'grid'>

            {
                phones.map((item, index) => (
                    <div key={index}>
                        <div className='card'>
                            <img src={item.image} alt='mobile'/>
                            <h2>{item.title}</h2>
                            <p>{item.color}</p>
                            <h3>{item.price}</h3>
                            
                            <div key={index}>
                                {!detail && (
                                    <button type='button' className='btn' onClick={moreDetail}>More info</button>
                                )}
                                {detail && (<div>
                                <p>{item.description}</p> 
                                <button type='button' className='btn' onClick={lessDetail}>Less info</button>
                                </div>
                                )}
                                
                                
                            </div>
                            
                        </div>

                        

                        
                    </div>
                    

                ))
            }


        </div>
        

    )

};



export default PhoneListContainer;