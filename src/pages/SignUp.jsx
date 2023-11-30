import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider"


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value;
        const info = { name, email, photo, password }
        console.log(info)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="border-2 rounded-lg p-5 lg:p-10 lg:w-1/2 mx-auto">
                <form onSubmit={handleSignUp}>
                    <h1 className='text-[40px] font-semibold text-center'>Sign Up</h1>
                    <h1 className='text-[18px] font-semibold mb-5'>Name</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your Name' type="text" name="name" id="" />
                    <h1 className='text-[18px] font-semibold mb-5'>Email</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your email' type="email" name="email" id="" />
                    <h1 className='text-[18px] font-semibold mb-5'>Photo URL</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your Photo URL' type="text" name="photo" id="" />
                    <h1 className='text-[18px] font-semibold mb-5'>Confirm Password</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your password' type="password" name="password" id="" />
                    <button className='btn block mb-[30px] w-full bg-[red] text-white'>Sign Up</button>
                    <p className='text-center font-medium'>Or Sign In with</p>
                </form>
                <div className='flex items-center justify-center gap-4 mt-7'>
                    <button className='btn rounded-full'><FcGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;