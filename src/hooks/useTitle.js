import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Asset Management`;
  }, [title]);
};

export default useTitle;
