import { useState } from "react"




export default function Homepage() {
  const { setAddMenuItem } = useState();

  let loading = () => {
    return <p>Loading Data</p>;
  };

  let loaded = () => {
      return (
          <menuItem key={setAddMenuItem._id} menu={setAddMenuItem} />
      );
  };

  return setAddMenuItem ? <div className="MenuGrid">{loaded()}</div> : loading();
}

