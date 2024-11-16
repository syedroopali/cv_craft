import { cvData } from "@/app/actions/cvscreen";

export default async function CvScreen() {
  const user = await cvData();
  return <h1>{user.name} </h1>;
}
