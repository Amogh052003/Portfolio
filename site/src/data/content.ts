export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Devops Portfolio",
  subtitle: "Building scalable systems from code to cloud.",
  role: "DevOps & Cloud Engineer",
  updated: "Updated Apr 2026",
  highlights: [
    "Zero-manual Azure releases",
    "Security-first CI/CD pipelines",
    "Terraform-based governance",
    "Azure cloud development",
    "Hands-on Kubernetes orchestration",
    "Systems monitoring & observability fundamentals"
  ],
  contact: {
    email: "amoghlokhande505@gmail.com",
    phone: "+91 93800 22038",
    linkedin: "https://www.linkedin.com/in/amogh-lokhande-49b631332/",
    github: "https://github.com/Amogh052003",
  },
};

export const profileText =
  "Cloud & DevOps Engineer skilled in building, automating, and deploying cloud-native applications on Microsoft Azure. Hands-on experience with CI/CD pipelines, Kubernetes orchestration, infrastructure-as-code with Terraform, and containerization with Docker. Strong understanding of Azure compute, networking, storage, governance, and monitoring with a passion for reliability, secure deployments, and automation-driven delivery.";

export const skills = [
  {
    title: "Cloud Platforms",
    items:
      "Microsoft Azure (VMs, VNets, NSGs, App Services, AKS, Azure Functions, ACR, Blob Storage, Cosmos DB, Azure Monitor, Governance)",
  },
  {
    title: "DevOps & Automation",
    items:
      "Docker, Kubernetes, Helm, Jenkins, Terraform, Ansible, ArgoCD, Azure Devops"
  },
  {
    title: "Programming & Scripting",
    items: "Python, Bash, JavaScript, C++",
  },
  {
    title: "Tools & OS",
    items: "Git, GitHub, Linux, VS Code, Postman, FastAPI",
  },
  {
    title: "Other",
    items: "Networking fundamentals, CI/CD design, microservices deployment",
  },
];

export const stats = [
  { value: "<1", label: "Years Experience", hint: "Hands-on deployments" },
  { value: "3", label: "Cloud Platforms", hint: "Azure-first + others" },
  { value: "10+", label: "Projects Completed", hint: "Production + portfolio" },
  { value: "19+", label: "Technologies", hint: "Across DevOps + cloud" },
];

export const focusAreas = [
  {
    label: "Cloud-Native Delivery",
    detail: "Designing AKS + App Service architectures with resilient networking, governance, and monitoring.",
  },
  {
    label: "Secure DevOps Automation",
    detail: "Pipelines with SonarQube, Trivy, Nexus, and policy checks that gate deployments.",
  },
  {
    label: "Infrastructure as Code",
    detail: "Reusable Terraform modules for Azure VNet, compute fleets, and platform services.",
  },
];

export const interests = [
  "Platform reliability & SRE practices",
  "Security-focused CI/CD automation",
  "Developer experience for cloud-native teams",
  "Observability and Azure Monitor storytelling",
];

