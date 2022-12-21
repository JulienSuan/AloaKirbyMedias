import './App.css';
import Media from './ressources/Components/Media/Media';

function App() {


  return (
    <div className="App">
      <div className="header">
      </div>
        <div className="icon"></div>
      <div className="supercont">
          <h1 className='title-header'>✨Retrouvez Aloakirby🎄</h1>
        <div className="cont-media">
          <a href="https://www.twitch.tv/aloakirby" target="_blank"><Media color={"#815fc0"}><i className="fa-brands fa-twitch fa-5x"></i><h2 className='mediatitle'>Twitch</h2></Media></a>
          <a href="https://twitter.com/Aloakirby" target="_blank"><Media color={"#2bc4ff"} ><i className="fa-brands fa-twitter fa-5x"></i><h2 className='mediatitle'>Twitter</h2></Media></a>
          <a href="https://discord.gg/7v3rQXqtSD" target="_blank"><Media color={"#5865F2"} ><i className="fa-brands fa-discord fa-5x"></i><h2 className='mediatitle'>Discord</h2></Media></a>
          <a href="https://www.youtube.com/channel/UC7snMWC3OxBq6ze3xN95XRg" target="_blank"><Media color={"#f62a44"} ><i className="fa-brands fa-youtube fa-5x"></i><h2 className='mediatitle'>Aloakirby</h2></Media></a>
          <a href="https://www.youtube.com/channel/UCrjGRaBNQQvA00tYmamRQ_A" target="_blank"><Media color={"#f62a44"} ><i className="fa-brands fa-youtube fa-5x"></i><h2 className='mediatitle'>Aloakirby replays</h2></Media></a>
        </div>
      </div>
    </div>
  );
}

export default App;
