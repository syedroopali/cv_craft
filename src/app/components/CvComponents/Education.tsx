import { Mansalva } from "next/font/google";

export interface EducationInterface {
  metric: { institute: string; passingYear: string; certificate: string };
  inter: { institute: string; passingYear: string; certificate: string };
  graduation: { institute: string; passingYear: string; certificate: string };
  masters: { institute: string; passingYear: string; certificate: string };
}

export default function Education({ education, dispatch }: any) {
  const { metric, inter, graduation, masters } = education;
  return (
    <>
      <hr className="mt-4 border border-purple-100" />
      <h2 className="text-purple-950 font-bold">Education</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-purple-950">
            Metric
          </label>
          <input
            value={metric.institute}
            onChange={(e) =>
              dispatch({ type: "metricInstitute", payload: e.target.value })
            }
            type="text"
            placeholder="Name of School"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Passing Year
            </label>
            <input
              value={metric.passingYear}
              onChange={(e) =>
                dispatch({ type: "metricPassingYear", payload: e.target.value })
              }
              type="text"
              placeholder="2014"
              className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Certificate
            </label>
            <input
              type="text"
              className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
              placeholder="Metric"
              value="Metric"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-purple-950">
            Intermediate
          </label>
          <input
            value={inter.institute}
            onChange={(e) =>
              dispatch({ type: "interInstitute", payload: e.target.value })
            }
            type="text"
            placeholder="Name of college"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Passing Year
            </label>
            <input
              value={inter.passingYear}
              onChange={(e) =>
                dispatch({ type: "interPassingYear", payload: e.target.value })
              }
              type="text"
              placeholder="2016"
              className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Certificate
            </label>
            <input
              type="text"
              className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
              placeholder="Intermediate"
              value="Intermediate"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-purple-950">
            Graduation
          </label>
          <input
            value={graduation.institute}
            onChange={(e) =>
              dispatch({ type: "graduationInstitute", payload: e.target.value })
            }
            type="text"
            placeholder="Name of University"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Passing Year
            </label>
            <input
              value={graduation.passingYear}
              onChange={(e) =>
                dispatch({
                  type: "graduationPassingYear",
                  payload: e.target.value,
                })
              }
              type="text"
              placeholder="2018"
              className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Certificate
            </label>
            <input
              value={graduation.certificate}
              onChange={(e) =>
                dispatch({
                  type: "graduationCertificate",
                  payload: e.target.value,
                })
              }
              type="text"
              placeholder="B.Com"
              className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-purple-950">
            Masters
          </label>
          <input
            value={masters.institute}
            onChange={(e) =>
              dispatch({ type: "mastersInsttitue", payload: e.target.value })
            }
            type="text"
            placeholder="Name of University "
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Passing Year
            </label>
            <input
              value={masters.passingYear}
              onChange={(e) =>
                dispatch({
                  type: "mastersPassingYear",
                  payload: e.target.value,
                })
              }
              type="text"
              placeholder="2020"
              className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-purple-950">
              Certificate
            </label>
            <input
              value={masters.certificate}
              onChange={(e) =>
                dispatch({
                  type: "mastersCertificate",
                  payload: e.target.value,
                })
              }
              type="text"
              placeholder="MBA"
              className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
            />
          </div>
        </div>
      </div>
    </>
  );
}