export const projects = [
  {
    name: "Cloud-Native DevOps CI/CD Pipeline",
    category: "DevOps",
    stack:
      "Jenkins · Docker · Kubernetes · Trivy · SonarQube · Nexus · Terraform · AKS · Azure",
    bullets: [
      "Built a production-grade automated pipeline covering build, test, scan, publish, image creation, push, and AKS deployment.",
      "Integrated SonarQube quality gates, Trivy image + filesystem scans, and Nexus artifact versioning.",
      "Provisioned Azure infrastructure via Terraform modules (VNet, NSG, public IPs, VMs, AKS) to enable zero-manual deployments with 65% faster release cadence.",
    ],
    link: "https://github.com/Amogh052003/CICD_Pipeline",
  },
  {
    name: "FluxGate — GitOps Blue-Green Deployment Platform",
    category: "DevOps",
    stack: "Jenkins · Docker · Kubernetes · ArgoCD · SonarQube · Prometheus · Terraform · AKS · Azure",
    bullets: [
      "Built a GitOps-driven blue-green deployment platform enabling safe, zero-downtime traffic switching on Kubernetes.",
      "Implemented CI with Jenkins and GitOps CD with Argo CD, eliminating direct cluster deployments and ensuring full auditability via Git.",
      "Developed a FastAPI control plane and dashboard to trigger traffic switches and monitor deployment health and metrics",
      "Integrated Prometheus monitoring for real-time visibility into pod count, CPU, and memory usage"
    ],
    link: "https://github.com/Amogh052003/flux-gate",
  },
  {
    name: "Serverless Log Processing Pipeline (AWS)",
    category: "CloudDevops",
    stack: "AWS Lambda · S3 · SQS · Lambda · API Gateway · Terraform",
    bullets: [
      "Built a serverless log processing pipeline on AWS using S3-triggered Lambda functions for automated ingestion and processing",
      "Designed an event-driven architecture with EventBridge and CloudWatch for orchestration, monitoring, and alerting",
      "Implemented structured log parsing to enable efficient analysis and reduce manual handling.",
    ],
    link: "https://github.com/Amogh052003/Serverless-Log-Processing-Pipeline",
  },
  {
    name: "Service Discovery System with Consul (Microservices + AWS + Docker)",
    category: "DevOps",
    stack: "AWS EC2 · Terraform · Docker · Docker Compose · Consul · Flask",
    bullets: [
      "Implemented dynamic service discovery using Consul for microservices deployed on AWS with Terraform and Docker.",
      "Built an API Gateway that routes requests to services registered in Consul without hardcoded IPs.",
      "Demonstrated containerized microservice architecture with health checks and automatic service registration.",
    ],
    link: "https://github.com/Amogh052003/service-discovery-internal",
  },
  {
    name: "E-book Store (Azure-Powered Web App)",
    category: "CloudDevops",
    stack: "React · Tailwind CSS · Azure Functions · Python · Azure Blob Storage · Azure Cosmos DB · Azure Static Web Apps · GitHub Actions",
    bullets: [
      "Built a serverless e-book store web app on Azure with React frontend and Azure Functions backend.",
      "Implemented dynamic book management with Azure Blob Storage for PDFs and metadata, and Cosmos DB for user data.",
      "Integrated user authentication via Azure Static Web Apps and CI/CD with GitHub Actions for automated deployments.",
    ],
    link: "https://github.com/Amogh052003/E-book-store",
  },
];

