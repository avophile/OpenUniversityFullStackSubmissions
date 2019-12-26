import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = 'Half Stack Application Development'

    const part1 = 'Fundamentals of React'
    const part2 = 'Using Props to Pass Data'
    const part3 = 'State of a Component'
  
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 1

    const Header = (props) => {
        console.log("Header props: " + props.course)
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
            <Part part={part1} exercise={exercises1}/>
            <Part part={part2} exercise={exercises2}/>
            <Part part={part3} exercise={exercises3}/>
          </>
        )
    }
    
    const Total = () => {
        return (
          <>The total number of exercises is: {exercises1 + exercises2 + exercises3}</> 
        )
    }
    

    return (
      <>
        <Header course={course} />
        <Content />
        <Total />
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))