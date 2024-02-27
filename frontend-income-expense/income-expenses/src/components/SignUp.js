import { Input } from "@/components/Input";
import { Svg, Geld } from "@/components/Svg";
import { Buttons } from "./Buttons";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [signup, setSignup] = useState({});
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };
  const checkPass = () => {
    if (password !== confirmpassword) return false;
    return true;
  };
  const createUser = async (event) => {
    event.preventDefault();
    try {
      if (!checkPass()) return setError("password buruu baina");
      const userData = {
        username,
        email,
        password,
      };
      const result = await axios.post("http://localhost:8000/signup", userData);
      setSignup(result.data);
      router.push("/signUp");
      return;
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="bg-white w-8/12 h-screen flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center items-center gap-3 p-2">
          <Svg />
          <Geld />
        </div>
        <div className="flex flex-col g-2 h-fit w-fit items-center">
          <h1 className="text-[20px] bold">Create Geld account</h1>
          <p>Sign up below to create your wallet account</p>
        </div>
        <form
          onSubmit={createUser}
          className="flex flex-col justify-center items-center w-4/12 gap-4"
        >
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
            inputType="email"
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
            type="submit"
            disabled={isLoading}
          />
          {/* return (
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={onSubmit}>
          <input type="text" name="name" />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    ) */}
        </form>
        <div className="text-red-600"> {error} </div>
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
    </>
  );
};
