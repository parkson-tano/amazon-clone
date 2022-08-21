import React from 'react'

function Prefooter() {
  return (
    <div className="container-fluid w-100 mt-5">
      <div className="bg-light">
        <div style={{ border: "1px black" }}>
          <div className="flex mt-3">
            <div className="col-10 p-3">
              <p className="italic text-sm text-left">
                After viewing product detail pages, look here to find an easy
                way to navigate back to pages you are interested in
              </p>
            </div>

            <div className="col-2 p-3">
              <button>
                <a className="text-justify text-xs p-4 text-wrap">
                  View or edit your browsing history
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 p-2 mt-3 mb-3">
        <button>
          <a href="#navbar" className="text-white hover:text-white">
            Back to top
          </a>
        </button>
      </div>
    </div>
  );
}

export default Prefooter