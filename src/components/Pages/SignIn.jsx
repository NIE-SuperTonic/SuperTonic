import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import HeadPhone from "../assets/img/headphones.svg";
import "./css/Login.scss";

export default function SignIn(){
    

return (
  <section id="main">
    <div className="nav-item">
      <a className="navbar-brand" href="/">
        SuperTonic
      </a>
    </div>
    <div className="main-row">
      <div className="main-row-img">
        <img className="head-phone-img" src={HeadPhone} alt="" />
      </div>
      <div className="main-row-text">
      <h1 style={{color:"white"}}>Login and enjoy 🎶</h1>
             <LoginForm />
      </div>
    </div>
  </section>
);

}

function LoginForm(){
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return(<>
    <form  onSubmit={e => {
            e.preventDefault();
            const email = e.target[0].value;
            const password = e.target[1].value;
            

            signInWithEmailAndPassword(auth, email, password)
              .then(() => {
                alert('logged in successfully');
                navigate('/home');
              }).catch(err => {
                alert(err);
                navigate('/');
              });
          }}>
            <input type="email" placeholder="email" /> <br/>
            <input type="password" placeholder="passwd" /><br/>
            <button type="submit" className="btn">Login</button>
          </form><br/>
          Don't Have An Account? <br/>
        <Link to={"/register"} className="btn">
            Register
        </Link>
  </>);
}


