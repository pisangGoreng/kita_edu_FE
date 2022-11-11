import React from "react"

export default function Button({
  title,
  className,
  titleColor,
  backgroundColor,
}) {
  return (
    <button
      className={`px-4 py-2 border border-blue-ocean text-blue-ocean rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0 ${className} ${backgroundColor}`}
    >
      <p className={titleColor}>{title}</p>
    </button>
  )
}
