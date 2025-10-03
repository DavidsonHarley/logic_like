import { apiClient } from "../../../shared/api/api-instance";

export const apiIdeas = {
  getIdeas: () => {
    return apiClient.get("/all");
  },

  updateIdea: (ideaId: number) => {
    return apiClient.put(`/update/${ideaId}`);
  },
};
