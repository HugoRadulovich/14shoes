import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
        <footer class="py-2">
            <div class="container-fluid">
                <div class="row">
                    <h4 class="text-center fs-5">Redes sociales</h4>
                    <article class="col-lg-12 mx-auto text-center rounded">
                        <div class="mt-2">
                            <img src="multimedia/whatsapp.png" alt="whatsapp-icon" height ="50" width="50" />
                            <img src="multimedia/twitter.png" alt="twitter-icon" height ="50" width="50" />
                            <img src="multimedia/instragram.png" alt="instagram-icon" height ="50" width="50" />
                        </div>
                        <div>
                            <h4 class="fs-5">
                            <strong>Dirección:</strong> Shopping del Sol,Argentina.
                            </h4>
                            <h4 class="fs-5">
                            <strong>Horario de atención:</strong> de 8:00 a 20:00hs
                            </h4>
                        </div>
                    </article>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;