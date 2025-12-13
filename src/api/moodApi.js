import api from "./axios";

export const saveMood = (data) =>
  api.post("/mood/add", data);

export const getMoodByDate = (date) =>
  api.get(`/mood/date/${date}`);


export const getAllMoods = (userId) =>
  api.get(`/mood/user/${userId}`);

export const getMoodAnalytics = (userId) =>
  api.get(`/mood/analytics/${userId}`);
