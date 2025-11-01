HashiCorp Terraform - Practice Exam #2 - Results
Attempt 5





Question 1
Correct
In HCP Terraform, a workspace can be mapped to how many VCS repos?

5

Explanation
HCP Terraform workspaces are specifically designed to be linked to a single VCS repository. Having the ability to map a workspace to five repositories is not a capability offered by HCP Terraform.

3

Explanation
HCP Terraform workspaces are limited to being mapped to a single VCS repository. Associating a workspace with multiple repositories is not a feature provided by HCP Terraform.

Your answer is correct
1

Explanation
In HCP Terraform, a workspace can be mapped to only one VCS (Version Control System) repository. This means that the workspace will be associated with a single repository where the Terraform configuration files are stored and managed.

2

Explanation
HCP Terraform workspaces are designed to be associated with a single VCS repository. Mapping a workspace to multiple repositories is not a supported configuration in HCP Terraform.

Overall explanation
A workspace can only be configured to a single VCS repo, however, multiple workspaces can use the same repo, if needed. A good explanation of how to configure your code repositories can be found here.

https://developer.hashicorp.com/terraform/cloud-docs/workspaces/creating

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 2
Correct
What are some of the features of Terraform state? (select three)

Your selection is correct
increased performance

Explanation
Terraform state provides increased performance by storing the current state of managed infrastructure resources. This allows Terraform to efficiently track changes and manage resources without having to query the cloud provider's API repeatedly.
inspection of cloud resources

Explanation
Inspection of cloud resources is not a feature of Terraform state. Terraform state is used for tracking the state of managed infrastructure resources and managing their configuration, but it does not provide direct inspection capabilities for cloud resources.
Your selection is correct
mapping configuration to real-world resources

Explanation
Terraform state maps configuration to real-world resources by storing the mapping between the desired infrastructure configuration defined in Terraform files and the actual resources created in the cloud environment. This mapping helps Terraform to manage and update resources accurately.
Your selection is correct
determining the correct order to destroy resources

Explanation
Terraform state helps in determining the correct order to destroy resources by keeping track of dependencies between resources. This ensures that resources are destroyed in the correct sequence to avoid any issues or errors during the destruction process.
Overall explanation
Terraform state provides increased performance by storing the current state of managed infrastructure resources. This allows Terraform to efficiently track changes and manage resources without having to query the cloud provider's API repeatedly.

Terraform state helps in determining the correct order to destroy resources by keeping track of dependencies between resources. This ensures that resources are destroyed in the correct sequence to avoid any issues or errors during the destruction process.

Terraform state helps in determining the correct order to destroy resources by keeping track of dependencies between resources. This ensures that resources are destroyed in the correct sequence to avoid any issues or errors during the destruction process.



See this page on the purpose of Terraform state and the benefits it provides.

Domain
Objective 7 - Implement and Maintain State
Question 3
Correct
Using multi-cloud and provider-agnostic tools provides which of the following benefits? (select two)

Your selection is correct
can be used across major cloud providers and VM hypervisors

Explanation
Using multi-cloud and provider-agnostic tools allows for the flexibility to deploy infrastructure across different major cloud providers and virtual machine hypervisors. This means that the same tool can be used to manage resources in AWS, Azure, Google Cloud, and other platforms, reducing the need to learn and manage multiple tools for each provider.
Your selection is correct
operations teams only need to learn and manage a single tool to manage infrastructure, regardless of where the infrastructure is deployed

Explanation
By utilizing multi-cloud and provider-agnostic tools, operations teams only need to learn and manage a single tool for managing infrastructure, regardless of where it is deployed. This simplifies the management process, reduces complexity, and streamlines operations, leading to increased efficiency and consistency in infrastructure management.
slower provisioning speed allows the operations team to catch mistakes before they are applied

Explanation
Slower provisioning speed does not align with the benefits of using multi-cloud and provider-agnostic tools. In fact, one of the advantages of such tools is the ability to provision resources quickly and efficiently across different cloud providers and hypervisors, improving agility and responsiveness in deploying infrastructure.
increased risk due to all infrastructure relying on a single tool for management

Explanation
Using multi-cloud and provider-agnostic tools does not necessarily increase the risk of all infrastructure relying on a single tool for management. In fact, it can reduce risk by providing a unified approach to infrastructure management, ensuring consistency and standardization across different environments.
Overall explanation
Using a tool like Terraform can be advantageous for organizations deploying workloads across multiple public and private cloud environments. Operations teams only need to learn a single tool, a single language, and can use the same tooling to enable a DevOps-like experience and workflows.

https://developer.hashicorp.com/terraform/intro/use-cases#multi-cloud-deployment

Domain
Objective 2 - Understand Terraform's purpose (vs. other IaC)
Question 4
Correct
In order to make a Terraform configuration file dynamic and/or reusable, static values should be converted to use what?

regular expressions

Explanation
Regular expressions are used for pattern matching and manipulation of strings, but they are not directly related to making Terraform configuration files dynamic or reusable. They are not the appropriate choice for converting static values in Terraform configurations.
output value

Explanation
Output values in Terraform are used to export information about the infrastructure that can be consumed by other configurations or external systems. While output values are important for sharing information, they are not used to convert static values to dynamic ones in a Terraform configuration file.
Your answer is correct
input variables

Explanation
Converting static values in a Terraform configuration file to use input variables allows for dynamic and reusable configurations. Input variables can be defined externally and passed into the Terraform configuration, making it easier to customize the behavior of the infrastructure without modifying the configuration file itself.
module

Explanation
Modules in Terraform are used to encapsulate and organize reusable components of infrastructure configurations. While modules promote reusability, they are not used specifically to convert static values to dynamic ones in a Terraform configuration file. Input variables are the appropriate choice for achieving this goal.
Overall explanation
Input variables serve as parameters for a Terraform module, allowing aspects of the module to be customized without altering the module's own source code, and allowing modules to be shared between different configurations.

https://learn.hashicorp.com/tutorials/terraform/aws-variables

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 5
Incorrect
When configuring a remote backend in Terraform, it might be a good idea to purposely omit some of the required arguments to ensure secrets and other relevant data are not inadvertently shared with others. What alternatives are available to provide the remaining values to Terraform to initialize and communicate with the remote backend? (select three)

Correct selection
use the -backend-config=PATH flag to specify a separate config file

Explanation
Utilizing the -backend-config=PATH flag to specify a separate config file enables users to store sensitive information in a dedicated file that can be securely managed. By keeping this data separate from the main configuration, the risk of accidental exposure of secrets is minimized, enhancing the security of the remote backend setup.

Your selection is incorrect
using a TFVARS file that is committed to a Git repository

Explanation
Storing sensitive data in a TFVARS file that is committed to a Git repository poses a security risk as the repository is typically accessible to multiple team members. This method increases the likelihood of inadvertent sharing of secrets and should be avoided to prevent unauthorized access to confidential information.
Your selection is correct
directly querying HashiCorp Vault for the secrets

Explanation
Directly querying HashiCorp Vault for the required secrets offers a secure and centralized approach to managing sensitive data for Terraform remote backends. By retrieving secrets from Vault, users can ensure that only authorized individuals with proper access permissions can retrieve the necessary information, reducing the chances of secret exposure.
Your selection is correct
interactively on the command line

Explanation
Providing the required arguments interactively on the command line allows for real-time input of sensitive data during the Terraform initialization process. This method ensures that secrets are securely entered and not stored in any configuration files that could potentially be accessed by unauthorized users.
Overall explanation
When configuring a remote backend in Terraform, it's important to avoid hardcoding sensitive data like secrets in your configuration files to prevent inadvertent sharing through version control. Instead, you can provide these values securely through alternative methods. One option is to provide the missing values interactively on the command line during terraform init, ensuring they aren't stored in code. Another approach is to use the -backend-config=PATH flag to specify a separate configuration file that can be excluded from Git repositories. Additionally, you can directly query HashiCorp Vault for secrets, allowing dynamic retrieval of credentials at runtime.

However, using a TFVARS file committed to a Git repository is not recommended, as it risks exposing secrets to a code repository.

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 6
Correct
True or False? Workspaces provide similar functionality in the Community and HCP Terraform versions of Terraform.

Your answer is correct
False

Explanation
False. While workspaces in the Community and HCP Terraform versions of Terraform serve the same purpose of managing multiple environments and configurations, there are differences in how they are implemented and accessed. HCP Terraform offers additional features and capabilities for managing workspaces, such as remote state management, collaboration tools, and version control integration, which are not available in the Community version.

True

Explanation
False. HCP Terraform workspaces act more like completely separate working directories.

Overall explanation
Workspaces, managed with the terraform workspace command, isn't the same thing as HCP Terraform's workspaces. HCP Terraform workspaces act more like completely separate working directories.

CLI workspaces (Community) are just alternate state files.

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 7
Correct
When multiple engineers start deploying infrastructure using the same state file, what is a feature of remote state storage that is critical to ensure the state does not become corrupt?

Your answer is correct
state locking

Explanation
State locking is a critical feature of remote state storage that prevents multiple engineers from deploying infrastructure using the same state file simultaneously. It ensures that only one engineer can make changes to the state at a time, preventing conflicts and potential corruption of the state file.
workspaces

Explanation
Workspaces in Terraform are used to segregate different environments or configurations within the same state file. While workspaces can help organize and manage infrastructure deployments, they do not directly address the issue of preventing state corruption when multiple engineers are working with the same state file.
encryption

Explanation
Encryption is important for securing the state data stored in remote storage, but it is not directly related to preventing state corruption when multiple engineers are deploying infrastructure using the same state file. While encryption adds a layer of security, it does not address the issue of concurrent access and modification of the state file.
object storage

Explanation
Object storage is not specifically related to preventing state corruption when multiple engineers are deploying infrastructure using the same state file. While object storage is commonly used for storing Terraform state files, it does not inherently provide the necessary mechanisms to prevent corruption in a multi-user environment.
Overall explanation
If supported by your backend, Terraform will lock your state for all operations that could write state. This prevents others from acquiring the lock and potentially corrupting your state.

State locking happens automatically on all operations that could write state. You won't see any message that it is happening. If state locking fails, Terraform will not continue. You can disable state locking for most commands with the -lock flag but it is not recommended.

https://developer.hashicorp.com/terraform/language/state/locking

Domain
Objective 7 - Implement and Maintain State
Question 8
Correct
Terraform language has built-in syntax for creating lists. Which of the following is the correct syntax to create a list in Terraform?

("string1", "string2", "string3")

Explanation
In Terraform, lists are created using square brackets [ ]. The correct syntax to create a list in Terraform is ["string1", "string2", "string3"]. Using parentheses ( ) for creating a list is not valid in Terraform.
Your answer is correct
["string1", "string2", "string3"]

Explanation
The square brackets [ ] are the correct syntax for creating lists in Terraform. The elements inside the square brackets are separated by commas, and each element is enclosed in double quotes. This format ensures that Terraform recognizes the data structure as a list.
<"string1", "string2", "string3">

Explanation
Angle brackets < > are not used for creating lists in Terraform. The correct syntax for defining lists in Terraform involves using square brackets [ ] to enclose the list elements. Using angle brackets for list creation will not be recognized as a valid list structure in Terraform.
{"string1", "string2", "string3"}

