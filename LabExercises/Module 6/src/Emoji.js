import React, { Component } from 'react'

  
function EmojiOne(props) {
    return (
      <div><img className='emoji' src="https://mpng.subpng.com/20190617/ysi/kisspng-smiley-emoticon-v-sign-emoji-vector-graphics-joykvest-5d075a6b874956.2618308915607629875541.jpg"></img>
      <button className='buttn' onClick={props.onClick}>
        Sad
      </button>
      </div>
    );
  }
  
function EmojiTwo(props) {
    return (
      <div><img className='emoji' src="https://media.istockphoto.com/vectors/depressed-emoticon-vector-id480144800?k=20&m=480144800&s=612x612&w=0&h=UBol4m9eJ03gm-G34KsRHeLg7UJePn3btS1yNkCRI2Q="></img>
      <button className='buttn' onClick={props.onClick}>
        Happy
      </button></div>
    );
  }

  class Emoji extends Component {
      constructor(props) {
        super(props);
        this.changeMood = this.changeMood.bind(this);
        // this.emojiFalse = this.emojiFalse.bind(this);
        this.state = {happy: true};
      }
      
      changeMood(){
        this.setState({happy: !this.state.happy})
      }

      sadEmoji() {
        this.setState({mood: 'sad'});
      }
    
      emojiFalse() {
        this.setState({mood: false});
      }
      
      render() {
        const changeMood = this.state.changeMood;
      
      return(
      <div>
        {this.state.happy
          ?<EmojiOne onClick={this.changeMood} />
          :<EmojiTwo onClick={this.changeMood} />
        }</div>
      )
        // return (
        //   <div>
        //     <Greeting isLoggedIn={isLoggedIn} />
        //     {button} //calling of variable
        //   </div>
        // );
      }

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
    }

    export default Emoji