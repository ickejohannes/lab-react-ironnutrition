import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';



function App() {
  const [searchString, setSearchString] = useState("");

  const handleSearchStringInput = e => setSearchString(e.target.value);

  const [foods, setFoods] = useState(foodsJSON);

  const addFood = (newFood) => {
    const foodsCopy = structuredClone(foods);
    foodsCopy.push(newFood);
    setFoods(foodsCopy);
  };

  function findIndex(arrayOfObjectsWithNameKey, item) {
    for (let i = 0; i < arrayOfObjectsWithNameKey.length; i += 1) {
      if (arrayOfObjectsWithNameKey[i].name == item.name) {
        return i;
      }
    }
  }

  const deleteFood = food => {
    const foodsCopy = structuredClone(foods);
    const index = findIndex(foodsCopy, food)
    foodsCopy.splice(index, 1);
    setFoods(foodsCopy);
  }

  const searchInArrayOfObjects = (arr, query) => {
    return arr.filter(element => {
      return element.name.indexOf(query) !== -1
    })
  }


  return (
    <div className='App'>
      <Search searchString={searchString} setter={handleSearchStringInput} test={"hithere"} />

      <AddFoodForm addFood={addFood} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {searchInArrayOfObjects(foods, searchString).map((food, index) => {
          return (
            <FoodBox key={index} food={food} deleteFood={deleteFood} />
          )
        })}
      </Row>
    </div>
  )
}  



export default App;
