import { Link } from "react-router-dom"

export default function LoginPage() {
    return(
        <>
            <div className="flex w-screen h-screen justify-center items-center bg-gray-100">
                <div className="p-8 flex bg-white rounded-3xl">
                    <div className="w-96">
                        <img className="w-16 mb-5" src="https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png" alt="" />
                        <h1 className="text-4xl m-0 font-normal">Sign in</h1>
                        <p className="mt-5">Use Your Account</p>
                    </div>
                    
                    <div className="block w-96 mt-24">
                        <label htmlFor="email"></label>
                        <input className="mb-5 py-2 px-4 w-full border-2 rounded-lg" type="email" name="" id="" placeholder="Email"/>
                        
                        <label htmlFor="password"></label>
                        <input className="mb-5 py-2 px-4 w-full border-2 rounded-lg" type="password" name="" id="" placeholder="Password"/>

                        <p className="text-sm">Not your computer? Use Guest mode to sign in privately.</p>
                        <button className="text-sm text-blue-600 hover:bg-blue-100">Learn more about using Guest mode</button>

                        <div className="flex justify-end mt-5">
                            <Link to='/register'><button className="hover:bg-blue-100 mr-5 hover:rounded-3xl px-6 py-2">Create Account</button></Link> 
                            <button className="text-white px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700">Next</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}