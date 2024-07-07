import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
        }   
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, address, email, phone};
        try {
            if(item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('Error submitting the form!', error);
        }
    };

    return(
        <div id='form'>
            <label><h1 id='form-title'>Create Item</h1></label>
            <hr></hr>
        <form onSubmit={handleSubmit}>
            <div id='form-content'>
                <label>First Name: </label><br></br>
                <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                <label id='form-label'>Middle Name: </label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)}/>
                <label id='form-label'>Last Name: </label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </div><br></br>
            <div id='form-content'>
                <label>Address: </label><br></br>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
                <label id='form-label'>Email: </label><br></br>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label id='form-label'>Phone: </label><br></br>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <br></br>
            <button type='submit' className='submit-button'>Submit</button>
        </form>
        </div>
    );
}

export default ItemForm;