import * as React from "react";
import { AuthPage as MUIAuthPage, AuthProps } from "@pankod/refine-mui";

import { useRouterContext } from "@pankod/refine-core";

const authWrapperProps = {
  style: {
    background: "#3f3b3b",
    backgroundSize: "cover",
  },
};

const renderAuthContent = (content: React.ReactNode) => {
  const { Link } = useRouterContext();

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      {content}
    </div>
  );
};

export const AuthPage: React.FC<AuthProps> = ({ type, formProps }) => {
  return (
    <MUIAuthPage
      type={type}
      wrapperProps={authWrapperProps}
      renderContent={renderAuthContent}
      formProps={formProps}
    />
  );
};
