import React, {useState} from "react";
import Modal from "react-modal";
import Select from "react-select";

const options = [
    { value: 'server-1', label: 'Server 1' },
    { value: 'server-2', label: 'Server 2' },
    { value: 'server-3', label: 'Server 3' },
]

const modalStyles = {
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0, 0.6)'
    },
    content: {
        position: 'relative',
        minWidth: '500px',
        height: '60vh',
        overflow: 'auto',
    },
};

const SpeedTest = () => {

    Modal.setAppElement('#__next');

    const [show, setShow] = useState();
    const [version, setVersion] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const updateDriver = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}speed-test?s=${version}`).then((r) => {
            if(r.ok)
                r.json().then((data) => {
                    if(data){
                        data?.log && console.log(data?.log)
                        setData(data)
                        setLoading(false)
                    }
                });
            else{
                setLoading(false)
                setData({error:"Failed to get response. Please try again!"});
            }
            console.log(data);
        })
    };

    return(
        <div className="h-full shadow-lg bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="p-6">
                <h1 className="title-font text-xl text-sky-700 font-semibold text-gray-900 mb-3">Speedtest</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed
                    sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap ">
                    <button
                        className="inline-flex text-sky-500 bg-sky-100/50 font-bold border-0 py-2 px-4 focus:outline-none hover:bg-sky-200/50 rounded text-md"
                        onClick={()=>setShow(true)}>
                        Test &rarr;
                    </button>
                </div>
            </div>
            <Modal
                isOpen={show}
                onRequestClose={()=>setShow(false)}
                style={modalStyles}
            >
                <button
                    type="button"
                    onClick={()=>setShow(false)}
                    className="font-semibold text-xl mb-3 px-3 absolute top-0 right-0"
                >
                    x
                </button>
                <div className="py-5 px-10">
                    <form className="mt-3 space-y-6" method="POST" onSubmit={updateDriver}>
                        <div className="flex flex-col">
                            <Select
                                options={options}
                                onChange={(e)=>{setData(null); setVersion(e?.value)}}
                            />
                            <button type="submit" className="group relative h-min self-end m-3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600">
                                Test
                            </button>
                        </div>
                        {loading &&
                            <svg role="status"
                                 className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-gray-200 dark:text-sky-500"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                        }
                        <div style={{width:'50vw'}}>
                            {data && <div>{data?.msg}</div>}
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default SpeedTest;