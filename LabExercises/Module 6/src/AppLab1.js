// function YourName(props){
//     return (
//         <h1>Hello, {props.name}</h1> //props.name used in index to set
//     );
// }
import React, { useState } from "react";
// import React from "react"; //native DOM
// import { render } from "react-dom";

// class ChangeName extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {name: 'world'};// the state that needs to change
//         this.ChangeToName = this.ChangeToName.bind(this); //binds this to ChangeToName
//     }

//     ChangeToName() {
//         this.setState({name: 'Gareth'})//the outcome of the name change
//     }

//     render() {
//         return <div>
//              <h1>Hello {this.state.name}</h1> {/*The statement along with the statement */}
//             <button onClick={this.ChangeToName}>ChangeMe</button>{/*The button that actions the name change */}
//         </div>    
//     }
// }
 
// class Clock extends React.Component{
//     constructor(props) { {/*The statement along with the statement */}
//         super(props); {/* class thats extended, need to be able to call the constructor of the class (parent & inheritance) that we're constructing  */}
//         this.state = {date: new Date()};
//     }
//     componentDidMount() {
//         this.timerID = setInterval(()=> this.tick(),1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>is it {this.state.date.toLocaleDateString()}</h2>
//             </div>
//         )
//     }
// }

// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
//     // boolean my_bool=false
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }

// class ComponentOne extends React.Component {

//     // Defining the componentWillUnmount method
//     componentWillUnmount() { //when this.delete starts, this will come up first
//         alert('The component is going to be unmounted');
//     }
    
//     render() {
//         return <h1>Hello Geeks!</h1>;
//     }
//     }
    
    // class App extends React.Component {
    // state = { display: true };
    // delete = () => {
    //     this.setState({ display: false });
    // };
    
    // render() {
    //     let comp;
    //     if (this.state.display) {
    //     comp = <ComponentOne />;
    //     }
    //     return (
    //     <div>
    //         {comp}
    //         <button onClick={this.delete}>
    //         Delete the component
    //         </button>
    //     </div>
    //     );
    // }

    // componentDidMount() {
    //     return (alert('componentDidMount'))
    //   }

    // shouldComponentUpdate() {
    //     return true;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //      alert('getSnapshotBeforeUpdate')
    //      return null
    // }

    // componentDidUpdate() {
    //     return (alert('componentUpdated!'))
    //   }

    // }
// export default function App() {

//     const [name, setName] = useState("");
  
//     const handleSubmit = (event) => {
//       console.log(name);
//       event.preventDefault();
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//     }
// export default function App() { 

//     function UserGreeting(props) {
//         return <h1>Welcome back!</h1>;
//       }
      
//       function GuestGreeting(props) {
//         return <h1>Please sign up.</h1>;
//       }
      
//     //   function Greeting(props) {
//     //     const isLoggedIn = props.isLoggedIn;
//     //     if (isLoggedIn) {
//     //       return <UserGreeting />;
//     //     }
//     //     return <GuestGreeting />;
//     //   }

//       function LoginButton(props) {
//         return (
//           <button onClick={props.onClick}>
//             Login
//           </button>
//         );
//       }
      
