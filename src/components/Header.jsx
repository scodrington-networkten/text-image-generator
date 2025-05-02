import logo from '@image-assets/vite.svg';
import '@css/header.scss';

const Header = () => {
    return (
        <header>
            <div className="header flex justify-center">
                <div
                    className="container flex items-center justify-items-center py-3 px-4 justify-start flex-grow-1 gap-x-2">
                    <img src={logo} alt="logo"/>
                    <p className="font-medium text-2xl">Text Generator</p>
                </div>
            </div>
        </header>

    )
}
export default Header

