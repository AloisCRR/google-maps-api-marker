// import { Company } from "./Company";
// import { User } from "./User";

import { Loader } from "@googlemaps/js-api-loader";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

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

    const user = new User();
    const company = new Company();
    const customMap = new CustomMap("#map");

    customMap.addUserMarker(user);
    customMap.addCompanyMarker(company);
  } catch (error) {
    console.log(error);
  }
})();
