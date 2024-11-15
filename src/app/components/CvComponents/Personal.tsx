export interface PersonalInterface {
  name: string;
  fatherName: string;
  cnic: string;
  dob: string;
  religion: string;
  maritalStatus: string;
  nationalily: string;
}

export default function Personal({ personal, dispatch }: any) {
  const { name, fatherName, cnic, dob, meritalStatus, religion, nationalily } =
    personal;
  return (
    <>
      <h2 className="text-purple-950 font-bold">Personal Info</h2>

      <div>
        <label htmlFor="name" className="text-purple-950">
          Full Name
        </label>
        <input
          value={name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
          type="text"
          placeholder="Ahmed Abdullah"
          className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
        />
      </div>

      <div>
        <label htmlFor="name" className="text-purple-950">
          Father Name
        </label>
        <input
          value={fatherName}
          onChange={(e) =>
            dispatch({ type: "fatherName", payload: e.target.value })
          }
          type="text"
          placeholder="Ahmed Abdullah"
          className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize"
        />
      </div>

      <div>
        <label htmlFor="name" className="text-purple-950">
          CNIC
        </label>
        <input
          value={cnic}
          onChange={(e) => dispatch({ type: "cnic", payload: e.target.value })}
          type="number"
          placeholder="42101-XXXXXXX-1"
          className="border-2 border-purple-950 py-2 px-2 w-full rounded-md"
        />
      </div>

      <div>
        <label htmlFor="date" className="text-purple-950">
          Date of Birth
        </label>
        <input
          value={dob}
          onChange={(e) => dispatch({ type: "dob", payload: e.target.value })}
          type="date"
          placeholder="Ahmed Abdullah"
          className="border-2 border-purple-950 py-2 px-2 w-full rounded-md"
        />
      </div>

      <div className="w-full flex items-center justify-between">
        <select
          value={religion}
          onChange={(e) =>
            dispatch({ type: "religion", payload: e.target.value })
          }
          name="religion"
          id="religion"
          title="religion"
          className="p-1 border-2 border-purple-950 rounded-sm w-[5.6rem]"
        >
          <option> Muslim</option>
          <option>Non Muslim</option>
        </select>

        <select
          value={meritalStatus}
          onChange={(e) =>
            dispatch({ type: "meritalStatus", payload: e.target.value })
          }
          name="marital"
          id="marital"
          title="marital"
          className="p-1 border-2 border-purple-950 rounded-sm w-[5.6rem] "
        >
          <option> Married</option>
          <option>Unmarried</option>
        </select>

        <input
          value={nationalily}
          onChange={(e) =>
            dispatch({ type: "nationality", payload: e.target.value })
          }
          name="nationality"
          id="nationality"
          placeholder="Nationality"
          title="nationality"
          className="p-1 border-2 border-purple-950 rounded-sm w-[5.9rem] px-1 capitalize"
        ></input>
      </div>
    </>
  );
}
