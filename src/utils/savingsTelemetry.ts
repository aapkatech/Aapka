export const ANNUAL_SAVINGS_RUPEES = 40_000_000; // ₹4 Crores per year
export const LIFETIME_BASE_AT_2026_START = 100_000_000; // ₹10 Crores cumulative baseline prior to 2026
export const LIFETIME_ANCHOR_DATE = new Date(2026, 0, 1, 0, 0, 0, 0);

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
  const hourlyRate = ANNUAL_SAVINGS_RUPEES / hoursInYear;
  const hourlyRateRounded = Math.round(hourlyRate);
  const dailyRateRounded = Math.round(hourlyRate * 24);

  const minutesIntoHour = now.getMinutes();
  const secondsIntoMinute = now.getSeconds();
  const msIntoHour = (minutesIntoHour * 60 + secondsIntoMinute) * 1000 + now.getMilliseconds();
  const hourProgress = Math.min(1, Math.max(0, msIntoHour / MS_PER_HOUR));
  const currentHourAccumulated = Math.floor(hourProgress * hourlyRateRounded);

  const startOfYearMs = new Date(currentYear, 0, 1, 0, 0, 0, 0).getTime();
  const completedHoursThisYear = Math.max(0, Math.floor((now.getTime() - startOfYearMs) / MS_PER_HOUR));
  const yearProgress = Math.min(1, completedHoursThisYear / hoursInYear);
  const ytdSavedRupees = Math.round(completedHoursThisYear * hourlyRate);

  const completedHoursSinceAnchor = Math.max(
    0,
    Math.floor((now.getTime() - LIFETIME_ANCHOR_DATE.getTime()) / MS_PER_HOUR)
  );
  const lifetimeSavedRupees = Math.round(
    LIFETIME_BASE_AT_2026_START + completedHoursSinceAnchor * hourlyRate
  );

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

/** Formats a rupee value in Crores with 2 decimal precision (e.g. 13.46). */
export function formatCrores(rupees: number): string {
  return (rupees / 10_000_000).toFixed(2);
}

/** Formats an integer rupee figure using the Indian numbering system (e.g. 13,46,21,005). */
export function formatINR(rupees: number): string {
  return new Intl.NumberFormat('en-IN').format(rupees);
}
