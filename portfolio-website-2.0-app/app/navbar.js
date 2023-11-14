import { GiFlamingTrident } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between h-16">
      <span className="px-4 text-5xl text-amber-400">
        <GiFlamingTrident />
      </span>
    </div>
  );
}
