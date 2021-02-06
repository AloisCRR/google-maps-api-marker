// import { Company } from "./Company";
// import { User } from "./User";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: String(import.meta.env.SNOWPACK_PUBLIC_GOOGLE_MAPS_API_KEY),
  version: "weekly",
  libraries: ["places", "visualization", "drawing", "geometry", "localContext"],
});

(async function () {
  try {
    await loader.load();

    const mapDiv = document.querySelector<HTMLElement>("#map")!;

    mapDiv.style.height = "100vh";

    const mapOptions = {
      zoom: 5,
      center: {
        lat: 0,
        lng: 0,
      },
    };

    return new google.maps.Map(mapDiv, mapOptions);
  } catch (error) {
    return console.log(error);
  }
})();
