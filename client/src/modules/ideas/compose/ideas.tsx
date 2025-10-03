import type { Idea } from "../model/ideas.type";
import { IdeaCard, IdeasLayout } from "../ui";
import { Indicator } from "../../../shared/ui/indicator";
import { useIdeasView } from "../model/use-ideas-view";
import { Error } from "../../../shared/ui/error";

export function Ideas() {
  const {
    isLike,
    ideasData,
    ideasError,
    isLoadingVote,
    isLoadingIdeas,
    handleUpdateVote,
  } = useIdeasView();

  if (isLoadingIdeas) {
    return <Indicator size="big" variant="page" />;
  }

  if (ideasError) {
    return <Error error={ideasError.message} />;
  }

  return (
    <IdeasLayout
      content={ideasData?.map((idea: Idea) => (
        <IdeaCard
          idea={idea}
          key={idea.id}
          isLike={isLike}
          isLoading={isLoadingVote}
          updateVote={() => handleUpdateVote(idea.id)}
        />
      ))}
    />
  );
}
