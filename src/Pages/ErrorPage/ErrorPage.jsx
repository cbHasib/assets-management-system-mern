import React from "react";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Page Not Found");

  return (
    <div class="flex w-full flex-justify-center flex-align-center h-screen">
      <span class="tracking-widest uppercase">404 | Not Found</span>
    </div>
  );
};

export default ErrorPage;
