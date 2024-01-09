import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { locations } from "$lib";

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  if (params.slug in locations) {
    return locations[params.slug];
  }
  error(404, "Not found");
};
