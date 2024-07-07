import React, {useState} from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (item) => {
    setCurrentItem(item);
    document.getElementById('form-title').textContent = "Edit Table";
  };

  const handleDelete = async (id) => {
    try {
      await
      axios.delete(`http://localhost:8000/api/items/${id}/`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting the item!', error);
    }
  };

  const handleSuccess = () => {
    setCurrentItem(null);
    setRefresh(!refresh);
    document.getElementById('form-title').textContent = "Create Table";
    var form = document.getElementById('form');

    form.reset();
  };

  return(
    <div className='App'>
      <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete} id='itemlist'/>
      <ItemForm item={currentItem} onSuccess={handleSuccess}/>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
