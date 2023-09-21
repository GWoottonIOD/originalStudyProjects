import React, {useReducer, useState} from 'react';

import ReactDOM from 'react-dom';
import ComponentC from './ComponentCClass';
import ComponentE from './ComponentE';
import ComponentF from './ComponentF';
import HookEmojiCalc from './HookEmojiCalc';
import DataFetchTwo from './DataFetchTwo';
export const UserContext = React.createContext();
export const AnotherContext = React.createContext();
export const CountryContext = React.createContext();
export const EmojiContext = React.createContext();
export const CountContext = React.createContext()

// const initialState=0
// export const reducer=(state,action) => {
//     switch (action) {
//         case 'increase':
//             return state+1
//         case 'decrease':
//             return state-1
//         case 'reset':
//             return initialState
//         default:
//             return state}
//     }

const initialState=false

    const sad =(
        <div><img className='emoji' alt="sad" src="https://media.istockphoto.com/vectors/depressed-emoticon-vector-id480144800?k=20&m=480144800&s=612x612&w=0&h=UBol4m9eJ03gm-G34KsRHeLg7UJePn3btS1yNkCRI2Q="></img>
      <button className='buttn' value={sad} onClick={() => moodContext.moodDispatch(!mood)}>
        happy
    </button>
      </div> 
    )

    const happy =(
        <div><img className='emoji' alt="happy" src="https://mpng.subpng.com/20190617/ysi/kisspng-smiley-emoticon-v-sign-emoji-vector-graphics-joykvest-5d075a6b874956.2618308915607629875541.jpg"></img>
      <button className='buttn' value={happy} onClick={()=> moodContext.moodDispatch(!mood)}>
        Sad
      </button>
      </div>
    )


function App() {
const [mood, setMood] = useState(initialState) //booleans need true/false
return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    <EmojiContext.Provider value={{   mood,   setMood,  happy,  sad}}>{/* all attributes to be assigned within Context*/}
<div>
    <HookEmojiCalc/>
</div>
    </EmojiContext.Provider>
)
}



// class App extends
// React.Component {
//     render(){
//         return (
//             //  <UserContext.Provider>
//             //  <AnotherContext.Provider>
//             //  <ComponentC/>
//             //  </AnotherContext.Provider>
//             //  </UserContext.Provider>
//             <ComponentC/>
//             // <ComponentE/>
//             // <ComponentF/>
            
//         )
//     }
// }

export default App; // exports class