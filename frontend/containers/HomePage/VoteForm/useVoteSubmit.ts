import { useState } from "react";
import { VoteFormSchema } from "./schema";
import { useRouter } from "next/navigation";

export const useVoteSubmit = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(false);

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
        throw new Error("Failed to submit vote");
      }

      setIsLoading(false);
      setVoted(true);
      router.refresh();
    } catch (e) {
      console.error("Error submitting vote", e);
      setError(true);
      setIsLoading(false);
      throw e;
    }
  };

  return { isLoading, voted, error, onVoteSubmit };
};
