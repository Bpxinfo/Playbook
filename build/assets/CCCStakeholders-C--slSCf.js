import{r as d,j as e}from"./index-D-XsZ_xs.js";const a={cccInternal:{title:"CCC Internal Groups",stakeholders:["CCC Leadership SteerCo","CCC Core Team","CCC Extended Team","CCC Project Leads"]},leadershipTeams:{title:"Leadership Teams",stakeholders:["Executive Leadership","USMA Oncology","PST"]},functionalPartners:{title:"Functional Partners",stakeholders:["PAQ","GPFIS","MM","Field Team","RWE","HEOR"]}},i={"CCC Leadership SteerCo":{description:"Definition of what SteerCo does. Functions included, what are their roles",deliverable:`Provide guidance and endorsement of strategy, objectives, messaging
Receive Updates`,priority:`Advise & Advocate
Provide direction and objectives to be executed`,method:"Slide Decks, Meetings",channels:`Bi-Monthly Meetings
Email Updates`},"CCC Core Team":{description:"Advisors to the CCC",deliverable:"Provide Input on Projects, Guidance, Guardrails",priority:"Lead & Execute the CCC",method:"Meetings, Discussion",channels:"Bi-Weekly"},"CCC Extended Team":{description:"Alignment across extended",deliverable:"Provide / Receive Information Updates",priority:"Informed & Consulted",method:"Meetings, Email Updates",channels:"Quarterly Meetings"},"CCC Project Leads":{description:"USMA Strategy, Lead, SEC, PAQ, GPFIS, MM",deliverable:"Provide Project Updates (milestones, risks, budget, spend, KPIs, Patient Impact data)",priority:"Lead and Execute Projects",method:"Meetings, Email Updates",channels:"Monthly"},"Executive Leadership":{description:`Michael (MALT)
Sandrine (SLT)
Johanna`,deliverable:"Receive Updates, Approve Budgets, Strategic Direction",priority:"Remove Roadblocks",method:"Deck, Meetings, Email Updates, Updates from CCC Leadership SteerCo",channels:"Bi-Annual"},"USMA Oncology":{description:`USMA Strategy
MSLs
SEC
Strategy & Operations`,deliverable:`Implementation and integration of CCC Strategy
Receive CCC updates`,priority:"Implement objectives",method:"Presentations and meetings on objectives",channels:`Program and team meetings
USMA SharePoint
Email
Instant Message`},PST:{description:"Program Strategy Team (lead by PSTs)",deliverable:`Receive indication specific updates, study updates via SC
Provide feedback on strategies`,priority:"Inform & Advise",method:"Meetings",channels:"Quarterly / as needed"},PAQ:{description:"Patient Assistance & Quality",deliverable:"Inform patients about PAQ, the services they provide and guide them through the application process",priority:"Help patients access medications and medical care they might otherwise be unable to afford",method:"Team meetings",channels:`Team meetings
Email
Instant Message
SharePoint`},GPFIS:{description:"Global Patient Focused Implementation Sciences",deliverable:"Involving patients more actively in their care",priority:`Enhancing Communication
Encouraging Active Participation in Care
Providing Support and Resources and priorities`,method:"Team meetings",channels:`Team meetings
Email
Instant Message
SharePoint
Internet web page?`},MM:{description:"Managed Markets",deliverable:`Receive Updates
Provide input per strategy, Implications for discussions with key external stakeholders`,priority:"Commercial Partner that connects to key external markets of National Accts, medicare NPO, includes Key Account Director KADs. Also focuses on reimbursement",method:"Slide Decks, Meetings, CCC Leadership SteerCo",channels:`Bi-Monthly Meetings
Email Updates
(Extended Team Quarterly, Project Team Monthly)`},"Field Team":{description:`KADs
MSLs
MVELs`,deliverable:"Interact with external professionals to discuss CCC but must follow Community Cancer collective (CCC) Legal & Compliance Guidance (May 29, 2024)",priority:"Review of CCC partnering plans and visit with external professionals",method:"Review/discuss published data and approved plans with external professionals",channels:`Team meetings
Email
Instant Message
SharePoint (MSLs)
Egnyto (MVELs)
P alert`},RWE:{description:"RWE in Medical Development",deliverable:"Support PAQ studies, OPRB point of contact",priority:"Medical Development focused, supports HEOR Value & Access",method:"Study Updates, Extended Team",channels:"Quarterly"},HEOR:{description:"HEOR in Commercial",deliverable:"Support PAQ studies, as needed",priority:"Value & Access",method:"Study Updates, Extended Team",channels:"Quarterly"}},c=()=>{const[s,r]=d.useState("cccInternal"),o=t=>{r(t)};return e.jsxs("div",{className:"p-4 mx-auto max-w-7xl",children:[e.jsx("h1",{className:"text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase",children:"CCC Stakeholders"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:Object.entries(a).map(([t,n])=>e.jsxs("button",{onClick:()=>o(t),className:`p-4 rounded-lg shadow-md transition-all ${s===t?"bg-red-800 text-white":"bg-white text-gray-900 hover:bg-gray-50"}`,children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:n.title}),e.jsxs("p",{className:"text-sm opacity-75",children:[n.stakeholders.length," stakeholders"]})]},t))}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl text-red-800 mb-4",children:a[s].title}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full table-auto border-collapse text-sm text-gray-700",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"CCC Groups"}),e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"Description"}),e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"Deliverable [Receive / Provide]"}),e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"Priority"}),e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"Method Communication"}),e.jsx("th",{className:"border px-4 py-2 text-left font-medium",children:"Communication Channels"})]})}),e.jsx("tbody",{children:a[s].stakeholders.map(t=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"border px-4 py-2 font-medium",children:t}),e.jsx("td",{className:"border px-4 py-2 whitespace-pre-line",children:i[t].description}),e.jsx("td",{className:"border px-4 py-2 whitespace-pre-line",children:i[t].deliverable}),e.jsx("td",{className:"border px-4 py-2 whitespace-pre-line",children:i[t].priority}),e.jsx("td",{className:"border px-4 py-2 whitespace-pre-line",children:i[t].method}),e.jsx("td",{className:"border px-4 py-2 whitespace-pre-line",children:i[t].channels})]},t))})]})})]})]})};export{c as default};
