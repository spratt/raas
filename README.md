# Resume-As-A-Service

Resume-As-A-Service is a simple demonstration of various frontend and
backend technologies to provide a very simple cloud service (with
native desktop app) to serve resumes.

## Frontend (Resume Desktop)

The frontend of Resume-As-A-Service, also called Resume Desktop, is a
native desktop app that can create, read, and update resumes using
Google Docs and can even load other peoples' resumes from a backend
service in the cloud, as explained in the next section.

Resume Desktop is built using the following technologies:

1. Electron
2. React
3. TypeScript

## Backend (Resume Hub)

The backend of Resume-As-A-Service, also called Resume Hub, is a
simple service that lists existing resumes and allows pulling them
down to Resume Desktop.

The technologies used in the backend are:

1. Go

The backend is deliberately simple, mainly since I am quite familiar
with Go development and had greater need to practice my frontend
skills.