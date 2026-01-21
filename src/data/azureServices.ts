import type { AzureService } from '../types/azure';

export const azureServices: AzureService[] = [
  {
    id: 'storage-account',
    name: 'Azure Storage Account',
    icon: '📦',
    overview: {
      whatItIs: 'Azure Storage is a cloud storage solution for modern applications that offers massively scalable object storage for data objects, a file system service for the cloud, a messaging store for reliable messaging, and a NoSQL store.',
      whyUsed: 'Provides durable, highly available, and massively scalable cloud storage while maintaining low costs and high performance.',
      useCases: [
        'Static website hosting',
        'Backup and disaster recovery',
        'Big data analytics',
        'Media content storage',
        'Application data storage'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need scalable object storage',
        'For backup and archival data',
        'When serving static content',
        'For big data analytics workloads',
        'When cost-effective storage is required'
      ],
      whenNotToUse: [
        'For frequently changing transactional data',
        'When you need relational database features',
        'For real-time analytics requiring low latency',
        'When complex querying is needed'
      ],
      idealArchitectures: [
        'Single region: Standard performance tier with LRS',
        'Multi-region: Premium performance with GRS/ZRS',
        'High Availability: Zone-redundant storage (ZRS)',
        'Disaster Recovery: Geo-redundant storage (GRS)'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Use appropriate access tiers (Hot, Cool, Cold, Archive)',
        'Implement lifecycle management policies',
        'Enable storage analytics to monitor usage',
        'Use Azure Blob Storage Index for efficient querying',
        'Consider reserved capacity for predictable workloads'
      ],
      security: [
        'Enable Azure AD-based authorization',
        'Use private endpoints instead of public endpoints',
        'Enable encryption at rest and in transit',
        'Implement network rules and firewalls',
        'Use managed identities for application access'
      ],
      performanceReliability: [
        'Choose appropriate performance tier (Standard/Premium)',
        'Enable soft delete for data protection',
        'Configure appropriate replication options',
        'Use CDN for content distribution',
        'Implement proper partitioning strategy'
      ],
      operationalExcellence: [
        'Enable diagnostic logging',
        'Implement automated backup strategies',
        'Use Azure Resource Manager templates for deployment',
        'Monitor storage metrics and alerts',
        'Implement proper tagging for cost management'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Cost explosion due to inappropriate tier selection',
        whyItHappens: 'Data stored in Hot tier instead of Cool/Cold/Archive, excessive egress costs',
        symptoms: 'Unexpected high monthly bills, rapid cost increase',
        impact: 'Budget overruns, financial impact on business',
        prevention: [
          'Implement lifecycle management policies',
          'Regular tier reviews and optimizations',
          'Monitor egress traffic patterns',
          'Set up cost alerts and budgets'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Using Storage Account as a database',
        description: 'Treating blob storage like a relational database with complex queries',
        consequences: 'Poor performance, high costs, complex application logic'
      }
    ],
    monitoringAlerts: {
      metrics: ['Ingress/Egress bandwidth', 'Transaction count', 'Availability percentage'],
      logs: ['Storage Analytics logs', 'Activity logs'],
      alertThresholds: ['Availability < 99.9%', 'Error rate > 1%'],
      azureServices: ['Azure Monitor', 'Log Analytics']
    },
    checklist: {
      security: ['✓ Azure AD authentication enabled', '✓ Private endpoints configured'],
      cost: ['✓ Appropriate access tier selected', '✓ Lifecycle policies configured'],
      performance: ['✓ Correct performance tier chosen', '✓ CDN configured'],
      reliability: ['✓ Appropriate replication configured', '✓ Soft delete enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Simple storage setup with basic configuration',
        setup: ['Create storage account with default settings', 'Enable basic monitoring']
      }
    ]
  },
  {
    id: 'virtual-machines',
    name: 'Azure Virtual Machines',
    icon: '🖥️',
    overview: {
      whatItIs: 'Azure Virtual Machines (VMs) are one of several types of on-demand, scalable computing resources that Azure offers. You can use a VM when you need more control over the computing environment than the other choices offer.',
      whyUsed: 'Provides flexible, scalable computing infrastructure with full control over the operating system and runtime environment.',
      useCases: [
        'Development and testing environments',
        'Application hosting and deployment',
        'Data processing and analytics workloads',
        'Legacy application migration',
        'High-performance computing'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need full control over the operating system',
        'For custom software requirements',
        'When migrating on-premises applications',
        'For development and testing environments',
        'When you need specific hardware configurations'
      ],
      whenNotToUse: [
        'For stateless web applications (use App Service instead)',
        'For containerized applications (use AKS instead)',
        'When you want to avoid infrastructure management',
        'For serverless workloads'
      ],
      idealArchitectures: [
        'Single VM: Development/testing environments',
        'VM Scale Set: Auto-scaling web applications',
        'Availability Set: High availability for multiple VMs',
        'Load Balanced VMs: Multi-tier applications'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Use appropriate VM sizes based on workload requirements',
        'Implement auto-shutdown schedules for non-production VMs',
        'Use Reserved Instances for predictable workloads',
        'Choose Spot VMs for fault-tolerant workloads',
        'Regularly monitor and right-size VMs'
      ],
      security: [
        'Use Azure AD for authentication and authorization',
        'Implement network security groups (NSGs)',
        'Use just-in-time (JIT) VM access',
        'Enable Azure Disk Encryption',
        'Regularly patch and update operating systems'
      ],
      performanceReliability: [
        'Use Premium SSD storage for high-performance workloads',
        'Implement Availability Sets or Availability Zones',
        'Configure load balancing for high availability',
        'Monitor CPU, memory, and disk metrics',
        'Use Azure Monitor for performance optimization'
      ],
      operationalExcellence: [
        'Use Azure Resource Manager templates for deployment',
        'Implement automated backup strategies',
        'Enable boot diagnostics for troubleshooting',
        'Use Azure Automation for patch management',
        'Implement proper tagging and resource organization'
      ]
    },
    failureScenarios: [
      {
        scenario: 'VM performance degradation',
        whyItHappens: 'Oversubscribed resources, storage bottlenecks, network congestion',
        symptoms: 'Slow response times, application timeouts, high CPU usage',
        impact: 'Poor user experience, business disruption',
        prevention: [
          'Monitor performance metrics regularly',
          'Implement auto-scaling policies',
          'Use appropriate storage tiers',
          'Configure resource limits and alerts'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Oversizing VMs',
        description: 'Provisioning VMs with more resources than needed',
        consequences: 'Unnecessary costs, wasted resources'
      }
    ],
    monitoringAlerts: {
      metrics: ['CPU Percentage', 'Memory Percentage', 'Disk I/O', 'Network I/O'],
      logs: ['Boot diagnostics', 'Activity logs', 'Guest OS logs'],
      alertThresholds: ['CPU > 80%', 'Memory > 85%', 'Disk latency > 20ms'],
      azureServices: ['Azure Monitor', 'Log Analytics', 'Application Insights']
    },
    checklist: {
      security: ['✓ NSGs configured', '✓ Azure AD integration enabled'],
      cost: ['✓ Appropriate VM size selected', '✓ Auto-shutdown configured'],
      performance: ['✓ Premium SSD used when needed', '✓ Load balancing configured'],
      reliability: ['✓ Availability Set/Zone configured', '✓ Backup enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Single VM deployment with basic configuration',
        setup: ['Create VM with default settings', 'Enable basic monitoring']
      }
    ]
  },
  {
    id: 'mysql-database',
    name: 'Azure Database for MySQL',
    icon: '🗄️',
    overview: {
      whatItIs: 'Azure Database for MySQL is a fully managed MySQL database service that provides enterprise-grade community MySQL database engine with built-in high availability, security, and performance optimization.',
      whyUsed: 'Reduces operational overhead while providing a scalable, secure, and high-performance MySQL database with automated backups, patching, and monitoring.',
      useCases: [
        'Web and mobile application backends',
        'E-commerce platforms',
        'Content management systems',
        'SaaS applications',
        'Data analytics and reporting'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need a managed MySQL database',
        'For applications requiring MySQL compatibility',
        'When you want automated maintenance and patching',
        'For applications needing high availability',
        'When you need built-in security features'
      ],
      whenNotToUse: [
        'When you need SQL Server features (use Azure SQL instead)',
        'For NoSQL workloads (use Cosmos DB instead)',
        'When you need full OS access (use VMs instead)',
        'For specialized MySQL extensions not supported'
      ],
      idealArchitectures: [
        'Single Region: Basic/Business Critical tier',
        'Multi-Region: Read replicas for global applications',
        'High Availability: Zone-redundant configuration',
        'Disaster Recovery: Geo-redundant backups with cross-region restore'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Choose appropriate compute tier (General Purpose vs Business Critical)',
        'Use serverless compute for intermittent workloads',
        'Implement read replicas for read-heavy workloads',
        'Optimize queries and indexing to reduce compute needs',
        'Use reserved capacity for predictable workloads'
      ],
      security: [
        'Enable Azure AD authentication',
        'Use private endpoints for network isolation',
        'Enable data encryption at rest and in transit',
        'Implement least privilege access with RBAC',
        'Regularly update MySQL versions and security patches'
      ],
      performanceReliability: [
        'Use appropriate storage tier (Premium SSD recommended)',
        'Implement connection pooling and connection limits',
        'Optimize database schema and indexing',
        'Enable query performance insights',
        'Configure appropriate backup retention periods'
      ],
      operationalExcellence: [
        'Enable automated backups and point-in-time restore',
        'Use Azure Monitor for performance monitoring',
        'Implement proper database maintenance schedules',
        'Use Azure Resource Manager templates for deployment',
        'Implement comprehensive logging and alerting'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Database performance degradation',
        whyItHappens: 'Poor query optimization, insufficient resources, connection leaks',
        symptoms: 'Slow query responses, application timeouts, high CPU usage',
        impact: 'Poor user experience, business disruption',
        prevention: [
          'Regular query performance analysis',
          'Implement connection pooling',
          'Monitor resource utilization',
          'Optimize database schema and indexes'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Over-provisioning compute resources',
        description: 'Using higher compute tiers than necessary',
        consequences: 'Unnecessary costs, wasted resources'
      }
    ],
    monitoringAlerts: {
      metrics: ['CPU Percentage', 'Memory Percentage', 'Storage I/O', 'Connections'],
      logs: ['MySQL slow query log', 'Error logs', 'Audit logs'],
      alertThresholds: ['CPU > 80%', 'Memory > 85%', 'Connections > 80%'],
      azureServices: ['Azure Monitor', 'Log Analytics', 'Query Performance Insight']
    },
    checklist: {
      security: ['Azure AD authentication enabled', 'Private endpoints configured'],
      cost: ['Appropriate compute tier selected', 'Serverless considered'],
      performance: ['Premium SSD storage used', 'Query optimization implemented'],
      reliability: ['Automated backups enabled', 'High availability configured']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Single instance deployment with basic configuration',
        setup: ['Create MySQL server with default settings', 'Enable basic monitoring']
      }
    ]
  },
  {
    id: 'redis-cache',
    name: 'Azure Cache for Redis',
    icon: '⚡',
    overview: {
      whatItIs: 'Azure Cache for Redis provides an in-memory data store based on the Redis software. Redis improves the performance and scalability of an application that uses backend data stores heavily.',
      whyUsed: 'Provides high-performance caching and data storage solutions that reduce database load and improve application response times.',
      useCases: [
        'Database query result caching',
        'Session state storage',
        'Real-time analytics and leaderboards',
        'Message queuing and pub/sub',
        'Rate limiting and throttling'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need high-performance data caching',
        'For reducing database load',
        'When implementing session state management',
        'For real-time data processing',
        'When you need pub/sub messaging'
      ],
      whenNotToUse: [
        'For persistent data storage (use databases instead)',
        'When data size exceeds available memory',
        'For complex transactional operations',
        'When you need ACID compliance'
      ],
      idealArchitectures: [
        'Basic tier: Development and testing',
        'Standard tier: Production with clustering',
        'Premium tier: Enterprise with persistence and security',
        'Geo-replication: Multi-region disaster recovery'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Choose appropriate tier (Basic/Standard/Premium)',
        'Use appropriate cache size based on workload',
        'Implement cache expiration policies',
        'Use Redis clustering for scalability',
        'Monitor memory usage and optimize data structures'
      ],
      security: [
        'Enable SSL/TLS encryption',
        'Use private endpoints for network isolation',
        'Implement proper authentication with access keys',
        'Configure firewall rules',
        'Regularly rotate access keys'
      ],
      performanceReliability: [
        'Use Premium tier for production workloads',
        'Enable clustering for high availability',
        'Implement proper connection pooling',
        'Monitor memory and CPU utilization',
        'Use Redis persistence for data durability'
      ],
      operationalExcellence: [
        'Enable diagnostic logging and monitoring',
        'Implement automated backup strategies',
        'Use Azure Resource Manager templates',
        'Set up performance alerts and monitoring',
        'Implement proper tagging and resource organization'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Cache memory exhaustion',
        whyItHappens: 'Insufficient memory allocation, memory leaks, large data objects',
        symptoms: 'Cache evictions, performance degradation, out-of-memory errors',
        impact: 'Increased database load, poor application performance',
        prevention: [
          'Monitor memory usage regularly',
          'Implement appropriate eviction policies',
          'Optimize data structures and serialization',
          'Scale cache size as needed'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Using Redis as primary database',
        description: 'Storing critical persistent data in Redis without proper backup',
        consequences: 'Data loss risk, reliability issues'
      }
    ],
    monitoringAlerts: {
      metrics: ['Memory Usage', 'CPU Usage', 'Cache Hit Ratio', 'Connected Clients'],
      logs: ['Redis slow log', 'Error logs', 'Connection logs'],
      alertThresholds: ['Memory > 80%', 'CPU > 75%', 'Cache hit ratio < 80%'],
      azureServices: ['Azure Monitor', 'Log Analytics', 'Redis Console']
    },
    checklist: {
      security: [' SSL/TLS encryption enabled', 'Private endpoints configured'],
      cost: ['Appropriate tier selected', 'Cache size optimized'],
      performance: ['Premium tier for production', 'Clustering configured'],
      reliability: ['High availability enabled', 'Backup configured']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic cache instance with default configuration',
        setup: ['Create Redis cache with Basic tier', 'Enable basic monitoring']
      }
    ]
  },
  {
    id: 'application-gateway',
    name: 'Azure Application Gateway',
    icon: '🌐',
    overview: {
      whatItIs: 'Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications. It operates at the OSI layer 7 (application layer) and provides advanced routing capabilities.',
      whyUsed: 'Provides application-level routing, SSL termination, web application firewall, and other advanced traffic management features for web applications.',
      useCases: [
        'Web application load balancing',
        'SSL/TLS termination and offloading',
        'Web application firewall (WAF) protection',
        'URL-based routing and content switching',
        'Session affinity and cookie-based persistence'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need layer 7 load balancing',
        'For web application firewall protection',
        'When implementing SSL termination',
        'For URL-based content routing',
        'When you need session persistence'
      ],
      whenNotToUse: [
        'For simple layer 4 load balancing (use Load Balancer instead)',
        'For non-HTTP traffic protocols',
        'When you need global load balancing (use Front Door instead)',
        'For simple DNS-based routing'
      ],
      idealArchitectures: [
        'Single Region: Standard_v2 or WAF_v2 tier',
        'Multi-Region: Cross-region load balancing with Traffic Manager',
        'High Availability: Zone-redundant deployment',
        'Security: WAF-enabled with custom rules'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Choose appropriate tier (Standard_v2 vs WAF_v2)',
        'Right-size instance count based on traffic patterns',
        'Use autoscaling for variable workloads',
        'Optimize WAF rules to reduce processing overhead',
        'Monitor and adjust capacity based on metrics'
      ],
      security: [
        'Enable Web Application Firewall (WAF)',
        'Implement end-to-end SSL encryption',
        'Use OWASP core rule set for WAF',
        'Regularly update WAF rules and signatures',
        'Implement proper network security groups'
      ],
      performanceReliability: [
        'Use autoscaling for variable traffic patterns',
        'Implement health probes for backend monitoring',
        'Enable session persistence when required',
        'Optimize backend pool configuration',
        'Use connection draining for graceful updates'
      ],
      operationalExcellence: [
        'Enable diagnostic logging and monitoring',
        'Use Azure Resource Manager templates',
        'Implement automated backup of WAF rules',
        'Set up performance alerts and monitoring',
        'Implement proper tagging and resource organization'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Backend server overload',
        whyItHappens: 'Uneven traffic distribution, insufficient health checks, backend capacity issues',
        symptoms: 'High response times, HTTP 503 errors, poor user experience',
        impact: 'Application downtime, lost revenue',
        prevention: [
          'Configure proper health probes',
          'Implement autoscaling policies',
          'Monitor backend server metrics',
          'Use appropriate load balancing algorithms'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Ignoring WAF configuration',
        description: 'Deploying Application Gateway without enabling WAF protection',
        consequences: 'Security vulnerabilities, compliance risks'
      }
    ],
    monitoringAlerts: {
      metrics: ['Request Count', 'Failed Requests', 'Response Time', 'Throughput'],
      logs: ['Access logs', 'WAF logs', 'Performance logs'],
      alertThresholds: ['Failed requests > 5%', 'Response time > 1000ms', 'Backend health failures'],
      azureServices: ['Azure Monitor', 'Log Analytics', 'Application Insights']
    },
    checklist: {
      security: [' WAF enabled and configured', ' End-to-end SSL implemented'],
      cost: [' Appropriate tier selected', ' Autoscaling configured'],
      performance: [' Health probes configured', ' Backend optimization implemented'],
      reliability: [' Zone-redundant deployment', ' Monitoring enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic Application Gateway with default configuration',
        setup: ['Create Application Gateway with Standard_v2 tier', 'Enable basic monitoring']
      }
    ]
  }
];
