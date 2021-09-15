import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";
function Company({ members }) {
  const pram = useParams();
  const member = members.find((element) => element.id === pram.id);
  return (
    <>
      <div className="container">
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}
export default Company;
