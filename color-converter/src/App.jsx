import * as Separator from "@radix-ui/react-separator";
import { ColorInputs } from "./components/colorInputs";

export default function App() {
  return (
    <div className="p-5 min-h-screen bg-gradient-to-b from-slate-900 to-black  text-white">
      <div className="flex flex-col gap-5 items-center justify-between text-center mt-10 flex-grow">
        <h2 className="text-center text-6xl mb-2 mt-10 ">Conversor de Cores</h2>
        <Separator.Root className="bg-slate-400 w-56 h-[1px] rounded-sm" decorative />
        <ColorInputs/>
        <p><a target="_blank" href="https://github.com/brevsc">Breno Vasconcelos</a> - 2024</p>
      </div>
    </div>
  );
}
