import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
    return (
        <div>
            <div className="border-2 rounded-lg p-5 lg:p-10 lg:w-1/2 mx-auto">
                <form>
                    <h1 className='text-[40px] font-semibold text-center'>Login</h1>
                    <h1 className='text-[18px] font-semibold mb-5'>Email</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your email' type="email" name="email" id="" />
                    <h1 className='text-[18px] font-semibold mb-5'>Confirm Password</h1>
                    <input className='border-2 rounded-lg p-3 mb-7 w-full' placeholder='Your password' type="password" name="password" id="" />
                    <button className='btn block mb-[30px] w-full bg-[red] text-white'>Sign In</button>
                    <p className='text-center font-medium'>Or Sign In with</p>
                </form>
                <div className='flex items-center justify-center gap-4 mt-7'>
                    <button className='btn rounded-full'><FcGoogle /></button>
                </div>
                <div className='text-center mt-[50px]'>
                    <p>Have an account?
                        <Link to={'/signUp'} className='text-[red] font-semibold'>
                            Sign Up
                        </Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;