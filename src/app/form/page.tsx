import { form } from "../actions/form";
import CvForm from "../components/CvForm";

export default async function Page() {
  const user = await form();
  const username = user.username;

  return (
    <>
      <CvForm username={username} />
    </>
  );
}
