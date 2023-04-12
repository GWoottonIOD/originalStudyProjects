import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM importing
import {BrowserRouter} from 'react-router-dom'
// import PortalApp from './PortalApp';
// import HookEmojiCalc from './HookEmojiCalc';
import './index.css'; //CSS importing
//import YourName from './AppLab1'; //what functions are imported from which App
// import ChangeName from './AppLab1';
// import PostList from './PostPostList';
// import App from './App';
//import App from './RouteExApp'
//import App from './ContextApp'
// import OnHover from './onHover';
import App from './SocialMediaApp';

// const root = ReactDOM.createRoot(document.getElementById('root')); //necessary to set ReactDOM as root

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App />);


// const root = ReactDOM.createRoot(document.getElementById('root')); 
// // Try changing to isLoggedIn={true}:
// root.render(<EmojiFunction happy={false} />);

// const root = ReactDOM.createRoot(document.getElementById('root')); 
//     root.render(<Page />);

// const numbers = [1, 2, 3, 4, 5];//make sure array is in index.js otherise posts is undefined
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<NumberList numbers={numbers} />);

// const posts = [ //make sure array is in index.js otherise posts is undefined
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];


// const root = ReactDOM.createRoot(document.getElementById('root')); 
//     root.render(<Blog posts={posts} />);

// const element= <YourName name='Gareth'/>//assign a function set name to Gareth - static

// const element= <HelloWorld/>
// const clickdeButton= <ButtonClick/>
// const changedeButton= <ButtonChange name='Gareth'/>

// root.render(<ChangeName />)//render element set above - dynamic
// root.render(
//     <Clock />

// function FragmentDemo() {
//     return (
//       <>
//         <h1> Fragement Demo </h1>
//         <p> It is about Fragment demo </p>
//         </>
//     )
//   }
  
//   function Table() { {/* content of columns is in its own function as below*/}
//     return (
//      <table>
//        <tbody>
//          <tr>
//            <Columns/> 
//            </tr>
//            </tbody>
//            </table>
//     )
//   }
  
//   function Columns() { //we use React Fragment so console doesn't throw an error.
//     return (
//       <React.Fragment> 
//      <td> Gareth </td>
//      <td> Wootton </td>
//      </React.Fragment>
//     )
//   }
  
//    class App extends React.Component { // we can call multiple functions from within this function
//     render() {
//       return (
//         <div>
//           <FragmentDemo/>
//           <Table/>
//         </div>
//       )
//     }
//   }

// class PureComp extends React.PureComponent { //doesn't update because value hasn't changed due to PureComponent
//     render() {
//       console.log("PURE")
//       return (
//         <div>
//           Pure Component
//         </div>
//       )
//     }
//   }
  
  
//   class RegularComponent extends React.Component { //updates because regular ReactCoponent
//     render() {
//       console.log("REGULAR")
//       return (
//         <div>
//           Regular Component
//         </div>
//       )
//     }
//   }
  
  
  
//   class ParentCompo extends React.Component {
//   constructor(props) {
//     super(props)
    
//     this.state={
//       name:"Bharath"
//     }
    
//   }
  
//   componentDidMount()
//   {
//     setInterval(()=>{
//       this.setState({
//         name:"Bharath"
//       })
//     },2000)
//   }
  
  
//     render() {
//       console.log("PARENT")
//       return (
//         <div>
//                 Parent Component
//           <RegularComponent name={this.state.name}> </RegularComponent> 
//           <PureComp name={this.state.name}> </PureComp>
//         </div>
//       )
//     }
//   }
  
  
  
//    class App extends React.Component { //only refernced parent component, children are associated with regular and pure
//     render() {
//       return (
//         <div>
//           <ParentCompo/>
//         </div>
//       )
//     }
//   }

// function MemoComp() {
//   return (
//     <div>index</div>
//   )
// }

  
//   const root = ReactDOM.createRoot(document.getElementById('root')); 
//   root.render(<MemoComp/>);

const root = ReactDOM.createRoot(document.getElementById('root')); 
//     root.render(<App/>);

    root.render(
        <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </React.StrictMode>
    );

//   export default React.memo(MemoComp)