"use client";

export type PresellAnalyticsEvent =
  | "presell01_view"
  | "presell01_puzzle_complete"
  | "presell01_continue"
  | "presell02_view"
  | "presell02_age_declaration_confirmed";

export function trackPresellEvent(
  event: PresellAnalyticsEvent,
  details?: Record<string, string>,
) {
  window.dispatchEvent(
    new CustomEvent("presell:analytics", {
      detail: { event, ...details },
    }),
  );
}
