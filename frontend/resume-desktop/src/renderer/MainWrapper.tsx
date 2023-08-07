import './MainWrapper.module.css';
import Sidebar from './Sidebar.tsx';
import Content from './Content.tsx';

const sidebarWidth = 200;

export default function MainWrapper() {
  return (
    <>
      <Sidebar width={sidebarWidth} />
      <Content marginLeft={sidebarWidth} />
    </>
  );
}
