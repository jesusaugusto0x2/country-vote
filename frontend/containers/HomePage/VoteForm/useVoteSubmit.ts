import { useState } from "react";
import { VoteFormSchema } from "./schema";
import { useRouter } from "next/navigation";

export const useVoteSubmit = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onVoteSubmit = async (data: VoteFormSchema) => {
    setIsLoading(true);

    const request = new Request(
      `${process.env.NEXT_PUBLIC_FRONT_API_URL}/votes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const resp = await fetch(request);

      if (!resp.ok) {
        const error = await resp.json();
        setError(error.message || "Unknown error courred");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setVoted(true);
      router.refresh();
    } catch (e) {
      setError(
        "A network error occurred. Please reload the page to try again."
      );
      setIsLoading(false);
      console.error("Error submitting vote", e);
    }
  };

  return { isLoading, voted, error, onVoteSubmit };
};
