import React from 'react'

function Menubar(props) {
  return (
    <div>
      <nav className="flex bg-slate-700">
        {[
          ["All", "/dashboard"],
          ["Todays's Deal", "/team"],
          ["Gift Cards", "/projects"],
          ["Buy Again", "/reports"],
          ["Customer Service", "/dashboard"],
          [`${props.username}'s Amazon.com`, "/team"],
          ["Registry", "/projects"],
          ["Sell", "/reports"],
          ["Browsing History"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-2 py-2 text-small text-slate-100 hover:text-slate-200"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Menubar