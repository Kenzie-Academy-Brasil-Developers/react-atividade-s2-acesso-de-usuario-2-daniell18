import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Customer({ members }) {
  const param = useParams();
  const member = members.find((elemet) => elemet.id === param.id);

  return (
    <>
      <div className="container">
        <h1>Detalhes do cliente</h1>

        <p>Nome: {member && member.name}</p>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}
export default Customer;
