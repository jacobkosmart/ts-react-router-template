import IPage from "interface/page";
import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";

const About: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let number = props.match.params.number;
    if (number) {
      setMessage(`This Number is ${number}`);
    } else {
      setMessage("No number provided!");
    }
  }, [props]);

  return (
    <div>
      <h1>{message}</h1>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default withRouter(About);
