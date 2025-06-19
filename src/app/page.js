import Client from "./components/Client";
import Category from "./servercomponents/Category";
import MainArea from "./servercomponents/MainArea";
export const dynamic = "force-static";
export default async function Home() {
  return <Client Category={<Category />} MainArea={<MainArea />} />;
}
