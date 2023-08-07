import React from 'react';
import './MainWrapper.module.css';
import Sidebar from './Sidebar.tsx';
import About from './content/About.tsx';
import Issues from './content/Issues.tsx';
import Resume from './content/Resume.tsx';

const sidebarWidth = 200;

const contentOptions = {
  local: "local",
  hub: "hub",
  about: "about",
  issues: "issues",
};

export default function MainWrapper() {
  const [selected, setSelected] = React.useState(contentOptions.about);

  return (
    <>
      <Sidebar width={sidebarWidth} contentState={{
        contentOptions,
        selected,
        setSelected,
      }} />
      {selected === contentOptions.local && <Resume marginLeft={sidebarWidth} />}
      {selected === contentOptions.about && <About marginLeft={sidebarWidth} />}
      {selected === contentOptions.issues && <Issues marginLeft={sidebarWidth} />}
    </>
  );
}
