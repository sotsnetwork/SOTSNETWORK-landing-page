"use client"

import type React from "react"

const ParallelAgents: React.FC = () => {
  const themeVars = {
    "--agents-primary-color": "hsl(var(--primary))",
    "--agents-background-color": "hsl(var(--background))",
    "--agents-text-color": "hsl(var(--foreground))",
    "--agents-border-color": "hsl(var(--border))",
  }

  const agents = [
    { id: 1, name: "Website Design", status: "Active", progress: 75 },
    { id: 2, name: "AI Integration", status: "Active", progress: 60 },
    { id: 3, name: "Testing", status: "Pending", progress: 0 },
    { id: 4, name: "Deployment", status: "Pending", progress: 0 },
  ]

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        ...themeVars,
      } as React.CSSProperties}
      role="img"
      aria-label="Parallel agents interface showing multiple AI agents working simultaneously"
    >
      {/* Agents Grid */}
      <div className="grid grid-cols-2 gap-4 p-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">{agent.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                agent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {agent.status}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${agent.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{agent.progress}% complete</p>
          </div>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {agents.filter(a => a.status === 'Active').length} Agents Running
        </div>
      </div>
    </div>
  )
}

export default ParallelAgents
