import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/containers";

export default async function Home(props: {
  readonly searchParams: Promise<{ readonly search?: string }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <HomePage search={searchParams.search ?? ""} />
    </main>
  );
}
