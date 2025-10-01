export type FlatStrObj = Record<string, string>;
export type FlatStrArr = Array<Record<string, string>>;

export type NestedStrObj = Record<string, Record<string, string>>;
export type NestedStrArr = Record<string, FlatStrArr>;

export type BranchedStrObj = Record<string, string | FlatStrObj | NestedStrObj>;
export type BranchedStrArr = Record<string, string | FlatStrArr | NestedStrArr>;

export type MixedStrObjArr = Record<string, string | FlatStrObj | FlatStrArr | NestedStrObj | NestedStrArr | BranchedStrObj | BranchedStrArr>

export default BranchedStrObj;
