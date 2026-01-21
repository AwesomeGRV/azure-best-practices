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
        realExample: 'A company stored 100TB of infrequently accessed data in the Hot tier, resulting in $10,000 monthly bills and a 50% increase in storage costs',
        prevention: [
          'Implement lifecycle management policies',
          'Regular tier reviews and optimizations',
          'Monitor egress traffic patterns',
          'Set up cost alerts and budgets'
        ]
      },
      {
        scenario: 'Blob container exhaustion',
        whyItHappens: 'Exceeding storage limits, poor lifecycle management, rapid data growth',
        symptoms: 'Upload failures, storage errors, performance degradation',
        impact: 'Application downtime, data loss, user impact',
        realExample: 'A media streaming company exceeded their 5TB blob container limit during a viral content event, causing 6 hours of upload failures and $50K in lost revenue',
        prevention: [
          'Implement lifecycle management policies',
          'Monitor storage utilization',
          'Use appropriate storage tiers',
          'Set up automated cleanup'
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
        realExample: 'An e-commerce site experienced VM CPU spikes to 95% during a flash sale, causing page load times to increase from 2 seconds to 45 seconds and 70% cart abandonment',
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
        realExample: 'A SaaS application had connection pool exhaustion during peak hours, causing 500 errors for 3,000 users and requiring emergency database restart',
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
        symptoms: 'Cache misses, performance degradation, out-of-memory errors',
        impact: 'Database overload, poor performance, user experience issues',
        realExample: 'A gaming platform\'s Redis cache reached 95% memory usage, causing cache eviction spikes and database query increases from 1K to 50K queries per second',
        prevention: [
          'Monitor memory usage',
          'Implement proper eviction policies',
          'Use appropriate cache sizing',
          'Implement cache warming strategies'
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
        realExample: 'A banking portal\'s Application Gateway backend pool was exhausted due to web server memory leaks, causing 2 hours of 503 errors affecting 25,000 customers',
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
  },
  {
    id: 'service-bus',
    name: 'Azure Service Bus',
    icon: '📨',
    overview: {
      whatItIs: 'Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. It provides reliable message queuing and durable publish-subscribe capabilities.',
      whyUsed: 'Enables decoupled communication between applications and services, providing reliable message delivery, ordering, and transactional support.',
      useCases: [
        'Enterprise messaging and integration',
        'Decoupled microservices communication',
        'Workload distribution and queuing',
        'Event-driven architectures',
        'Reliable message delivery guarantees'
      ]
    },
    architecture: {
      whenToUse: [
        'When you need reliable message delivery',
        'For enterprise messaging patterns',
        'When implementing publish-subscribe patterns',
        'For decoupled application communication',
        'When you need transactional messaging'
      ],
      whenNotToUse: [
        'For simple pub/sub without ordering (use Event Grid instead)',
        'For high-throughput streaming (use Event Hubs instead)',
        'For simple HTTP communication',
        'When you need real-time low-latency messaging'
      ],
      idealArchitectures: [
        'Single Region: Standard/Premium tier with namespaces',
        'Multi-Region: Geo-redundant namespaces',
        'High Availability: Premium tier with partitioning',
        'Disaster Recovery: Pair namespaces across regions'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Choose appropriate tier (Standard vs Premium)',
        'Optimize message size and batching',
        'Use auto-forwarding to reduce operations',
        'Implement proper message expiration',
        'Monitor and adjust throughput units'
      ],
      security: [
        'Enable Azure AD authentication',
        'Use managed identities for application access',
        'Implement encryption at rest and in transit',
        'Use shared access policies with least privilege',
        'Enable IP filtering and firewall rules'
      ],
      performanceReliability: [
        'Use Premium tier for production workloads',
        'Implement proper partitioning strategies',
        'Use message batching for efficiency',
        'Configure appropriate session handling',
        'Implement dead-lettering for failed messages'
      ],
      operationalExcellence: [
        'Enable diagnostic logging and monitoring',
        'Use Azure Resource Manager templates',
        'Implement automated testing of message flows',
        'Set up alerts for queue depths and errors',
        'Implement proper message schema versioning'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Message queue exhaustion',
        whyItHappens: 'Producer overload, consumer failure, processing bottlenecks',
        symptoms: 'Queue depth growing, message delays, system overload',
        impact: 'System degradation, message processing delays',
        realExample: 'In a retail application, during Black Friday sales, the order processing queue exceeded 100,000 messages, causing 4-hour delays in order confirmations and customer complaints',
        prevention: [
          'Monitor queue depths and set alerts',
          'Implement auto-scaling for consumers',
          'Use dead-lettering for problematic messages',
          'Implement circuit breakers and throttling'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Using Service Bus as a database',
        description: 'Storing business data in messages instead of using proper databases',
        consequences: 'Performance issues, data inconsistency, high costs'
      }
    ],
    monitoringAlerts: {
      metrics: ['Active Messages', 'Dead-lettered Messages', 'Incoming Messages', 'Outgoing Messages'],
      logs: ['Operation logs', 'Error logs', 'Audit logs'],
      alertThresholds: ['Queue depth > 1000', 'Dead-letter rate > 1%', 'Error rate > 0.5%'],
      azureServices: ['Azure Monitor', 'Log Analytics', 'Service Bus Explorer']
    },
    checklist: {
      security: ['✓ Azure AD authentication enabled', '✓ Encryption configured'],
      cost: ['✓ Appropriate tier selected', '✓ Message size optimized'],
      performance: ['✓ Premium tier for production', '✓ Partitioning configured'],
      reliability: ['✓ Dead-lettering configured', '✓ Monitoring enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic Service Bus namespace with queues',
        setup: ['Create Service Bus namespace', 'Configure basic queues and topics']
      }
    ]
  },
  {
    id: 'azure-functions',
    name: 'Azure Functions',
    icon: '⚡',
    overview: {
      whatItIs: 'Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure.',
      whyUsed: 'Provides cost-effective, scalable compute for event-driven applications with automatic scaling and pay-per-use pricing.',
      useCases: [
        'Event processing and automation',
        'API endpoints and webhooks',
        'Data processing and transformation',
        'Scheduled tasks and workflows',
        'Integration and orchestration'
      ]
    },
    architecture: {
      whenToUse: [
        'For event-driven architectures',
        'When you need serverless compute',
        'For sporadic or unpredictable workloads',
        'When implementing microservices',
        'For rapid development and deployment'
      ],
      whenNotToUse: [
        'For long-running processes (>10 minutes)',
        'When you need full OS control (use VMs instead)',
        'For stateful applications requiring persistence',
        'When you need consistent low latency'
      ],
      idealArchitectures: [
        'Consumption Plan: Serverless with automatic scaling',
        'Premium Plan: Pre-warmed instances for performance',
        'App Service Plan: Dedicated resources for consistency',
        'Durable Functions: Orchestration of complex workflows'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Use Consumption plan for sporadic workloads',
        'Optimize function execution time',
        'Implement proper error handling to reduce retries',
        'Use async/await patterns for I/O operations',
        'Monitor and optimize cold start performance'
      ],
      security: [
        'Enable Azure AD authentication',
        'Use managed identities for service connections',
        'Implement proper input validation',
        'Use Application Insights for security monitoring',
        'Secure storage connections and secrets'
      ],
      performanceReliability: [
        'Use Premium plan for consistent performance',
        'Implement proper retry policies',
        'Use durable functions for stateful workflows',
        'Optimize memory usage and garbage collection',
        'Implement proper logging and monitoring'
      ],
      operationalExcellence: [
        'Use Infrastructure as Code (ARM templates/Bicep)',
        'Implement automated testing and deployment',
        'Use Application Insights for monitoring',
        'Implement proper versioning and deployment slots',
        'Use CI/CD pipelines for deployment'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Function timeout or memory exhaustion',
        whyItHappens: 'Inefficient code, memory leaks, large payloads',
        symptoms: 'Function failures, timeouts, out-of-memory errors',
        impact: 'Processing failures, data loss, poor user experience',
        realExample: 'A data processing Function timed out when processing 100MB files, causing a 6-hour backlog of 15,000 unprocessed files and missed SLA deadlines',
        prevention: [
          'Optimize code for performance and memory',
          'Implement proper error handling and retries',
          'Use appropriate hosting plan and limits',
          'Monitor function performance and metrics'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Long-running functions',
        description: 'Creating functions that run for extended periods',
        consequences: 'Timeouts, high costs, reliability issues'
      }
    ],
    monitoringAlerts: {
      metrics: ['Function Execution Count', 'Execution Time', 'Memory Usage', 'Error Rate'],
      logs: ['Function logs', 'Application Insights logs', 'Error logs'],
      alertThresholds: ['Error rate > 5%', 'Execution time > 5 minutes', 'Memory usage > 80%'],
      azureServices: ['Azure Monitor', 'Application Insights', 'Log Analytics']
    },
    checklist: {
      security: ['✓ Azure AD authentication enabled', '✓ Managed identities configured'],
      cost: ['✓ Appropriate hosting plan selected', '✓ Execution time optimized'],
      performance: ['✓ Premium plan for production', '✓ Cold start optimization'],
      reliability: ['✓ Retry policies configured', '✓ Monitoring enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic function app with simple triggers',
        setup: ['Create Function App', 'Configure basic triggers and bindings']
      }
    ]
  },
  {
    id: 'azure-kubernetes-service',
    name: 'Azure Kubernetes Service (AKS)',
    icon: '☸️',
    overview: {
      whatItIs: 'Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies deploying, managing, and scaling containerized applications using Kubernetes.',
      whyUsed: 'Provides enterprise-grade Kubernetes with automated upgrades, scaling, and security, reducing operational complexity while maintaining portability.',
      useCases: [
        'Microservices architectures',
        'Containerized application deployment',
        'Hybrid cloud scenarios',
        'DevOps and CI/CD pipelines',
        'Multi-cloud and edge computing'
      ]
    },
    architecture: {
      whenToUse: [
        'For containerized applications',
        'When you need orchestration capabilities',
        'For microservices architectures',
        'When you need Kubernetes expertise',
        'For hybrid and multi-cloud deployments'
      ],
      whenNotToUse: [
        'For simple container deployment (use Container Instances instead)',
        'When you lack Kubernetes expertise',
        'For single-container applications',
        'When you need full control over Kubernetes infrastructure'
      ],
      idealArchitectures: [
        'Single Cluster: Development and testing',
        'Multi-Cluster: Production and staging separation',
        'Multi-Region: Global applications with traffic routing',
        'Hybrid: On-premises and cloud integration'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Use appropriate node sizes and VM types',
        'Implement cluster autoscaling',
        'Use spot instances for non-critical workloads',
        'Optimize resource requests and limits',
        'Regularly review and right-size clusters'
      ],
      security: [
        'Enable Azure AD integration for RBAC',
        'Use network policies and calico',
        'Implement pod security policies',
        'Use Azure Policy for governance',
        'Enable container image scanning'
      ],
      performanceReliability: [
        'Use availability zones for high availability',
        'Implement proper resource limits and requests',
        'Use horizontal pod autoscaling',
        'Configure proper storage classes',
        'Implement health checks and readiness probes'
      ],
      operationalExcellence: [
        'Use GitOps for cluster management',
        'Implement automated CI/CD pipelines',
        'Use Azure Monitor for container insights',
        'Implement proper logging and monitoring',
        'Use infrastructure as code (Terraform/Bicep)'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Cluster resource exhaustion',
        whyItHappens: 'Insufficient node resources, pod sprawl, memory leaks',
        symptoms: 'Pod failures, scheduling issues, poor performance',
        impact: 'Application downtime, poor user experience',
        realExample: 'An AKS cluster with 3 nodes reached 85% CPU utilization, causing pods to be OOMKilled and a microservices application to lose 40% of its functionality',
        prevention: [
          'Implement cluster autoscaling',
          'Monitor resource utilization',
          'Set appropriate resource limits',
          'Regular cluster health checks'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Over-provisioning cluster resources',
        description: 'Creating clusters with excessive capacity',
        consequences: 'High costs, wasted resources'
      }
    ],
    monitoringAlerts: {
      metrics: ['Node CPU/Memory', 'Pod Status', 'Cluster Health', 'Network Traffic'],
      logs: ['Kubernetes logs', 'Container logs', 'Audit logs'],
      alertThresholds: ['Node CPU > 80%', 'Pod restart rate > 10%', 'Failed pods > 5%'],
      azureServices: ['Azure Monitor', 'Container Insights', 'Log Analytics']
    },
    checklist: {
      security: ['✓ Azure AD RBAC enabled', '✓ Network policies configured'],
      cost: ['✓ Cluster autoscaling enabled', '✓ Spot instances considered'],
      performance: ['✓ Resource limits set', '✓ HPA configured'],
      reliability: ['✓ Availability zones used', '✓ Health checks configured']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic AKS cluster with default configuration',
        setup: ['Create AKS cluster', 'Deploy basic applications']
      }
    ]
  },
  {
    id: 'app-service',
    name: 'Azure App Service',
    icon: '🌍',
    overview: {
      whatItIs: 'Azure App Service is a fully managed platform-as-a-service (PaaS) for building, deploying, and scaling web applications. It supports multiple languages and frameworks.',
      whyUsed: 'Provides automated infrastructure management, built-in security, and easy scaling without managing servers, enabling rapid development and deployment.',
      useCases: [
        'Web applications and APIs',
        'Mobile app backends',
        'Business applications',
        'Content management systems',
        'Progressive Web Apps (PWAs)'
      ]
    },
    architecture: {
      whenToUse: [
        'For web applications and APIs',
        'When you want platform-managed infrastructure',
        'For multi-language applications',
        'When you need easy scaling and deployment',
        'For DevOps and CI/CD integration'
      ],
      whenNotToUse: [
        'When you need full OS control (use VMs instead)',
        'For container orchestration (use AKS instead)',
        'For simple static sites (use Static Web Apps instead)',
        'When you need custom kernel-level modifications'
      ],
      idealArchitectures: [
        'Single App Service: Basic web application',
        'App Service Plan: Multiple apps with shared resources',
        'App Service Environment: Isolated and secure environment',
        'Multi-Region: Global deployment with Traffic Manager'
      ]
    },
    bestPractices: {
      costOptimization: [
        'Choose appropriate App Service Plan tier',
        'Use auto-scaling for variable workloads',
        'Implement proper staging slots',
        'Optimize application performance',
        'Use reserved instances for predictable workloads'
      ],
      security: [
        'Enable HTTPS and SSL/TLS',
        'Use Azure AD authentication',
        'Implement proper CORS policies',
        'Use managed identities for service connections',
        'Enable security headers and web application firewall'
      ],
      performanceReliability: [
        'Use appropriate tier for production',
        'Implement caching strategies',
        'Configure auto-scaling rules',
        'Use deployment slots for zero-downtime updates',
        'Implement proper error handling and logging'
      ],
      operationalExcellence: [
        'Use CI/CD pipelines for deployment',
        'Implement automated testing',
        'Use Application Insights for monitoring',
        'Implement backup and disaster recovery',
        'Use infrastructure as code for deployment'
      ]
    },
    failureScenarios: [
      {
        scenario: 'Application performance degradation',
        whyItHappens: 'Resource constraints, inefficient code, database bottlenecks',
        symptoms: 'Slow response times, HTTP errors, poor user experience',
        impact: 'User dissatisfaction, business impact',
        realExample: 'A corporate web app\'s App Service ran out of memory during month-end reporting, causing response times to increase from 200ms to 8 seconds and preventing 500 employees from meeting deadlines',
        prevention: [
          'Monitor performance metrics',
          'Implement auto-scaling',
          'Optimize application code',
          'Use caching and CDN'
        ]
      }
    ],
    antiPatterns: [
      {
        pattern: 'Ignoring auto-scaling',
        description: 'Using fixed scaling instead of auto-scaling',
        consequences: 'Poor performance during traffic spikes, wasted resources'
      }
    ],
    monitoringAlerts: {
      metrics: ['Response Time', 'CPU/Memory Usage', 'Request Count', 'Error Rate'],
      logs: ['Application logs', 'Web server logs', 'Error logs'],
      alertThresholds: ['Response time > 2 seconds', 'Error rate > 5%', 'CPU > 80%'],
      azureServices: ['Azure Monitor', 'Application Insights', 'Log Analytics']
    },
    checklist: {
      security: ['✓ HTTPS enabled', '✓ Azure AD authentication configured'],
      cost: ['✓ Appropriate tier selected', '✓ Auto-scaling configured'],
      performance: ['✓ Caching implemented', '✓ Performance optimized'],
      reliability: ['✓ Deployment slots configured', '✓ Backup enabled']
    },
    maturityLevels: [
      {
        level: 'Basic (Beginner)',
        description: 'Basic App Service with default configuration',
        setup: ['Create App Service', 'Deploy basic web application']
      }
    ]
  }
];
