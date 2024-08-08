import React from "react";
import LoadingIcon from "../../Assets/bars_loading.svg";

const Loader = () => {

  return (
      <div className="text-center">
        <img src={LoadingIcon} alt="Loading..."/>
      </div>
  )
}

export default Loader
