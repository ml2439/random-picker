import React from "react";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>PAGE NOT FOUND</h1>
    </Layout>
  );
};

export default NotFoundPage;
