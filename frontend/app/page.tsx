import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/containers";

export default async function Home({
  searchParams,
}: {
  readonly searchParams: { readonly search?: string };
}) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <HomePage search={searchParams.search ?? ""} />
    </main>
  );
}
