// import { Company } from "./Company";
// import { User } from "./User";

import { Loader } from "@googlemaps/js-api-loader";
import { CustomMap } from "./CustomMap";

(async function () {
  try {
    await new Loader({
      apiKey: String(import.meta.env.SNOWPACK_PUBLIC_GOOGLE_MAPS_API_KEY),
      version: "weekly",
      libraries: [
        "places",
        "visualization",
        "drawing",
        "geometry",
        "localContext",
      ],
    }).load();

    return new CustomMap("#map");
  } catch (error) {
    return console.log(error);
  }
})();
