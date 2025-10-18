# Write-In Manifesto Website

This is the website component of the Write-In Laws 50 States project, built with Next.js and originally created with [v0.app](https://v0.app).

[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/qxFUm5Fen9E)

## Overview

This website serves as the public face of the Write-In Revolution movement, featuring:
- Hero section with movement messaging
- Complete manifesto content
- Platform information
- About section
- Call-to-action components

## Development

To run the website in development mode:

```bash
# From the project root
npm run dev:website

# Or from the website directory
cd website
npm run dev
```

## Build

To build the website for production:

```bash
# From the project root
npm run build:website

# Or from the website directory
cd website
npm run build
```

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel (original)

## Project Structure

This website is part of the larger Write-In Laws 50 States repository, which includes:
- `/website/` - This Next.js website
- `/writein_pipeline/` - Python data pipeline for state law analysis
- `/data/states/` - State-specific write-in law documentation
