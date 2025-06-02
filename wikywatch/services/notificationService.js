import { localApi } from "./api";

export const getNotifications = () => {
  return localApi.get("/notification");
};

export const markNotificationRead = (id) => {
  return localApi.patch(`/notification/${id}/read`);
};
