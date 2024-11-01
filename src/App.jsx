// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import "./App.css";
import { Login } from "./components/LoginForm";
// import { LiftingState } from "./components/LiftStateUp";
import { RegistrationUpdated } from "./components/RegistrationUpdated";
// import _gsap from "gsap/gsap-core";
// import NetflixSeries from "./components/NetflixSeries";
// import {DerivedState} from "./components/UseState";

function App() {
  // useGSAP(() => {
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // });

  return (
    <main>
      {/* <div className="box"></div> */}
      {/* <NetflixSeries /> */}
      {/* <DerivedState/> */}
      {/* <LiftingState /> */}
      <RegistrationUpdated />
      {/* <Login /> */}
    </main>
  );
}

export default App;
