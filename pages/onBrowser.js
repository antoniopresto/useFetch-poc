export const onBrowser = cb => {
  if (typeof window !== "undefined") {
    cb();
  }
};
