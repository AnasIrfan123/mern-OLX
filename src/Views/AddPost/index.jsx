import React from 'react';
import './index.css';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function AddPost() {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [categ, setCateg] = useState()
    const [amount, setAmount] = useState()
    const [descrip, setDescrip] = useState()
    const [image, setImage] = useState()

    const [error, setError] = useState()         // error state

    const DataSubmit = async () => {

        if (!title || !categ || !amount || !descrip || !image) {
            setError('fill out all proper field')
            return;
        }

        console.log(title, categ, amount, descrip, image)
        
        try {

            const response = await fetch('http://localhost:3001/ads/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({title: title, category: categ, amount: amount, description: descrip, image: image})
            })
            console.log(title, categ, amount, descrip, image);

            const json = await response.json()

            console.log('json', json);

            if (json.error) {
                alert('please enter valid post data !!')
            }

            
        } catch (error) {
             console.error('Error post data: ', error);
        }

    }
    // http://localhost:3001/ads/post
    return ( 
        <div className='addpostBody'>
             
             <div className="addpostcontent">

                <div className="addpostHeader">Add Post</div>

    <div className="err">
        {error}
    </div>
                <div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Title' onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Category' onChange={(e) => setCateg(e.target.value)} />
                    </div>

                    <div className="addpostfield">
                        <input type="number" placeholder='Enter Post Amount' onChange={(e) => setAmount(e.target.value)}/>
                    </div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Descript' onChange={(e) => setDescrip(e.target.value)}/>
                    </div>

                    <div class='addpostfield'>
                         <input type="file" onChange={(e) => setImage(e.target.value)} />
                        <button>Select File</button>
                    </div>

                    <button className='addpostBtn'  onClick={DataSubmit} >Submit</button>
<br /><br />
                    <button className='addpostBtn' onClick={() => navigate(-1)}>Cencel</button>

                </div>

             </div>
        </div>
    )
}

export default AddPost; 


