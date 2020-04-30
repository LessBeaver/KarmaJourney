import React from "react";
import './ApiCall.css'

export default class ApiCall2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      webcam: null,
    };
  }

  async componentDidMount() {
    const url =
      "https://api.windy.com/api/webcams/v2/list/webcam=1514336662,1556382171,1399837432,1572925662,1548527857,1586276571,1355230575,1296343572,1521156303,1579952377?show=webcams:image,location,player&key=QuYS1wjNqXNc6LqfDlvVDbSvFGBM7uId";
    const response = await fetch(url);
    const data = await response.json();
    const x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    this.setState({ webcam: data.result.webcams[x], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.webcam ? (
          <div>...I'm <strong>loading</strong> !!!</div>
        ) : (
          <div className='Résultat'>
            <p className='Intro'>So bad ! Because of your bad karma, your next destination is :</p>
            <div className='DestinationName'>{this.state.webcam.location.city} - <span className="Country">{this.state.webcam.location.country}</span> </div>

            <img className='DestinationPicture'
              src={this.state.webcam.image.daylight.preview}
              alt={this.state.webcam.title}
            /> 
            <p className="PrésentationWebcam"> Perhaps, if you plan to go there, here is a small video to have a little taste about :</p>    
              <iframe className="Webcam"
              title="this.state.webcam.title" 
              src={this.state.webcam.player.day.embed}></iframe>
            
            <div className="Présentationwiki">
              <a className="AResult"href={this.state.webcam.location.wikipedia}>Also, Wikipedia is your best friend</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
