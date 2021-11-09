import React from "react";
import { useRouter } from "next/router";
import { PageView } from "./PageView";

const PageQuery = ({ page: Page, needQuery = false }) => {
  const { query } = useRouter();

  if (!needQuery) {
    return <Page />;
  }

  return <Page {...query} />;
};

export const PageWrapper = props => {
  return (
    <PageView>
      <PageQuery {...props} />
    </PageView>
  );
};
