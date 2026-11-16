export const ANNUAL_SAVINGS_RUPEES = 16_400_000; // ₹1.64 Crores per year (derived from ₹4.1 Cr lifetime over 2.5 yrs)
export const TOTAL_LIFETIME_SAVINGS_RUPEES = 41_000_000; // ₹4.1 Crores cumulative total saved
export const TOTAL_PATIENTS_SAVED = 1_270; // 1,270 patients saved from debt
export const TOTAL_PATIENTS_CONSULTED = 15_000; // 15,000+ total patient consultations

const MS_PER_HOUR = 3_600_000;

export interface SavingsSnapshot {
  currentYear: number;
  hoursInYear: number;
  hourlyRate: number;
  hourlyRateRounded: number;
  dailyRateRounded: number;
  minutesIntoHour: number;
  secondsIntoMinute: number;
  hourProgress: number;
  currentHourAccumulated: number;
  yearProgress: number;
  ytdSavedRupees: number;
  lifetimeSavedRupees: number;
  formattedDateEn: string;
  formattedDateHi: string;
}

/** Computes total hours in a calendar year (handles leap years accurately). */
export function getHoursInYear(year: number): number {
  const start = new Date(year, 0, 1, 0, 0, 0, 0).getTime();
  const nextStart = new Date(year + 1, 0, 1, 0, 0, 0, 0).getTime();
  return Math.round((nextStart - start) / MS_PER_HOUR);
}

/** Computes synchronized hourly rate, year-to-date savings, and lifetime total as of `now`. */
export function getSavingsSnapshot(now: Date = new Date()): SavingsSnapshot {
  const currentYear = now.getFullYear();
  const hoursInYear = getHoursInYear(currentYear);
  const hourlyRate = ANNUAL_SAVINGS_RUPEES / hoursInYear; // ~₹1,872/hour
  const hourlyRateRounded = Math.round(hourlyRate);
  const dailyRateRounded = Math.round(hourlyRate * 24); // ~₹44,932/day

  const minutesIntoHour = now.getMinutes();
  const secondsIntoMinute = now.getSeconds();
  const msIntoHour = (minutesIntoHour * 60 + secondsIntoMinute) * 1000 + now.getMilliseconds();
  const hourProgress = Math.min(1, Math.max(0, msIntoHour / MS_PER_HOUR));
  const currentHourAccumulated = Math.floor(hourProgress * hourlyRateRounded);

  const startOfYearMs = new Date(currentYear, 0, 1, 0, 0, 0, 0).getTime();
  const completedHoursThisYear = Math.max(0, Math.floor((now.getTime() - startOfYearMs) / MS_PER_HOUR));
  const yearProgress = Math.min(1, completedHoursThisYear / hoursInYear);
  const ytdSavedRupees = Math.round(completedHoursThisYear * hourlyRate);

  // Lifetime cumulative savings anchored at ₹4.1 Cr baseline with live hourly progression
  const lifetimeSavedRupees = TOTAL_LIFETIME_SAVINGS_RUPEES + currentHourAccumulated;

  const formattedDateEn = now.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const formattedDateHi = now.toLocaleDateString('hi-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return {
    currentYear,
    hoursInYear,
    hourlyRate,
    hourlyRateRounded,
    dailyRateRounded,
    minutesIntoHour,
    secondsIntoMinute,
    hourProgress,
    currentHourAccumulated,
    yearProgress,
    ytdSavedRupees,
    lifetimeSavedRupees,
    formattedDateEn,
    formattedDateHi,
  };
}

/** Formats a rupee value in Crores with 2 decimal precision (e.g. 1.64 or 4.10). */
export function formatCrores(rupees: number): string {
  return (rupees / 10_000_000).toFixed(2);
}

/** Formats an integer rupee figure using the Indian numbering system (e.g. 4,10,00,000). */
export function formatINR(rupees: number): string {
  return new Intl.NumberFormat('en-IN').format(rupees);
}
