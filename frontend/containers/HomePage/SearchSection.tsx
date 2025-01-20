"use client";

import { TextInput } from "@/components";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

type Props = {
  defaultSearch: string;
};

export const SearchSection: FC<Props> = ({ defaultSearch }) => {
  const [search, setSearch] = useState(defaultSearch);

  const router = useRouter();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const currentSearch = currentParams.get("search") ?? "";

    console.log(currentParams);

    if (debouncedSearch !== currentSearch) {
      currentParams.set("search", debouncedSearch);
      router.replace(`/?${currentParams.toString()}`);
    }
  }, [debouncedSearch, router]);

  return (
    <section>
      <TextInput
        type="search"
        placeholder="Search Country, Capital City, Region or Subregion"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
};
