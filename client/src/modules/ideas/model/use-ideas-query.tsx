import { useMutation, useQuery } from "@tanstack/react-query";
import { apiIdeas } from "../api/api-ideas";
import { queryClient } from "../../../shared/api/query-client";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "./ideas.type";
import { showError, typeError } from "../lib/error-correction";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export function useIdeasQuery() {
  const [updateVoteId, setUpdateVoteId] = useState<number | null>(null);
  const [likeIdea, setLikeIdea] = useState<number[]>([]);

  const isLike = (ideaId: number) => likeIdea.includes(ideaId);

  useEffect(() => {
    const like = localStorage.getItem("like");
    if (like) {
      setLikeIdea(JSON.parse(like));
    }
  }, []);

  const getIdeas = useQuery({
    queryKey: ["Ideas"],
    queryFn: () => {
      const response = apiIdeas.getIdeas();
      return response;
    },
  });

  const updateIdeaVote = useMutation({
    mutationFn: (ideaId: number) => {
      setUpdateVoteId(ideaId);
      const response = apiIdeas.updateIdea(ideaId);
      return response;
    },
    onSuccess: (data) => {
      setLikeIdea((prev) => {
        const newLike = [...prev, data.data.id];
        localStorage.setItem("like", JSON.stringify(newLike));
        return newLike;
      });
      toast.success(typeError.VOTE_SUCCESS);
    },
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: ["Ideas"] });
      setUpdateVoteId(null);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const message = error?.response?.data?.error;
      showError(message);
    },
  });

  return {
    isLike,
    updateVoteId,
    updateIdeaVote,
    ideasData: getIdeas.data?.data,
    ideasError: getIdeas.error,
    isLoadingIdeas: getIdeas.isLoading,
    isLoadingUpdateVote: updateIdeaVote.isPending,
  };
}
