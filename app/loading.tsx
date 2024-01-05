import { Progress } from "@nextui-org/progress";
import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="max-w-md w-[93%] mx-auto  ">
      <div className="flex justify-center  items-center h-full ">
        <Spinner size="lg" color="danger" />
      </div>
    </div>
  );
};

export default Loading;
