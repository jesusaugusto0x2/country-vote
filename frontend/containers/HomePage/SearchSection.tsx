"use client";

import { TextInput } from "@/components";
import { FC, useState } from "react";

export const SearchSection: FC = () => {
  const [search, setSearch] = useState("");

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      window.location.search = `?search=${search}`;
    }
  };

  return (
    <section>
      <TextInput
        type="search"
        placeholder="Search Country, Capital City, Region or Subregion"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </section>
  );
};
