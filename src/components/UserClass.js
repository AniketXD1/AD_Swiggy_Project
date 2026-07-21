import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child component Did Mount");
    // API calls
    const data = await fetch("https://api.github.com/users/AniketXD1");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // this.timer = setInterval(() => {
    //   console.log("nameste react op");
    // }, 1000);
    console.log("component Did Update ");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Loaction: {location}</h3>
        <h4>Contact: @Aniket_Code</h4>
      </div>
    );
  }
}

export default UserClass;
