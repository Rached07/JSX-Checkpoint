import logo from './logo.svg';
import './App.css';
import myWonderfulImage from "./cuisine.jpg"
import Video from "./myVideo.mp4"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Your name here</h1>


<img src={myWonderfulImage} alt ='cuisine' />


<img src="/cuisine2.png" alt=''/>

</div> 

<video width="320" height="240" controls>

<source src={Video} type="video/mp4" />

</video>
    </div>
  );
}

export default App;
