mport React from "react";
export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      item: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.windy.com/api/webcams/v2/list/webcam=1583783403,1179853135,1384974006,1249044918,1473374057,1171033401,1284198909,1512053133,1206745451,1549489452?show=webcams:image,location&KEY=QuYS1wjNqXNc6LqfDlvVDbSvFGBM7uId"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result["result:webcams"]);
          this.setState({
            isLoaded: true,
            item: result["result:webcams"],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { item, isLoaded, error } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Chargement...</div>;
          } else {
            return (
              <div>
                {item.map(item => (
                  <div key={item.title}>
                    {item.image.current.preview} {item.location.country}
                  </div>
                ))}
              </div>
            );
          }
        }}
