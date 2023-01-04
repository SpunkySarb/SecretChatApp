import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
const Home = () => {
  const textStyle = {
    fontFamily: "Irish Grover",
    textShadow: "3px 2px 4px rgba(0, 0, 0, 0.85)",
  };

  return (
    <div className="w3-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        style={{ width: "60%", margin: "auto" }}
        className="w3-round-xlarge w3-card-4 w3-animate-top"
        src={logo}
      />
      <br />
      <br />
      <br />
      <span
        style={{ fontFamily: "Irish Grover" }}
        className="w3-text-white w3-large w3-animate-left"
      >
        Welcome to Secret Chat App
      </span>
      <br />
      <br />
      <Link to="/create"><div
        style={textStyle}
        className="w3-button w3-red w3-large w3-round-large w3-animate-bottom w3-text-white"
      >
        Create Room
      </div></Link>
      <Link to="/join"><div
        style={textStyle}
        className="w3-button w3-margin-left
+ w3-cyan w3-round-large w3-large w3-animate-right w3-text-white"
      >
        Join Room
      </div></Link>
    </div>
  );
};

export default Home;
