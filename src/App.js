import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJSON from './foods.json';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJSON);

  return (
    <div className='App'>
      {foods.map(food => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt={food.name} />
          </div>
        )
      })}

    </div>
  )
}  


function App2() {
  const [foods, setFoods] = useState(foodsJSON);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((elem, i) => {
          return (
            <Col>
              <Card
                title={'FOOD_NAME_HERE'}
                style={{ width: 230, height: 300, margin: 10 }}
              >
                <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
                <p>Calories: FOOD_CALORIES_HERE</p>
                <p>Servings: FOOD_SERVINGS_HERE</p>
                <p>
                  <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default App;
