import axios from "axios";
import { settings } from "../Config/settings";

export const restConnector = axios.create({
  baseURL: settings.domain
});

