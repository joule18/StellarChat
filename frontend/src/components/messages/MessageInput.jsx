import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-slate-800 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-slate-300"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;

//STARTER CODE FOR MESSAGE INPUT
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           placeholder="Send a message"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-slate-800 border-gray-600 text-white"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-3 text-slate-300"
//         >
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// };
