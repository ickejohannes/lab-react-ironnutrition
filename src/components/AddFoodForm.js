import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({addFood, sayHi}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = e => setName(e.target.value);
 
  const handleImageInput = e => setImage(e.target.value);
 
  const handleCaloriesInput = e => setCalories(e.target.value);
 
  const handleServingsInput = e => setServings(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood({ name, image, calories, servings });
  };

  return (
    <form onSubmit={handleSubmit}>
    <Divider>Add Food Entry</Divider>

    <label>Name</label>
    <Input value={name} type="text" onChange={handleNameInput} />

    <label>Image</label>
    <Input value={image} type="text" onChange={handleImageInput} />

    <label>Calories</label>
    <Input value={calories} type="number" onChange={handleCaloriesInput} />


    <label>Servings</label>
    <Input value={servings} type="number" onChange={handleServingsInput} />

    <button>Create</button>
    </form>
  );
}
//    <button type="button" onClick={() => addFood({name, image, calories, servings})}>Create</button>
//    <button onSubmit={(event) => addFood(event, {name, image, calories, servings})}>Create</button>


export default AddFoodForm;
