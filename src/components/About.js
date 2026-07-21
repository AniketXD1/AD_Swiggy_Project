import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { useContext } from "react";
class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log(" Parent Constructor");
  }

  componentDidMount() {
    // console.log(" Parent component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1> About Class-based Component </h1>
        <div>
          loggedIn User1
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>this is a namaste react web series</h2>
        <UserClass name={"First"} location={"Nagpur"} />
      </div>
    );
  }
}

// Function component
// const About = () => {
//   return (
//     <div>
//       <h1> About </h1>
//       <h2>this is a namaste react web series</h2>
//       <UserClass name={"Aniket(Class-based component)"} location={"Nagpur"} />
//     </div>
//   );
// };

export default About;
