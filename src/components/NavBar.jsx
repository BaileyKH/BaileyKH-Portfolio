

export const NavBar = () => {
    return(
        <nav className="bg-white p-6 flex justify-between items-center shadow-md">
           <h1><a href="#" className="text-4xl hover:text-primaryGray">BaileyKH</a></h1>
            <div className="flex gap-6 justify-end items-center text-lg">
                <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Contact Me</a>
            </div>
        </nav>
    );
}