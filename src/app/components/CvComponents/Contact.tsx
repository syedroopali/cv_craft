export interface ContactInterface {
  phone: string;
  email: string;
  address: string;
}

export default function Contact({ contact, dispatch }: any) {
  const { phone, email, address } = contact;
  return (
    <>
      <hr className="mt-4 border border-purple-100" />

      <h2 className="text-purple-950 font-bold">Contact Details</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="Phone" className="text-purple-950">
            Phone No
          </label>
          <input
            value={phone}
            onChange={(e) =>
              dispatch({ type: "contactPhone", payload: e.target.value })
            }
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-purple-950">
            Email
          </label>
          <input
            value={email}
            onChange={(e) =>
              dispatch({ type: "contactEmail", payload: e.target.value })
            }
            type="email"
            placeholder="abc@example.com"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-purple-950">
            Address
          </label>
          <input
            value={address}
            onChange={(e) =>
              dispatch({ type: "contactAddress", payload: e.target.value })
            }
            type="text"
            placeholder="Hno: 123, street 2, sec: a-5,  karachi"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize"
          />
        </div>
      </div>
    </>
  );
}
