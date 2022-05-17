import React from "react";
import Link from "next/link";

function SkillList(props) {

  var path = [{
    title: "Component",
    detail: [{ name: "Component, PureComponent", url: '/lifecycle/class' }]
  }, {
    title: "Hooks",
    detail: [{ name: "useState, useEffect", url: '/lifecycle/hooks' },
    { name: "useMemo", url: '/usememo' },
    { name: "useCallback", url: '/usecallback' },
    { name: "custom hook", url: '/customhook' }]
  }, {
    title: "Handling web events",
    detail: [{ name: "event", url: '/event' }]
  }, {
    title: "Conditional & Loop Rendering",
    detail: [{ name: "condition", url: '/condition' },
    { name: "loop", url: '/loop' }]
  }, {
    title: "Routing",
    detail: [{ name: "Dynamic Routes", url: '/routing' }]
  },]

  return (
    <>
      <h1>{props.children}</h1>
      <ul>
        {path.map((item, idx) =>
          <li key={idx}>
            {idx + 1} {item.title}
            <ul>
              {item.detail.map((items, idxs) =>
                <li key={idxs}>
                  <Link href={items.url}>{items.name}</Link>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}

export default SkillList;
