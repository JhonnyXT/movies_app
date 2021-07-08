import { useLocation } from "react-router-dom";

//Hooks
export function useQuery() {
    return new URLSearchParams(useLocation().search);
}