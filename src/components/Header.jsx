export default function Header() {

    return(
        <header className="bg-white shadow-lg shadow-pink-200">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <img className="rounded-full w-20" src="public\pawsisterslogo.png" alt="" />
                    <h1>Pawsisters</h1>
                </div>
                
                
                <ul className="flex gap-4 text-lg">
                    <a href="#home-section">
                        <li>Home</li>
                    </a>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>

    )

}