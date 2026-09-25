/**
 * Generates avatar initials dynamically from a student's name.
 * 
 * Rules:
 * - Empty/null/undefined -> ''
 * - Single-word name (e.g. "Shreya") -> "S"
 * - Multi-word name:
 *   - "Aarav Sharma" -> "AS"
 *   - "Shreya Rai" -> "SR"
 *   - "Priya Singh" -> "PS"
 *   - "Shreya Rai Sharma" -> "SR" (first and second word initials)
 */
export function getInitials(name?: string | null): string {
  if (!name) return '';
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
}
