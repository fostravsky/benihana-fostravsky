import { useDarkModeContext } from '../../context/DarkModeContext';

const Footer = () => {

    const {darkMode} = useDarkModeContext()

    return (
        <footer className={`bg-primary text-center text-white ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
            <div className="container p-2 pb-0">
            <section>
                <button className="btn btn-outline-light btn-floating m-1"><i className="fab fa-facebook-f" /></button>
                <button className="btn btn-outline-light btn-floating m-1"><i className="fab fa-twitter" /></button>
                <button className="btn btn-outline-light btn-floating m-1"><i className="fab fa-instagram" /></button>
            </section>
            </div>
            <div className="text-center p-2" >
           
            <p> © 2022 Copyright: Benihana Skate Store</p>
            </div>
        </footer>
    );
}

export default Footer;
