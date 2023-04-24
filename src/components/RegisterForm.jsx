import React from "react";
import * as Components from "./Components";
import { Link } from "react-router-dom";
function RegisterForms() {
    const [signIn, toggle] = React.useState(true);
    return (
        <div className="flex gap-20 flex-col sm:flex-row bg-indigo-600">
            <div>
                <Components.Container className="mx-10">
                    <Components.SignUpContainer signinIn={signIn} className="rounded-md">
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type="text" placeholder="UserName" />
                            <Components.Input type="email" placeholder="Email" />
                            <Components.Input type="password" placeholder="Password" />
                            <Components.Input
                                type="password"
                                placeholder="Confirm Password"
                            />

                            <Link to="/profile"><Components.Button>Sign Up</Components.Button></Link>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type="email" placeholder="UserName" />
                            <Components.Input type="password" placeholder="Password" />
                            <Components.Anchor href="#">
                                Forgot your password?
                            </Components.Anchor>
                            <Link to="/profile"><Components.Button>Sign In</Components.Button></Link>
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
