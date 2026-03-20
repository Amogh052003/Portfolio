export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "PROJECT BRIEF PORTFOLIO",
  subtitle: "Cloud-native delivery, secure automation, and Azure-first solutions.",
  role: "Cloud & DevOps Engineer",
  updated: "Updated Nov 2025",
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
  { value: "65%", label: "Faster Releases", hint: "Measured on AKS delivery" },
  { value: "12+", label: "Azure Services", hint: "Production experience" },
  { value: "0", label: "Manual Deployments", hint: "Fully automated promos" },
  { value: "3", label: "Cloud Apps", hint: "Designed end-to-end" },
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
    name: "3-Tier Serverless Cloud Architecture (Azure)",
    stack: "Azure Functions · Azure Static Apps · Azure Blob Storage · FastAPI · Cosmos DB ",
    bullets: [
      "Delivered a multi-tenant eBook platform with SAS-secured access and serverless APIs.",
      "Stored assets on Azure Blob Storage and automated front/back deployments through GitHub Actions.",
      "Leveraged Cosmos DB for tenant data isolation and responsive reading experiences.",
    ],
    link: "https://github.com/Amogh052003/E-book-store",
  },
];

export const experience = [
   {
    role: "Devops Intern — Synthlane Technologies",
    period: "Jan 2025 – Mar 2025",
    logo: "/logos/synthlane.png",
    bullets: [
      "Worked with Kubernetes clusters to deploy and manage containerized applications using Helm charts.",
      "Built and optimized Docker images using multi-stage builds and distroless images for production workloads.",
      "Debugged and resolved pod failures, CrashLoopBackOff issues, and cluster scheduling problems.",
      "Managed secrets and environment configurations using Infisical and GitHub Actions.",
      "Implemented CI/CD pipelines to build, push, and deploy container images to Kubernetes environments.",
      "Monitored cluster health and application logs using kubectl and cluster management tools."
    ],
  },
  {
    role: "Cloud Intern — Rooman Technologies",
    period: "Dec 2024 – Mar 2025",
    bullets: [
      "Completed structured training in cloud technologies, DevOps fundamentals, and deployment practices.",
      "Gained exposure to Docker, networking, cloud deployments, and automation via guided projects.",
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

