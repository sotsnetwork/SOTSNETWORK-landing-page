"use client"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full max-w-[1320px] mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SOTS Network Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events, workshops, and networking sessions. Connect with fellow developers and stay updated with the latest in AI & Web Solutions.
          </p>
        </div>
        
        {/* Events Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Upcoming Events
            </h2>
            
            {/* Luma Events Embed */}
            <div className="flex justify-center">
              <iframe
                src="https://lu.ma/embed/event/evt-0CAcBzgOmkXcWOB/simple"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
                title="SOTS Network Events"
                className="w-full max-w-[600px]"
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                Can't see the events? <a href="https://lu.ma/ifa2vwv1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Luma</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Why Attend Our Events?</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Network with industry professionals</li>
                <li>• Learn about the latest AI & Web technologies</li>
                <li>• Get hands-on experience with new tools</li>
                <li>• Connect with the SOTS Network community</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Stay Connected</h3>
              <p className="text-muted-foreground mb-4">
                Join our Discord community to get notified about upcoming events and connect with other members.
              </p>
              <a 
                href="https://discord.gg/STySgkqmbx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Join Discord Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
