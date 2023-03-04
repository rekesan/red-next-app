import { AnimationEventHandler } from "react";

const PaintBrush = (props: PaintBrushProps) => {
  const path =
    "M192 64L160 0H128L96 64 64 0H48C21.5 0 0 21.5 0 48V256H384V48c0-26.5-21.5-48-48-48H224L192 64zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z";
  const viewBox = "0 0 384 512";

  const { svgClassName, pathClassName, onAnimationEnd } = props;

  return (
    <svg
      viewBox={viewBox}
      className={svgClassName}
      onAnimationEnd={onAnimationEnd}
    >
      <path d={path} className={pathClassName} />
    </svg>
  );
};

interface PaintBrushProps {
  svgClassName?: string | undefined;
  pathClassName?: string | undefined;
  onAnimationEnd?: AnimationEventHandler<SVGSVGElement> | undefined;
}

export default PaintBrush;
