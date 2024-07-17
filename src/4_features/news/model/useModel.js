import { useGetNewNotice } from "../api/useGetNewNotice";

export const useModel = () => {
    const [isNew] = useGetNewNotice();

    return { isNew };
}