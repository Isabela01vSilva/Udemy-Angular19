import './Rodape.css'

function Rodape() {

    return (
        <footer className='footer'>
            <section>
            <ul>
                <li>
                    <a href="facebook.com">
                        <img src="/imgs/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com">
                        <img src="/imgs/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com">
                        <img src="/imgs/ig.png" alt="" />
                    </a>
                </li>
            </ul>
            </section>
            <section>
                <ul><img src="/imgs/logo.png" alt="icone Facebook" /></ul>
            </section>
            <section>
                <h2>Footer feito por Isabela</h2>
            </section>
        </footer>
    )
}

export default Rodape