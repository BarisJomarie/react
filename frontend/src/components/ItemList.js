import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('Error catching the items!', error)
        }
    };


    return (
            <div>
                <br></br>
                <h1>Items</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id} id='item-content'>
                            <div>
                            {item.first_name} {item.middle_name} {item.last_name} : {item.address} : {item.email} : {item.phone}
                            </div>
                            <div className='buttons'>
                            <button onClick={() => onEdit(item)} className='edit-button'>Edit</button>
                            <button onClick={() => onDelete(item.id)} className='delete-button'>Delete</button>
                            </div>
                        </li>
                        
                    ))}
                </ul>
            </div>
    );

}

export default ItemList;
