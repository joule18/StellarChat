const GenderCheckbox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-300">Male</span>
          <input type="checkbox" className="checkbox border-slate-400" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-300">Female</span>
          <input type="checkbox" className="checkbox border-slate-400" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-300">Other</span>
          <input type="checkbox" className="checkbox border-slate-400" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;

//STARTER CODE FOR GENDERCHECKBOX
// const GenderCheckbox = () => {
//   return (
//     <div className="flex mt-2">
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-slate-300">Male</span>
//           <input type="checkbox" className="checkbox border-slate-400" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-slate-300">Female</span>
//           <input type="checkbox" className="checkbox border-slate-400" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-slate-300">Other</span>
//           <input type="checkbox" className="checkbox border-slate-400" />
//         </label>
//       </div>
//     </div>
//   );
// };
// export default GenderCheckbox;
