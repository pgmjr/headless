import React from "react";
import VerticalPosition from "@/types/atom/VerticalPosition";

type RowPropsMap = {
  [K in Exclude<VerticalPosition, 'middle'>]: React.ReactNode;
} & {
  middle?: React.ReactNode;
};

export default RowPropsMap;
