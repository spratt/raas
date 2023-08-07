import React from 'react';
import './MainWrapper.module.css';
import Sidebar from './Sidebar.tsx';
import About from './content/About.tsx';
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
      {selected === contentOptions.local && <Resume marginLeft={sidebarWidth} src="https://docs.google.com/document/d/e/2PACX-1vSJDLv_SUMCkkgJQUzInuSbnS0ubzOEu2hsVzIQOYyFf06R2d5WOykWH41GGb91cneVYhLzIxX3Ss6I/pub?embedded=true" />}
      {selected === contentOptions.about && <About marginLeft={sidebarWidth} />}
    </>
  );
}
