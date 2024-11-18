import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full border-none text-slate-300 bg-slate-900"
      />
      <button
        type="submit"
        className="btn btn-circle border-none bg-sky-600 hover:bg-sky-700 text-slate-300"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;

//STARTER CODE FOR SEARCH INPUT
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full border-none text-slate-300 bg-slate-900"
//       />
//       <button
//         type="submit"
//         className="btn btn-circle border-none bg-sky-600 hover:bg-sky-700 text-slate-300"
//       >
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };
// export default SearchInput;
