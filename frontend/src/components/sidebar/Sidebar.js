import SearchInput from '../sidebar/SearchInput.js';
import Conversations from './Conversations.js';
import LogoutButton from './LogoutButton.js';


const Sidebar = () =>{
    return (
        <div className='border-r border-slate-500 flex flex-col p-4'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />

        </div>
    )
}

export default Sidebar;





//Starter code
// import SearchInput from '../sidebar/SearchInput.js';
// import Conversations from './Conversations.js';
// import LogoutButton from './LogoutButton.js';


// const Sidebar = () =>{
//     return (
//         <div className='border-r border-slate-500 flex flex-col p-4'>
//             <SearchInput />
//             <div className='divider px-3'></div>
//             <Conversations />
//             <LogoutButton />

//         </div>
//     )
// }

// export default Sidebar;