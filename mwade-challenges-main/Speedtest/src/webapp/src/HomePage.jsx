import Modal from "react-modal";
import {useState} from "react";
import SpeedTest from "./SpeedTest";

const modalStyles = {
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0, 0.6)'
    },
    content: {
        position: 'relative',
        maxWidth: '1000px',
        maxHeight: '70vh',
        overflow: 'auto',
        padding: '30px',
        margin: '40px'
    },
};

const HomePage = () => {

    const [show, setShow] = useState(false);

    Modal.setAppElement('#__next');

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-4 lg:mx-20 mt-20">
                        <div className="p-4 md:w-1/3 w-full">
                            <SpeedTest/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 hidden body-font mt-20">
            <Modal
                isOpen={show}
                onRequestClose={()=>setShow(false)}
                style={modalStyles}
            >
                <button type="button"
                        onClick={()=>setShow(false)}
                        className="close_btn"
                >
                    x
                </button>
                <div>
                    adsd
                </div>
            </Modal>
        </section>
        </div>
    )
}

export default HomePage;