Explanation
Curly braces { } are not the correct syntax for creating lists in Terraform. Lists in Terraform are defined using square brackets [ ], where elements are separated by commas. Using curly braces for list creation will result in a syntax error in Terraform.
Overall explanation
Terraform language has built-in syntax for creating lists using the [ and ] delimiters.

https://developer.hashicorp.com/terraform/language/expressions/types#list

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 9
Incorrect
What are some problems with how infrastructure was traditionally managed before Infrastructure as Code? (select three)

Correct selection
Traditionally managed infrastructure can't keep up with cyclic or elastic applications

Explanation
Traditionally managed infrastructure struggles to keep up with cyclic or elastic applications that require dynamic scaling based on demand. The manual intervention and lack of automation in traditional management make it challenging to scale resources up or down efficiently in response to changing workload requirements.
Your selection is correct
Requests for infrastructure or hardware often required a ticket, increasing the time required to deploy applications

Explanation
Requests for infrastructure or hardware often required a ticket in traditional management, leading to delays in deploying applications. This manual process increased the time required to provision resources, hindering agility and responsiveness to business needs.
Your selection is correct
Traditional deployment methods are not able to meet the demands of the modern business where resources tend to live days to weeks, rather than months to years

Explanation
Traditional deployment methods are not designed to meet the demands of modern businesses where resources need to be provisioned and deprovisioned quickly. In the current business landscape, resources are expected to live for shorter durations, ranging from days to weeks, rather than the traditional model of months to years.
Your selection is incorrect
Pointing and clicking in a management console is a scalable approach and reduces human error as businesses are moving to a multi-cloud deployment model

Explanation
Pointing and clicking in a management console is not a scalable approach in traditional infrastructure management. It is prone to human error and does not provide the level of automation and consistency needed for managing infrastructure efficiently, especially in a dynamic and rapidly changing environment.
Overall explanation
Traditionally, infrastructure was managed using manual processes and user interfaces, which could lead to several problems, including:



Configuration drift: With manual configuration, it can be difficult to ensure that all infrastructure components are consistently configured. Over time, differences in configuration can accumulate, leading to configuration drift, where systems in the same environment are no longer identical.

Lack of standardization: Manual configuration can also result in inconsistencies across environments, which can make it difficult to manage and troubleshoot infrastructure. For example, different environments may have different versions of software or different security settings, making it hard to replicate issues or ensure consistent behavior.

Slow provisioning: Provisioning infrastructure manually can be time-consuming, especially for complex configurations or when setting up multiple resources. This can lead to delays in development and deployment, as teams may need to wait for infrastructure to be set up before they can begin work.

Human error: Manual provisioning and configuration is prone to human error, which can lead to security vulnerabilities, performance issues, or downtime. For example, a misconfigured firewall rule could leave systems open to attack, or a typo in a configuration file could cause a system to crash.

Difficulty in documentation: With manual configuration, it can be challenging to keep documentation up to date and accurate. This can make it hard for teams to understand how infrastructure is configured, what changes have been made, and how to troubleshoot issues.

Overall, these problems can make it difficult to manage infrastructure at scale and can lead to increased costs, reduced agility, and increased risk of errors and downtime. Infrastructure as Code helps to address many of these issues by providing a standardized, repeatable, and automated way to manage infrastructure resources.

https://developer.hashicorp.com/terraform/intro#infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 10
Correct
In the example below, where is the value of the DNS record's IP address originating from?



resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.helloworld.com"
  type    = "A"
  ttl     = "300"
  records = [module.web_server.instance_ip_addr]
}


by querying the AWS EC2 API to retrieve the IP address

Explanation
The value of the DNS record's IP address is not originating from querying the AWS EC2 API to retrieve the IP address. In this scenario, the IP address is being obtained from the output of the web_server module directly, rather than querying external APIs or services to retrieve the IP address dynamically.
the regular expression named module.web_server

Explanation
The value of the DNS record's IP address is not originating from a regular expression named module.web_server. In Terraform, module.web_server refers to the module itself, not a specific attribute or value within the module. Therefore, it is not the source of the IP address for the DNS record.
value of the web_server parameter from the variables.tf file

Explanation
The value of the DNS record's IP address is not originating from a parameter in the variables.tf file. In this case, the IP address is being retrieved from the output of a module named web_server, not from a static parameter defined in the variables.tf file.
Your answer is correct
the output of a module named web_server

Explanation
The correct choice is that the value of the DNS record's IP address is originating from the output of a module named web_server. The records attribute in the aws_route53_record resource is being populated with the IP address obtained from the output of the web_server module, allowing the DNS record to point to the correct IP address.
Overall explanation
In a parent module, outputs of child modules are available in expressions as module.<MODULE NAME>.<OUTPUT NAME>. For example, if a child module named web_server declared an output named instance_ip_addr, you could access that value as module.web_server.instance_ip_addr.

https://developer.hashicorp.com/terraform/language/expressions#references-to-named-values

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 11
Correct
Your organization has moved to AWS and has manually deployed infrastructure using the console. Recently, a decision has been made to standardize on Terraform for all deployments moving forward.

What can you do to ensure that the existing resources are managed by Terraform moving forward without causing interruption to existing resources?

resources that are manually deployed in the AWS console cannot be imported by Terraform

Explanation
Contrary to the statement, resources that are manually deployed in the AWS console can be imported into Terraform using the terraform import command. This allows you to manage existing resources with Terraform without the need to recreate them.
Your answer is correct
using terraform import, import the existing infrastructure to bring the resources under Terraform management

Explanation
Using terraform import is the correct approach to bring existing infrastructure under Terraform management. This command allows you to import existing resources into your Terraform state file without causing any interruption to the resources.
delete the existing resources and recreate them using new a Terraform configuration so Terraform can manage them moving forward

Explanation
Deleting existing resources and recreating them using a new Terraform configuration is not recommended as it would cause downtime and potential data loss. It is better to import existing resources using terraform import to manage them with Terraform.
submit a ticket to AWS and ask them to export the state of all existing resources and use terraform import to import them into the state file

Explanation
Submitting a ticket to AWS to export the state of existing resources is not a standard practice. Terraform import allows you to bring existing resources under Terraform management without involving AWS support.
Overall explanation
To ensure that existing resources in AWS are managed by Terraform moving forward without causing interruption to existing resources, there are a few steps that you can follow:



Create a new Terraform configuration that represents the existing resources in AWS. This can be done manually by examining the resources in the AWS console and recreating them in Terraform code, or automatically by using a tool like Terraforming or CloudMapper.

Import the existing resources into Terraform using the terraform import command. This command allows you to associate the existing resources in AWS with the new Terraform configuration. You will need to specify the resource type, name, and ID for each resource you want to import.

Use Terraform to manage all future changes to the infrastructure. With the existing resources now managed by Terraform, you can make changes to them through Terraform code and use the normal Terraform workflow of plan, apply, and destroy to manage the infrastructure going forward.

It's important to note that importing existing resources into Terraform can be a complex and error-prone process, especially for large and complex infrastructures. It's recommended to test the import process thoroughly in a development or staging environment before attempting to import production resources. Additionally, be sure to carefully review the Terraform code before running terraform apply to avoid accidentally modifying or deleting existing resources.

https://developer.hashicorp.com/terraform/cli/commands/import

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 12
Correct
What happens when a terraform plan is executed?

reconciles the state Terraform knows about with the real-world infrastructure

Explanation
Reconciling the state Terraform knows about with the real-world infrastructure is the responsibility of the terraform plan -refresh-only command, not terraform plan. Terraform plan is specifically used to preview the changes that will be made to the infrastructure.

Your answer is correct
creates an execution plan and determines what changes are required to achieve the desired state in the configuration files.

Explanation
When a terraform plan is executed, it creates an execution plan by analyzing the current state of the infrastructure and the desired state specified in the configuration files. It determines what changes need to be made to achieve the desired configuration without actually applying those changes.

the backend is initialized and the working directory is prepped

Explanation
Initializing the backend and preparing the working directory are tasks performed by the terraform init command, not terraform plan. Terraform plan focuses on generating an execution plan based on the configuration files.

applies the changes required in the target infrastructure in order to reach the desired configuration

Explanation
Applying changes to the target infrastructure to reach the desired configuration is the role of the terraform apply command, not terraform plan. Terraform plan is used to preview the changes that will be made before actually applying them.

Overall explanation
The terraform plan command is used to create an execution plan. Terraform performs a refresh, unless explicitly disabled, and then determines what actions are necessary to achieve the desired state specified in the configuration files.

After a plan has been run, it can be executed by running a terraform apply

https://developer.hashicorp.com/terraform/cli/commands/plan

Domain
Objective 6 - Use the Core Terraform Workflow
Question 13
Correct
Given the Terraform configuration below, which order will the resources be created?



resource "aws_instance" "web_server" {
    ami = "i-abdce12345"
    instance_type = "t2.micro"
}
 
resource "aws_eip" "web_server_ip" { 
    vpc = true 
    instance = aws_instance.web_server.id 
}
Your answer is correct
aws_instance will be created first

aws_eip will be created second

Explanation
The correct order is that the `aws_instance` resource will be created first because the `aws_eip` resource references the `aws_instance` resource using its ID. Therefore, the `aws_instance` resource must be created before the `aws_eip` resource can be created.
aws_eip will be created first

aws_instance will be created second

Explanation
This order is incorrect because the `aws_eip` resource depends on the `aws_instance` resource. The `aws_eip` resource needs the ID of the `aws_instance` resource to associate the Elastic IP with the instance. Therefore, the `aws_instance` resource must be created first.
no resources will be created

Explanation
This choice is incorrect because both the `aws_instance` and `aws_eip` resources are defined in the Terraform configuration. Therefore, resources will be created, but the correct order is that the `aws_instance` resource will be created first.
resources will be created in parallel

Explanation
While Terraform can create resources in parallel when there are no dependencies between them, in this case, the `aws_eip` resource depends on the `aws_instance` resource. Therefore, they cannot be created in parallel, and the correct order is to create the `aws_instance` resource first.
Overall explanation
The aws_instance will be created first, and then aws_eip will be created second due to the aws_eip's resource dependency of the aws_instance id

More information on resource dependencies can be found at this link.

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 14
Correct
Stephen is writing brand new code and needs to ensure it is syntactically valid and internally consistent. Stephen doesn't want to wait for Terraform to access any remote services while making sure his code is valid. What command can he use to accomplish this?

terraform apply -refresh-only

Explanation
The 'terraform apply -refresh-only' command is used to apply changes to the infrastructure while only refreshing the state without making any actual changes. It does not perform a validation check on the code to ensure its syntactic validity and internal consistency.
terraform fmt

Explanation
The 'terraform fmt' command is used to automatically format Terraform configuration files to a consistent style. While it helps maintain code readability and consistency, it does not specifically validate the syntax or internal consistency of the code like the 'terraform validate' command does.
terraform show

Explanation
The 'terraform show' command is used to display the current state or configuration of Terraform-managed infrastructure. It does not perform a validation check on the code to ensure its syntactic validity and internal consistency like the 'terraform validate' command does.
Your answer is correct
terraform validate

Explanation
The 'terraform validate' command is used to check whether the configuration files are syntactically valid and internally consistent without accessing any remote services. It is a quick way to ensure that the code is correctly written and structured before attempting to apply it.
Overall explanation
The terraform validate command validates the configuration files in a directory, referring only to the configuration and not accessing any remote services such as remote state, provider APIs, etc.

Validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state. It is thus primarily useful for general verification of reusable modules, including correctness of attribute names and value types.

https://developer.hashicorp.com/terraform/cli/commands/validate

Domain
Objective 6 - Use the Core Terraform Workflow
Question 15
Correct
Frank has a file named main.tf which is shown below. Which of the following statements are true about this code? (select two)



module "servers" {
  source = "./modules/app-cluster"
 
  servers = 5
}
app-cluster is the calling module

Explanation
app-cluster is not the calling module in this code snippet. It is the child module that is being referenced by the calling module "main.tf" using the module block. The child module contains the specific configuration and resources that will be used by the calling module.
Your selection is correct
app-cluster is the child module

Explanation
app-cluster is the child module in this code snippet because it is being referenced by the calling module "main.tf" using the module block. The child module contains the specific configuration and resources that will be used by the calling module.
main.tf is the child module

Explanation
main.tf is not the child module in this code snippet. It is the calling module that is using the child module "app-cluster" to define and manage resources. The child module is typically a separate directory or set of files that the calling module references.
Your selection is correct
main.tf is the calling module

Explanation
main.tf is the calling module in this code snippet because it is referencing the child module "app-cluster" using the module block. The calling module is responsible for defining how the child module should be used and can pass input variables to it.
Overall explanation
To call a module means to include the contents of that module into the configuration with specific values for its input variables. Modules are called from within other modules using module blocks. A module that includes a module block like this is the calling module of the child module.

The label immediately after the module keyword is a local name, which the calling module can use to refer to this instance of the module.

https://developer.hashicorp.com/terraform/language/modules#calling-a-child-module

Domain
Objective 5 - Interact with Terraform Modules
Question 16
Correct
In the terraform block, which configuration would be used to identify the specific version of a provider required?

Your answer is correct
required_providers

Explanation
The correct configuration to identify the specific version of a provider required is the "required_providers" block in the terraform configuration. This block allows you to specify the provider name and version constraints, ensuring that the correct version of the provider is used for the Terraform configuration.
required-version

Explanation
The "required-version" configuration is not the correct syntax for identifying the specific version of a provider required in the terraform block. The accurate way to specify provider versions is through the "required_providers" block, which allows you to define the provider name and version constraints.
required_versions

Explanation
The "required_versions" configuration is not the appropriate way to identify the specific version of a provider required in the terraform block. The correct method is to use the "required_providers" block, which enables you to define the provider name and version constraints for the Terraform configuration.
required-provider

Explanation
The "required-provider" configuration is not a valid option for identifying the specific version of a provider required in the terraform block. The correct syntax for specifying provider versions is using the "required_providers" block, not "required-provider".
Overall explanation
To identify a specific version of a provider in Terraform, you can use the required_providers configuration block. This block allows you to specify the provider's name and the version range you want to use by using Terraform's version constraints syntax.

Here's an example of how to use the required_providers block to specify a specific version of the AWS provider:



terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.57.0"
    }
  }
}


In this example, we're specifying that we require version 3.57.0 of the AWS provider, which is hosted at the hashicorp/aws source. Note that the version constraint syntax allows you to specify a range of versions using operators such as >= and <=.

When you run terraform init with this configuration, Terraform will download and install the specified version of the AWS provider, and will use it for all subsequent Terraform commands for that module. If the specified version is not available, Terraform will return an error and fail to initialize the configuration.



https://developer.hashicorp.com/terraform/language/providers/requirements#requiring-providers

Domain
Objective 3 - Understand Terraform Basics
Question 17
Correct
What are the benefits of using Infrastructure as Code? (select five)

Your selection is correct
Infrastructure as Code allows a user to turn a manual task into a simple, automated deployment

Explanation
Infrastructure as Code allows users to automate the deployment of infrastructure, turning manual tasks into repeatable, reliable, and efficient processes. This automation reduces the chances of human error and ensures consistent deployments every time.
Your selection is correct
Infrastructure as Code is easily repeatable, allowing the user to reuse code to deploy similar, yet different resources

Explanation
With Infrastructure as Code, users can easily reuse code to deploy similar resources, saving time and effort. This reusability feature allows for efficient scaling and management of infrastructure without the need to start from scratch for each deployment.
Your selection is correct
Infrastructure as Code provides configuration consistency and standardization among deployments

Explanation
Infrastructure as Code promotes configuration consistency and standardization across deployments. By defining infrastructure as code, users can ensure that all environments are set up in the same way, reducing configuration drift and potential issues.
Infrastructure as Code easily replaces development languages such as Go and .Net for application development

Explanation
This choice is incorrect as Infrastructure as Code is not meant to replace development languages like Go or .Net for application development. Instead, IaC focuses on defining and managing infrastructure resources in a declarative manner, separate from application code.
Your selection is correct
Infrastructure as Code gives the user the ability to recreate an application's infrastructure for disaster recovery scenarios

Explanation
One of the key benefits of Infrastructure as Code is the ability to recreate an application's infrastructure quickly and accurately in disaster recovery scenarios. By having infrastructure defined as code, users can easily spin up new environments to recover from disasters or failures.
Your selection is correct
Infrastructure as Code is relatively simple to learn and write, regardless of a user's prior experience with developing code

Explanation
Infrastructure as Code is designed to be user-friendly and relatively simple to learn and write, even for those with limited coding experience. This accessibility makes it easier for users to adopt and implement IaC practices in their workflows.
Overall explanation
Infrastructure as Code (IaC) refers to the practice of managing and provisioning infrastructure resources through code, rather than manual processes or user interfaces. Some of the benefits of using IaC include:



Consistency and repeatability: IaC allows for the creation of infrastructure in a consistent and repeatable way. This ensures that the same infrastructure can be deployed across multiple environments (e.g. development, testing, production) with minimal differences, reducing the risk of issues due to configuration drift or environment-specific issues.

Speed and agility: IaC allows for rapid provisioning and scaling of infrastructure resources, reducing the time it takes to set up and modify infrastructure. This enables teams to quickly respond to changing business needs or shifting workloads, without the delays associated with manual provisioning processes.

Version control: IaC code can be stored in version control systems, allowing teams to track changes over time and revert to previous versions if necessary. This provides a history of infrastructure changes and ensures that teams are always working with the most up-to-date version of the infrastructure code.

Collaboration and documentation: IaC code can be shared and collaborated on, allowing teams to work together to design and maintain infrastructure resources. It also provides a single source of truth for documentation, making it easier to understand how the infrastructure is configured and how it has changed over time.

Cost savings: IaC can help reduce infrastructure costs by allowing teams to more effectively manage resources, optimize usage, and avoid over-provisioning. It can also reduce the need for manual intervention, which can save time and reduce the risk of errors.

Overall, using IaC can help organizations achieve greater consistency, speed, agility, collaboration, and cost savings in their infrastructure management practices.

https://developer.hashicorp.com/terraform/intro#infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 18
Correct
Please fill the blank field(s) in the statement with the right words.

You can use the command __ to reformat your configuration files in the standard canonical style for HCL.

Your answer is correct
terraform fmt
Explanation
Note: If you got this wrong but entered a valid command, you're all set. Udemy only lets me include one correct answer, even though there could be multiple ways to answer the question.

The terraform fmt command in Terraform is used to automatically format Terraform configuration files according to a consistent style defined by the Terraform language. This command helps ensure that your Terraform code follows a standard formatting convention, making it easier to read and maintain.

When you run terraform fmt, Terraform analyzes your configuration files and adjusts indentation, spacing, and other formatting details to comply with the prescribed style. This command is especially useful when working in teams, as it helps enforce a consistent coding style across different contributors.

By using terraform fmt regularly, you can keep your Terraform codebase clean and organized, improving readability and making it easier to collaborate on infrastructure projects.

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 19
Correct
Please fill the blank field(s) in the statement with the right words.

The __ command can be used to get an interactive console to evaluate expressions in your Terraform code.

Your answer is correct
terraform console
Explanation
Note: If you got this wrong but entered a valid command, you're all set. Udemy only lets me include one correct answer, even though there could be multiple ways to answer the question.

terraform console [options]

This command provides an interactive command-line console for evaluating and experimenting with expressions.

Domain
Objective 6 - Use the Core Terraform Workflow
Question 20
Correct
Why is it a good idea to declare the required version of a provider in a Terraform configuration file?



terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.57.0"
    }
  }
}


to ensure that the provider version matches the version of Terraform you are using

Explanation
The version of the provider should match the version of Terraform being used to avoid compatibility issues. By declaring the required version of the provider in the configuration file, you ensure that the correct version is used and that the configuration runs smoothly without any version conflicts.
to match the version number of your application being deployed via Terraform

Explanation
Declaring the required version of a provider in a Terraform configuration file is not done to match the version number of the application being deployed. The provider version is specified to ensure compatibility and consistency with the Terraform configuration, regardless of the version of the application being deployed.
to remove older versions of the provider

Explanation
Declaring the required version of a provider in a Terraform configuration file does not remove older versions of the provider. It simply specifies which version of the provider should be used for the configuration. Older versions of the provider may still exist on the system, but the configuration will only use the specified version.
Your answer is correct
providers are released on a separate schedule from Terraform itself; therefore, a newer version could introduce breaking changes

Explanation
Declaring the required version of a provider in a Terraform configuration file is important because providers are released independently from Terraform. This means that a newer version of a provider could potentially introduce breaking changes that are not compatible with the current configuration. Specifying the version ensures that the configuration works as expected with the specific provider version.
Overall explanation
Declaring the required version of a provider in a Terraform configuration file is a good idea for several reasons:



Reproducibility: By specifying the exact version of a provider, you can ensure that anyone who runs your Terraform configuration will use the same version of the provider as you. This makes your infrastructure configuration more reproducible and helps avoid issues that can arise when different versions of a provider are used.

Predictability: When you specify a specific provider version, you can be confident that your infrastructure configuration will behave predictably, regardless of changes to the provider in future versions. This can help you avoid surprises and reduce the risk of unintended consequences.

Compatibility: Different versions of a provider may have different APIs, resources, or behaviors, which can cause issues if you switch to a new version without realizing the differences. By specifying the required version of a provider in your Terraform configuration, you can ensure that your configuration remains compatible with the specific version of the provider you have tested and validated.

Version locking: When you specify the required version of a provider in your Terraform configuration, you effectively lock the version of the provider to that version unless you explicitly change it. This can help prevent issues that may arise when using a different, potentially incompatible version of the provider.

In summary, specifying the required version of a provider in your Terraform configuration file helps ensure that your infrastructure configuration is more predictable, reproducible, compatible, and reduces the risk of unintended consequences or issues caused by version differences.



https://developer.hashicorp.com/terraform/language/providers/requirements#requiring-providers

Domain
Objective 3 - Understand Terraform Basics
Question 21
Correct
By default, where does Terraform Community/CLI store its state file?

Your answer is correct
current working directory

Explanation
The correct choice. By default, Terraform Community/CLI stores its state file in the current working directory where the Terraform configuration files are located. This allows for easy access and management of the state file.

Amazon S3 bucket

Explanation
Terraform Community/CLI does not store its state file by default in an Amazon S3 bucket. While it is possible to configure Terraform to store state files in S3, this is not the default behavior.

shared directory

Explanation
Terraform Community/CLI does not store its state file by default in a shared directory. While it is possible to configure Terraform to store state files in a shared directory, this is not the default behavior.

