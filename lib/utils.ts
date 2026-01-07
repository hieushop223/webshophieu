import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format text by replacing "fat_" prefix with "hieu_"
 * This allows using the same database while displaying different branding
 */
export function formatMainAcc(mainAcc: string | null | undefined): string {
  if (!mainAcc) return '';
  return mainAcc.replace(/^fat_/i, 'hieu_');
}

/**
 * Format account title by replacing "fat_" prefix with "hieu_"
 */
export function formatTitle(title: string | null | undefined): string {
  if (!title) return '';
  return title.replace(/^fat_/i, 'hieu_');
}
