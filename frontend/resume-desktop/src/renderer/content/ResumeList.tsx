import styles from './ResumeList.module.css';

export default function ResumeList({
  marginLeft = 0,
  title = 'List of Resumes',
  resumes = [],
  buttonText = 'Load',
  selectResume,
  deleteResume = () => {},
}) {
  return (
    <div style={{ marginLeft }} className={styles.wrapper}>
      <h1>{title}</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th>Name</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => (
            <tr>
              <td>{resume.name}</td>
              <td>{resume.lastModified.toTimeString()}</td>
              <td>
                {resume.downloaded ? (
                  <button onClick={() => deleteResume(resume)}>Delete</button>
                ) : (
                  <button onClick={() => selectResume(resume)}>
                    {buttonText}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {resumes.length === 0 && `${title} is empty!`}
    </div>
  );
}
