import Ansi from "./components/ansi";
import Noisebridge from "./assets/noisebridge_logo.utf8ans";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <a
        href="https://noisebridge.net"
        target="_blank"
        rel="noopener noreferrer"
        className="outline-none focus:outline-white"
        tabIndex={0}
        aria-label="Visit Noisebridge.net"
      >
        <Ansi>{Noisebridge}</Ansi>
      </a>
    </div>
  );
}
