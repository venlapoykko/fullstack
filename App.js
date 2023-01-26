
// Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, 
// että se koostuu kolmesta uudesta komponentista: Header, Content ja Total. Kaikki data pidetään
// edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien 
// avulla. Header huolehtii kurssin nimen renderöimisestä, Content osista ja niiden tehtävämääristä
// ja Total tehtävien yhteismäärästä. Tee uudet komponentit tiedostoon App.js.

const Header = (props) => {
  return (
  <h1>
    {props.course}
  </h1>
  )
}

const Content = (props) => {
  return (
    <>
    <p>
      {props.parts[0]} {props.exercises[0]}
    </p>
    <p>
      {props.parts[1]} {props.exercises[1]}
    </p>
    <p>
      {props.parts[2]} {props.exercises[2]}
    </p>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
