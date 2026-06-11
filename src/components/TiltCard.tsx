"use client";

import { useTilt } from "@/lib/use-tilt";

/** Contenedor con tilt 3D ligero al pasar el cursor. */
export default function TiltCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
