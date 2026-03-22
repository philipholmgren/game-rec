import type { RecommendationRequest } from "../types/commonTypes";

export async function getRecommendations(payload: RecommendationRequest) {
  const response = await fetch("http://127.0.0.1:8787", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(payload)
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Worker request failed: ${errorText}`);
  }

  const data = await response.json();
  const parsed = JSON.parse(data.output);

  return parsed;
}