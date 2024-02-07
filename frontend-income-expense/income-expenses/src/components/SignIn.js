import { Input } from "@/components/Input";
import { Svg, Geld } from "@/components/Svg";
import { Buttons } from "./Buttons";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const SignIn = () => {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [signin, setSignin] = useState({});
  const [error, setError] = useState("");
  const [tohome, setTohome] = useState(false);
  const router = useRouter();
  const jumptohome = () => {
    setTohome(!tohome);
  };

  const signUser = async () => {
    try {
      const result = await axios.post("http://localhost:7000/login", {
        email: useremail,
        password: userpassword,
      });

      console.log(result.data.accesstoken);

      localStorage.setItem("loginToken", result.data.accesstoken);

      if (result.data != "email or password buruu baina") {
        router.push("/toLogin");
      } else {
        setError("email or password buruu baina");
      }
      // if (response.data !== "email or password buruu baina")});
      setSignin(result.data);
      //dsf
    } catch (error) {
      setError(error.message);
    }
  };
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
          inputChange={(el) => {
            setUserEmail(el.target.value);
          }}
          inputValue={useremail}
        />
        <Input
          inputClass="w-full h-12 border rounded-lg p-2 bg-[#F3F4F6]"
          inputPlaceholder="Password"
          inputType="password"
          inputChange={(el) => {
            setUserPassword(el.target.value);
          }}
          inputValue={userpassword}
        />
        <Buttons
          bClass="w-full h-12 rounded-xl p-2 bg-[#0166FF] text-white"
          bText="Sign In"
          buttonClick={signUser}
        />
        <div> {error} </div>
      </div>
      <div className="flex">
        <p>Don’t have account? </p>
        <Link href="/createUser">
          <Buttons
            bClass="bg-white w-fit text-[#0166FF] px-3"
            bText="Sign up"
          />
        </Link>
      </div>
    </div>
  );
};
