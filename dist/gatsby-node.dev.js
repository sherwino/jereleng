"use strict";

var _ = require("lodash");

var path = require("path");

var _require = require("gatsby-source-filesystem"),
    createFilePath = _require.createFilePath;

var _require2 = require("gatsby-remark-relative-images"),
    fmImagesToRelative = _require2.fmImagesToRelative;

exports.createPages = function (_ref) {
  var actions = _ref.actions,
      graphql = _ref.graphql;
  var createPage = actions.createPage;
  return graphql("\n    {\n      allMarkdownRemark(limit: 1000) {\n        edges {\n          node {\n            id\n            fields {\n              slug\n            }\n            frontmatter {\n              tags\n              templateKey\n            }\n          }\n        }\n      }\n    }\n  ").then(function (result) {
    if (result.errors) {
      result.errors.forEach(function (e) {
        return console.error(e.toString());
      });
      return Promise.reject(result.errors);
    }

    var posts = result.data.allMarkdownRemark.edges;
    posts.forEach(function (edge) {
      console.log({
        node: edge.node.frontmatter
      });
      var id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve("src/templates/".concat(String(edge.node.frontmatter.templateKey), ".js")),
        // additional data can be passed via context
        context: {
          id: id
        }
      });
    }); // Tag pages:

    var tags = []; // Iterate through each post, putting all found tags into `tags`

    posts.forEach(function (edge) {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    }); // Eliminate duplicate tags

    tags = _.uniq(tags); // Make tag pages

    tags.forEach(function (tag) {
      var tagPath = "/tags/".concat(_.kebabCase(tag), "/");
      createPage({
        path: tagPath,
        component: path.resolve("src/templates/tags.js"),
        context: {
          tag: tag
        }
      });
    });
  });
};

exports.onCreateNode = function (_ref2) {
  var node = _ref2.node,
      actions = _ref2.actions,
      getNode = _ref2.getNode;
  var createNodeField = actions.createNodeField;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === "MarkdownRemark") {
    var value = createFilePath({
      node: node,
      getNode: getNode
    });
    createNodeField({
      name: "slug",
      node: node,
      value: value
    });
  }
};