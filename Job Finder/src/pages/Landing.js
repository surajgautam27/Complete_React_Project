import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
const Landing = () => {
  return (
   <Wrapper>
    <nav>
   <Logo/>

    </nav>
    <div className='container page'>
          {/* {info} */}
        <div className='info'>
          <h1>job <span>tracking </span> App</h1>
          <p>
          I'm baby cardigan next level butcher asymmetrical taxidermy,
           lomo normcore hashtag DSA tilde migas portland schlitz.
            Flannel trust fund gentrify lo-fi. Master cleanse
             humblebrag salvia farm-to-table, tattooed YOLO
          </p>
          <button className='btn btn-hero' >Login/Register</button>
        </div>
        <img src ={main} alt='Job find' className='img main-img'/>

    </div>
   </Wrapper>
  )
}
 

export default Landing
