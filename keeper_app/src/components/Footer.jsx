

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>
            {currentYear} &copy; 
            </p>

        </footer>
    );
};

export default Footer;
