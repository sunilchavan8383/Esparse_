import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import ForgotPass from "./components/ForgotPassPage/ForgotPass";
import Reg from "./components/RegPage/Reg";
import Verification from "./components/VerificationPage/Verify";
import SetUpProfile from "./components/SetUpProfile/SetUpProfile";

export default function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}
