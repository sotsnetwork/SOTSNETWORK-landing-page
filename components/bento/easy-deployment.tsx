"use client"

import type React from "react"

const EasyDeployment: React.FC = () => {
  const themeVars = {
    "--deployment-primary-color": "hsl(var(--primary))",
    "--deployment-background-color": "hsl(var(--background))",
    "--deployment-text-color": "hsl(var(--foreground))",
    "--deployment-text-dark": "hsl(var(--primary-foreground))",
    "--deployment-border-color": "hsl(var(--border))",
    "--deployment-border-main": "hsl(var(--foreground) / 0.1)",
    "--deployment-highlight-primary": "hsl(var(--primary) / 0.12)",
    "--deployment-highlight-header": "hsl(var(--accent) / 0.2)",
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
      aria-label="Easy Deployment interface showing deployment options and status"
    >
      {/* Background Message Box (Blurred) */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%) scale(0.9)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--deployment-background-color) 0%, transparent 100%)",
          opacity: 0.6,
          borderRadius: "8.826px",
          border: "0.791px solid var(--deployment-border-color)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "9.562px",
              lineHeight: "14.711px",
              letterSpacing: "-0.2942px",
              color: "hsl(var(--muted-foreground))",
              width: "100%",
              maxWidth: "320px",
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>deploy:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>  provider: vercel</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>  environment:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>    production:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      url: ${{ secrets.PROD_URL }}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      branch: main</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>    staging:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      url: ${{ secrets.STAGING_URL }}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      branch: develop</p>
          </div>
        </div>
      </div>

      {/* Foreground Message Box (Main) */}
      <div
        style={{
          position: "absolute",
          top: "51.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--deployment-background-color) 0%, transparent 100%)",
          borderRadius: "8.826px",
          border: "0.791px solid var(--deployment-border-main)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
          boxShadow:
            "0px 52.186px 14.233px rgba(0, 0, 0, 0), 0px 33.209px 12.651px rgba(0, 0, 0, 0.01), 0px 18.977px 11.07px rgba(0, 0, 0, 0.05), 0px 7.907px 7.907px rgba(0, 0, 0, 0.09), 0px 1.581px 2.372px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--deployment-text-color)",
              width: "100%",
              maxWidth: "320px",
              position: "relative",
              zIndex: 2,
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>deploy:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>  provider: vercel</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>  environment:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>    production:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      url: ${{ secrets.PROD_URL }}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      branch: main</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>    staging:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      url: ${{ secrets.STAGING_URL }}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>      branch: develop</p>
          </div>
          <button
            style={{
              position: "absolute",
              top: "calc(50% + 29.745px)",
              right: "20px",
              transform: "translateY(-50%)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3.953px",
              background: "var(--deployment-primary-color)",
              color: "var(--deployment-text-dark)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "3.163px 6.326px",
              borderRadius: "5.535px",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              boxShadow:
                "0px 26.093px 7.116px rgba(0, 0, 0, 0), 0px 16.605px 6.326px rgba(0, 0, 0, 0.01), 0px 9.488px 5.535px rgba(0, 0, 0, 0.05), 0px 3.953px 3.953px rgba(0,0, 0, 0.09), 0px 0.791px 2.372px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              Get Support
            </span>
            <span
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 500,
              }}
            >
              ⌘D
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EasyDeployment
