export default function Page(){
    return (
        <div className="absolute left-0 top-0 w-full h-full">
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-background dark:bg-dark-background m-auto">
                <div className="w-96 bg-white dark:bg-black rounded-2xl px-2 py-4">
                    <h1 className="text-center text-xl font-normal mb-4">Login</h1>
                    <form className="w-full rounded p-4 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="bg-background/80 dark:bg-dark-background appearance-none border rounded-2xl w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Your Username"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="bg-background/80 dark:bg-dark-background appearance-none border border-red-500 rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="Your Passowrd"/>
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-primary hover:bg-primary/60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-500"
                               href="#">
                                dont have an account?
                            </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Stat app.
                    </p>
                </div>
            </div>
        </div>
    )
}