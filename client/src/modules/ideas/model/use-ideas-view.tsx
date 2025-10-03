import { toast } from "react-toastify";
import { useIdeasQuery } from "./use-ideas-query";
import { typeError } from "../lib/error-correction";

export function useIdeasView() {
  const {
    isLike,
    ideasData,
    ideasError,
    updateVoteId,
    updateIdeaVote,
    isLoadingIdeas,
    isLoadingUpdateVote,
  } = useIdeasQuery();

  const handleUpdateVote = (id: number) => {
    if (!isLike(id)) {
      updateIdeaVote.mutate(id);
    } else {
      toast.error(typeError.ALREADY_VOTED_FOR_THIS_IDEA);
    }
  };

  const isLoadingVote = (ideaId: number) =>
    isLoadingUpdateVote && updateVoteId === ideaId;

  return {
    isLike,
    ideasData,
    ideasError,
    isLoadingVote,
    isLoadingIdeas,
    handleUpdateVote,
  };
}
