import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, store } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import HeadPhone from "../assets/img/headphones.svg";
import "./css/Login.scss";

export default function SignUp(){
    

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
               <SignUpForm />
        </div>
      </div>
    </section>
  );
  }

function SignUpForm(){
  const navigate = useNavigate();
    return(<div>
         <form onSubmit={e => {
            e.preventDefault();
            const email = e.target[0].value;
            const password = e.target[1].value;
            const confirm_password = e.target[2].value;
            const fname = e.target[3].value;
            const lname = e.target[4].value;

            

            //if confirm pw != pw 

            createUserWithEmailAndPassword(auth, email, password)
              .then((authUser) => {
                store.users.doc(authUser.user.uid).set({
                    fname: fname,
                    lname: lname
                }, {merge: true}).then(() => {
                    alert("Registeration successful");
                    navigate('/home');
                }).catch(err => {
                    console.log("Failed to add user info", err);
                    alert("Failed to add user info");
                });
              })
              .catch(err => {
                console.log("Failed to register", err);
                alert("Failed to register");
                navigate("/");
              });
          }}>
            <input type="email" placeholder="email" /> <br/>
            <input type="password" placeholder="passwd" /> <br/>
            <input type="password" placeholder="confirm passwd" /> <br/>
            <input type="text" placeholder="first name" /> <br/>
            <input type="text" placeholder="last name" /> <br/>
            <button type="submit" className="btn">Register</button>
          </form>
    </div>);
}