import React from 'react'

function GroupCategory({title, img1, title1, img2, title2, img3, title3, img4, title4, s1,s2,s3,s4}) {
    const col1 = `col-${s1}`
    const col2 = `col-${s2}`;
    const col3 = `col-${s3}`;
    const col4 = `col-${s4}`;
  return (
    <div className="mt-3">
      <div class="card p-3" style={{ height: "28rem" }}>
        <p className="text-xl font-bold text-left mb-2">{title}</p>
        <div className="row">
          <div className={col1}>
            <div className="card border-0 bg-slate-100">
              <img src={img1} style={{ height: "10rem" }} />
              <p class="text-left text-sm font-semibold">{title1}</p>
            </div>
          </div>
          <div className={col2}>
            <div className="card border-0 bg-slate-100 mt-2">
              <img src={img2} style={{ height: "7rem" }} />
              <p class="text-left text-sm font-semibold">{title2}</p>
            </div>
          </div>
          <div className={col3}>
            <div className="card border-0 bg-slate-100 mt-2">
              <img src={img3} style={{ height: "7rem" }} />
              <p class="text-left text-sm font-semibold">{title3}</p>
            </div>
          </div>
          <div className={col4}>
            <div className="card border-0 bg-slate-100 mt-2">
              <img src={img4} style={{ height: "7rem" }} />
              <p class="text-left text-sm font-semibold">{title4}</p>
            </div>
          </div>
          <p class="text-left mt-3">Shop now</p>
        </div>
      </div>
    </div>
  );
}

export default GroupCategory