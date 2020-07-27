import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="LogoMain" src={Logo} alt="Logo"></img>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}


export default Menu