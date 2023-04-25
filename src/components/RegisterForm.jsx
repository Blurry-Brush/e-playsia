import React,{useState,useContext} from "react";
import * as Components from "./Components";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { setDoc, doc } from "firebase/firestore";

function RegisterForms() {

    const {signUp,logIn,user} = useContext(AuthContext);

    const navigate = useNavigate();
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [username,setUsername] = useState("");
    const [error,setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        if(user){
            alert("You are already signed up");
        }
        else{

            try {
                await signUp(email, password);
                navigate("/profile");
                await setDoc(doc(db,"users", email),{
                    gameUserName: username,
                })
              } catch (error) {
                console.log(error);
              }
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/profile');
            // await setDoc(doc(db,"users", email),{
            //     gameUserName: username,
            // })
          } catch (error) {
            console.log(error);
          }
    }


    const [signIn, toggle] = React.useState(true);
    return (
        <div className="flex gap-20 mb-10 flex-col sm:flex-row bg-indigo-600">
            <div>
                <Components.Container className="mx-10">
                    <Components.SignUpContainer signinIn={signIn} className="border-2 border-white rounded-md">
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="UserName" />
                            <Components.Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                            <Components.Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            <Components.Input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <Link to="/profile"><Components.Button onClick={handleSignUp}>Sign Up</Components.Button></Link>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn} className="border-2 border-white">
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="UserName" />
                            <Components.Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            <Components.Anchor href="#">
                                Forgot your password?
                            </Components.Anchor>
                            <Link><Components.Button onClick={handleSignIn}>Sign In</Components.Button></Link>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>
                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
            <div className="w-full my-auto">
                <img
                    src="https://images.alphacoders.com/128/thumbbig-1282982.webp"
                    class="h-80 w-80 object-cover rounded-[50%]"
                    alt=""
                />
            </div>
        </div>
    );
}

export default RegisterForms;
