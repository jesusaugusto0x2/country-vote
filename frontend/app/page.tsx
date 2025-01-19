import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/containers";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <HomePage />
    </main>
  );
}
