import Messages from './Messages.js'
import MessagesInput from "./MessagesInput.js";
import {TiMessage} from "react-icons/ti";

const MessageContainer = () =>{
    const noChatSelected = true;
    return (
        <div className='flex flex-col md:min-w-[450px]'>
           {noChatSelected ? <NoChatSelected /> :(
             <>
             <div className="bg-slate-500 px-4 py-2 mb-2">
                 <span className="label-text">To:</span>{" "}
                 <span className="text-gray-900 font-bold">Shreya</span>
             </div>
             <Messages />
             <MessagesInput />
             </>
           )}
        </div>
    )

}

export default MessageContainer;

const NoChatSelected = () =>{
    return(
        <div className="flex justify-center w-full h-full items-center">
            <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
                <p>Welcome shreya</p>
                <p>Select a chat to start messaging</p>
                <TiMessage className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}


