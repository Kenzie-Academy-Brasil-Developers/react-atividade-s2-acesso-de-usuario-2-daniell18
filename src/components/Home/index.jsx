import { Link } from "react-router-dom";

function Home({ members }) {
  return (
    <div className="main">
      {members.map((element, index) =>
        element.type === "pj" ? (
          <div key={index}>
            <Link className="text" to={`/company/${element.id}`}>
              {element.name}
            </Link>
          </div>
        ) : (
          <div key={index}>
            <Link className="text" to={`/customer/${element.id}`}>
              {element.name}
            </Link>
          </div>
        )
      )}
    </div>
  );
}
export default Home;
