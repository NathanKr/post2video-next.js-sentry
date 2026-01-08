<h1>Project Name</h1>
  Next.js + Sentry: Production Error Monitoring for Post2Video


<h2>Project Description</h2>
Building production error alerts for a Next.js micro-SaaS: how I evaluated and integrated Sentry for real-time error awareness. Includes the working demo I used to test the integration before deploying it to Post2Video.


<h2>Motivation</h2>

<p>
A user successfully signed up on post2video.com but failed onboarding due to a production error.
The error was logged, but no alert was triggered — so I didn’t know about it.
</p>

<p>
This highlighted a gap in my production setup:
logs existed, but there was no real-time error awareness.
</p>

<p>
The goal was to design a simple, free, and reliable alerting system for a Next.js micro-SaaS.
</p>



<h2>Key Takeaways</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>Installation</h2>

Step 1: Install the Dependency

```bash
pnpm add @sentry/nextjs 
```

Step 2: Run the Initialization

```bash
pnpm dlx @sentry/wizard@latest -i nextjs
```

You are prompots for questions : 

<img src='./figs/prompt-after-step2-partA.png'/>

The browser in open so fill the info

<img src='./figs/prompt-after-step2-partB-filled.png'/>

click the 'create youtr account' button and you are navigated to select yout project

<img src='./figs/prompt-after-step2-partB-select-your-project.png'/>


Click continue  => i got 'waiting for wizard to connect'

<img src='./figs/waiting-to-connect.png'/>

i used email password so need to confirm email and got

<img src='./figs/emailed-confirmed.png'/>

Now in sentry i can see the project

<img src='./figs/projects.png'>

but no files created . Because i chose to log in with an email/password, you had the extra step of confirming your email. This sometimes causes the browser session to "lose track" of the original terminal request. 


### 🛠️ Installation Troubleshooting: Manual CLI Initialization

If the automated Sentry wizard hangs or fails to generate local files (for example, after logging in via email/password), you can bypass the browser step using an **Auth Token**.

### 1. Generate an Auth Token

