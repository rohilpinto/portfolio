"use client";

import Spline, { SplineProps } from "@splinetool/react-spline";

export default function SplineAnimation({ ...props }: SplineProps) {
  return <Spline {...props} />;
}
