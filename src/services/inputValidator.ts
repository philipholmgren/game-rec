import leoProfanity from "leo-profanity";

export function validateCustomInput(input: string): {
  valid: boolean;
  error?: string;
} {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: "Input cannot be empty" };
  }

  if (trimmed.length > 30) {
    return { valid: false, error: "Max 30 characters allowed" };
  }

  if (!/^[a-zA-Z0-9\s-]+$/.test(trimmed)) {
    return { valid: false, error: "Only letters, numbers and spaces allowed" };
  }

  if (trimmed.split(" ").length > 3) {
    return { valid: false, error: "Max 3 words allowed" };
  }

  if (leoProfanity.check(trimmed)) {
    return { valid: false, error: "Not a valid genre or mood" };
  }

  return { valid: true };
}