remotely using HCP Terraform

Explanation
Terraform Community/CLI does not store its state file by default remotely using HCP Terraform. While HCP Terraform can be used as a remote backend for storing state files, this is not the default behavior for Terraform Community/CLI.

Overall explanation
By default, the state file is stored in a local file named "terraform.tfstate", but it can also be stored remotely, which works better in a team environment.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration

Domain
Objective 7 - Implement and Maintain State
Question 22
Correct
What Terraform command can be used to inspect the current state file?

Example:


terraform inspect

Explanation
The 'terraform inspect' command is not a valid Terraform command for inspecting the current state file. It is not a built-in command in Terraform and does not serve the purpose of inspecting the state file.
Your answer is correct
terraform show

Explanation
The 'terraform show' command is used to inspect the current state file in Terraform. It displays the current state as Terraform sees it, including resource attributes and dependencies.
terraform state

Explanation
The 'terraform state' command is used to perform operations on the Terraform state, such as listing resources, showing resource attributes, and more. However, it is not specifically used to inspect the current state file like the 'terraform show' command.
terraform read

Explanation
The 'terraform read' command is not a valid Terraform command for inspecting the current state file. It is used for reading a configuration file and printing the configuration in a human-readable format, not for inspecting the state file.
Overall explanation
The terraform show command is used to provide human-readable output from a state or plan file. This can be used to inspect a plan to ensure that the planned operations are expected, or to inspect the current state as Terraform sees it.

Machine-readable output can be generated by adding the -json command-line flag.

Note: When using the -json command-line flag, any sensitive values in Terraform state will be displayed in plain text.

https://developer.hashicorp.com/terraform/cli/commands/show

Domain
Objective 7 - Implement and Maintain State
Question 23
Correct
Aaron deployed multiple VMs outside the Terraform workflow, and now your team is unsure which VM is managed by Terraform. What approach would best help you identify the Terraform-managed VM without making any changes to the infrastructure?

Your answer is correct
Use Terraform state commands (e.g., terraform state list and terraform state show) to match the tracked VM’s ID with the list of active VMs.

Explanation
Using Terraform state commands like terraform state list and terraform state show to match the tracked VM's ID with the list of active VMs is a valid method to identify the Terraform-managed VM. By comparing the state information stored by Terraform with the actual VM instances, you can determine which VMs are managed by Terraform.

Use the provider’s CLI or API to label all VMs, then rely on Terraform to overwrite any unlabeled instances.

Explanation
Using the provider's CLI or API to label all VMs and relying on Terraform to overwrite any unlabeled instances is not a recommended approach to identify the Terraform-managed VM. This method involves making changes to the infrastructure by labeling VMs, which goes against the requirement of not making any changes to identify the managed VM.
Delete every VM that isn’t clearly documented, assuming any missing VM will be recreated by Terraform.

Explanation
Deleting every VM that isn't clearly documented and assuming any missing VM will be recreated by Terraform is not a recommended approach. This method can lead to unintended consequences, such as data loss or downtime, as Terraform may not recreate the VMs exactly as they were before.
Update your Terraform configuration to reference each VM ID and run terraform plan to see which resource shows no changes.

Explanation
Updating the Terraform configuration to reference each VM ID and running terraform plan to see which resource shows no changes is not the most efficient way to identify the Terraform-managed VM. This method involves manual intervention and may not provide a clear indication of which VMs are managed by Terraform without making unnecessary changes to the infrastructure.

Overall explanation
This question tests the student's understanding of how Terraform manages its state and how to identify resources that are being tracked by Terraform. Since Terraform keeps track of resources it manages in a state file, the correct approach to identifying which VM is under Terraform’s control would involve using Terraform state's commands (terraform state list and terraform state show) to cross-reference the VM IDs. This helps ensure accurate management of resources and avoid accidental modifications outside Terraform's oversight. for 5 seconds

This question addresses a scenario where multiple VMs have been created outside of Terraform, and the team needs to determine which one is actually tracked by Terraform. The goal is to identify the best approach to match the Terraform-managed VM’s ID with the list of active VM IDs, ensuring proper state management going forward.

https://developer.hashicorp.com/terraform/cli/commands/state

Domain
Objective 7 - Implement and Maintain State
Question 24
Correct
When using variables in HCP Terraform, what level of scope can the variable be applied to? (select three)

Your selection is correct
All current and future workspaces in a project using a variable set

Explanation
Variables can be applied to all current and future workspaces in a project by using a variable set. This level of scope ensures that the variables are available to any new workspaces created within the project, maintaining consistency and standardization across all workspaces.
Your selection is correct
Multiple workspaces using a variable set

Explanation
By using a variable set, variables can be applied to multiple workspaces, enabling consistent configuration across different environments. This approach simplifies management and ensures that the same variable values are used across all workspaces that are part of the variable set.
All workspaces across multiple HCP Terraform organizations

Explanation
Applying variables to all workspaces across multiple HCP Terraform organizations is not a valid scope for variables in HCP Terraform. Variables are typically scoped within a project or workspace to maintain organization and control over configuration settings.

Your selection is correct
A specific Terraform run in a single workspace

Explanation
A variable can be applied to a specific Terraform run in a single workspace, allowing for customization and flexibility within that specific execution environment. This level of scope ensures that the variable's values are only used within the context of that particular run.
Overall explanation
HCP Terraform allows you to store important values in one place, which you can use across multiple projects. You can easily update the values, and the changes will apply to all projects that use them. Additionally, you can modify the values for specific projects without affecting others that use the same values. HCP Terraform allows you to use variables within a workspace, or use variable sets that can be used across multiple (or all) HCP Terraform workspaces.

Run-specific variables can be used by setting Terraform variable values using the -var and -var-file arguments in a single workspace

You can create a variable set by adding variables to the variable set and then applying a variable set scope so it can be used by multiple HCP Terraform workspaces

You can also apply the variable set globally, which will apply the variable set to all existing and future workspaces



Wrong Answer:

Variable sets are constrained to a single organization. You can't create variable sets that can be used across multiple HCP Terraform organizations.



https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 25
Correct
True or False? Before installing and using Terraform, you must download and install Go as a prerequisite.

True

Explanation
False. Installing Go (the programming language) is not a prerequisite for installing and using Terraform. Terraform is distributed as a standalone binary executable that can be downloaded and installed directly from the Terraform website or via package managers like Homebrew (on macOS) or Chocolatey (on Windows).

Your answer is correct
False

Explanation
Correct. Installing Go (the programming language) is not a prerequisite for installing and using Terraform. Terraform is distributed as a standalone binary executable that can be downloaded and installed directly from the Terraform website or via package managers like Homebrew (on macOS) or Chocolatey (on Windows).

Overall explanation
While Go is used by HashiCorp developers to build Terraform from its source code, end-users do not need to install Go themselves. They can simply download the pre-built Terraform binary suitable for their operating system and architecture, making the installation process straightforward and independent of Go.

https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 26
Correct
You found a module on the Terraform Registry that will provision the resources you need. What information can you find on the Terraform Registry to help you quickly use this module? (select three)

A Download button to Quickly Get the Module Code

Explanation
A Download button to Quickly Get the Module Code is not typically found on the Terraform Registry. While you can access the module code from the registry, the focus is more on providing information about the module, such as input variables, outputs, and dependencies, rather than offering a direct download button.
Your selection is correct
Dependencies to use the Module

Explanation
Dependencies to use the Module is valuable information that can be found on the Terraform Registry. Dependencies specify any other modules or resources that the module relies on to function properly. Knowing the dependencies helps you ensure that all necessary components are in place before using the module.
Your selection is correct
A list of Outputs

Explanation
A list of Outputs is another important piece of information available on the Terraform Registry for a module. Outputs define the values that are exposed by the module after it has been applied. Understanding the outputs helps you utilize the resources provisioned by the module in your Terraform configuration.
Your selection is correct
Required Input Variables

Explanation
Required Input Variables are crucial information that you can find on the Terraform Registry for a module. Knowing the required input variables helps you understand what values need to be provided to the module for it to function correctly. This information is essential for quickly using the module without any errors.
Overall explanation
The Terraform Registry makes it simple to find and use modules.

Every page on the registry has a search field for finding modules. Enter any type of module you're looking for (examples: "vault," "vpc," "database"), and the resulting modules will be listed. The search query will look at the module name, provider, and description to match your search terms. On the results page, filters can be used to further refine search results.

https://developer.hashicorp.com/terraform/registry/modules/use

Domain
Objective 5 - Interact with Terraform Modules
Question 27
Correct
Which of the following Terraform files should be ignored by Git when committing code to a repo? (select two)

Your selection is correct
terraform.tfvars

Explanation
The `terraform.tfvars` file contains variable values that are specific to a particular environment or deployment. It should be excluded from version control to prevent accidental exposure of sensitive information and to allow different environments to have their own variable values.
outputs.tf

Explanation
The `outputs.tf` file contains output values that are generated by the Terraform configuration. Including this file in version control helps to track and manage the outputs of the infrastructure deployment.
variables.tf

Explanation
The `variables.tf` file typically contains variable definitions used in the Terraform configuration. It is important to include this file in version control to ensure consistency and visibility of the variables used in the infrastructure code.
Your selection is correct
terraform.tfstate

Explanation
The `terraform.tfstate` file stores the current state of the infrastructure managed by Terraform. It should not be committed to version control as it contains sensitive information and can be dynamically updated during Terraform operations.
Overall explanation
When using Terraform with Git, it is generally recommended to ignore certain files in order to avoid committing sensitive or unnecessary information to your repository. The specific files that should be ignored may vary depending on your project and configuration, but as a general rule, you should ignore the following files:



.terraform directory: This directory contains local Terraform state files, which should not be committed to the repository.

terraform.tfstate and terraform.tfstate.backup: These files contain the current state of your infrastructure, and should not be committed to the repository.

.tfvars files: These files may contain sensitive information, such as passwords or API keys, and should be kept out of version control. Instead, you can use environment variables or other secure methods to pass this information to Terraform.

*.tfplan files: These files contain the plan generated by Terraform when applying changes to your infrastructure, and may include sensitive information such as resource IDs. They should not be committed to the repository.

To ignore these files in Git, you can add them to your .gitignore file.

https://github.com/github/gitignore/blob/main/Terraform.gitignore

https://www.hashicorp.com/resources/a-practitioner-s-guide-to-using-hashicorp-terraform-cloud-with-github#:~:text=Gitignore%20Considerations

Domain
Objective 3 - Understand Terraform Basics
Question 28
Correct
What happens when a terraform apply command is executed?

Your answer is correct
applies the changes required in the target infrastructure in order to reach the desired configuration

Explanation
The terraform apply command is responsible for applying the changes specified in the Terraform configuration to the target infrastructure. It ensures that the infrastructure matches the desired state defined in the configuration files.
reconciles the state Terraform knows about with the real-world infrastructure

Explanation
Reconciling the state is a process that occurs during the terraform apply command. It compares the current state of the infrastructure with the state that Terraform knows about and makes any necessary changes to align the infrastructure with the desired configuration.
creates the execution plan for the deployment of resources

Explanation
Creating the execution plan is a step that precedes the terraform apply command. The execution plan outlines the actions that Terraform will take to achieve the desired configuration, but it is not the actual application of changes to the infrastructure.
the backend is initialized and the working directory is prepped

