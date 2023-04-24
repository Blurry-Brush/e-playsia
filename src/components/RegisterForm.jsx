import React from "react";
import * as Components from './Components';

function RegisterForms() {
    const [signIn, toggle] = React.useState(true);
    return (
        <div className="flex bg-indigo-500">
            <div>
                <Components.Container className="">
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='UserName' />
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Input type='password' placeholder='Confirm Password' />

                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='UserName' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button>Sign In</Components.Button>
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
            <div className="w-full">
                <img src="https://images.alphacoders.com/128/thumbbig-1282982.webp" class="w-[100%] h-full 3xl:h-full 3xl:w-full rounded-md shadow-lg " alt="" />
            </div>
        </div>
    )
}

export default RegisterForms;