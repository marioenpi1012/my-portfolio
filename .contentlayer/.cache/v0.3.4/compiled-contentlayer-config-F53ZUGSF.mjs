// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var projectComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `/projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    time: { type: "string", required: true },
    description: { type: "string", required: true },
    url: { type: "string", required: true },
    repository: { type: "string", required: true }
  },
  computedFields: projectComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Project]
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-F53ZUGSF.mjs.map
