import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Input } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("SUCCESS");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-xs h-full gap-2">
      <Input placeholder="Email..." />
      <Input placeholder="Password..." />
      <Button type="primary" block onClick={handleSignInWithGoogle}>
        Sign In with Google
      </Button>
    </div>
  );
};
