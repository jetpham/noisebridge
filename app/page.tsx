import Ansi from "./components/ansi";
import Noisebridge from "./assets/noisebridge_logo.utf8ans";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Ansi>{Noisebridge}</Ansi>
    </div>
  );
}
