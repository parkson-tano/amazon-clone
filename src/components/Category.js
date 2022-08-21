import React from 'react'

function Category({ title, image }) {
  return (
    <div className="mt-3">
      <div class="card p-3 h-200" style={{ height: "28rem" }}>
        <p className="text-xl font-bold text-left mb-2 ">{title}</p>
        <img className="h-200" src={image} style={{ height: "25rem" }} />
        <p class="text-left mt-3">Shop now</p>
      </div>
    </div>
  );
}

export default Category