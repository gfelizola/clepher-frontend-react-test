export const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content p-10">
            <aside>
                <img
                    src="https://cdn1.clepher.com/wp-content/uploads/2024/07/clepher-logo-white-formerly-cm-min.png"
                    alt="Clepher Logo"
                    className="w-32"
                />
                <p>© 2024, Clepher.</p>
            </aside>
            <nav>
                <h6 className="footer-title">About Me</h6>
                <a
                    className="link link-hover"
                    href="https://www.linkedin.com/in/gfelizola/"
                    target="_blank"
                    rel="noreferrer">
                    Linked In
                </a>
                <a
                    className="link link-hover"
                    href="https://github.com/gfelizola"
                    target="_blank"
                    rel="noreferrer">
                    Github
                </a>
            </nav>
        </footer>
    );
};
