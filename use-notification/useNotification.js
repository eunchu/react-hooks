/**
 * mdn notification 참조
 * @param {String} title
 * @param {Object} options
 */
export const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNoti;
};