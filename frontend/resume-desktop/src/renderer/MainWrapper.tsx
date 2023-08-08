import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './MainWrapper.module.css';
import Sidebar from './Sidebar.tsx';
import About from './content/About.tsx';
import Resume from './content/Resume.tsx';
import ResumeList from './content/ResumeList.tsx';

const sidebarWidth = 200;

const contentOptions = {
  resume: 'resume',
  local: 'local',
  hub: 'hub',
  about: 'about',
  issues: 'issues',
};

export default function MainWrapper() {
  const [localResumes, setLocalResumes] = React.useState([]);
  const [hubResumes, setHubResumes] = React.useState([
    // TODO: load these from backend
    {
      id: 123, // TODO: generate a unique ID server-side
      name: 'Simon David Pratt',
      lastModified: new Date('07 Aug 2023 15:26:42 MDT'),
      src: 'https://docs.google.com/document/d/e/2PACX-1vSJDLv_SUMCkkgJQUzInuSbnS0ubzOEu2hsVzIQOYyFf06R2d5WOykWH41GGb91cneVYhLzIxX3Ss6I/pub?embedded=true',
    },
  ]);
  const [selected, setSelected] = React.useState(contentOptions.about);
  const [resumeSrc, setResumeSrc] = React.useState('');
  const [prev, setPrev] = React.useState(contentOptions.about);

  const selectLocalResume = React.useCallback((resume) => {
    setPrev(contentOptions.local);
    setResumeSrc(resume.src);
    setSelected(contentOptions.resume);
  }, [selected]);

  const selectHubResume = React.useCallback((resume) => {
    toast(`Downloaded ${resume.name}'s Resume!  It will now appear in local resumes.`);
    setLocalResumes([...localResumes, resume]);
    setHubResumes(
      hubResumes.map((hubResume) =>
        hubResume.id === resume.id
          ? { ...hubResume, downloaded: true }
          : hubResume
      )
    );
  }, [selected]);

  const deleteHubResume = React.useCallback((resume) => {
    setLocalResumes(
      localResumes.filter((localResume) => localResume.id !== resume.id)
    );
    setHubResumes(
      hubResumes.map((hubResume) =>
        hubResume.id === resume.id
          ? { ...hubResume, downloaded: false }
          : hubResume
      )
    );
  }, [selected]);

  return (
    <>
      <Sidebar
        width={sidebarWidth}
        contentState={{
          contentOptions,
          selected,
          setSelected,
        }}
      />
      <div style={{ marginLeft: sidebarWidth }}>
      <ToastContainer />
      {selected === contentOptions.resume && (
        <Resume
          marginLeft={sidebarWidth}
          src={resumeSrc}
          prev={prev}
          setSelected={setSelected}
        />
      )}
      {selected === contentOptions.local && (
        <ResumeList
          marginLeft={sidebarWidth}
          title="Local Resumes"
          resumes={localResumes}
          selectResume={selectLocalResume}
        />
      )}
      {selected === contentOptions.hub && (
        <ResumeList
          marginLeft={sidebarWidth}
          title="Resume Hub"
          resumes={hubResumes}
          buttonText="Download"
          selectResume={selectHubResume}
          deleteResume={deleteHubResume}
        />
      )}
      {selected === contentOptions.about && <About marginLeft={sidebarWidth} />}
      </div>
    </>
  );
}
