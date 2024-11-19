import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Sign Up <span className="text-blue-500">StellarChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <div>
            <button
              className="btn btn-block btn-sm mt-4 bg-slate-950 hover:bg-slate-900 text-slate-200 border-none"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
          <Link
            to="/login"
            className="text-gray-200 text-sm hover:underline hover:text-gray-400 mt-4 inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

//STARTER CODE FOR SIGNUP PAGE
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500">StellarChat</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-200">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-200">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-200">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-200">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10 bg-slate-900 text-gray-300"
//             />
//           </div>
//           <GenderCheckbox />
//           <div>
//             <button className="btn btn-block btn-sm mt-4 bg-slate-950 hover:bg-slate-900 text-slate-200 border-none">
//               Sign Up
//             </button>
//           </div>
//           <a
//             href="#"
//             className="text-gray-200 text-sm hover:underline hover:text-gray-400 mt-4 inline-block"
//           >
//             Already have an account?
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignUp;
