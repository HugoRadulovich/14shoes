import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from '../multimedia/instragram.png'
import whats from '../multimedia/whatsapp.png'
import twitter from '../multimedia/twitter.png'


const Footer = () => {
    return (
        <>
        <footer className="py-2 m-4">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="text-center fs-5">Redes sociales</h4>
                    <article className="col-lg-12 mx-auto text-center rounded">
                        <div className="m-2">
                            <img src={whats} alt="whatsapp-icon" className="m-2" height ="50" width="50" />
                            <img src={twitter} alt="twitter-icon" className="m-2" height ="50" width="50" />
                            <img src={instagram} alt="instagram-icon" className="m-2" height ="50" width="50" />
                        </div>
                        <div>
                            <h4 className="fs-5">
                            <strong>Dirección:</strong> Shopping del Sol,Argentina.
                            </h4>
                            <h4 className="fs-5">
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