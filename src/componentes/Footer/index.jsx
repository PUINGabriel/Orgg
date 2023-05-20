import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/gabrielesteban.puinparra'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/PUINNSINHO'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/puinsitow/'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Gabriel Puin</strong>
</footer>
}

export default Footer;