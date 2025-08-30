"use client"

import type React from "react"

const MCPConnectivityIllustration: React.FC = () => {
  const themeVars = {
    "--mcp-primary-color": "hsl(var(--primary))",
    "--mcp-background-color": "hsl(var(--background))",
    "--mcp-text-color": "hsl(var(--foreground))",
    "--mcp-border-color": "hsl(var(--border))",
  }

  const integrations = [
    "GitHub", "Slack", "Notion", "Figma", "Linear", "Discord"
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
      aria-label="MCP connectivity illustration showing integration connections"
    >
      {/* Search Bar */}
      <div className="p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="text-muted-foreground">🔍</span>
          </div>
        </div>
      </div>

      {/* Integration List */}
      <div className="px-6">
        <div className="space-y-2">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
              <span className="text-sm font-medium">{integration}</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Connection Status */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          {integrations.length} Services Connected
        </div>
      </div>
    </div>
  )
}

export default MCPConnectivityIllustration
