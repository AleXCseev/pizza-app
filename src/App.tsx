import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'

function App() {

  return (
    <>
     <Button onClick={() => console.log("click")}> Button</Button>
     <Button appearence='big' onClick={() => console.log("click")}> Button</Button>
     <Input type='text' placeholder='Name' />
    
    
    </>
  )
}

export default App
