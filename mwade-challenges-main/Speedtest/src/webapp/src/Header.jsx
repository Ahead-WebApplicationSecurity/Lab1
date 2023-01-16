import React from "react";

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <a className="ml-3 text-xl" href='/'>Server Speedtest</a>
                </a>                
            </div>
        </header>
    );
};

export default Header;