//       function LogoutButton(props) {
//         return (
//           <button onClick={props.onClick}>
//             Logout
//           </button>
//         );
//       }

    // class LoginControl extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.handleLoginClick = this.handleLoginClick.bind(this);
    //       this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //       this.state = {isLoggedIn: false};
    //     }
      
    //     handleLoginClick() {
    //       this.setState({isLoggedIn: true});
    //     }
      
    //     handleLogoutClick() {
    //       this.setState({isLoggedIn: false});
    //     }
      
    //     render() {
    //       const isLoggedIn = this.state.isLoggedIn;
        //   let button;
        //   if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        //   } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        //   }
      //   return(
      //   <div>
      //     <Greeting isLoggedIn={isLoggedIn} />
      //   {isLoggedIn
      //       ?<LogoutButton onClick={this.handleLogoutClick} />
      //       :<LoginButton onClick={this.handleLoginClick} />
      //       }</div>
      //   )
      //     return (
      //       <div>
      //         <Greeting isLoggedIn={isLoggedIn} />
      //         {button} //calling of variable
      //       </div>
      //     );
      //   }
      // }
      
    // //   const root = ReactDOM.createRoot(document.getElementById('root')); 
    // //   root.render(<LoginControl />);

    // function WarningBanner(props) {
    //   if (!props.warn) {
    //     return null;
    //   }
    
    //   return (
    //     <div className="warning">
    //       Warning!
    //     </div>
    //   );
    // }
    
    // class Page extends React.Component {
      // constructor(props) {
      //   super(props);
      //   this.state = {showWarning: true}
      //   this.handleToggleClick = this.handleToggleClick.bind(this);
      // }
    
      // handleToggleClick() {
      //   this.setState(prevState => ({
      //     showWarning: !prevState.showWarning
      //   }));
      // }
      
      // render() {
      //   return (
      //     <div>
      //       <WarningBanner warn={this.state.showWarning} />
      //       <button onClick={this.handleToggleClick}>
      //         {this.state.showWarning ? 'Hide' : 'Show'}
      //       </button>
      //     </div>
      //   );
      // }
    // }
    
    // function NumberList(props) {
    //   const numbers = props.numbers;
    //   const listItems = numbers.map((number) =>
    //     <li key={number.toString}>{number}</li>
    //   );
    //   return (
    //     <ul>{listItems}</ul>
    //   );
    // }

    // function Blog(props) {
    //   const sidebar = (
    //     <ul>
    //       {props.posts.map((post) =>
    //         <li key={post.id}>
    //           {post.title}
    //         </li>
    //       )}
    //     </ul>
    //   );
    //   const content = props.posts.map((post) =>
    //     <div key={post.id}>
    //       <h3>{post.title}</h3>
    //       <p>{post.content}</p>
    //     </div>
    //   );
    //   return (
    //     <div>
    //       {sidebar}
    //       <hr />
    //       {content}
    //     </div>
    //   );
    // }


    // function EmojiOne(props) {
    //   return (
    //     <div><img src="https://mpng.subpng.com/20190617/ysi/kisspng-smiley-emoticon-v-sign-emoji-vector-graphics-joykvest-5d075a6b874956.2618308915607629875541.jpg"></img>
    //     <button onClick={props.onClick}>
    //       Sad
    //     </button>
    //     </div>
    //   );
    // }
    
    // function EmojiTwo(props) {
    //   return (
    //     <div><img src="https://media.istockphoto.com/vectors/depressed-emoticon-vector-id480144800?k=20&m=480144800&s=612x612&w=0&h=UBol4m9eJ03gm-G34KsRHeLg7UJePn3btS1yNkCRI2Q="></img>
    //     <button onClick={props.onClick}>
    //       Happy
    //     </button></div>
    //   );
    // }


    // class Emoji extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.changeMood = this.changeMood.bind(this);
    //     // this.emojiFalse = this.emojiFalse.bind(this);
    //     this.state = {happy: true};
    //   }
      
      // changeMood(){
      //   this.setState({happy: !this.state.happy})
      // }

    //   // sadEmoji() {
    //   //   this.setState({mood: 'sad'});
    //   // }
    
    //   // emojiFalse() {
    //   //   this.setState({mood: false});
    //   // }
      
    //   render() {
    //     const changeMood = this.state.changeMood;
      
    //   return(
    //   <div>
    //     {this.state.happy
    //       ?<EmojiOne onClick={this.changeMood} />
    //       :<EmojiTwo onClick={this.changeMood} />
    //     }</div>
    //   )
    //     // return (
    //     //   <div>
    //     //     <Greeting isLoggedIn={isLoggedIn} />
    //     //     {button} //calling of variable
    //     //   </div>
    //     // );
    //   }
    // }
    
    // export default function EmojiFunction() {

    //   const [mood, setMood] = useState(true); // this is changeMood
    
    //   return (
    //     <div>
    //       <p>You are {mood?'happy':'sad'}</p>
    //       <button onClick={() => setMood(!mood)}>
    //         Click me
    //       </button>
    //     </div>
    //   );
    //   }
    
    class ClickCounter extends React.Component{

      constructor(props)
      {
        super(props)
    
        this.state={ //When using this.state you can use more than one variable as below
          count:0,
          hover:0
        }
      }

      incrementHover=()=>{
        this.setState(prevState =>{
          return {hover:prevState.hover+1}
        })}
    
      incrementCount=()=>{
        this.setState(prevState =>{
          return {count:prevState.count+1}
        })
      }
    
      render() {
        const {count}=this.state
        const {hover}=this.state
      return (
        <div>
          <button onClick={this.incrementCount} > clicked {count} times</button>
          <button onMouseLeave={this.incrementHover} > hovered {hover} times</button>
        </div>
      
      )
    }
    }
  
    class App extends React.Component{
      render(){
      return (
        <div>
          <ClickCounter/>
        </div>
      
      )
    }
    }
    
    export default App;

// export default Clock;