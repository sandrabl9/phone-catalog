import React, {useState} from 'react';

import './PhoneListContainer.css';

const PhoneListContainer = ({phones}) => {
    const [detail, setDetail] = useState(false);


    const moreDetail = () => {
        setDetail(true);
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
                            
                            <div>
                                {!detail && (
                                    <button className='btn' onClick={moreDetail}>More info</button>
                                )}
                                {detail && (<p>{item.description}</p>)}
                                
                                
                            </div>
                            
                        </div>

                        

                        
                    </div>
                    

                ))
            }


        </div>
        

    )

};



export default PhoneListContainer;