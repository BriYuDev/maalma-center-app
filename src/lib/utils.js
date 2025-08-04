import { clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);
dayjs.locale("id");

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function safeareaPadding() {
    return "px-8 lg:px-12";
}

export function formatNatural(dateInput) {
    const now = dayjs();
    const date = dayjs(dateInput);

    const diffDays = date.diff(now, "day");
    const absDiff = Math.abs(diffDays);

    if (date.isSame(now, "day")) return "hari ini";
    if (diffDays === -1) return "kemarin";
    if (diffDays === -2) return "kemarin lusa";
    if (diffDays === 1) return "besok";
    if (diffDays === 2) return "lusa";
    if (diffDays < -2 && absDiff < 7) return `${absDiff} hari lalu`;
    if (diffDays > 2 && absDiff < 7) return `dalam ${absDiff} hari`;
    if (diffDays <= -7 && absDiff < 14) return `minggu lalu`;
    if (diffDays >= 7 && absDiff < 14) return `minggu depan`;
    if (diffDays < 0) return `${absDiff} hari lalu`;
    if (diffDays > 0) return `dalam ${absDiff} hari`;

    return date.fromNow(); // fallback
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