1. Log in to [Sentry.io](https://sentry.io/).  
2. Click **Settings** (gear icon) in the left sidebar.  
3. Under the **Developer Settings** section, click **Organization Tokens**.  
4. Click **Create New Token**.  
5. **Name:** Enter `post2video-cli-token`.  
6. Click **Create Token** and copy the string immediately (it starts with `sntrys_`).


> **Note:** Sentry only shows the full token once for security. If you lose it, you will need to delete it and create a new one.

step 1
<img src='./figs/create-new-token.png'>

step 2
<img src='./figs/create-organization-token.png'/>

step 3
<img src='./figs/copy-token.png'/>

step 4 
<img src='./figs/token-created.png'/>

#### 2. Run the Wizard with the Auth Token

```bash
pnpm dlx @sentry/wizard@latest -i nextjs --auth-token YOUR_TOKEN_HERE
```

the result is

```bash
  Sentry Next.js Wizard 
│
◇   ────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                   │
│  The Sentry Next.js Wizard will help you set up Sentry for your application.                      │
│  Thank you for using Sentry :)                                                                    │
│                                                                                                   │
│  Version: 6.10.0                                                                                  │
│                                                                                                   │
│  This wizard sends telemetry data and crash reports to Sentry. This helps us improve the Wizard.  │
│  You can turn this off at any time by running sentry-wizard --disable-telemetry.                  │
│                                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Are you using Sentry SaaS or self-hosted Sentry?
│  Sentry SaaS (sentry.io)
│
◇  Do you already have a Sentry account?
│  Yes
│
●  If the browser window didn't open automatically, please open the following link to log into Sentry:
│
│  https://sentry.io/account/settings/wizard/3ktx6epxby3zsttya4eupzqivy5du7yhusld7kcyib23mxv1eu5bvpm7fni1xuxw/?project_platform=javascript-nextjs
│
◇  Login complete.
│
◇  Selected project nathan-krasney/javascript-nextjs
│
◇  The @sentry/nextjs package is already installed. Do you want to update it to the latest version?
│  No
│
◇  Do you want to route Sentry requests in the browser through your Next.js server to avoid ad blockers?
│  Yes
│
◇  Do you want to enable Tracing to track the performance of your application?
│  Yes
│
◇  Do you want to enable Session Replay to get a video-like reproduction of errors during a user session?
│  Yes
│
◇  Do you want to enable Logs to send your application logs to Sentry?
│  Yes
│
◆  Created fresh sentry.server.config.ts.
│
◆  Created fresh sentry.edge.config.ts.
│
◆  Added new src\instrumentation.ts file.
│
◆  Added new src\instrumentation-client.ts file.
│
◆  Added Sentry configuration to next.config.ts. (you probably want to clean this up a bit!)
│
◆  Created src\app\global-error.tsx.
│
◇  Do you want to create an example page ("/sentry-example-page") to test your Sentry setup?
│  Yes
│
◆  Created src\app\sentry-example-page\page.tsx.
│
◆  Created src\app\api\sentry-example-api\route.ts.
│
◆  Created .env.sentry-build-plugin with auth token for you to test source map uploading locally.
│
◆  Added .env.sentry-build-plugin to .gitignore.
│
◇  Are you using a CI/CD tool to build and deploy your application?
│  Yes
│
◇  Add the Sentry authentication token as an environment variable to your CI setup:
◆  Added .env.sentry-build-plugin to .gitignore.
│
◇  Are you using a CI/CD tool to build and deploy your application?
│  Yes
│
◇  Add the Sentry authentication token as an environment variable to your CI setup:
│
◇  Are you using a CI/CD tool to build and deploy your application?
│  Yes
│
◇  Add the Sentry authentication token as an environment variable to your CI setup:

◇  Are you using a CI/CD tool to build and deploy your application?
│  Yes
│
◇  Add the Sentry authentication token as an environment variable to your CI setup:

│  Yes
│
◇  Add the Sentry authentication token as an environment variable to your CI setup:

│
◇  Add the Sentry authentication token as an environment variable to your CI setup:

◇  Add the Sentry authentication token as an environment variable to your CI setup:


SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxxxx


│
▲  DO NOT commit this auth token to your repository!
│
▲  DO NOT commit this auth token to your repository!
│
│
◇  Did you configure CI as shown above?
│  I'll do it later...
│
●  Don't forget! :)
│
◇  Optionally add a project-scoped MCP server configuration for the Sentry MCP?
│  No
│
└
Successfully installed the Sentry Next.js SDK!

You can validate your setup by (re)starting your dev environment (e.g. pnpm dev) and visiting "/sentry-example-page"

If you encounter any issues, let us know here: https://github.com/getsentry/sentry-javascript/issues
```

### Files Created After Successful Installation

  The Sentry wizard creates these files in your project:

  1. **`sentry.client.config.ts`** - Browser-side Sentry initialization
  2. **`sentry.server.config.ts`** - Server-side Sentry initialization
  3. **`sentry.edge.config.ts`** - Edge runtime error handling
  4. **`instrumentation.ts`** - Registers Sentry before Next.js starts (critical for server errors)
  5. **`next.config.ts`** - Modified with `withSentryConfig()` wrapper
  6. **`.env.sentry-build-plugin`** - Auth token (auto-added to `.gitignore`)

  **Note:** Files 1-4 will be in `src/` if you use that directory structure, otherwise in project root.

<h2>Usage</h2>
....


<h2>Technologies Used</h2>

- next.js
- digital ocean droplet
- ubuntu
- micro saas
- winston
- pm2 
- nginx
- UptimeRobot


## Monitoring Design

### Constraints
- Tool must be free
- Must fit existing tech stack (Next.js, DigitalOcean, Ubuntu)
- Most business logic runs on the server

### Evaluated Alerting Options
| Option | Type | Pros | Cons | Decision |
|--------|------|------|------|----------|
| Custom Alerts (Winston + Webhooks) | Self-built | Full control, no vendor lock-in | High maintenance, no error grouping, alert noise | Rejected |
| Self-hosted Error Tracker (GlitchTip) | Open-source | Full data ownership, Sentry-compatible | Requires hosting, scaling, backups | Rejected |
| Paid APM Tools (Datadog, New Relic) | SaaS | Powerful observability | Paid, overkill for micro-SaaS | Rejected |
| **Sentry** | SaaS | Free tier alerts, Next.js support, automatic grouping | Free tier: 5K events/month | **Chosen** |

**Why Sentry?** While the free tier has a 5K events/month limit, the tradeoff favors Sentry at micro-SaaS scale. Expected error volume for <100 DAU with ~1% error rate is 600-1.2K events/month (well within limits). The automatic error grouping and Next.js integration eliminate the maintenance burden of custom solutions, and no infrastructure management beats self-hosted options for a solo developer.

### Error Monitoring Strategy

**Approach:** Layered error detection – complementary defenses

| Layer | Tool | Role (Real) | Can Alert on Error? |
|-------|------|-------------|---------------------|
| **Application** | **Sentry SDK** | Alerts on: (1) thrown exceptions, (2) errors explicitly sent via SDK | **Yes – via Sentry alert rules** |
| **Application (handled)** | Your code + Winston | Logs all errors, but requires webhook for alerts | No, unless **you build webhook** |      
| **Process** | **PM2** | Detect crash/OOM | Limited / usually custom script |

**Note:** Server availability monitored separately via Uptime Robot.


<h2>Code Structure</h2>
....

<h2>Demo</h2>
....

<h2>Points of Interest</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>References</h2>
<ul>
    <li>...</li>
   
</ul>

