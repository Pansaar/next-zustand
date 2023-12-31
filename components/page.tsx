import useInterval from "../lib/useInterval";
import Clock from "./clock";
import Counter from "./counter";
import Nav from "./nav";
import { useStore } from "../lib/store";

export default function Page() {
  const tick = useStore((store) => store.tick);

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true);
  }, 1000);

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  );
}
