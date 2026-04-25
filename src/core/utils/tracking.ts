export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  try {
    console.log("[TRACK]", event, data);

    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = window.gtag as (
        command: "event",
        eventName: string,
        params?: Record<string, unknown>,
      ) => void;

      gtag("event", event, data);
    }
  } catch (error) {
    console.error("Tracking error:", error);
  }
};
