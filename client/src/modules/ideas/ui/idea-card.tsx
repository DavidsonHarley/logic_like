import Star from "../../../shared/assets/star";
import { Indicator } from "../../../shared/ui/indicator";
import type { Idea } from "../model/ideas.type";
import cls from "./styles/idea-card.module.scss";

type IdeaCardProps = {
  idea: Idea;
  updateVote: () => void;
  isLike: (id: number) => boolean;
  isLoading: (id: number) => boolean;
};

export function IdeaCard({
  idea,
  isLike,
  isLoading,
  updateVote,
}: IdeaCardProps) {
  const loading = isLoading(idea.id);

  return (
    <div
      key={idea.id}
      className={cls.item}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity 0.3s",
      }}
    >
      <div className={cls.title}>{idea.title}</div>
      <p>{idea.description}</p>
      <div className={cls.ctnCountLike}>
        <div
          className={cls.ctnStar}
          onClick={updateVote}
          aria-disabled={loading}
          role="button"
          style={{ cursor: loading ? "not-allowed" : "pointer" }}
        >
          {isLoading(idea.id) ? (
            <Indicator />
          ) : (
            <>{isLike(idea.id) ? <Star color="#fcd34d" /> : <Star />}</>
          )}
        </div>
        <div>{idea.vote_count}</div>
      </div>
    </div>
  );
}
