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

    if (date.isSame(now, "day")) return "hari ini";
    if (diffDays === -1) return "kemarin";
    if (diffDays === -2) return "kemarin lusa";
    return date.format("dddd, DD MMMM YYYY");
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
