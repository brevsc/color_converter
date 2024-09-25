import * as Separator from "@radix-ui/react-separator";
import { ColorInputs } from "./components/colorInputs";

export default function App() {
  return (
    <div className="p-5 h-screen bg-gradient-to-b from-slate-900 to-black  text-white">
      <div className="flex flex-col gap-5 items-center justify-between text-center mt-10">
        <h2 className="text-center text-6xl mb-2 mt-10 ">Conversor de Cores</h2>
        <Separator.Root className="bg-slate-300 w-56 h-[1px]" />
        <ColorInputs/>
      </div>
    </div>
  );
}
