import React from 'react'
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex-1 text-2xl grid place-items-center">
    <FadeLoader
      color="#6b7280"
      loading={true}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loader
