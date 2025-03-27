import '../App.css'

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({text}) => {
    return <h1 className='home-header'>{text}</h1>;
}

export default Header;