export const skillGroups = [
  {
    heading: "Cloud & Infrastructure",
    cards: [
      {
        title: "Microsoft Azure",
        level: "Advanced",
        items: "Microsoft Azure",
      },
      {
        title: "Hetzner Cloud",
        level: "Advanced",
        items: "Hetzner Cloud",
      },
      {
        title: "AWS",
        level: "Advanced",
        items: "AWS",
      },
    ],
  },
  {
    heading: "Containers & Orchestration",
    cards: [
      { title: "Docker", level: "Advanced", items: "Docker" },
      {
        title: "Kubernetes",
        level: "Advanced",
        items: "k3s, AKS, K8s",
      },
      { title: "Helm", level: "Advanced", items: "Helm" },
    ],
  },
  {
    heading: "Platform Infrastructure",
    cards: [
      { title: "Traefik (Ingress)", level: "Advanced", items: "Traefik" },
      {
        title: "Cert-Manager",
        level: "Advanced",
        items: "Automated TLS",
      },
      { title: "Harbor", level: "Advanced", items: "Private Registry" },
      { title: "Infisical", level: "Advanced", items: "Centralized Secrets" },
    ],
  },
  {
    heading: "Infrastructure as Code",
    cards: [
      { title: "Terraform", level: "Advanced", items: "Terraform" },
      { title: "Bicep", level: "Advanced", items: "Bicep" },
    ],
  },
  {
    heading: "CI/CD & GitOps",
    cards: [
      { title: "Jenkins", level: "Advanced", items: "Jenkins" },
      { title: "Argo CD", level: "Advanced", items: "Argo CD" },
      {
        title: "GitHub Actions",
        level: "Advanced",
        items: "GitHub Actions",
      },
      { title: "Woodpecker", level: "Advanced", items: "Woodpecker" },
    ],
  },
  {
    heading: "Observability & Monitoring",
    cards: [
      { title: "Prometheus", level: "Advanced", items: "Prometheus" },
      { title: "Grafana", level: "Advanced", items: "Grafana" },
      { title: "Dozzle", level: "Advanced", items: "Dozzle" },
    ],
  },
  {
    heading: "Configuration Management",
    cards: [{ title: "Ansible", level: "Advanced", items: "Ansible" }],
  },
  {
    heading: "Programming & Scripting",
    cards: [
      {
        title: "Python (FastAPI)",
        level: "Advanced",
        items: "Python (FastAPI)",
      },
      {
        title: "Shell Scripting",
        level: "Advanced",
        items: "Shell Scripting",
      },
    ],
  },
  {
    heading: "Version Control & OS",
    cards: [
      { title: "Git", level: "Advanced", items: "Git" },
      { title: "Linux", level: "Advanced", items: "Linux" },
    ],
  },
];

export const experienceSkillBars = [
  { label: "Kubernetes", value: 90 },
  { label: "CI/CD & GitOps", value: 92 },
  { label: "Terraform", value: 95 },
  { label: "Docker", value: 85 },
  { label: "Azure", value: 85 },
  { label: "Observability", value: 85 },
];

export const experienceSummaryBullets = [
  "Architected and bootstrapped a production-ready Kubernetes cluster on Hetzner Cloud using kubeadm, with automated node provisioning for high availability and rapid scaling.",
  "Engineered a secure platform infrastructure by deploying Traefik (Ingress), Cert-Manager (Automated TLS), Harbor (Private Registry), and Infisical for centralized secret management.",
  "Automated the software delivery lifecycle (SDLC) by building CI/CD pipelines that reduced manual intervention for container builds and production deployments.",
];

export const experience = [
   {
    role: "DevOps Engineer (Internship) — Synthlane Technologies Pvt. Ltd.",
    period: "Jan 2026 – March 2026 • Noida / Remote",
    bullets: [
      "Architected and bootstrapped a production-ready Kubernetes cluster on Hetzner Cloud using kubeadm, implementing automated node provisioning to ensure high availability and rapid scaling.",
      "Orchestrated multi-service microservices deployments, managing independent lifecycles and deployment configurations for fragmented services rather than monolithic structures.",
      "Engineered a secure platform infrastructure by deploying and configuring Traefik (Ingress), Cert-Manager (Automated TLS), Harbor (Private Registry), and Infisical for centralized secret management.",
      "Automated the software delivery lifecycle (SDLC) by building CI/CD pipelines that reduced manual intervention for container builds and production deployments.",
    ],
  },
];

export const education = {
  school: "Jain College of Engineering and Technology, Hubli",
  degree: "Bachelor of Engineering, Computer Science · 8.1 CGPA",
};

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft · 2025",
    linkLabel: "View credentials",
    link: "https://learn.microsoft.com/en-us/users/amoghlokhande-1415/credentials/d11ea6299e62390e",
    badge: "/badges/azure-fundamentals.svg",
  },
  {
    name: "Azure Administration Course for AZ-104",
    issuer: "Udemy · Instructor Alan Rodrigues",
    badge: "/badges/udemy.svg",
  },
  {
    name: "Learn DevOps: Docker, Kubernetes, CICD, Terraform & Azure DevOps",
    issuer: "Udemy · in28minutes official",
    badge: "/badges/udemy.svg",
  },
];

