import IPage from "interface/page";
import "styles/main.scss";

const Home: React.FC<IPage> = (props) => {
  return (
    <div>
      <h1 className="test">This is the Home page!</h1>
    </div>
  );
};

export default Home;
