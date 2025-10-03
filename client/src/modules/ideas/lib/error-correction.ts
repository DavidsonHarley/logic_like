import { toast } from "react-toastify";

export const typeError = {
  VOTE_LIMIT_EXCEEDED: "Превышен лимит голосов, максимум 10",
  ALREADY_VOTED_FOR_THIS_IDEA: "Вы уже голосовали за эту идею",
  VOTE_SUCCESS: "Голос успешно принят",
};

export const showError = (error?: string) => {
  switch (error) {
    case "VOTE_LIMIT_EXCEEDED":
      return toast.error(typeError.VOTE_LIMIT_EXCEEDED);
    case "ALREADY_VOTED_FOR_THIS_IDEA":
      return toast.error(typeError.ALREADY_VOTED_FOR_THIS_IDEA);
    default:
      console.error(error);
  }
};
