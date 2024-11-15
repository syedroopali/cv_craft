export default function Experience({ experience, dispatch }: any) {
  const { organization, years, designation } = experience;
  return (
    <>
      <hr className="mt-4 border border-purple-100" />

      <h2 className="text-purple-950 font-bold">Experince</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-purple-950">
            Name of Organization
          </label>
          <input
            value={organization}
            onChange={(e) =>
              dispatch({
                type: "experienceOrganization",
                payload: e.target.value,
              })
            }
            type="text"
            placeholder="abc pvt ltd"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              No of Years
            </label>
            <input
              value={years}
              onChange={(e) =>
                dispatch({
                  type: "experienceYears",
                  payload: e.target.value,
                })
              }
              type="text"
              placeholder="2014"
              className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Designation
            </label>
            <input
              value={designation}
              onChange={(e) =>
                dispatch({
                  type: "experienceDesignation",
                  payload: e.target.value,
                })
              }
              type="text"
              className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
              placeholder="Manager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
