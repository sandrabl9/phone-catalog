import React, {useState} from 'react';

const PhoneDetailComponent = ({phone}) => {

    const [detail, setDetail] = useState(false);
    const [info, setInfo] = useState("");




    const moreDetail = () => {
     setInfo(phone);

        setDetail(true);
        
        
    };

    const lessDetail = () => {
        setDetail(false);
    };

    


    return(  

                         <div>
                             

                                 {!detail && (
                                    <button type='button' className='btn' onClick={moreDetail}>More info</button>
                                )}
                                {detail && (<div>
                                <div>{info}</div>
                                <button type='button' className='btn' onClick={lessDetail}>Less info</button>
                                </div>
                                )}
                             
                                

                         </div>
        
        
    )
}

export default PhoneDetailComponent;