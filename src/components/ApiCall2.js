import React from "react";

export default class ApiCall2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      webcam: null,
    };
  }

  async componentDidMount() {
    const url = "https://api.windy.com/api/webcams/v2/list/webcam=1514336662,1556382171,1399837432,1572925662,1548527857,1586276571,1355230575,1296343572,1521156303,1579952377?show=webcams:image,location,player&key=QuYS1wjNqXNc6LqfDlvVDbSvFGBM7uId";
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
          <div>
            <div>{this.state.webcam.title}</div>
            <div>{this.state.webcam.location.country}</div>
            <img src={this.state.webcam.image.current.preview} alt={this.state.webcam.title} />
          </div>
        )}
      </div>
    );
  }
}