Explanation
Initializing the backend and preparing the working directory are tasks that are typically performed before executing the terraform apply command. These steps ensure that Terraform has the necessary configuration and access to the backend to apply changes to the infrastructure.
Overall explanation
The terraform apply command is used to apply the changes required to reach the desired state of the configuration, or the pre-determined set of actions generated by a terraform plan execution plan.

https://developer.hashicorp.com/terraform/cli/commands/apply

Domain
Objective 6 - Use the Core Terraform Workflow
Question 29
Correct
After executing a terraform plan, you notice that a resource has a tilde (~) next to it. What does this mean?

the resource will be created

Explanation
The presence of a tilde (~) next to a resource in the terraform plan does not indicate that the resource will be created. Instead, it suggests that the resource will be updated in place, maintaining its existing state.
the resource will be destroyed and recreated

Explanation
The tilde (~) next to a resource in the terraform plan output indicates that the resource will be updated in place, meaning Terraform will make changes to the existing resource without destroying and recreating it.
Terraform can't determine how to proceed due to a problem with the state file

Explanation
If a resource has a tilde (~) next to it in the terraform plan, it does not mean that Terraform can't determine how to proceed due to a problem with the state file. Instead, it signifies that the resource will be updated in place, without being destroyed and recreated.
Your answer is correct
the resource will be updated in place

Explanation
When a resource has a tilde (~) next to it in the terraform plan, it signifies that the resource will be updated in place, preserving its current state and making necessary modifications without recreating it.
Overall explanation
The prefix -/+ means that Terraform will destroy and recreate the resource, rather than updating it in-place. Some attributes and resources can be updated in-place and are shown with the ~ prefix.



https://developer.hashicorp.com/terraform/cli/commands/plan

https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code

Domain
Objective 6 - Use the Core Terraform Workflow
Question 30
Correct
Which Terraform command will force a resource to be destroyed and recreated even if there are no configuration changes that would require it?

terraform destroy

Explanation
The `terraform destroy` command is used to destroy all resources defined in the Terraform configuration. It does not force a specific resource to be destroyed and recreated, regardless of configuration changes.
Your answer is correct
terraform apply -replace=<address>

Explanation
The `terraform apply -replace=` command is used to force a resource to be destroyed and recreated, even if there are no configuration changes that would require it. This is achieved by specifying the resource address that needs to be replaced, ensuring that the resource is recreated with the latest configuration.
terraform apply -refresh-only

Explanation
The `terraform apply -refresh-only` command is used to update the state file with the latest real-world infrastructure information without making any changes to the resources. It does not force a resource to be destroyed and recreated, even if there are no configuration changes that would require it.
terraform fmt

Explanation
The `terraform fmt` command is used to format Terraform configuration files to ensure consistency and readability. It does not force a resource to be destroyed and recreated, regardless of configuration changes.
Overall explanation
The terraform apply -replace=<address> command manually marks a Terraform-managed resource to be replaced, forcing it to be destroyed and recreated during the apply. Even if there are no configuration changes that would require a change or deletion of this resource, this command will instruct Terraform to replace it. This can come in handy if a resource has become degraded or damaged outside of Terraform.

IMPORTANT - PLEASE READ

This command replaces terraform taint, and it's possible you may still see terraform taint on the exam. Be prepared to know both of these commands.



https://developer.hashicorp.com/terraform/cli/commands/taint

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 31
Correct
Select the answer below that completes the following statement:

HCP Terraform can be managed from the CLI but requires __________?

a username and password

Explanation
Using a username and password is not the specific requirement for managing HCP Terraform from the CLI. Instead, an API token is the preferred method for authentication and access control when interacting with HCP Terraform from the CLI.

Your answer is correct
an API token

Explanation
HCP Terraform can be managed from the CLI by using an API token. The API token serves as a secure way to authenticate and authorize CLI access to HCP Terraform resources and operations.

authentication using MFA

Explanation
Authentication using MFA (Multi-Factor Authentication) is not specifically required for managing HCP Terraform from the CLI. While MFA can enhance security, it is not a mandatory requirement for CLI access to HCP Terraform.

a TOTP token

Explanation
A TOTP (Time-based One-Time Password) token is not required for managing HCP Terraform from the CLI. TOTP tokens are typically used for two-factor authentication but are unnecessary for CLI access to HCP Terraform.

Overall explanation
API and CLI access are managed with API tokens, which can be generated in the HCP Terraform UI. Each user can generate any number of personal API tokens, which allow access with their own identity and permissions. Organizations and teams can also generate tokens for automating tasks that aren't tied to an individual user.

https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/api-tokens

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 32
Correct
What is the downside to using Terraform to interact with sensitive data, such as reading secrets from Vault?

Terraform and Vault must be running on the same version

Explanation
The compatibility between Terraform and Vault versions is not a downside to using Terraform to interact with sensitive data. While it is recommended to keep both tools up to date for compatibility and security reasons, it is not a specific downside related to handling sensitive data.
Your answer is correct
secrets are persisted to the state file

Explanation
Using Terraform to interact with sensitive data like secrets from Vault can lead to the secrets being persisted to the state file. This poses a security risk as the state file may contain sensitive information that could be exposed if not properly managed or secured.
Terraform and Vault must be running on the same physical host

Explanation
Terraform and Vault do not need to be running on the same physical host to interact with each other. They can communicate over the network, and it is common practice to run them on separate hosts for better security and scalability. This is not a downside to using Terraform to interact with sensitive data from Vault.
Terraform requires a unique auth method to work with Vault

Explanation
Terraform does not require a unique authentication method to work with Vault as it supports various authentication methods provided by Vault. While setting up proper authentication and authorization mechanisms is crucial for securely interacting with sensitive data in Vault, this is not a downside specific to using Terraform.
Overall explanation
Interacting with Vault from Terraform causes any secrets that you read and write to be persisted in both Terraform's state file and in any generated plan files. For any Terraform module that reads or writes Vault secrets, these files should be treated as sensitive and protected accordingly.

https://registry.terraform.io/providers/hashicorp/vault/latest/docs

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 33
Correct
True or False? You can migrate the Terraform backend but only if there are no resources currently being managed.

Your answer is correct
False

Explanation
False. This statement is correct. You can migrate the Terraform backend even if there are resources currently being managed. Migrating the backend involves moving the state file and configuration to a new location, which can be done without impacting the resources being managed by Terraform.
True

Explanation
True. This statement is incorrect. In reality, you can migrate the Terraform backend even if there are resources currently being managed. Migrating the backend involves moving the state file and configuration to a new location, which can be done without impacting the resources being managed by Terraform.
Overall explanation
If you are already using Terraform to manage infrastructure, you probably want to transfer to another backend, such as HCP Terraform, so you can continue managing it. By migrating your Terraform state, you can hand off infrastructure without de-provisioning anything.

https://learn.hashicorp.com/tutorials/terraform/cloud-migrate

Domain
Objective 7 - Implement and Maintain State
Question 34
Correct
Which of the following describes the process of leveraging a local value within a Terraform module and exporting it for use by another module?

Defining the local value in the first module, then passing it as an argument to the second module.

Explanation
This choice is incorrect as passing a local value as an argument to another module does not involve exporting and importing the value. It is a different method of sharing values between modules in Terraform.
Your answer is correct
Exporting the local value as an output from the first module, then importing it into the second module's configuration.

Explanation
This choice correctly describes the process of exporting a local value from one Terraform module by defining it as an output and then importing it into another module's configuration. This allows for the sharing of values between modules.
Importing the local value directly into the second module's configuration.

Explanation
This choice is incorrect as importing a local value directly into another module's configuration is not a standard practice in Terraform. Exporting the value as an output and then importing it is the recommended approach for sharing values between modules.
Using Terraform's built-in cross-module referencing feature to automatically share local values between modules.

Explanation
This choice is incorrect as Terraform does not have a built-in cross-module referencing feature to automatically share local values between modules. Exporting and importing values through outputs and configurations is the standard way to achieve this in Terraform.
Overall explanation
To use a local value in one Terraform module and make it available to another, you can define the local value within the first module and then export it as an output. The exported value can then be imported into the configuration of the second module. This approach establishes a clear pathway for sharing data between modules, enabling efficient and modular infrastructure management within your Terraform configurations.

https://developer.hashicorp.com/terraform/language/values/locals

Domain
Objective 3 - Understand Terraform Basics
Question 35
Correct
What Terraform feature is shown in the example below?



 resource "aws_security_group" "example" {
  name = "sg-app-web-01"
 
  dynamic "ingress" {
    for_each = var.service_ports
    content {
      from_port = ingress.value
      to_port   = ingress.value
      protocol  = "tcp"
    }
  }
}
Your answer is correct
dynamic block

Explanation
The code snippet demonstrates the use of a dynamic block in Terraform, which allows for dynamic generation of nested blocks based on a given input. In this case, the dynamic block is used to create multiple ingress rules for an AWS security group based on the values provided in the var.service_ports variable.
local values

Explanation
Local values in Terraform are used to define variables within a module that are not exposed outside of that module. The code snippet does not involve the use of local values, so it is not an example of defining local values.
conditional expression

Explanation
Conditional expressions in Terraform are used to conditionally include or exclude resources or configuration based on certain conditions. The code snippet does not involve any conditional logic, so it is not an example of a conditional expression.
data source

Explanation
Data sources in Terraform are used to fetch and reference data from external sources, such as AWS S3 buckets or databases. The code snippet does not involve the use of data sources, so it is not an example of a data source.
Overall explanation
You can dynamically construct repeatable nested blocks like ingress using a special dynamic block type, which is supported inside resource, data, provider, and provisioner blocks.

https://developer.hashicorp.com/terraform/language/expressions#dynamic-blocks

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 36
Correct
From the answers below, select the advantages of using Infrastructure as Code. (select four)

Your selection is correct
Easily change and update existing infrastructure

Explanation
Easily changing and updating existing infrastructure is a key advantage of using Infrastructure as Code. With IaC, infrastructure configurations are managed as code, allowing for quick and efficient modifications to infrastructure resources.
Your selection is correct
Easily integrate with application workflows (GitHub Actions, Azure DevOps, CI/CD tools)

Explanation
Easily integrating with application workflows, such as GitHub Actions, Azure DevOps, and CI/CD tools, is a valuable advantage of using Infrastructure as Code. This seamless integration enhances automation and streamlines the deployment process.
Provide a codified workflow to develop customer-facing applications

Explanation
Providing a codified workflow to develop customer-facing applications is not a direct advantage of using Infrastructure as Code. While IaC can facilitate the development process, this choice does not specifically highlight the benefits of IaC itself.
Your selection is correct
Safely test modifications using a "dry run" before applying any actual changes

Explanation
Safely testing modifications using a "dry run" before applying any actual changes is a significant advantage of using Infrastructure as Code. This practice helps prevent potential errors or issues by simulating changes before implementing them in the actual infrastructure.
Your selection is correct
Provide reusable modules for easy sharing and collaboration

Explanation
Providing reusable modules for easy sharing and collaboration is another important advantage of using Infrastructure as Code. By creating modular infrastructure components, teams can share and collaborate on standardized configurations, promoting consistency and efficiency in infrastructure management.
Overall explanation
Infrastructure as Code is not used to develop applications, but it can be used to help deploy or provision those applications to a public cloud provider or on-premises infrastructure.

