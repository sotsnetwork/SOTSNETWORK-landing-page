"use client"

import type React from "react"

const OneClickIntegrationsIllustration: React.FC = () => {
  const themeVars = {
    "--integrations-primary-color": "hsl(var(--primary))",
    "--integrations-background-color": "hsl(var(--background))",
    "--integrations-text-color": "hsl(var(--foreground))",
    "--integrations-border-color": "hsl(var(--border))",
  }

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
      aria-label="One-click integrations interface showing various service logos and connection status"
    >
      {/* Integration Grid */}
      <div className="grid grid-cols-4 gap-4 p-6">
        {/* Row 1 */}
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🔗</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">💡</span>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🔧</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🎯</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          Connected
        </div>
      </div>
    </div>
  )
}

export default OneClickIntegrationsIllustration
