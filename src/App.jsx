import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HeaderComponent from './Component/Header/HeaderComponent'
import MenuBarComponent from './Component/MenuBar/MenuBarComponent'
import BodyContent from './Component/BodyContent/BodyContent'
import ImagesAdd from './Component/Header/ImagesAdd'


function App() {
  const [count, setCount] = useState(0)
  const firstname = "thulakshana";
  const middle = "dissanayaka";
  const country = "sri lanaka";

  const getname = (f, m, s) => {
    return `${f} ${s} ${m}`;
  }

  const arr1 = ["apple", "orange", "pineapple"];

  const lang=<ul>
    <li>html</li>
    <li>css</li>
    <li>js</li>
  </ul>

  const obj={
    name:"thula",
    age:12
  }

  function event_h(e){
    console.log("clicked",e); //e=event object
  }

  const event_h2=(e)=>{
    console.log("hello 2",e.target);
  }

  const hello=(name,e)=>{
    console.log("hello3" + name,e); //event obejct 

  }


  const style_dev={ //best practice for add css
    color:'blue',fontSize:'100px'
  }

  return (
    <>
      <div className='count'>
      <HeaderComponent/>
        <h1>Employee Details</h1>
        <p>Full name: {firstname} {middle}</p>
        <p>Full name function: {getname("aa","bb","cc")}</p>
        <p>{firstname} likes to eat {arr1[0]}</p>
        {lang}
        <p>{obj.name} is {obj.age} years old</p>
        <HeaderComponent/>
        <BodyContent>
          <button>click me</button>
        </BodyContent>
        <BodyContent>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae nisi aperiam possimus aut nam. Repellat ad dolorem, assumenda distinctio mollitia, adipisci incidunt sunt delectus doloremque perferendis labore nemo nam.</p>
        </BodyContent>

        <ImagesAdd/>

        <button onClick={event_h}>click me</button>
        <button onClick={event_h2}>click me1</button>
        <button onClick={(e)=>{hello("thula",e)}}>click me 2</button> 
       

        <p style={{color:'red'}}>ttttttttttttttthhhhhhhhhh</p>

        <p style={style_dev}>hxusjhdisdisdisadjias    </p>
         
      </div>
      
    </>
  )
}

export default App
