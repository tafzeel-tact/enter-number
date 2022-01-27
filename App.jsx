
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import W1A2EnterNumber from "./components/W1A2EnterNumber";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|w1-a2-enter-number)">
          <W1A2EnterNumber {...w1A2EnterNumberData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const bannerImageData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/ka-se-kitab--balbir-punj-1@2x.png",
};

const cueBookingData = {
    bannerImageProps: bannerImageData,
};

const w1A2EnterNumberData = {
    rectangle447: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f13d9de0abd9b62d68ae45/img/rectangle-447@1x.png",
    title: "let’s begin!",
    fillText: <>please enter your mobile number. <br />it will be kept private &amp; secure.</>,
    text3: "+91",
    inputType: "number",
    inputPlaceholder: "9xxxxxxxx",
    button: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f13d9de0abd9b62d68ae45/img/button-3@2x.png",
    text: "booked cues will be available on cue app",
    cueBookingProps: cueBookingData,
};

