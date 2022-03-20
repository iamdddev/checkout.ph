export { Auth as default } from "./Auth";
export { Auth } from "./Auth";

export type AuthProps = {
    onAuth: (e: any) => void,
    onProviderLogin: (provider: "facebook" | "google") => void
}

export type ProviderType = "facebook" | "google"