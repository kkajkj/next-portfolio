import { useContext } from "react";
import { StateContext } from "../../StateContext";

export default function ContactDetails() {
  const data = useContext(StateContext);

  return (
    <div className="flex justify-center gap-4 mx-auto text-gray-50 bg-black rounded-lg shadow-md p-4 text-center">
      <div className="flex ">
        <h1 className="text-xl font-extrabold mb-2 mr-2">Addresss:</h1>
        <p className=" text-lg"> {data?.about?.address}</p>
      </div>
      <div className="flex">
        <h1 className="text-xl font-extrabold  mb-2 mr-2">email:</h1>
        <p className=" text-lg">{data?.about?.contactEmail}</p>
      </div>
      <div className="flex">
        <h1 className="text-xl font-extrabold  mb-2 mr-2">PhoneNumber:</h1>
        <p className=" text-lg"> {data?.about?.phoneNumber}</p>
      </div>
    </div>
  );
}
