import { useEndpoint } from "../../context";
import "./style.css";

const Users = () => {
  const endpointData = useEndpoint();

  const users = endpointData ? endpointData.users : null;
  
  return (
    <main>
      <h1 className="backgroundUsers">USUÁRIOS</h1>
      <div className="salesContainerUsers">
        <div className="usersBody">
          <div className="usersRow ">
            <span>+{users && users.storeAccessCount}</span>
            <span>Acessos</span>
          </div>
          <div className="usersRow ">
            <span>+{users && users.storeUniqueAccessCount}</span>
            <span>Usuários Únicos</span>
          </div>
          <div className="usersRow ">
            <span>=SEM VALOR</span>
            <span>CPFs Únicos</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
