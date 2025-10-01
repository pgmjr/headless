import React from "react";
import HorizontalPosition from "@/types/atom/HorizontalPosition";

type ColumnProps = {
  [K in Exclude<HorizontalPosition, 'center'>]: React.ReactNode;
} & {
  center?: React.ReactNode;
};

export default ColumnProps;
