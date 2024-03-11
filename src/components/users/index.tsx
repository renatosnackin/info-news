import './style.css';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';


const Users = () => {

    return (
        <main>
            <h1 className="backgroundUsers">USUÁRIOS</h1>
            <div className="salesContainerUsers">
            <div className="usersBody">

                <div className="usersRow ">
                    <span>+1233</span>
                    <span>Acessos</span>
                </div>
                <div className="usersRow ">
                    <span>+382</span>
                    <span>Usuários Únicos</span>
                </div>
                <div className="usersRow ">
                    <span>=382</span>
                    <span>CPFs Únicos</span>
                </div>
            </div>
            </div>

        </main>
    );
};

export default Users;
