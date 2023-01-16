import React from "react";
import Head from "next/head"
import Header from "./Header";

const Layout = ({ title = "Smart Corp", children }) => {

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="bg-gray-100 h-full" style={{ minHeight: '100vh' }}>
                <Header />
                {children}
            </main>
        </React.Fragment>
    );

};

export default Layout;