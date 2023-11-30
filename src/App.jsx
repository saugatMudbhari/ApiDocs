import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeadSection from './Components/HeadSection'
import Login from './Components/Login'
import { Grid, GridColumn, Container } from 'semantic-ui-react'
import AnotherLogin from './Components/AnotherLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <Navbar />

        <div className="the_content">
          <HeadSection />
          <Container >
            {/* <Login /> */}
            <AnotherLogin />
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
