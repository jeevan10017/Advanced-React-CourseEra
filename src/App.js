import React from 'react'

const data =[
  {
    id :1 ,
    name : 'John',
    age : 25,
    city : 'New York',
    country : 'USA',
    job : 'Software Engineer'
  },
  {
    id :2 ,
    name : 'Smith',
    age : 30,
    city : 'London',
    country : 'UK',
    job : 'Doctor'
  },
  {
    id :3 ,
    name : 'David',
    age : 35,
    city : 'Sydney',
    country : 'Australia',
    job : 'Teacher'
  },
  {
    id :4 ,
    name : 'Paul',
    age : 40,
    city : 'Paris',
    country : 'France',
    job : 'Businessman'
  },
  {
    id :5 ,
    name : 'Robert',
    age : 45,
    city : 'Berlin',
    country : 'Germany',
    job : 'Politician'
  }

]


const App = () => {
const EmployeeDetails  = data.map(employees => {
  const employNames = `${employees.name}`
  return <li>{employNames}</li>
})

return (
  <div>
    <h1>Employee Details</h1>
    <ul>
      {EmployeeDetails}
    </ul>
    </div>
)
}

export default App