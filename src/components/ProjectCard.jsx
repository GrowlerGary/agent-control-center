import { useState } from 'react'

function ProjectCard({ project, onAddComment, onStatusChange, statusColor }) {
  const [newComment, setNewComment] = useState('')
  const [showComments, setShowComments] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      onAddComment(project.id, newComment.trim())
      setNewComment('')
    }
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'working': return '⚡'
      case 'complete': return '✅'
      case 'blocked': return '🔴'
      case 'idle': return '⏸️'
      default: return '⏸️'
    }
  }

  const getAgentEmoji = (agent) => {
    const emojis = {
      'Donut': '🍩',
      'Carl': '🔧',
      'Imani': '🏠',
      'Ellie': '🔍',
      'Gary': '🤖'
    }
    return emojis[agent] || '🤖'
  }

  return (
    <div className="project-card" style={{ borderLeftColor: statusColor }}>
      <div className="project-header">
        <div className="project-agent">
          <span className="agent-emoji">{getAgentEmoji(project.agent)}</span>
          <span className="agent-name">{project.agent}</span>
        </div>
        <div className="project-status" style={{ backgroundColor: `${statusColor}20`, color: statusColor }}>
          <span>{getStatusIcon(project.status)}</span>
          <select 
            value={project.status} 
            onChange={(e) => onStatusChange(project.id, e.target.value)}
            className="status-select"
          >
            <option value="idle">Idle</option>
            <option value="working">Working</option>
            <option value="complete">Complete</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-task">{project.task}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta">
          {project.startTime && (
            <span className="meta-item">
              🕐 Started: {formatTime(project.startTime)}
            </span>
          )}
          {project.eta && (
            <span className="meta-item">
              ⏳ ETA: {project.eta}
            </span>
          )}
        </div>
      </div>

      <div className="project-comments">
        <button 
          className="comments-toggle"
          onClick={() => setShowComments(!showComments)}
        >
          💬 Comments ({project.comments.length})
        </button>

        {showComments && (
          <div className="comments-section">
            <div className="comments-list">
              {project.comments.length === 0 ? (
                <p className="no-comments">No comments yet</p>
              ) : (
                project.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{formatTime(comment.timestamp)}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="comment-input"
              />
              <button type="submit" className="comment-submit">Post</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
