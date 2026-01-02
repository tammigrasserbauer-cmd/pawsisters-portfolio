export default function HomeSection() {

    return(
        <>
        <div id="home_section" className="flex justify-center items-center">
                <img className="mt-40 w-35 rounded-full " src="public\pawsisterslogo.png" alt="" />
        </div>
        <h1 className="text-center text-lg mt-5 mb-3">Welcome to Pawsisters</h1>
        <h2 className="text-center">
            Cute and colorful illustrations, stickers, and art prints for your everyday joy. Artist alley favorites since [YEAR].
        </h2>

        <div className="flex gap-5 justify-center mt-5">
            <a href="" className=" p-3 w-35 rounded-2xl text-center bg-gradient-to-r from-pink-300 to-pink-500">View Our Work</a>
            <a href="" className="border-pink-500 border-2 p-3 rounded-2xl w-35 text-center">Get in Touch</a>
        </div>
        </>

    )

}