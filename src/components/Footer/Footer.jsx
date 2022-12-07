const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-2 pb-0">
            <section>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-instagram" /></a>
            </section>
            </div>
            <div className="text-center p-2" >
            © 2022 Copyright:
            <a className="text-white" href="#">Benihana Skate Store</a>
            </div>
        </footer>
    );
}

export default Footer;
