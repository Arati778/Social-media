import React from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase/firebase";
import LoginComponents from "./LoginComponent";

export default function Login() {
  // const [loading, setLoading] = useState(true);
  // let navigate = useNavigate();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (res) => {
  //     if (res?.accessToken) {
  //       navigate("/home");
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);
  return  <LoginComponents />
}
