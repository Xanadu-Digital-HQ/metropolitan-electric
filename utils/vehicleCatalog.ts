import type { vehicle } from "~/types/types";
import { vehicles } from "~/utils/vehicles";

export const getVehicleSlug = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const findVehicleBySlug = (slug: string): vehicle | undefined =>
  vehicles.find((item) => getVehicleSlug(item.name) === slug);
