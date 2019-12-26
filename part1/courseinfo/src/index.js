import React from 'react'
import ReactDOM from 'react-dom'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}   

const Header = ({course}) => {
  console.log("Header props: ", course)
  return <h1>{course}</h1>
}

const Parts = (parts) => {
  console.log("Part props: ", parts)
    return (
      <>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      </>
    )
}

const Content = ({parts}) => {
  console.log("Content props: ", parts)
  return (
    <>
      <Parts parts={course.parts}/>
    </>
  )
}

const Total = ({parts}) => {
  console.log("Total props: ", parts)
  return (
    <>The total number of exercises is: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</> 
  )
}

const App = () => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))