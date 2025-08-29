/**
 * Returns the value of the promise that resolves first.
 * @param {Promise<any>} chinaDownload - The promise for China download.
 * @param {Promise<any>} USDownload - The promise for US download.
 * @returns {Promise<any>} The value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
