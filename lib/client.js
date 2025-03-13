import { createClient } from "@sanity/client"; // Cambiado la importación
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({ // Usando createClient
  projectId: "nvlisx04",
  dataset: "production",
  apiVersion: "2022-04-25",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);