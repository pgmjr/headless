import sriMap from '@/../sri-manifest.json';

const getHash: Record<string, string> = sriMap;

const FileHash = (filename: string) => {

  const hash: string = getHash[filename];

  return hash;

};

export default FileHash;
