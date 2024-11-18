const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">StellarChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
            />
          </div>
          <a
            href="#"
            className="text-gray-200 text-sm hover:underline hover:text-gray-400 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border-none">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

//STARTER CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login <span className="text-blue-500">StellarChat</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-200">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text text-gray-200">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-gray-200 text-sm hover:underline hover:text-gray-400 mt-2 inline-block"
//           >
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border-none">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Login;
