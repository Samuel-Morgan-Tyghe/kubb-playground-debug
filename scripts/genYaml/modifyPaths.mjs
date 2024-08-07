/**
 * Utility function to recursively append "v2" to paths
 * @param {Object} swaggerData - The Swagger data object
 */
export function modifyPaths(swaggerData) {
  // eslint-disable-next-line no-prototype-builtins
  if (swaggerData.hasOwnProperty("paths")) {
    // Create a new object to store the modified paths
    const newPaths = {};
    // Iterate over each path in the swaggerData object
    for (const key in swaggerData.paths) {
      // Append '/v2' at the start of each path key
      newPaths[`/v2${key}`] = swaggerData.paths[key];
    }
    // Assign the modified paths back to the 'paths' property
    swaggerData.paths = newPaths;
  } else {
    // Recursively process all objects to find nested 'paths'
    for (const key in swaggerData) {
      if (typeof swaggerData[key] === "object" && swaggerData[key] !== null) {
        modifyPaths(swaggerData[key]);
      }
    }
  }
}
