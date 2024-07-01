  const DessertsList = (props) => {
 const lowCaloriesDesert =props.data
  .filter((dessert) => {
    return dessert.calories < 500;
  })
  .sort((a, b) => { 
    return a.calories - b.calories; 
  })
  .map((dessert) => {
    return (
     <li>
        {dessert.name} - {dessert.calories} calories
     </li>
    );
  })
  return <ul>{lowCaloriesDesert}</ul>;

  }
export default DessertsList; 