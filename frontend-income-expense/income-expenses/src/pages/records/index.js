import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
const records = () => {
  return (
    <div className="bg-gray-200 w-screen h-full">
      <Header />
      <div className="flex flex-col flex-between mx-auto  max-w-screen-xl h-screen gap-2 pt-8 ">
        <SideBar />
      </div>
    </div>
  );
};
export default records;
