import React from 'react';
import './MainWrapper.module.css';
import Sidebar from './Sidebar.tsx';
import Content from './Content.tsx';
import About from './content/About.tsx';

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
      {selected === contentOptions.about && <About marginLeft={sidebarWidth} />}
    </>
  );
}
