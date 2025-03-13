import React from 'react';
import './App.css'
// import { MyButton } from './components/MyButton/MyButton';
// import { UserName } from './components/UserName/UserName';
// import { MyButton } from './components/MyButton';
// import { UserName } from './components/UserName';
import { MyButton, UserName, isLoggedIn, LoginStatus, ProductList, Counter } from './components';

function App() {
  // return (
  //   <>
  //   <h2>Hello React!</h2>
  //   <MyButton />
  //   </>
  // )

  return (
    <React.Fragment>
    <h2>Hello React!</h2>
    <MyButton />

    <button className='bg-green'>Other button</button>
    
    <UserName className='bg-green' a="test" userName='John' bgColor='green'/>
    <UserName className='bg-green' a="test" userName='Sajneet' bgColor='orange'/>

    {/* <p>{isLoggedIn && 'Is Logged In'}</p> */}

    <LoginStatus />


    <ProductList />

    <Counter />
    <Counter />
    </React.Fragment>
  )
}

export default App
