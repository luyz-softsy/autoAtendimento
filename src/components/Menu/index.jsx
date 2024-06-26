import './menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/minhas-solicitacoes">Minhas Solicitações</a></li>
                <li><a href="/configuracoes">Configurações</a></li>
                <li><a href="/notificacoes">Notificações</a></li>
                <li><a href="/">Sair</a></li>
            </ul>
        </div>
    );
}

export default Menu;
