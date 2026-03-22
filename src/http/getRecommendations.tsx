import type { RecommendationRequest } from "../types/commonTypes";

export async function getRecommendations(payload: RecommendationRequest) {
  const response = await fetch("https://nextgame.philip-holmgren.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Worker request failed: ${errorText}`);
  }

  const data = await response.json();
  const parsed = JSON.parse(data.output);

  return parsed;
}