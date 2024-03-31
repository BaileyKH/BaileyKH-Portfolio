

export const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <div className="bg-primaryGray flex justify-center items-center">
            <div className="py-8">
                <p className="text-white font-light">&copy; {date} BaileyKH. All rights reserved.</p>
            </div>
        </div>
    );
}