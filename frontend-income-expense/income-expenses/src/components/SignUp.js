import { Input } from "@/components/Input";
import { Svg, Geld } from "@/components/Svg";
import { Buttons } from "./Buttons";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
export const SignUp = () => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [signup, setSignup] = useState({});
  const [error, setError] = useState("");
  const clickHandler = () => {
    setClick(!click);
  };
  const checkPass = () => {
    if (password !== confirmpassword) {
      throw new Error("password does not match");
    }
  };

  const createUser = async () => {
    try {
      checkPass();
      const result = await axios.post("http://localhost:7000/createUsers", {
        username,
        password,
        email,
      });

      setSignup(result.data);
    } catch (error) {
      if (error.message.includes("password")) {
        setError(error.message);
      } else {
        setError("User already registered");
      }
    }
  };
  return (
    <div className="bg-white w-8/12 h-screen flex justify-center items-center flex-col gap-10">
      <div className="flex justify-center items-center gap-3 p-2">
        <Svg />
        <Geld />
      </div>
      <div className="flex flex-col g-2 h-fit w-fit items-center">
        <h1 className="text-[20px] bold">Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
      </div>
      <div className="flex flex-col justify-center items-center w-4/12 gap-4">
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Name"
          inputType="text"
          inputValue={username}
          inputChange={(el) => {
            setUsername(el.target.value);
          }}
        />
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Email"
          inputType="text"
          inputValue={email}
          inputChange={(el) => {
            setEmail(el.target.value);
          }}
        />
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Password"
          inputType="password"
          inputValue={password}
          inputChange={(el) => setPassword(el.target.value)}
        />
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="confirm password"
          inputType="Password"
          inputValue={confirmpassword}
          inputChange={(el) => setConfirmpassword(el.target.value)}
        />
        <Buttons
          bClass="w-full h-12 rounded-xl p-2 bg-[#0166FF] text-white"
          bText="Sign Up"
          buttonClick={createUser}
        />
        <div className="text-red-600"> {error} </div>
      </div>
      <div className="flex">
        <p>Already have account</p>
        <Link href="./">
          <Buttons
            bClass="bg-white w-fit text-[#0166FF] px-3"
            bText="Sign in"
            buttonClick={clickHandler}
          />
        </Link>
      </div>
    </div>
  );
};
