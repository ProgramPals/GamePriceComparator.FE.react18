import { checkAuth } from "@/features/AuthSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// @ts-ignore
export const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
};

