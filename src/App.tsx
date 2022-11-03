import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Component/Greet';
import { Person } from './Component/Person';
import { PersonList } from './Component/PersonList';
import { Status } from './Component/Status';
import { Heading } from './Component/Heading';
import { Oscar } from './Component/Oscar';
import { Button } from './Component/Button';
import { Container } from './Component/Container';
import { ThemeContextProvider } from './Component/Context/ThemeContext';
import { Box } from './Component/Context/Box';
import { UserContextProvider } from './Component/Context/UserContext';
import { User } from './Component/State/User';
import { Private } from './Component/Auth/Private';
import { profile } from 'console';
import { Profile } from './Component/Auth/Profile';
import { List } from './Component/GENERIC/List';
import { RandomNumber } from './Component/restriction/RandomNumber';
import { Toast } from './Component/templateliterals/Toast';
import {CustomButton} from './Component/html/Button';
import {Text} from './Component/polymorphic component/Text'


 function App() {

//   const PersonName = {
//     first :'bruce',
//     last :'Wayne'
//   }

//   const nameList = [
//     {
//       first :'bruce',
//       last: 'wayne'
//     },

//     {
//       first :'bruce',
//       last: 'wayne'
//     },
//     {
//       first :'bruce',
//       last: 'wayne'
//     }
//   ]
  return (
    <div className="App">
     {/* <Greet name ='kiruthi' messageCount={20} isLoggedIn={false}></Greet>
     <Person name ={PersonName}></Person>
     <PersonList name ={nameList}></PersonList>
     <Status status='loading'></Status>
     <Heading>placeholder text</Heading>
     <Oscar>
      <Heading>oscar</Heading>
     </Oscar>
     <Button handleclick={()=>
    {
      console.log('button click')
    }}></Button> */}
    {/* <Container styles={{border:'1px solid black', padding:'1rem'}}></Container> */}
    {/* <ThemeContextProvider>
      <Box></Box>
    </ThemeContextProvider>

    <UserContextProvider>
      <User></User>
    </UserContextProvider> */}
    {/* <Private isLoggedIn={true} Component={Profile}></Private> */}
    {/* <List 
    items={[{
      id:1,
      first:'bruce',
    }]}
    onClick={(item)=>console.log(item)}
    ></List> */}
    {/* <RandomNumber value={10} isPositive={true}></RandomNumber> */}
    {/* <Toast position='left-center'></Toast> */}
 {/* <CustomButton variant='primary'>props</CustomButton> */}
 <Text as='h1'size='lg'>heading</Text>
    </div>
  );
  }

export default App;