All of the others are benefits to using Infrastructure as Code over the traditional way of managing infrastructure, regardless if it's public cloud or on-premises.

https://developer.hashicorp.com/terraform/intro

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 37
Correct
When using modules to deploy infrastructure, how would you export a value from one module to import into another module?

For example, a module dynamically deploys an application instance or virtual machine, and you need the IP address in another module to configure a related DNS record in order to reach the newly deployed application.

Your answer is correct
configure an output value in the application module in order to use that value for the DNS module

Explanation
Configuring an output value in the application module allows you to explicitly define what values should be shared with other modules. By defining an output value in the application module, you can easily import this value into the DNS module to configure the related DNS record.
configure the pertinent provider's configuration with a list of possible IP addresses to use

Explanation
Configuring the provider's configuration with a list of possible IP addresses to use is not the correct method for exporting and importing values between modules in Terraform. This approach does not provide a dynamic and flexible way to share values between modules and may lead to hardcoding values, making the infrastructure less adaptable to changes.
export the value using terraform export and input the value using terraform input

Explanation
The method of exporting a value using "terraform export" and inputting the value using "terraform input" is not a valid approach in Terraform for sharing values between modules. Terraform does not have built-in commands like "terraform export" for exporting values between modules.
preconfigure the IP address as a parameter in the DNS module

Explanation
Preconfiguring the IP address as a parameter in the DNS module is not the recommended approach for sharing values between modules in Terraform. While it is possible to pass values as parameters, using output values from the source module is a more structured and maintainable way to share data between modules.
Overall explanation
Output values are like the return values of a Terraform module and have several uses such as a child module using those outputs to expose a subset of its resource attributes to a parent module.

https://developer.hashicorp.com/terraform/language/expressions#references-to-named-values

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 38
Correct
True or False? Multiple providers can be declared within a single Terraform configuration file.

False

Explanation
False. This statement is incorrect. In Terraform, it is possible to declare and configure multiple providers within a single configuration file, enabling users to manage resources from different cloud providers or services simultaneously. This flexibility is a key feature of Terraform that allows for seamless infrastructure management across various platforms.
Your answer is correct
True

Explanation
True. Multiple providers can indeed be declared within a single Terraform configuration file. This allows users to manage resources from different cloud providers or services within the same Terraform configuration, making it easier to maintain and manage infrastructure across various platforms.
Overall explanation
True. Multiple providers can be declared within a single Terraform configuration file. In fact, it is common to declare multiple providers within a single configuration file, particularly when managing resources across multiple cloud providers.

When declaring multiple providers within a single configuration file, each provider should have a unique configuration block that specifies its name, source, and any required settings or credentials. Here's an example of what a configuration block for two different providers might look like:



terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    google = {
      source = "hashicorp/google"
    }
  }
}
 
provider "aws" {
  region = "us-west-2"
  access_key = "ACCESS_KEY"
  secret_key = "SECRET_KEY"
}
 
provider "google" {
  project = "my-project"
  credentials = file("path/to/credentials.json")
}


In this example, we have declared two providers (aws and google) within a single configuration file. The terraform block declares the required providers, while the provider blocks specify the provider-specific settings and credentials.

When executing Terraform commands, you can use the -target option to specify which provider you want to apply changes to. For example, you could apply changes to the AWS provider by running terraform apply -target=aws.



https://developer.hashicorp.com/terraform/language/providers/configuration

Domain
Objective 3 - Understand Terraform Basics
Question 39
Correct
By default, a child module will have access to all variables set in the calling (parent) module.

Your answer is correct
False

Explanation
This choice is correct because, by default, a child module in Terraform does not inherit all variables set in the calling (parent) module. The parent module must explicitly pass variables to the child module by defining input variables in the child module's configuration. This approach helps maintain clear boundaries between modules and prevents unintended variable leakage.

True

Explanation
By default, a child module does not have access to all variables set in the calling (parent) module. The child module must explicitly declare input variables to receive values from the parent module. This ensures that only the necessary variables are passed between modules, promoting modularity and encapsulation.

Overall explanation
A Terraform module (usually the root module of a configuration) can call other modules to include their resources into the configuration. A module that has been called by another module is often referred to as a child module.

When you declare variables in the root module of your configuration, you can set their values using CLI options and environment variables. When you declare them in child modules, the calling module should pass values in the module block.

Example of a module block that has multiple variables passed to it:



module "server" {
  source          = "./modules/server"
  ami             = data.aws_ami.ubuntu.id
  size            = "t2.micro"
  subnet_id       = aws_subnet.public_subnets["public_subnet_3"].id
  security_groups = [aws_security_group.vpc-ping.id, aws_security_group.ingress-ssh.id, aws_security_group.vpc-web.id]
}
https://developer.hashicorp.com/terraform/language/modules/develop

Domain
Objective 5 - Interact with Terraform Modules
Question 40
Correct
True or False? State is a requirement for Terraform to function.

False

Explanation
False. State is a crucial requirement for Terraform to function properly. Without state, Terraform would not be able to track the current state of your infrastructure, manage resources, or apply changes effectively. State enables Terraform to maintain the desired state of your infrastructure and ensure consistency across deployments.
Your answer is correct
True

Explanation
True. State is a fundamental concept in Terraform that stores the current state of your infrastructure. It keeps track of the resources that Terraform manages, their current configuration, and any dependencies between them. Without state, Terraform would not be able to plan, apply, or manage changes to your infrastructure.
Overall explanation
True.

State is a fundamental concept in Terraform that keeps track of the resources Terraform manages, their configuration, and their current state. Terraform uses this information to determine the differences between the desired state and the current state and to generate a plan for creating, updating, or deleting resources to match the desired state.

The state file is a critical component of Terraform and is required for its proper functioning. It is typically stored remotely in a shared location, such as a storage service or version control system, to allow multiple members of a team to collaborate on infrastructure changes.

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's purpose (vs. other IaC)
Question 41
Correct
Which of the following actions are performed during a terraform init? (select three)

Your selection is correct
downloads the required modules referenced in the configuration

Explanation
During a terraform init, Terraform downloads the required modules referenced in the configuration. This ensures that all necessary modules are available locally for use in the Terraform configuration.
Your selection is correct
downloads the providers/plugins required to execute the configuration

Explanation
Terraform init also downloads the providers/plugins required to execute the configuration. Providers are responsible for understanding API interactions and exposing resources for Terraform to manage, so downloading them ensures that Terraform can interact with the specified cloud or infrastructure services.
Your selection is correct
initializes the backend configuration

Explanation
Another action performed during a terraform init is initializing the backend configuration. The backend configuration specifies where state data is stored and how operations should be performed, so initializing it is crucial for managing the state of the infrastructure.
provisions the declared resources in your configuration

Explanation
Provisioning the declared resources in your configuration is not an action performed during a terraform init. Provisioning resources typically occurs after running terraform apply, where Terraform creates, updates, or deletes resources based on the configuration provided.
Overall explanation
The terraform init command is used to initialize a working directory containing Terraform configuration files. This is the first command that should be run after writing a new Terraform configuration or cloning an existing one from version control. It is safe to run this command multiple times.

https://developer.hashicorp.com/terraform/cli/commands/init

https://learn.hashicorp.com/tutorials/terraform/aws-build#create-infrastructure

Domain
Objective 6 - Use the Core Terraform Workflow
Question 42
Correct
What is the best and easiest way for Terraform to read and write secrets from HashiCorp Vault?

integration with a tool like Jenkins

Explanation
Integrating Terraform with a tool like Jenkins can be useful for automating infrastructure provisioning workflows, but it is not the recommended method for reading and writing secrets from HashiCorp Vault. The Vault provider offers a more direct and secure way to manage secrets within Terraform configurations.
Your answer is correct
Vault provider

Explanation
The Vault provider in Terraform allows for seamless integration with HashiCorp Vault, enabling Terraform to securely read and write secrets directly from Vault. This is the recommended and easiest way to manage secrets within Terraform configurations.
CLI access from the same machine running Terraform

Explanation
CLI access from the same machine running Terraform is not the best way to manage secrets from HashiCorp Vault within Terraform. It lacks the automation and security features provided by the Vault provider, making it a less optimal choice for handling secrets in Terraform configurations.
API access using the AppRole auth method

Explanation
While API access using the AppRole auth method is a valid way to interact with HashiCorp Vault, it is not the best or easiest way for Terraform to read and write secrets. The Vault provider offers a more streamlined and integrated approach specifically designed for Terraform workflows.
Overall explanation
The Vault provider allows Terraform to read from, write to, and configure Hashicorp Vault.

https://registry.terraform.io/providers/hashicorp/vault/latest/docs

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 43
Correct
Select two answers to complete the following sentence:

Before a new provider can be used, it must be ______ and _______. (select two)

uploaded to source control

Explanation
Uploading the provider to source control is not a mandatory step for using a new provider in Terraform. While version controlling providers can be beneficial for collaboration and tracking changes, it is not a prerequisite for using a provider in a configuration.
approved by HashiCorp

Explanation
Approval by HashiCorp is not a requirement for using a new provider in Terraform. Providers can be sourced from various locations, such as the Terraform Registry or custom sources, without needing explicit approval from HashiCorp.
Your selection is correct
initialized

Explanation
Initializing a new provider is a necessary step before it can be used in a Terraform configuration. This process downloads the necessary plugins and sets up the provider for use in the configuration.
Your selection is correct
declared or used in a configuration file

Explanation
Declaring or using the new provider in a configuration file is essential for Terraform to recognize and utilize the provider when executing infrastructure changes. This step ensures that the provider is integrated into the configuration workflow.
Overall explanation
Each time a new provider is added to configuration -- either explicitly via a provider block or by adding a resource from that provider -- Terraform must initialize the provider before it can be used. Initialization downloads and installs the provider's plugin so that it can later be executed.

https://developer.hashicorp.com/terraform/language/providers/requirements#provider-installation

Domain
Objective 3 - Understand Terraform Basics
Question 44
Correct
Which of the following is considered a Terraform plugin?

Your answer is correct
Terraform provider

Explanation
A Terraform provider is a type of plugin that extends Terraform's functionality by enabling it to interact with specific types of infrastructure APIs. Providers allow Terraform to manage resources from various cloud providers, services, and platforms, making them a key component of the Terraform ecosystem.
Terraform tooling

Explanation
Terraform tooling includes the various tools and utilities provided by Terraform to facilitate infrastructure provisioning and management. While important for working with Terraform, it does not fall under the category of a plugin.
Terraform language

Explanation
The Terraform language refers to the configuration syntax used to define infrastructure as code in Terraform. While essential for writing Terraform configurations, it is not considered a plugin.
Terraform logic

Explanation
Terraform logic encompasses the decision-making and processing capabilities within Terraform configurations. While crucial for defining the behavior of infrastructure resources, it is not classified as a plugin.
Overall explanation
In Terraform, a plugin is a binary executable that implements a specific provider. A provider is a plugin that allows Terraform to manage a specific cloud provider or service.

When Terraform runs, it loads the plugins required to manage the resources specified in the configuration files. Each provider has its own plugin, and Terraform loads the plugins for the providers specified in the configuration.

The plugin is responsible for interacting with the cloud provider's API, translating Terraform configurations into API calls, and managing the state of the resources that Terraform manages.

Plugins are stored in the Terraform plugin cache, a directory on the local machine that contains the binary executables for each plugin. When Terraform runs, it looks for plugins in the cache and automatically downloads any missing plugins from the Terraform Registry or a specified source.

