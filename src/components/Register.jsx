import React from "react";
import RegisterForms from "./RegisterForm";
import LogoBar from "./LogoBar";
const Register = () => {
    return (
        <section className="h-[100vh] bg-indigo-600">
            <LogoBar />
            <div className="mt-10 bg-indigo-600">
                <RegisterForms className="rounded-sm" />
            </div>

        </section>
    )
}
export default Register;