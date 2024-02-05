import { Input } from "@/components/Input";
import { Svg, Geld } from "@/components/Svg";
import { Buttons } from "./Buttons";
import axios from "axios";
import { useState } from "react";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white w-8/12 h-screen flex justify-center items-center flex-col gap-10">
      <div className="flex justify-center items-center gap-3 p-2">
        <Svg />
        <Geld />
      </div>
      <div className="flex flex-col g-2 h-fit w-fit items-center">
        <h1 className="text-[20px] bold">Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
      </div>
      <div className="flex flex-col justify-center items-center w-4/12 gap-4">
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Email"
          inputType="text"
          //   inputValue={ValueisHere}
        />
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Password"
          inputType="password"
        />
        <Buttons
          bClass="w-full h-12 rounded-xl p-2 bg-[#0166FF] text-white"
          bText="Sign In"
        />
      </div>
      <div className="flex">
        <p>Don’t have account? </p>
        <Buttons bClass="bg-white w-fit text-[#0166FF] px-3" bText="Sign up" />
      </div>
    </div>
  );
};
