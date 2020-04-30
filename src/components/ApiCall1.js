import React from "react";

export default class ApiCall1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      webcam: null,
    };
  }

  async componentDidMount() {
    const url =
      "https://api.windy.com/api/webcams/v2/list/webcam=1583783403,1179853135,1384974006,1249044918,1473374057,1171033401,1284198909,1512053133,1206745451,1549489452?show=webcams:image,location,player&key=QuYS1wjNqXNc6LqfDlvVDbSvFGBM7uId";
    const response = await fetch(url);
    const data = await response.json();
    const x = Math.floor(Math.random() * (9 - 0 +1)) + 0
    this.setState({ webcam: data.result.webcams[x], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.webcam ? (
          <div>...Je me lance !!!</div>
        ) : (
          <div className='Résultat'>
            <p className='Intro2'>Bravo! Grâce à ton bon karma, ta destination est :</p>
            <div className='DestinationName'>{this.state.webcam.location.city} - <span className="Country">{this.state.webcam.location.country}</span> </div>

            <img className='DestinationPicture'
              src={this.state.webcam.image.daylight.preview}
              alt={this.state.webcam.title}
            /> 
            <p className="PrésentationWebcam"> Pour te donner envie, je te propose de regarder la vidéo ci-dessous te présentant une journée passée à ta futur destination</p>    
              <iframe className="Webcam"
    title="this.state.webcam.title" src={this.state.webcam.player.day.embed}></iframe>
    
    <p className="PrésentationWiki">
              Tu peux également déjà préparer ton voyage grâce à la participation de
              wikipédia:</p> <a className="AResult"href={this.state.webcam.location.wikipedia}>ici</a>
          </div>
        )}
      </div>
    );
  }
}