import { Link } from "react-router-dom";
import IPage from "interface/page";

const NotFound: React.FC<IPage> = (props) => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default NotFound;
