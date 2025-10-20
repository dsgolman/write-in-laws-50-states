export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Write-In Revolution</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A movement to replace the two-party system with a new paradigm of American leadership.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/manifesto" className="hover:text-accent transition-colors">
                  The Manifesto
                </a>
              </li>
              <li>
                <a href="/strategy" className="hover:text-accent transition-colors">
                  Political Strategy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dsgolman/write-in-laws-50-states"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  State-by-State Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Legal Framework
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Join the Movement
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://substack.com/@talkwithserenity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors"
                >
                  Newsletter (Substack)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2028 Write-In Revolution. A movement for the American soul.</p>
        </div>
      </div>
    </footer>
  )
}