Terraform plugins are written in Go and follow a specific plugin protocol, which defines the interactions between Terraform and the plugin. The plugin protocol allows Terraform to communicate with the plugin and provides a standard way for plugins to manage resources across different providers.

https://developer.hashicorp.com/terraform/plugin

Domain
Objective 3 - Understand Terraform Basics
Question 45
Correct
What advantages does Terraform offer over using a provider's native tooling for deploying resources in multi-cloud environments? (select three)

Your selection is correct
Terraform simplifies management and orchestration, helping operators build large-scale, multi-cloud infrastructure

Explanation
This choice is correct. Terraform simplifies management and orchestration by providing a unified workflow for defining, provisioning, and managing infrastructure across different cloud environments. This helps operators build and maintain large-scale, multi-cloud infrastructure more effectively.
Terraform is not cloud-agnostic and can only be used to deploy resources across a single public cloud at a time

Explanation
This choice is incorrect. Terraform is actually cloud-agnostic and can be used to deploy resources across multiple public clouds simultaneously, making it a versatile tool for multi-cloud environments.
Your selection is correct
Terraform can manage cross-cloud dependencies

Explanation
This choice is correct. Terraform can manage cross-cloud dependencies, allowing operators to define and manage resources that span across different cloud providers, ensuring consistency and efficiency in multi-cloud deployments.
Your selection is correct
Terraform can help businesses deploy applications on multiple clouds and on-premises infrastructure

Explanation
This choice is correct. Terraform enables businesses to deploy applications on multiple clouds and on-premises infrastructure, providing flexibility and scalability in managing resources across different environments.
Overall explanation
Terraform offers several advantages over using a provider's native tooling for deploying resources in multi-cloud environments, including:



Multi-cloud support: Terraform provides a consistent interface for managing infrastructure resources across multiple cloud providers, including AWS, Azure, Google Cloud, and more. This allows organizations to use a single tool for managing their entire multi-cloud environment rather than needing to learn and use multiple provider-specific tools.

Standardized configuration: Terraform uses a declarative configuration language to define infrastructure resources, which can be used to define resources across multiple providers in a standardized way. This provides consistency and reduces the need for provider-specific knowledge.

Idempotent execution: Terraform only makes changes to infrastructure resources if the desired state differs from the current state, which means that it can be safely run multiple times without causing unintended changes. This reduces the risk of configuration drift and ensures that infrastructure remains consistent over time.

Plan preview: Terraform can generate a plan that shows the changes it will make to infrastructure resources before it applies them. This provides visibility into changes and helps to reduce the risk of unintended consequences.

Collaboration and version control: Terraform configurations can be stored in version control systems, allowing multiple team members to collaborate on infrastructure changes. This provides a centralized location for documentation, change history, and issue tracking, making it easier to manage infrastructure changes over time.

Overall, using Terraform for deploying resources in multi-cloud environments can provide a consistent, standardized, and efficient approach to managing infrastructure across multiple providers.

https://developer.hashicorp.com/terraform/intro/use-cases#multi-cloud-deployment

Domain
Objective 2 - Understand Terraform's purpose (vs. other IaC)
Question 46
Correct
In regards to Terraform state file, select all the statements below which are correct: (select four)

Your selection is correct
storing state remotely can provide better security

Explanation
Opting to store the Terraform state remotely, such as in a secure cloud storage solution, can enhance security by providing features like encryption, access controls, and audit trails. Remote storage options offer better protection against unauthorized access compared to local storage.

using the sensitive = true feature, you can instruct Terraform to mask sensitive data in the state file

Explanation
Terraform will still record sensitive values in the state when using the sensitive=true feature, and so anyone who can access the state data will have access to the sensitive values in cleartext.

Your selection is correct
HCP Terraform always encrypts state at rest

Explanation
HCP Terraform, the managed Terraform service by HashiCorp, ensures that the state file is always encrypted at rest. This encryption helps maintain the confidentiality and integrity of the data stored in the state file, adding an extra layer of security to Terraform deployments.

Your selection is correct
when using local state, the state file is stored in plain-text

Explanation
When utilizing local state storage in Terraform, the state file is typically stored in plain-text format on the local machine. This can expose sensitive data to anyone with access to the file, highlighting the importance of securing the state file.
the state file is always encrypted at rest

Explanation
The state file is not encrypted by default when storing locally. Additionally, remote storage options may not encrypt the file by default without additional configuration.

Your selection is correct
the Terraform state can contain sensitive data, therefore the state file should be protected from unauthorized access

Explanation
The Terraform state file may include sensitive information such as access keys, passwords, and resource identifiers. It is essential to safeguard the state file from unauthorized access to prevent potential security vulnerabilities and data breaches.
Overall explanation
Terraform state can contain sensitive data, depending on the resources in use and your definition of "sensitive." The state contains resource IDs and all resource attributes. For resources such as databases, this may contain initial passwords.

When using local state, state is stored in plain-text JSON files.

If you manage any sensitive data with Terraform (like database passwords, user passwords, or private keys), treat the state itself as sensitive data.

Storing Terraform state remotely can provide better security. As of Terraform 0.9, Terraform does not persist state to the local disk when remote state is in use, and some backends can be configured to encrypt the state data at rest.

https://developer.hashicorp.com/terraform/language/state/sensitive-data

Domain
Objective 7 - Implement and Maintain State
Question 47
Correct
Published modules via the Terraform Registry provide which of the following benefits? (select four)

Your selection is correct
support versioning

Explanation
Published modules via the Terraform Registry support versioning, allowing users to track changes, updates, and dependencies of the modules over time. This helps in maintaining consistency and stability in infrastructure configurations.
Your selection is correct
automatically generated documentation

Explanation
Automatically generated documentation is a benefit of using published modules via the Terraform Registry. It provides detailed information about the module's usage, inputs, outputs, and other relevant documentation, making it easier for users to understand and utilize the module effectively.
support from any code repo

Explanation
Support from any code repo is not a benefit provided by published modules via the Terraform Registry. The support and collaboration for modules are primarily facilitated through the Terraform Registry platform, where users can contribute, report issues, and engage with the module maintainers on GitHub only.

Your selection is correct
allow browsing version histories

Explanation
Published modules via the Terraform Registry allow browsing version histories, enabling users to view and compare different versions of the module. This helps in identifying changes, bug fixes, and improvements made to the module over time, aiding in decision-making and troubleshooting.
Your selection is correct
show examples and READMEs

Explanation
Published modules via the Terraform Registry show examples and READMEs, providing users with practical usage examples, best practices, and guidelines for implementing the module. This helps in accelerating the adoption and implementation of the module in infrastructure configurations.
Overall explanation
Public modules are managed via Git and GitHub. Publishing a module takes only a few minutes. Once a module is published, you can release a new version of a module by simply pushing a properly formed Git tag. The module must be on GitHub and must be a public repo. This is only a requirement for the public registry. If you're using a private registry, you may ignore this requirement.

The key here is that HashiCorp uses GitHub for published modules.

Domain
Objective 5 - Interact with Terraform Modules
Question 48
Correct
Which of the following allows Terraform users to apply policy as code to enforce standardized configurations for resources being deployed via infrastructure as code?

private

Explanation
Private is not the correct choice in this context. Private typically refers to the visibility or access control settings for resources, but it does not provide the functionality to apply policy as code for enforcing standardized configurations in Terraform.
workspaces

Explanation
Workspaces in Terraform are used to segregate different environments or configurations, such as development, staging, and production. While workspaces help manage different states and configurations, they do not directly enforce policy as code for standardized configurations.
functions

Explanation
Functions are not the correct choice for applying policy as code in Terraform. Functions in Terraform typically refer to built-in or user-defined functions used within configuration files to manipulate data or perform specific tasks, but they do not enforce policy as code for standardized configurations.
Your answer is correct
sentinel

Explanation
Sentinel is the correct choice as it is a policy as code framework that allows users to define and enforce policies for Terraform configurations. It enables users to apply standardized configurations, validate resource attributes, and ensure compliance with organizational policies before deploying infrastructure.
Overall explanation
Sentinel is an embedded policy-as-code framework integrated with the HashiCorp Enterprise products. It enables fine-grained, logic-based policy decisions, and can be extended to use information from external sources.

https://www.hashicorp.com/sentinel

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 49
Correct
You have been given requirements to create a security group for a new application. Since your organization standardizes on Terraform, you want to add this new security group with the fewest number of lines of code. What feature could you use to iterate over a list of required tcp ports to add to the new security group?

splat expression

Explanation
The splat expression in Terraform is used to reference all elements of a list or map. While it can be useful for certain operations, it is not specifically designed for iterating over a list of items like tcp ports to add to a security group. The dynamic block feature is more suitable for dynamically creating resources based on a list of items in this scenario.
terraform import

Explanation
The terraform import command is used to import existing infrastructure into Terraform state. It is not directly related to iterating over a list of tcp ports to add to a new security group. While it is a useful command for managing existing resources, it is not the feature you would use to achieve the goal of adding multiple tcp ports with minimal lines of code.
Your answer is correct
dynamic block

Explanation
Using a dynamic block in Terraform allows you to iterate over a list of items, such as a list of required tcp ports, and dynamically create resources based on those items. This feature helps reduce the amount of code needed to define multiple similar resources, making it the ideal choice for adding multiple tcp ports to the new security group with minimal lines of code.
dynamic backend

Explanation
A dynamic backend in Terraform is used to configure different backend configurations based on conditions or variables. It is not used for iterating over a list of items like tcp ports to add to a security group. While dynamic backends are useful for managing different backend configurations, they are not the feature you would use for this specific requirement.
Overall explanation
A dynamic block acts much like a for expression, but produces nested blocks instead of a complex typed value. It iterates over a given complex value and generates a nested block for each element of that complex value.

You can find more information on dynamic blocks using this link.

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 50
Correct
Which of the following best describes a Terraform provider?

a container for multiple resources that are used together

Explanation
This choice does not accurately describe a Terraform provider. While a provider can manage multiple resources, it is not a container for resources but rather a plugin that facilitates interactions with a specific service or provider.
serves as a parameter for a Terraform module that allows a module to be customized

Explanation
This choice describes a Terraform module parameter, not a provider. Module parameters allow customization of a module's behavior and configuration, but they are not directly related to providers.
describes an infrastructure object, such as a virtual network, compute instance, or other components

Explanation
This choice describes a Terraform resource, not a provider. A Terraform resource represents an infrastructure object like a virtual network or compute instance that Terraform manages within a provider.
Your answer is correct
a plugin that Terraform uses to translate the API interactions with the service or provider

Explanation
A Terraform provider is a plugin that Terraform uses to interact with a specific service or provider. It translates the API interactions between Terraform and the service, allowing Terraform to manage resources in that service.
Overall explanation
In Terraform, a provider is a plugin that enables Terraform to interact with a specific cloud or service provider, such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP). Providers are responsible for understanding the APIs and resources the target infrastructure platform provides and for translating Terraform configuration code into API calls that can create, read, update, and delete resources.

Each provider typically consists of resource types, data sources, and other settings that define the provider's capabilities within Terraform. These resources and data sources correspond to the resources that can be managed within the target infrastructure, such as virtual machines, storage accounts, or network interfaces.

