import {useState} from 'react'
import reactLogo from '@image-assets/react.svg'
import viteLogo from '@image-assets/vite.svg'
import '@css/main.scss'
import Header from "@components/Header.jsx";
import MainContent from "@components/MainContent.jsx";
import Footer from "@components/Footer";

function App() {

    return (
        <>
            <main className="main flex justify-center flex-col flex-grow-1 ">
                <Header/>
                <MainContent/>
                <Footer/>
            </main>
        </>
    )
}

export default App
