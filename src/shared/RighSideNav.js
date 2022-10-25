import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel/BrandCarousel';
import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RighSideNav = () => {
    const {providerLogin} = useContext(authContext)
    const GoogleProvider = new GoogleAuthProvider();
    const HandleClickGoolge=()=>{
        providerLogin(GoogleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <ButtonGroup className='mb-5' vertical>
                <Button onClick={HandleClickGoolge} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Signin with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatssapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RighSideNav;