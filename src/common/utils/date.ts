import { Dayjs } from "dayjs";

export function formatDate(day: Dayjs): string {
  return day.format("DD-MM-YYYY");
}
