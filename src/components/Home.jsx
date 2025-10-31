import profile from '/me.jpg'

export function Home() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-900 p-6 sm:p-10 gap-10 shadow-lg shadow-green-500/50 rounded-lg">
        {/* Text Section */}
        <div className="text-center sm:text-left max-w-md flex flex-col gap-5">
            <h1 className="text-green-500 font-bold italic text-2xl sm:text-3xl mb-2">
            Hi! I'm Erwin Layson
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
            A passionate web developer who loves creating interactive and modern websites.
            </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
            <img
            src={profile}
            alt="Profile picture"
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full object-cover shadow-lg"
            />
        </div>
        </div>

    )
}