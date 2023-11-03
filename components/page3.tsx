import useInterval from "../lib/useInterval";
import Clock from "./clock";
import Nav from "./nav";
import { useStore } from "../lib/store";
import Counter from "./counter";

export default function Page3() {
  const tick = useStore((store) => store.tick);

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true);
  }, 1000);

  return (
    <>
      <Counter />
      <Nav />
      <Clock />
    </>
  );
}
