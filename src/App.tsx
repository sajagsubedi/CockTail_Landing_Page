import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="h-[100vh] flex-center">
      <h1 className="text-3xl text-red-200">Hello Gsap</h1>
    </div>
  );
};

export default App;
