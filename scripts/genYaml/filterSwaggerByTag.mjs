/**
 * Filter out paths that have operations with specified tags.
 *
 * @param {Object} swaggerData - The Swagger data object.
 * @param {Array<string>} tagsToExclude - The tags to exclude.
 * @return {void}
 */
export function filterSwaggerByTag(swaggerData, tagsToExclude) {
  const filteredPaths = {};
  for (const path in swaggerData.paths) {
    for (const method in swaggerData.paths[path]) {
      const operation = swaggerData.paths[path][method];

      // Check if the operation's tags do NOT include any excluded tags
      if (
        !operation.tags ||
        !operation.tags.some((tag) => tagsToExclude.includes(tag))
      ) {
        filteredPaths[path] = { ...swaggerData.paths[path] }; // Deep copy
        break; // Include the entire path if one operation passes
      }
    }
  }
  swaggerData.paths = filteredPaths;
}
