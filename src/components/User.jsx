import { useParams } from "react-router-dom";

function User() {
  const { name } = useParams();
  return (
    <div>
      <h1>This is User: {name}</h1>
    </div>
  );
}

export default User;
