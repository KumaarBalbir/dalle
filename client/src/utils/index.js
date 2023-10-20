import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant";

/**
 * Generates a random prompt different from the given prompt.
 *
 * @param {string} prompt - The prompt to compare against.
 * @return {string} A random prompt different from the given prompt.
 */
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
