import React from "react";

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<T extends React.ElementType, Props = {}> =
  React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type ElemProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  { className?: string }
>;

export default ElemProps;