import { useState, useEffect } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import CronSchedule from './components/CronSchedule'
import { initialProjects, initialCronJobs } from './data/initialData'

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('agentProjects')
    return saved ? JSON.parse(saved) : initialProjects
  })
  
  const [cronJobs, setCronJobs] = useState(() => {
    const saved = localStorage.getItem('cronJobs')
    return saved ? JSON.parse(saved) : initialCronJobs
  })

  useEffect(() => {
    localStorage.setItem('agentProjects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem('cronJobs', JSON.stringify(cronJobs))
  }, [cronJobs])

  const handleAddComment = (projectId, comment) => {
    setProjects(prev => prev.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          comments: [...project.comments, {
            id: Date.now(),
            text: comment,
            author: 'Marco',
            timestamp: new Date().toISOString()
          }]
        }
      }
      return project
    }))
  }

  const handleStatusChange = (projectId, newStatus) => {
    setProjects(prev => prev.map(project => {
      if (project.id === projectId) {
        return { ...project, status: newStatus }
      }
      return project
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'working': return '#22c55e'
      case 'complete': return '#3b82f6'
      case 'blocked': return '#ef4444'
      case 'idle': return '#6b7280'
      default: return '#6b7280'
    }
  }

  const workingCount = projects.filter(p => p.status === 'working').length
  const completeCount = projects.filter(p => p.status === 'complete').length
  const blockedCount = projects.filter(p => p.status === 'blocked').length

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🎯 Agent Control Center</h1>
          <p>Monitor all agents and scheduled jobs in one place</p>
        </div>
      </header>

      <main className="main">
        <section className="stats-section">
          <div className="stat-card working">
            <span className="stat-number">{workingCount}</span>
            <span className="stat-label">Working</span>
          </div>
          <div className="stat-card complete">
            <span className="stat-number">{completeCount}</span>
            <span className="stat-label">Complete</span>
          </div>
          <div className="stat-card blocked">
            <span className="stat-number">{blockedCount}</span>
            <span className="stat-label">Blocked</span>
          </div>
          <div className="stat-card total">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Total Projects</span>
          </div>
        </section>

        <section className="projects-section">
          <h2>🤖 Active Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onAddComment={handleAddComment}
                onStatusChange={handleStatusChange}
                statusColor={getStatusColor(project.status)}
              />
            ))}
          </div>
        </section>

        <section className="cron-section">
          <h2>⏰ Scheduled Jobs</h2>
          <CronSchedule jobs={cronJobs} />
        </section>
      </main>

      <footer className="footer">
        <p>Agent Control Center • Built by Carl • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
