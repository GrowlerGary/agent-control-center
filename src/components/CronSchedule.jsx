function CronSchedule({ jobs }) {
  const formatNextRun = (nextRun) => {
    return new Date(nextRun).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return '🟢'
      case 'paused': return '⏸️'
      case 'error': return '🔴'
      default: return '⚪'
    }
  }

  return (
    <div className="cron-table-wrapper">
      <table className="cron-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Job Name</th>
            <th>Schedule</th>
            <th>Next Run</th>
            <th>Last Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td className="status-cell">
                <span className="status-icon">{getStatusIcon(job.status)}</span>
              </td>
              <td className="name-cell">
                <strong>{job.name}</strong>
                <span className="agent-tag">{job.agent}</span>
              </td>
              <td className="schedule-cell">{job.schedule}</td>
              <td className="next-run-cell">{formatNextRun(job.nextRun)}</td>
              <td className="last-run-cell">
                <span className={`last-status ${job.lastRunStatus}`}>
                  {job.lastRunStatus === 'success' ? '✅ Success' : 
                   job.lastRunStatus === 'failed' ? '❌ Failed' : 
                   job.lastRunStatus === 'pending' ? '⏳ Pending' : '—'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CronSchedule
