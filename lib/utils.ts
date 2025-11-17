import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(fullName: string) {
  if (!fullName) return '';

  const nameParts = fullName.trim().split(/\s+/);

  const firstInitial = nameParts[0].charAt(0).toUpperCase();

  let secondInitial = '';
  if (nameParts.length > 1) {
    secondInitial = nameParts[1].charAt(0).toUpperCase();
  }

  return firstInitial + secondInitial;
}