To use a provider in Terraform, you must first configure it in your Terraform code by specifying the provider's name and any required configuration settings, such as access keys, secret keys, or region. Once the provider is configured, you can then use its resources and data sources in your Terraform code to define the infrastructure you want to manage.

Terraform has a large and growing ecosystem of third-party providers that support a wide range of infrastructure platforms and services, as well as an official set of core providers maintained by HashiCorp, the company behind Terraform. The availability and quality of providers is a crucial factor in the usefulness of Terraform as a tool for managing infrastructure as code.

https://developer.hashicorp.com/terraform/language/providers

Domain
Objective 3 - Understand Terraform Basics
Question 51
Correct
True or False? Similar to Terraform Community, you must use the CLI to switch between workspaces when using HCP Terraform workspaces.

Your answer is correct
False

Explanation
False. In HCP Terraform, you can switch between workspaces directly within the HCP Terraform web interface without the need to use the CLI. HCP Terraform provides a user-friendly interface that allows users to manage and switch between workspaces efficiently without relying solely on the CLI for workspace management.

True

Explanation
Using the CLI to switch between workspaces is not a requirement specific to HCP Terraform workspaces. While the CLI can be used to manage workspaces in Terraform, it is not mandatory to switch between workspaces exclusively through the CLI when using HCP Terraform workspaces.

Overall explanation
False.

When using HCP Terraform workspaces, you do not need to use the Terraform CLI to switch between workspaces. HCP Terraform provides a web-based interface where you can manage your workspaces and their associated infrastructure.

In HCP Terraform, each workspace represents a separate environment (e.g., development, staging, production), and you can view and manage them individually through the HCP Terraform web UI. You can select a workspace from the workspace switcher in the web interface to directly change the infrastructure associated with that workspace.

The Terraform CLI is primarily used to run Terraform commands locally on your development machine. When working with HCP Terraform, you typically interact with your workspaces through the web UI or by using HCP Terraform's API.

The Terraform CLI does have a command (`terraform workspace`) to manage workspaces when using the local backend. Still, it's not necessary when using HCP Terraform as your backend, as the web interface handles workspace management for you.

https://developer.hashicorp.com/terraform/cloud-docs/workspaces

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 52
Correct
Kristen is using modules to provision an Azure environment for a new application. She is using the following code to specify the version of her virtual machine module. Which of the following Terraform features supports the versioning of a module? (select two)



module "compute" {
  source  = "azure/compute/azurerm"
  version = "5.1.0"
 
  resource_group_name = "production_web"
  vnet_subnet_id      = azurerm_subnet.aks-default.id 
}
modules stored in GitLab

Explanation
Modules stored in GitLab do not inherently support versioning of modules. While GitLab can be used to store modules, it does not provide the same level of version control and management capabilities as the Terraform registry or private registries.
Your selection is correct
private registry

Explanation
Private registries allow organizations to host and manage their own modules internally. By using a private registry, Kristen can version her modules internally and ensure that her infrastructure deployments are consistent and controlled within her organization.
Your selection is correct
Terraform registry

Explanation
The Terraform registry is a central repository where module versions are published and maintained. By specifying the version of a module from the Terraform registry, users like Kristen can ensure that the correct version of the module is used in their infrastructure provisioning.
local file paths

Explanation
Local file paths do not support versioning of modules. When using local file paths to reference modules, there is no version control mechanism in place, making it difficult to manage and track changes to the modules over time.
Overall explanation
Version constraints are supported only for modules installed from a module registry, such as the public Terraform Registry or HCP Terraform's private registry. Other module sources can provide their own versioning mechanisms within the source string itself, or might not support versions at all. In particular, modules sourced from local file paths do not support version; since they're loaded from the same source repository, they always share the same version as their caller.

https://developer.hashicorp.com/terraform/language/modules/syntax#version

Domain
Objective 5 - Interact with Terraform Modules
Question 53
Incorrect
You want to start managing resources that were not originally provisioned through infrastructure as code. Before you can import the resource's current state, what must you do before running the terraform import command?

shut down or stop using the resources being imported so no changes are inadvertently missed

Explanation
Shutting down or stopping the resources being imported is not necessary before running the terraform import command. The import process does not require the resources to be stopped, but rather focuses on bringing their current state into Terraform's management.
Your answer is incorrect
modify the Terraform state file to add the new resources so Terraform will have a record of the resources to be managed

Explanation
Modifying the Terraform state file to add new resources before running the terraform import command is not the correct approach. The state file should be managed by Terraform itself, and manually modifying it can lead to inconsistencies and potential issues with resource management.
Correct answer
update the Terraform configuration file to include the new resources that match the resources you want to import

Explanation
Before running the terraform import command, you need to update the Terraform configuration file to include the new resources that match the resources you want to import. This step ensures that Terraform is aware of the resources you want to manage and can properly import their current state.
run terraform apply -refresh-only to ensure that the state file has the latest information for existing resources.

Explanation
Running terraform apply -refresh-only before importing new resources is not required. The terraform import command is specifically used to import existing resources into Terraform's state, and running a refresh-only apply command is not necessary for this process.
Overall explanation
NOTE: HashiCorp has released functionality that automatically generates the Terraform configuration for imported resources. However, please keep in mind that the exam questions are not updated immediately, and therefore, you may find that the exam still expects you to know you should create the configuration yourself.

The current implementation of Terraform import can only import resources into the state. It does not generate a configuration. Because of this, and before running terraform import, it is necessary to manually write a resource configuration block for the resource to which the imported object will be mapped.

First, add the resources to the configuration file:



resource "aws_instance" "example" {
  # ...instance configuration...
}


Then run the following command:

$ terraform import aws_instance.example i-abcd1234



https://developer.hashicorp.com/terraform/cli/commands/import

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 54
Correct
What are the core Terraform workflow steps to use infrastructure as code?

1) Plan
2) Apply
3) Pray
Explanation
This choice is incorrect because it includes the step "Pray" after applying changes, which is not a valid or recognized step in the Terraform workflow. The core steps involve planning changes and applying them, not praying for successful execution.
1) Plan
2) Apply
3) Destroy
Explanation
This choice is incorrect because it includes the "Destroy" step after applying changes, which is not a core step in the Terraform workflow. While destroying infrastructure is a valid action in Terraform, it is not part of the standard workflow for using infrastructure as code.
Your answer is correct
1) Write
2) Plan
3) Apply
Explanation
The core Terraform workflow steps involve first writing the infrastructure code using HashiCorp Configuration Language (HCL) or JSON, then planning the changes to understand what Terraform will do, and finally applying those changes to create or update the infrastructure as defined in the code.
1) Code
2) Validate
3) Apply
Explanation
This choice is incorrect because it includes the step "Validate" after writing the code, which is not a core step in the Terraform workflow. While validation is important in the development process, the core steps for using Terraform as infrastructure as code involve planning and applying changes.
Overall explanation
The core Terraform workflow has three steps:

  - Write - Author infrastructure as code.

  - Plan - Preview changes before applying.

  - Apply - Provision infrastructure.

This guide walks through how each of these three steps plays out in the context of working as an individual practitioner, how they evolve when a team is collaborating on infrastructure, and how HCP Terraform enables this workflow to run smoothly for entire organizations.

https://developer.hashicorp.com/terraform/intro/core-workflow

Domain
Objective 6 - Use the Core Terraform Workflow
Question 55
Correct
Please fill the blank field(s) in the statement with the right words.

In order to check the current version of Terraform you have installed, you can use the command __

Your answer is correct
terraform version
Explanation
Note: If you got this wrong but entered a valid command, you're all set. Udemy only lets me include one correct answer, even though there could be multiple ways to answer the question.

The terraform version command is used to display the currently installed version of Terraform on your system. When you run this command in your terminal or command prompt, Terraform will output information about the installed version, including the version number and additional details such as the Terraform CLI and Go runtime versions. This command helps verify which version of Terraform you have installed, which can be important for ensuring compatibility with Terraform configurations and understanding the features available in your environment.

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 56
Correct
Rick is writing a new Terraform configuration file and wishes to use modules in order to easily consume Terraform code that has already been written. Which of the modules shown below will be created first?



terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
 
provider "aws" {
  region = "us-west-2"
}
 
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.21.0"
 
  name = var.vpc_name
  cidr = var.vpc_cidr
 
  azs             = var.vpc_azs
  private_subnets = var.vpc_private_subnets
  public_subnets  = var.vpc_public_subnets
 
  enable_nat_gateway = var.vpc_enable_nat_gateway
 
  tags = var.vpc_tags
}
 
module "ec2_instances" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "2.12.0"
 
  name           = "my-ec2-cluster"
  instance_count = 2
 
  ami                    = "ami-0c5204531f799e0c6"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [module.vpc.default_security_group_id]
  subnet_id              = module.vpc.public_subnets[0]
 
  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}


Your answer is correct
module "vpc"
Explanation
The module "vpc" will be created first because Terraform processes modules in the order they are defined in the configuration file. Since the "vpc" module is defined before the "ec2_instances" module in the file, it will be created and initialized first before moving on to the "ec2_instances" module.
module "ec2_instances"
Explanation
The module "vpc" will be created first because the order of module creation in Terraform is determined by the dependencies between modules. In this case, the "ec2_instances" module depends on resources defined in the "vpc" module, specifically the default security group ID and public subnets. Therefore, Terraform will first create the "vpc" module to satisfy these dependencies before creating the "ec2_instances" module.

Overall explanation
The VPC module will be executed first since the ec2_instances module has dependencies on the VPC module. Both vpc_security_group_ids and subnet_id require outputs from the VPC module.

https://learn.hashicorp.com/tutorials/terraform/module-use

Domain
Objective 5 - Interact with Terraform Modules
Question 57
Correct
Terry is using a module to deploy some EC2 instances on AWS for a new project. He is viewing the code that is calling the module for deployment, which is shown below. Where does the value of the security group originate?



module "ec2_instances" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "4.3.0"
 
  name           = "my-ec2-cluster"
  instance_count = 2
 
  ami                    = "ami-0c5204531f799e0c6"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [module.vpc.default_security_group_id]
  subnet_id              = module.vpc.public_subnets[0]
 
  tag = {
    Terraform   = "true"
    Environment = "dev"
  }
the Terraform public registry

Explanation
The value of the security group does not originate from the Terraform public registry. The Terraform public registry is a repository of modules and providers that can be used in Terraform configurations, but it does not provide specific resource values like security group IDs.

an environment variable being used during a terraform apply

Explanation
The value of the security group does not originate from an environment variable being used during a terraform apply. Environment variables are typically used for configuration settings or sensitive information, rather than resource identifiers like security group IDs.

Your answer is correct
the output of another module

Explanation
The value of the security group originates from the output of another module, specifically the default_security_group_id output of the vpc module. This allows for the reuse of existing resources and promotes modularity in Terraform code.

from a variable likely declared in a .tfvars file being passed to another module

Explanation
The value of the security group is likely coming from a variable declared in a .tfvars file that is being passed to another module. This approach allows for flexibility in configuration and separation of sensitive information from the main Terraform code.

Overall explanation
The required vpc_security_group_ids and subnet_id arguments reference resources created by the vpc module. The Terraform Registry page contains the full list of arguments for the ec2-instance module.



A great tutorial to look at this workflow can be found on the HashiCorp Learn site - https://learn.hashicorp.com/tutorials/terraform/module-use

Domain
Objective 5 - Interact with Terraform Modules