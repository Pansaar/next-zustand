import useInterval from "../lib/useInterval";
import Clock from "./clock";
import Counter from "./counter";
import { useStore } from "../lib/store";
import Nav from "./nav";

export default function Page2() {
  const tick = useStore((store) => store.tick);

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true);
  }, 1000);

  return (
    <>

      <Clock />
      <Nav />
      <Counter />
    </>
  );
}
