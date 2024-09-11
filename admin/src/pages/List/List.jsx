import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
      console.error("Error fetching the list:", error);
    }
  };

  const removeFood = async (foodId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        if (response.data.success) {
          toast.success("Food item removed successfully");
          await fetchList(); // Refresh the list after deletion
        } else {
          toast.error("Failed to remove the food item");
        }
      } catch (error) {
        toast.error("An error occurred while removing the food item");
        console.error("Error removing the food item:", error);
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
};

export default List;
