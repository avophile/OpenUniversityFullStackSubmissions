import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
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

    const Header = (props) => {
        console.log("Header props: ", props.course)
        return <h1>{props.course}</h1>
    }
    
    const Part = (props) => {
        console.log("Part props: ", props.part, props.exercise)
          return (
            <p>{props.part} {props.exercise}</p>
          )
    }
    
    const Content = () => {
        return (
          <>
            <Part part={course.parts[0].name} exercise={course.parts[0].exercises}/>
            <Part part={course.parts[1].name} exercise={course.parts[1].exercises}/>
            <Part part={course.parts[2].name} exercise={course.parts[2].exercises}/>
          </>
        )
    }
    
    const Total = () => {
        return (
          <>The total number of exercises is: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</> 
        )
    }
    
    return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))