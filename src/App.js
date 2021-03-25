import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import StoryReel from './Components/StoryReel';
import './App.css'
import Feed from './Components/Feed';
import RightSideBar from './Components/RightSideBar';
import Login from './Components/Login';
import {Route, Router, Switch} from 'react-router-dom'
import { useStateValue } from './Components/StateProvider';
import { useEffect, useState } from 'react';
import {auth} from './firebaseConfig'




function App() {

  const [{user,posts},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log
      (`the user is ${authUser}`);
     
          if(authUser)
          {
            //the user is loggen in
            dispatch({
              type:'SET_USER',
              user: authUser
            })
          }
          else
          {
            //the user has logged out
            dispatch({
              type:'SET_USER',
              user: null,
            })
          }
      })
  }, [])
  
  return (
    <div className="app">
      {
        !user?(
          <>
            <Login/>
          </>
        ): (  
          <>
              <Header />
              <div className="app__body">
              <Sidebar/>
              <Feed/>
              <RightSideBar />
              </div>
          </>
        ) 
      }
      {/*HEADER*/}
      {/*Sidebar*/ }
      {/*feed it self*/ }
      {/*WIDGETS*/ }

    </div>
  );
}

export default App;

//NzoPQScAoxNgHl7S