"use client";

import { FormEvent, useReducer } from "react";
import Button from "./Button";
import Contact from "./CvComponents/Contact";
import Education from "./CvComponents/Education";
import Experience from "./CvComponents/Experience";
import Personal from "./CvComponents/Personal";

export default function CvForm({ username }: any) {
  ///  initial State ////////////
  const initialState = {
    // Personal /////////////////
    personal: {
      name: "",
      fatherName: "",
      cnic: "",
      dob: "",
      religion: "islam",
      meritalStatus: "merried",
      nationality: "Pakistani",
    },

    // Education /////////////////
    education: {
      metric: {
        institute: "",
        passingYear: "",
        certificate: "metric",
      },
      inter: {
        institute: "",
        passingYear: "",
        certificate: "Intermediate",
      },
      graduation: {
        institute: "",
        passingYear: "",
        certificate: "",
      },
      masters: {
        institute: "",
        passingYear: "",
        certificate: "",
      },
    },
    // Contact /////////////////
    contact: {
      phone: "",
      email: "",
      address: "",
    },
    // Experience /////////////////
    experience: {
      organization: "",
      years: "",
      designation: "",
    },
  };

  ///  reducer functtion ////////////
  const reducer = function (state: any, action: any): any {
    switch (action.type) {
      // Personal /////////////////
      case "name":
        return {
          ...state,
          personal: { ...state.personal, name: action.payload },
        };
      case "fatherName":
        return {
          ...state,
          personal: { ...state.personal, fatherName: action.payload },
        };
      case "cnic":
        return {
          ...state,
          personal: { ...state.personal, cnic: action.payload },
        };
      case "dob":
        return {
          ...state,
          personal: { ...state.personal, dob: action.payload },
        };
      case "meritalStatus":
        return {
          ...state,
          personal: { ...state.personal, meritalStatus: action.payload },
        };
      case "religion":
        return {
          ...state,
          personal: {
            ...state.personal,
            religion: action.payload,
          },
        };
      case "nationality":
        return {
          ...state,
          personal: {
            ...state.personal,
            nationality: action.payload,
          },
        };
      // Education /////////////////
      /// Metric ///
      case "metricInstitute":
        return {
          ...state,
          education: {
            ...state.education,
            metric: { ...state.education.metric, institute: action.payload },
          },
        };
      case "metricPassingYear":
        return {
          ...state,
          education: {
            ...state.education,
            metric: { ...state.education.metric, passingYear: action.payload },
          },
        };
      /// Inter ///
      case "interInstitute":
        return {
          ...state,
          education: {
            ...state.education,
            inter: { ...state.education.inter, institute: action.payload },
          },
        };
      case "interPassingYear":
        return {
          ...state,
          education: {
            ...state.education,
            inter: {
              ...state.education.inter,
              passingYear: action.payload,
            },
          },
        };
      /// Graduation ///
      case "graduationInstitute":
        return {
          ...state,
          education: {
            ...state.education,
            graduation: {
              ...state.education.graduation,
              institute: action.payload,
            },
          },
        };
      case "graduationPassingYear":
        return {
          ...state,
          education: {
            ...state.education,
            graduation: {
              ...state.education.graduation,
              passingYear: action.payload,
            },
          },
        };
      case "graduationCertificate":
        return {
          ...state,
          education: {
            ...state.education,
            graduation: {
              ...state.education.graduation,
              certificate: action.payload,
            },
          },
        };
      /// Masters ///
      case "mastersInsttitue":
        return {
          ...state,
          education: {
            ...state.education,
            masters: {
              ...state.education.masters,
              institute: action.payload,
            },
          },
        };
      case "mastersPassingYear":
        return {
          ...state,
          education: {
            ...state.education,
            masters: {
              ...state.education.masters,
              passingYear: action.payload,
            },
          },
        };
      case "mastersCertificate":
        return {
          ...state,
          education: {
            ...state.education,
            masters: {
              ...state.education.masters,
              certificate: action.payload,
            },
          },
        };
      // Contact /////////////////
      case "contactPhone":
        return {
          ...state,
          contact: {
            ...state.contact,
            phone: action.payload,
          },
        };
      case "contactEmail":
        return {
          ...state,
          contact: {
            ...state.contact,
            email: action.payload,
          },
        };
      case "contactAddress":
        return {
          ...state,
          contact: {
            ...state.contact,
            address: action.payload,
          },
        };
      // Experience /////////////////
      case "experienceOrganization":
        return {
          ...state,
          experience: {
            ...state.experience,
            organization: action.payload,
          },
        };
      case "experienceYears":
        return {
          ...state,
          experience: {
            ...state.experience,
            years: action.payload,
          },
        };
      case "experienceDesignation":
        return {
          ...state,
          experience: {
            ...state.experience,
            designation: action.payload,
          },
        };
    }
  };

  ///  useReducer Hook ////////////
  const [{ personal, education, contact, experience }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Server ////////////////////////////////////////////

  const cvFromData = async function (data: any) {};

  // Handlers ////////////////////////////////////////////
  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    const data = {
      ...personal,
      ...education,
      ...contact,
      ...experience,
    };
    cvFromData(data);
  };

  // JSX ////////////////////////////////////////////

  return (
    <>
      <div className=" bg-purple-950 w-full flex items-center justify-between px-6">
        <h2 className="py-4 text-white  capitalize">Hy, {username} </h2>
        <Button />
      </div>

      <form
        className="w-full bg-gray-200 flex items-center justify-center flex-col py-6"
        onSubmit={handleSubmit}
      >
        {/* Input Form */}
        <div className="flex flex-col gap-4 px-4 bg-white w-80 py-4 shadow-sm ">
          <Personal personal={personal} dispatch={dispatch} />
          <Education education={education} dispatch={dispatch} />
          <Contact contact={contact} dispatch={dispatch} />
          <Experience experience={experience} dispatch={dispatch} />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md text-white bg-purple-400"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
