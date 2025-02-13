import * as contentful from "contentful";
import { createClient as createManagementClient } from "contentful-management";

export const client = contentful.createClient({
  space: import.meta.env.VITE_PUBLIC_SPACE_ID,
  accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
});
