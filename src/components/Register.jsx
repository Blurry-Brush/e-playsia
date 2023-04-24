import React from "react";
import RegisterForms from "./RegisterForm";
import LogoBar from "./LogoBar";
const Register = () => {
    return (
        <section className="h-[100vh] bg-indigo-600">
            <LogoBar />
            <div className=" bg-indigo-600 pt-[20vh]">
            <RegisterForms className="" />
            </div>

        </section>
    )
}
export default Register;