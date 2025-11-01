HashiCorp Terraform - Practice Exam #5 - Results
Attempt 1





Question 1
Skipped
What actions does a terraform init perform for you?

ensures that all Terraform files match the canonical formatting and style

Explanation
Terraform init does not enforce any specific formatting or style rules on the Terraform files. It is primarily responsible for initializing the Terraform environment and preparing it for further actions, such as planning and applying changes to the infrastructure.
Correct answer
downloads plugins and retrieves the source code for referenced modules

Explanation
Terraform init downloads any necessary plugins required to interact with the infrastructure providers specified in the configuration. It also retrieves the source code for any external modules referenced in the configuration, ensuring that all dependencies are available for the Terraform execution.
compares the current configuration to the prior state and notes any differences

Explanation
The comparison of the current configuration to the prior state and noting any differences is typically done during the terraform plan stage, not during the init stage. Terraform init focuses on setting up the working directory and initializing the Terraform environment rather than comparing configurations.
ensures any configuration file that ends with a .tf file extension is syntactically valid and internally consistent

Explanation
Syntax validation and internal consistency checks are performed by Terraform during the terraform plan and terraform apply stages, not during the init stage. Terraform init focuses on setting up the environment and downloading necessary components rather than validating the configuration itself.
Overall explanation
One of the functions that a terraform init does for you is download any referenced modules/plugins so they can be used locally. This is required before you run most other terraform CLI commands.



WRONG ANSWERS:

  - ensures any configuration file that ends with a .tf file extension is syntactically valid and internally consistent - this is the job of terraform validate, not terraform init

  - ensures that all terraform files match the canonical formatting and style - this is done by the CLI command terraform fmt

  - compares the current configuration to the prior state and notes any differences - nope, that's what a terraform plan will do for you, not terraform init



https://developer.hashicorp.com/terraform/cli/commands/init

Domain
Objective 6 - Use the Core Terraform Workflow
Question 2
Skipped
True or False? Input variables that are marked as sensitive are NOT written to Terraform state.

Correct answer
False

Explanation
While sensitive input variables in Terraform are not displayed in the CLI output or logs for security reasons, they are still written to the Terraform state file. This ensures that the sensitive information is stored securely and can be used during the Terraform execution process. Therefore, the statement that sensitive input variables are not written to Terraform state is incorrect.
True

Explanation
If an input variable is marked as sensitive in Terraform, it means that its value will not be shown in the Terraform CLI output or logs. However, marking a variable as sensitive does not prevent it from being written to the Terraform state file. Therefore, the correct answer is False.

Overall explanation
While the value is not shown in the Terraform CLI output, the value will still be written to state. This is why it's important to secure your state file wherever possible.



https://developer.hashicorp.com/terraform/language/state/sensitive-data

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 3
Skipped
True or False? In Terraform Community, workspaces generally use the same code repository while workspaces in Terraform Enterprise/Cloud are often mapped to different code repositories.

False

Explanation
In Terraform Community, workspaces are commonly used with the same code repository, while in Terraform Enterprise/Cloud, workspaces are often associated with different code repositories to enable better separation and management of configurations for various projects or teams.

Correct answer
True

Explanation
True. In Terraform Community, workspaces typically share the same code repository, allowing multiple environments or configurations to be managed within the same repository. On the other hand, in Terraform Enterprise/Cloud, workspaces are often mapped to different code repositories to provide better isolation and organization for different projects or teams.
Overall explanation
Workspaces in Terraform Community are often used within the same working directory while workspaces in Enterprise/Cloud are often (but not required) mapped to unique repos.



https://developer.hashicorp.com/terraform/language/state/workspaces

https://developer.hashicorp.com/terraform/cloud-docs/workspaces

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 4
Skipped
Infrastructure as Code (IaC) offers many benefits to help organizations deploy application infrastructure faster than manually clicking through the console. Which of the following is NOT a benefit of Infrastructure as Code (IaC)?

allows infrastructure to be versioned

Explanation
One of the key benefits of Infrastructure as Code (IaC) is the ability to version infrastructure configurations just like code. This allows teams to track changes, revert to previous versions if needed, and collaborate more effectively on infrastructure changes.
creates self-documenting infrastructure

Explanation
Infrastructure as Code (IaC) enables the creation of self-documenting infrastructure by defining infrastructure configurations in code. This means that the code itself serves as documentation for the infrastructure, making it easier to understand, maintain, and troubleshoot.
code can easily be shared and reused

Explanation
With Infrastructure as Code (IaC), code that defines infrastructure can easily be shared and reused across teams and projects. This promotes consistency, reduces duplication of effort, and accelerates the deployment of infrastructure by leveraging existing code modules and templates.
Correct answer
eliminates API communication to the target platform

Explanation
Infrastructure as Code (IaC) actually relies on API communication to the target platform to automate the provisioning and management of infrastructure. By using APIs, IaC tools can interact with cloud providers and other platforms to create, update, and manage resources. Eliminating API communication would hinder the automation capabilities of IaC.
Overall explanation
Eliminating API communication to the target platform is NOT a benefit of IaC. In fact, Terraform likely increases communication with the backend platform since Terraform uses the platform's API to build and manage infrastructure.

Remember that Terraform providers/plugins are essentially the features that enable communication with the platform's API on your behalf.



WRONG ANSWERS:

All of the wrong answers are essentially direct benefits of using Terraform.



https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code



Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 5
Skipped
Which of the following are tasks that terraform apply can perform? (select three)

Correct selection
destroy infrastructure previously deployed with Terraform

Explanation
Terraform apply can destroy infrastructure that was previously deployed using Terraform. This is useful for cleaning up resources that are no longer needed or for resetting the environment to a previous state.
Correct selection
update existing infrastructure with new configurations

Explanation
Terraform apply can update existing infrastructure by applying new configurations specified in the Terraform files. This allows for making changes to the infrastructure without having to manually modify each resource, ensuring consistency and reducing the risk of errors.
Correct selection
provision new infrastructure

Explanation
Terraform apply can provision new infrastructure by creating and configuring resources based on the Terraform configuration files provided. This allows users to easily deploy new infrastructure components in a consistent and reproducible manner.
generate a resource block for previously imported resources.

Explanation
Terraform apply does not generate a resource block for imported resources. Importing existing resources into Terraform is a separate process that involves creating a resource block manually and mapping it to the existing resource in the cloud environment.
Overall explanation
The terraform apply command executes the actions proposed in a Terraform plan. This works the same regardless of whether you have existing infrastructure deployed and changes are needed, or if you are just deploying your infrastructure for the first time. The terraform apply command can also destroy infrastructure by passing the -destroy flag as well.



WRONG ANSWER:

Running a terraform apply cannot generate a resource block for imported infrastructure to pull under Terraform management.



https://developer.hashicorp.com/terraform/cli/commands/apply

https://learn.hashicorp.com/collections/terraform/aws-get-started

Domain
Objective 6 - Use the Core Terraform Workflow
Question 6
Skipped
You need to define a single input variable to support the IP address of a subnet, which is defined as a string, and the subnet mask, which is defined as a number. What type of variable should you use?

Correct answer
type = object ()

Explanation
Using an object type variable allows you to define a single input variable that can hold multiple values, such as the IP address (string) and subnet mask (number). This type of variable is suitable for grouping related data together and maintaining the structure of the input data.

type = string

Explanation
Using a string type variable would only allow you to define a single value, such as the IP address, but not both the IP address and subnet mask. It does not support multiple data types within a single variable, so it would not be appropriate for this scenario.

type = bool

Explanation
Using a bool (boolean) type variable is used for true/false values, which are not suitable for storing both a string (IP address) and a number (subnet mask). It does not allow for the combination of different data types in a single variable.

type = map ()

Explanation
Using a map type variable allows you to define key-value pairs, which could be used to store the IP address and subnet mask. However, an object type variable is more appropriate in this case as it explicitly defines the structure of the input data with different data types for each field.

Overall explanation
A structural type allows multiple values of several distinct types to be grouped together as a single value. Structural types require a schema as an argument, to specify which types are allowed for which elements.



object(...): a collection of named attributes that each have their own type.

The schema for object types is { <KEY> = <TYPE>, <KEY> = <TYPE>, ... } — a pair of curly braces containing a comma-separated series of <KEY> = <TYPE> pairs. Values that match the object type must contain all of the specified keys, and the value for each key must match its specified type. (Values with additional keys can still match an object type, but the extra attributes are discarded during type conversion.)

https://developer.hashicorp.com/terraform/language/expressions/type-constraints#optional-object-type-attributes

Domain
Objective 3 - Understand Terraform Basics
Question 7
Skipped
True or False? In order to use the terraform console command on an existing project, the CLI must be able to lock state to prevent changes.

Correct answer
True

Explanation
True. The terraform console command allows users to explore the current state of Terraform resources interactively. In order to use this command, the CLI must be able to lock the state to prevent changes, ensuring that the state remains consistent during the interactive exploration process.

False

Explanation
False. The statement is incorrect because the ability to lock state to prevent changes is a requirement for using the terraform console command. The command is primarily used for interactive exploration and querying of the Terraform state and resources, and locking the state is a prerequisite for its functionality for existing projects.

Overall explanation
The terraform console command will read the Terraform configuration in the current working directory and the Terraform state file from the configured backend so that interpolations can be tested against both the values in the configuration and the state file.

When you execute a terraform console command, you'll get this output:



$ terraform console
Acquiring state lock. This may take a few moments...
> 


https://developer.hashicorp.com/terraform/cli/commands/console



Domain
Objective 7 - Implement and Maintain State
Question 8
Skipped
Given the following code snippet, what is the managed resource name for this particular resource?



resource "aws_vpc" "prod-vpc" {
  cidr_block = var.vpc_cidr
  enable_dns_hostnames = true
 
  tags = {
    Name        = var.vpc_name
    Environment = "demo_environment"
    Terraform   = "true"
  }
}
resource.aws_vpc

Explanation
"resource.aws_vpc" is not the managed resource name for this particular resource. In Terraform, the resource type and name are separated by a dot, with the resource type ("aws_vpc" in this case) coming before the resource name ("prod-vpc"). Therefore, the correct managed resource name is just "prod-vpc".
aws_vpc

Explanation
"aws_vpc" is not the managed resource name for this particular resource. In Terraform, "aws_vpc" is the resource type or provider prefix used to define and manage AWS VPC resources. The specific resource name in this case is "prod-vpc".
demo environment

Explanation
"demo environment" is not the managed resource name for this particular resource. The managed resource name is "prod-vpc" as defined in the Terraform configuration block. "demo environment" is a tag value assigned to the "Environment" tag key for this resource, not the resource name itself.
Correct answer
prod-vpc

Explanation
The managed resource name for this particular resource is "prod-vpc" as defined in the Terraform configuration block. This name is used to uniquely identify and reference this specific AWS VPC resource within the Terraform configuration.
Overall explanation
prod-vpc is the managed resource name for this resource. More specifically, you'd use aws_vpc.prod-vpc address to refer to this resource in your code, like this:



output "vpc_id" {
  value = aws_vpc.prod-vpc.id
}


https://developer.hashicorp.com/terraform/cli/state/resource-addressing

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 9
Skipped
Fill in the blank from the correct answer below:

A Terraform module (usually the root module of a configuration) can call other modules to include their resources into the configuration. A module that has been called by another module is often referred to as _______________.

called module

Explanation
The term "called module" is not typically used in Terraform to describe a module that has been included or referenced by another module. The more commonly used term for this scenario is a "child module."
parent module

Explanation
A "parent module" in Terraform refers to the module that is calling or including other modules within its configuration. It is the module that is responsible for orchestrating and integrating the resources from the child modules.
sourced module

Explanation
While a "sourced module" can refer to a module that is retrieved from a remote source or registry, it is not the commonly used term to describe a module that has been called by another module in Terraform configurations.
Correct answer
child module

Explanation
A Terraform module that has been called by another module is commonly referred to as a "child module." This terminology is used to indicate that the module is being included or used within another module's configuration.
Overall explanation
A Terraform module (usually the root module of a configuration) can call other modules to include their resources into the configuration. A module that has been called by another module is often referred to as a child module.

Child modules can be reused across configurations and called multiple times, allowing modular and scalable infrastructure design.

https://developer.hashicorp.com/terraform/language/modules

Domain
Objective 5 - Interact with Terraform Modules
Question 10
Skipped
You have recently refactored your Terraform configuration, and a resource has been changed to be created within a module. As a result, the resource has changed from aws_instance.web to module.servers.aws_instance.web. To ensure that Terraform updates the state file correctly and does not recreate the resource, which block should you use in your configuration?

terraform block

Explanation
The "terraform" block is used to configure global settings for a Terraform configuration, such as backend configuration or provider settings. It is not specifically designed to handle resource refactoring within modules and updating the state file accordingly.
output block

Explanation
The "output" block is used to define values that can be outputted by Terraform after applying the configuration. While outputs are important for sharing information from the Terraform configuration, they do not directly impact how resources are managed and updated within the state file during a refactoring process.
Correct answer
moved block

Explanation
The "moved" block is used to inform Terraform that a resource has been moved to a new location within the configuration. By using this block and specifying the old and new resource locations, Terraform can update the state file correctly and avoid recreating the resource.
import block

Explanation
The "import" block is used to import existing infrastructure into Terraform's state. It is not directly related to updating the state file for a refactored resource within a module. Using the "import" block in this scenario would not prevent the resource from being recreated.
Overall explanation
The moved block in Terraform is used to inform Terraform about changes in resource names or locations within your configuration. When you rename or move resources, the moved block helps Terraform understand that the resource was moved rather than recreated, allowing it to update the state file accordingly without destroying and recreating the resource.

https://developer.hashicorp.com/terraform/language/modules/develop/refactoring#moved-block-syntax

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 11
Skipped
A coworker provided you with Terraform configuration file that includes the code snippet below. Where will Terraform download the referenced module from?



terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.6.1"
    }
  }
}
 
provider "kubernetes" {
  # Configuration below
...
from the official Kubernetes public GitHub repo

Explanation
Terraform will not download the referenced module from the official Kubernetes public GitHub repo. The source specified in the Terraform configuration file points to the official Terraform public registry for the Kubernetes provider, not directly from the Kubernetes GitHub repository.
Correct answer
the official Terraform public registry

Explanation
Terraform will download the referenced module from the official Terraform public registry, where HashiCorp hosts and manages various providers and modules. This ensures that the module is sourced from a trusted and centralized location, providing consistency and reliability in the Terraform environment.
from the configured VCS provider in the hashicorp/kubernetes repo

Explanation
Terraform will not download the referenced module from the configured VCS provider in the hashicorp/kubernetes repo. The source specified in the Terraform configuration file points to the official Terraform public registry, not a version control system provider like GitHub.
from the hashicorp/kubernetes directory where Terraform is executed

Explanation
Terraform will not download the referenced module from the hashicorp/kubernetes directory where Terraform is executed. The source specified in the Terraform configuration file points to the official Terraform public registry, indicating that the module should be fetched from the registry rather than a local directory.
Overall explanation
When a module is located at hashicorp/<name>, Terraform fetches it from the official Terraform public registry. This is specified by the source argument within the module block. The module installer supports the following source types:

  - Local paths

  - Terraform Registry

  - GitHub

  - Bitbucket

  - Generic Git, Mercurial repositories

  - HTTP URLs

  - S3 buckets

  - GCS buckets

  - Modules in Package Sub-directories



https://developer.hashicorp.com/terraform/language/modules/sources#terraform-registry

Domain
Objective 5 - Interact with Terraform Modules
Question 12
Skipped
Given the definition below, what Terraform feature is being described?

"helps you share Terraform providers and Terraform modules across your organization. It includes support for versioning, a searchable list of available providers and modules, and a configuration designer to help you build new workspaces faster."

CDK for Terraform

Explanation
CDK for Terraform is a tool that allows developers to define infrastructure using familiar programming languages. While it is a valuable tool for infrastructure as code, it does not match the description of a feature that helps share Terraform providers and modules across an organization.
HashiCorp Sentinel

Explanation
HashiCorp Sentinel is a policy as code framework used for enforcing compliance and governance policies within Terraform. While an important feature in the Terraform ecosystem, it does not align with the description provided in the question regarding sharing providers and modules.
Correct answer
Private Registry

Explanation
The description provided aligns with the features of a Private Registry in Terraform. Private Registries allow organizations to share Terraform providers and modules internally, providing versioning support, a searchable list of available resources, and a configuration designer to streamline workspace creation.
Terraform Workspaces

Explanation
Terraform Workspaces are used to manage multiple environments or configurations within a single Terraform configuration. While they are a key feature of Terraform, the description provided in the question does not match the functionality of Terraform Workspaces.
Overall explanation
This definition describes the Private Registry...

HCP Terraform's private registry works similarly to the public Terraform Registry and helps you share Terraform providers and Terraform modules across your organization. It includes support for versioning, a searchable list of available providers and modules, and a configuration designer to help you build new workspaces faster.



https://developer.hashicorp.com/terraform/cloud-docs/registry

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 13
Skipped
Terraform relies on state in order to create and manage resources. Which of the following is true regarding the state file? (select four)

Correct selection
remote state is recommended when more than one person wants to manage the infrastructure managed by Terraform

Explanation
Remote state storage is recommended when multiple users or teams need to collaborate on managing the infrastructure with Terraform. It allows for centralized storage, version control, and access control to ensure consistency and security in managing the infrastructure.
Correct selection
by default, state is stored in a file named terraform.tfstate in the current working directory

Explanation
By default, Terraform stores the state in a file named terraform.tfstate in the current working directory. This file contains the current state of the infrastructure and is used to track changes and manage resources.

Correct selection
it may contain sensitive data that you might not want others to view

Explanation
The state file may contain sensitive information such as passwords, access keys, or other credentials. It is important to secure the state file and consider using encryption or other security measures to protect sensitive data.
state should be modified by editing the file directly

Explanation
It is not recommended to modify the state file directly by editing it. Terraform provides commands and tools to manage the state, such as terraform state command, to safely update and manage the state file without risking corruption or inconsistencies in the infrastructure.
Correct selection
the state file is formatted using JSON

Explanation
The state file in Terraform is formatted using JSON, which makes it easy to read and understand the resource configuration and dependencies.
Overall explanation
In order to properly and correctly manage your infrastructure resources, Terraform stores the state of your managed infrastructure. Terraform uses this state on each execution to plan and make changes to your infrastructure. This state must be stored and maintained on each execution so future operations can perform correctly.

During execution, Terraform will examine the state of the currently running infrastructure, determine what differences exist between the current state and the revised desired state, and indicate the necessary changes that must be applied. When approved to proceed, only the necessary changes will be applied, leaving existing, valid infrastructure untouched.

By default, Terraform will store the state in a JSON-formatted file named terraform.tfstate in the current working directory. The file should never be modified directly if state needs to be manually changed. You should use the terraform state command to modify state where possible.

The local state file is NOT encrypted (unless your local disk is encrypted or using something like Windows Bitlocker). This is why many organizations use a remote backend, which will store the state file in an encrypted store. This also allows multiple team members to work with the state file rather than storing it on an individual's laptop/desktop.



https://developer.hashicorp.com/terraform/language/state

Domain
Objective 7 - Implement and Maintain State
Question 14
Skipped
What of the following are benefits of using Infrastructure as Code? (select three)

Correct selection
the ability to programmatically deploy infrastructure

Explanation
Infrastructure as Code enables the automation of infrastructure deployment through code, allowing for repeatable, consistent, and scalable provisioning of resources. This programmable approach to infrastructure management increases efficiency, reduces manual errors, and streamlines the deployment process.
Correct selection
the reduction of misconfigurations that could lead to security vulnerabilities and unplanned downtime

Explanation
Using Infrastructure as Code helps reduce misconfigurations by allowing infrastructure to be defined and managed through code, which can be reviewed, tested, and validated before deployment. This reduces the risk of security vulnerabilities and unplanned downtime caused by human error or inconsistencies in manual configurations.
Correct selection
your infrastructure configurations can be version controlled and stored in a code repository alongside the application code

Explanation
Storing infrastructure configurations in version control alongside application code allows for better collaboration, tracking changes, and maintaining a history of modifications. This ensures that infrastructure changes can be easily rolled back, compared, and audited, improving overall code quality and reliability.
reducing vulnerabilities in your publicly-facing applications

Explanation
While Infrastructure as Code can indirectly contribute to reducing vulnerabilities in applications by providing a standardized and controlled environment for deployment, it is not a direct benefit of using IaC. The primary focus of IaC is on managing and provisioning infrastructure resources through code, rather than specifically addressing vulnerabilities in applications.
Overall explanation
Reducing vulnerabilities in your publicly-facing applications is NOT a benefit of using IaC since IaC is geared towards deploying infrastructure and applications, but not determining whether your application is secure.



WRONG ANSWER:

Terraform does not reduce vulnerabilities in your applications. You CAN pair Terraform with other tools that do this through a CI?CD pipeline or something like that, but Terraform will not do this natively.



https://www.youtube.com/watch?v=l5k1ai_GBDE

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 15
Skipped
By default, where does Terraform CLI store its state?

in the .terraform directory within the current working directory

Explanation
The .terraform directory within the current working directory contains Terraform plugins and other internal files used by Terraform, but it does not store the state file by default. The state file is typically stored in the terraform.tfstate file in the local backend.

in the default workspace in HCP Terraform

Explanation
Storing state in the default workspace in HCP Terraform is not the default behavior of Terraform CLI. HCP Terraform is a separate service provided by HashiCorp for remote state storage and collaboration, but it is not the default location for storing state.

in a temp directory on the local machine executing the Terraform configurations

Explanation
Terraform CLI does not store its state in a temporary directory on the local machine executing the configurations by default. The state file is intended to persist across runs of Terraform to track the current state of the infrastructure, so storing it in a temporary directory would not be suitable for this purpose.
Correct answer
in the terraform.tfstate file in the current working directory on the local backend

Explanation
By default, Terraform CLI stores its state in the terraform.tfstate file on the local backend. This file contains the current state of the infrastructure managed by Terraform and is typically stored in the same directory as the configuration files.
Overall explanation
Terraform must store state about your managed infrastructure and configuration. This state is used by Terraform to map real-world resources to your configuration, keep track of metadata, and improve performance for large infrastructures.

Terraform will store its state in the terraform.tfstate file on the local backend. This is the default but you can always change it if you want.

https://developer.hashicorp.com/terraform/language/state

Domain
Objective 7 - Implement and Maintain State
Question 16
Skipped
True or False? A provider block is required in every configuration file so Terraform can download the proper plugin.

Correct answer
False

Explanation
False. While a provider block is essential for defining the providers needed in a Terraform configuration, it is not required in every configuration file. If a configuration file does not use any resources that require a specific provider, then a provider block may not be necessary in that particular file.
True

Explanation
You don't have to specify a provider block since Terraform is smart enough to download the right provider based on the specified resources. That said, Terraform official documentation states that Terraform configurations must declare which providers they require so that Terraform can install and use them.

Overall explanation
You don't have to specify a provider block since Terraform is smart enough to download the right provider based on the specified resources. That said, Terraform official documentation states that Terraform configurations must declare which providers they require so that Terraform can install and use them. Although Terraform CAN be used without declaring a plugin, you should follow best practices and declare it along with the required_version argument to explicitly set the version constraint.



https://developer.hashicorp.com/terraform/language/providers/requirements

Domain
Objective 3 - Understand Terraform Basics
Question 17
Skipped
You are using Terraform to manage some of your AWS infrastructure. You notice that a new version of the provider now includes additional functionality you want to take advantage of. What command do you need to run to upgrade the provider?

terraform providers

Explanation
The terraform providers command is used to show the providers required for the configuration. It does not upgrade the provider to a new version with additional functionality.

Correct answer
terraform init -upgrade

Explanation
Running terraform init -upgrade is the correct command to upgrade the provider in Terraform. This command will initialize the working directory and upgrade the provider to the latest version available, including any additional functionality that may have been added.

terraform plan

Explanation
The terraform plan command is used to create an execution plan for the Terraform configuration. It does not upgrade the provider to a new version.

terraform get hashicorp/aws

Explanation
The terraform get hashicorp/aws command is used to download and update modules. It does not upgrade the provider to a new version with additional functionality.

Overall explanation
To upgrade an existing provider that you have already downloaded, you need to run terraform init -upgrade . This command will upgrade all previously-selected plugins to the newest version that complies with the configuration's version constraints. This will cause Terraform to ignore any selections recorded in the dependency lock file, and to take the newest available version matching the configured version constraints.

https://developer.hashicorp.com/terraform/cli/commands/init

Domain
Objective 3 - Understand Terraform Basics
Question 18
Skipped
Which of the following Terraform versions would be permitted to run the Terraform configuration based on the following code snippet?



terraform {
  required_version = "~> 1.0.0"
 
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.66.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "0.5.0"
    }
  }
}
Terraform v1.4.9

Explanation
Terraform v1.4.9 may not be permitted to run the Terraform configuration based on the code snippet as it does not meet the required_version constraint of "~> 1.0.0" specified in the configuration.

Terraform v1.1.0

Explanation
Terraform v1.1.0 may not be permitted to run the Terraform configuration based on the code snippet as it does not meet the required_version constraint of "~> 1.0.0" specified in the configuration.

Correct answer
Terraform v1.0.5

Explanation
Terraform v1.0.5 is permitted to run the Terraform configuration based on the code snippet because it meets the required_version constraint of "~> 1.0.0" specified in the configuration.

Terraform v1.2.0

Explanation
Terraform v1.2.0 may not be permitted to run the Terraform configuration based on the code snippet as it does not meet the required_version constraint of "~> 1.0.0" specified in the configuration.

Overall explanation
When setting Terraform required_version or provider constraints, the ~> specifies that only the right-most version number can be incremented - therefore, only v1.0.5 will satisfy the requirements.



https://developer.hashicorp.com/terraform/language/providers/requirements#best-practices-for-provider-versions

Domain
Objective 3 - Understand Terraform Basics
Question 19
Skipped
True or False? Under special circumstances, Terraform can be used without state.

True

Explanation
Terraform relies heavily on its state file to keep track of the resources it manages and their current state. Without the state file, Terraform would not be able to accurately determine the current state of the infrastructure or perform necessary operations like resource creation, updates, or deletions. Therefore, it is false that Terraform can be used without state under any circumstances.
Correct answer
False

Explanation
The statement that Terraform can be used without state is false. State is a crucial component of Terraform that stores information about the infrastructure it manages, such as resource IDs, dependencies, and attributes. Without the state file, Terraform would not be able to effectively manage resources or maintain the desired state of the infrastructure.
Overall explanation
State is a hard requirement for Terraform - there's no getting around it. You can have the state stored locally or you can configure a remote backend to store it somewhere else. But overall, state is always required for Terraform.

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 20
Skipped
True or False? Running a terraform apply will fail if you do not run a terraform plan first.

Correct answer
False

Explanation
The statement that running a terraform apply will fail if you do not run a terraform plan first is false. Terraform allows users to apply changes directly without running a plan first. While it is advisable to always run a plan to understand the impact of the changes, Terraform does not enforce running a plan before applying changes.

True

Explanation
Running a terraform apply without running a terraform plan first is a common practice in Terraform. While it is recommended to always run a plan to preview the changes before applying them, Terraform will not fail the apply command if a plan has not been executed beforehand. This allows users to directly apply changes without previewing them, although it is not considered a best practice.

Overall explanation
You do NOT need to run a terraform plan before running terraform apply. When you execute a terraform apply, Terraform will generate its own execution plan automatically before applying changes.

The most straightforward way to use terraform apply is to run it without any arguments at all, in which case it will automatically create a new execution plan (as if you had run terraform plan) and then prompt you to approve that plan, before taking the indicated actions.



https://developer.hashicorp.com/terraform/cli/commands/apply

Domain
Objective 6 - Use the Core Terraform Workflow
Question 21
Skipped
What command can be used to display the resources that are being managed by Terraform?

terraform state rm

Explanation
The 'terraform state rm' command is used to remove a resource from the Terraform state. It is not used to display the resources being managed by Terraform, but rather to remove a specific resource from the state file.
Correct answer
terraform show

Explanation
The 'terraform show' command is used to display the current state of the resources being managed by Terraform. It provides detailed information about the infrastructure that Terraform is managing, including resource attributes, dependencies, and configuration.
terraform output

Explanation
The 'terraform output' command is used to extract the values of output variables defined in the Terraform configuration. It is not used to display the resources being managed by Terraform, but rather to retrieve specific output values.
terraform version

Explanation
The 'terraform version' command is used to display the version of Terraform that is currently installed on the system. It does not provide information about the resources being managed by Terraform, but rather about the Terraform software itself.
Overall explanation
The terraform show command is used to provide human-readable output from a state or plan file. This can be used to inspect a plan to ensure that the planned operations are expected, or to inspect the current state as Terraform sees it.

Machine-readable output is generated by adding the -json command-line flag.



WRONG ANSWERS:

terraform state rm is used to remove resources from state

terraform output is used to get values from an output of a module or configuration

terraform version is used to display the current version of Terraform


https://developer.hashicorp.com/terraform/cli/commands/show

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 22
Skipped
The command terraform destroy is actually just an alias to which command?

terraform apply -replace-all

Explanation
The command "terraform apply -replace-all" is not the alias for "terraform destroy." "terraform apply -replace-all" is used to replace all existing resources with new ones, not specifically to destroy all resources as "terraform destroy" does.
terraform delete

Explanation
The command "terraform delete" is not the alias for "terraform destroy." "terraform delete" is not a valid Terraform command, and it does not exist as an alternative or alias for the "terraform destroy" command.
Correct answer
terraform apply -destroy

Explanation
The command "terraform destroy" is actually an alias for "terraform apply -destroy." When you run "terraform destroy," it essentially executes the same actions as running "terraform apply -destroy," which removes all the resources defined in your Terraform configuration.
terraform plan - destroy

Explanation
The command "terraform plan -destroy" is not the alias for "terraform destroy." "terraform plan -destroy" is used to generate an execution plan that includes destroying resources, but it does not actually execute the destruction of resources like "terraform destroy" does.
Overall explanation
This command is just a convenience alias for the command terraform apply -destroy

For that reason, this command accepts most of the options that terraform apply accepts, although it does not accept a plan file argument and forces the selection of the "destroy" planning mode.

https://developer.hashicorp.com/terraform/cli/commands/destroy

Domain
Objective 6 - Use the Core Terraform Workflow
Question 23
Skipped
Which of the following are true statements about Terraform? (Select three)

Terraform can manage dependencies within a single cloud, but not cross-cloud

Explanation
Terraform is not limited to managing dependencies within a single cloud environment. It can also manage dependencies across different cloud providers, allowing users to define and provision resources that interact with each other across multiple clouds. This cross-cloud capability is one of the key strengths of Terraform in managing modern, hybrid cloud infrastructures.
Correct selection
Terraform is cloud-agnostic

Explanation
Terraform is designed to be cloud-agnostic, meaning it can work with multiple cloud providers such as AWS, Azure, Google Cloud, and more. This flexibility allows users to manage infrastructure across different cloud environments using the same tool.
Correct selection
A single configuration file can use multiple providers

Explanation
Terraform allows users to define infrastructure configurations using a single configuration file that can include resources from multiple cloud providers. This enables users to manage resources from different providers within the same Terraform configuration, providing a unified approach to infrastructure management.
Correct selection
Terraform can orchestrate large-scale, multi-cloud infrastructure deployments

Explanation
Terraform is capable of orchestrating large-scale infrastructure deployments across multiple clouds. This means that users can define and manage complex infrastructure setups that span across different cloud environments, making it a powerful tool for managing diverse and distributed infrastructure.
Overall explanation
Terraform can indeed manage dependencies across multiple cloud providers. That is a huge benefit of using Terraform since it's cloud-agnostic, it doesn't care where the resources are deployed. It can still manage implicit or explicit dependencies between resources regardless of where they are deployed.

https://learn.hashicorp.com/tutorials/terraform/dependencies?in=terraform/0-13

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 24
Skipped
A child module created a new subnet for some new workloads. What Terraform block type would allow you to pass the subnet ID back to the parent module?

terraform block

Explanation
The terraform block is used to configure global settings for a Terraform configuration, such as the required Terraform version or backend configuration. It is not used for passing values between modules, so it is not the correct choice for passing the subnet ID back to the parent module.

resource block

Explanation
The resource block is used to define and manage infrastructure resources in Terraform. It is not used for passing values between modules, so it is not the correct choice for passing the subnet ID back to the parent module. The output block is specifically designed for this purpose.

Correct answer
output block

Explanation
The correct choice is the output block. This block type in Terraform allows you to define values that can be passed back to the parent module. In this case, the subnet ID created by the child module can be defined as an output value and accessed by the parent module for further use.

data block

Explanation
The data block is used to define data sources in Terraform, such as information retrieved from external sources like APIs or databases. It is not used to pass values between modules, so it is not the correct choice for passing the subnet ID back to the parent module.

Overall explanation
The resources defined in a module are encapsulated, so the parent module cannot access their attributes directly. However, the child module can declare output values to selectively export certain values to be accessed by the calling module.



https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values

Domain
Objective 5 - Interact with Terraform Modules
Question 25
Skipped
You have a number of different variables in a parent module that calls multiple child modules. Can the child modules refer to any of the variables declared in the parent module?

No, child modules can never refer to any variables or values declared in the parent module

Explanation
Child modules in Terraform do not have direct access to variables declared in the parent module. This is by design to maintain encapsulation and modularity in the Terraform codebase. If a child module needs to use a variable from the parent module, the parent module must explicitly pass that variable as a value to the child module.
Yes, child modules can refer to any variable in a parent module

Explanation
Child modules in Terraform are isolated from the variables declared in the parent module. While the parent module can pass values to the child modules as arguments, the child modules cannot directly reference or access variables declared in the parent module. This separation helps maintain clear boundaries between modules and promotes reusability and maintainability in Terraform configurations.
Correct answer
Not the variable, but it can only refer to values that are passed to the child module

Explanation
In Terraform, child modules can only refer to values that are explicitly passed to them from the parent module. This means that child modules cannot directly access variables declared in the parent module. Instead, the parent module must pass the necessary values as arguments to the child modules for them to use.
Overall explanation
Child modules can only access values that are passed in the calling module block.

The resources defined in a module are encapsulated, so the calling module cannot access its attributes directly. However, the child module can declare output values to selectively export certain values to be accessed by the calling module.



https://developer.hashicorp.com/terraform/language/values/outputs

https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values

Domain
Objective 5 - Interact with Terraform Modules
Question 26
Skipped
Both you and a colleague are responsible for maintaining resources that host multiple applications using Terraform CLI. What feature of Terraform helps ensure only a single person can update or make changes to the resources Terraform is managing?

local backend

Explanation
Local backend in Terraform refers to storing the state file on the local filesystem. While it may be suitable for individual use cases, it does not offer the necessary mechanisms to handle concurrent access and prevent conflicts when multiple users are managing resources. State locking is the specific feature designed for this purpose.
version control

Explanation
Version control systems like Git are essential for managing Terraform configurations and tracking changes over time. While version control helps with collaboration and tracking changes, it does not inherently provide the feature to lock the state file and prevent concurrent modifications by multiple users.
Correct answer
state locking

Explanation
State locking in Terraform helps prevent conflicts that may arise when multiple users try to make changes to the same resources simultaneously. It ensures that only one person can update or modify the resources Terraform is managing at a given time, thus maintaining consistency and avoiding potential issues.
provisioners

Explanation
Provisioners in Terraform are used to execute scripts on a local or remote machine as part of resource creation or destruction. While provisioners are useful for tasks like software installation or configuration, they do not provide the functionality to control access or prevent multiple users from making changes to resources concurrently.
Overall explanation
If supported by your backend, Terraform will lock your state for all operations that could write state. This prevents others from acquiring the lock and potentially corrupting your state.

State locking happens automatically on all operations that could write state. You won't see any message that it is happening. If state locking fails, Terraform will not continue. You can disable state locking for most commands with the -lock flag but it is not recommended.



https://developer.hashicorp.com/terraform/language/state/locking

Domain
Objective 7 - Implement and Maintain State
Question 27
Skipped
When using a remote backend in Terraform, where is the most secure place to store sensitive credentials (such as cloud provider access keys)?

in a terraform.tfvars file stored in the Terraform working directory

Explanation
Storing sensitive credentials in a terraform.tfvars file in the Terraform working directory is not recommended for storing sensitive information like access keys. This file can be accidentally committed to version control, potentially exposing the credentials to unauthorized users.

Correct answer
outside of Terraform, such as a secure secrets manager like Vault

Explanation
Storing sensitive credentials, such as cloud provider access keys, outside of Terraform in a secure secrets manager like Vault is the most secure option. This ensures that the credentials are not exposed in Terraform configuration files or version control, reducing the risk of unauthorized access.
defined as a plain text in the variables.tf file in the working directory

Explanation
Defining sensitive credentials as plain text in the variables.tf file in the working directory is a security risk. Storing credentials in plain text in Terraform configuration files can lead to accidental exposure and compromise of sensitive information.

passed directly as input variables during runtime on the command line using the -var flag

Explanation
Passing sensitive credentials directly as input variables during runtime on the command line using the -var flag is not recommended for storing sensitive information like access keys. This method can expose the credentials in command history or logs, increasing the risk of unauthorized access.

Overall explanation
Storing sensitive credentials directly in Terraform configuration files—like terraform.tfvars, variables.tf, or through input variables—can expose secrets in the state file, version control, logs, or shared directories. The most secure approach is to manage credentials outside of Terraform, using environment variables or a secure secrets manager (such as HashiCorp Vault or your cloud provider’s secrets service). This reduces the risk of accidental exposure and aligns with best practices for secure infrastructure automation.

https://developer.hashicorp.com/terraform/language/state/sensitive-data

Domain
Objective 7 - Implement and Maintain State
Question 28
Skipped
Using multi-cloud and provider-agnostic tools like Terraform offers which of the following benefits?

Correct answer
can be used across major cloud providers and VM hypervisors

Explanation
Using multi-cloud and provider-agnostic tools like Terraform allows for the creation and management of infrastructure across major cloud providers and virtual machine hypervisors. This flexibility enables organizations to avoid vendor lock-in and easily migrate workloads between different cloud environments.
increased risk due to all infrastructure relying on a single tool for management

Explanation
Using a single tool like Terraform for infrastructure management does not necessarily increase the risk associated with infrastructure management. In fact, using a consistent tool across different environments can help standardize processes and reduce the risk of errors caused by using multiple tools with different configurations.
forces developers to learn Terraform alongside their current programming language

Explanation
The statement that using Terraform forces developers to learn Terraform alongside their current programming language is not accurate. While developers may need to learn Terraform syntax and best practices, it is a separate tool used specifically for infrastructure provisioning and management, not a replacement for their current programming language.
slower provisioning speed allows the operations team to catch mistakes before they are applied

Explanation
Slower provisioning speed does not directly relate to the benefit of using multi-cloud and provider-agnostic tools like Terraform. While Terraform does provide infrastructure as code capabilities that can help catch mistakes before deployment, the primary benefit lies in its ability to work across different cloud providers and hypervisors.
Overall explanation
Terraform can be used across major cloud providers and VM hypervisors, which is a huge benefit. This is made possible by the thousands of providers/plugins that are written by HashiCorp, third-party partners, or individual contributors.

https://developer.hashicorp.com/terraform/language/providers

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 29
Skipped
You have declared the variable as shown below. How should you reference this variable throughout your configuration?



variable "aws_region" {
  type        = string
  description = "region used to deploy workloads"
  default     = "us-east-1"
  
  validation {
    condition     = can(regex("^us-", var.aws_region))
    error_message = "The aws_region value must be a region in the USA, starting with \"us-\"."
  }
}
var.aws_region.id

Explanation
The .id suffix is not applicable to variables in Terraform. Variables are referenced using the var.variable_name syntax, so var.aws_region.id is an incorrect way to reference the variable.

Correct answer
var.aws_region

Explanation
The correct way to reference a variable within your configuration is by using the syntax var.variable_name. In this case, the variable is named "aws_region," so it should be referenced as var.aws_region.

variable.aws_region

Explanation
The syntax variable.variable_name is not the correct way to reference a variable within your configuration. The correct syntax is var.variable_name, so this choice is incorrect.

variable.aws_region.id

Explanation
Similar to choice C, the .id suffix is not used when referencing variables in Terraform. The correct way to reference a variable is var.variable_name, so var.aws_region.id is an incorrect syntax.

Overall explanation
Input variables (commonly referenced as just 'variables') are often declared in a separate file called `variables.tf`, although this is not required. Most people will consolidate variable declaration in this file for organization and simplification of management. Each variable used in a Terraform configuration must be declared before it can be used. Variables are declared in a variable block - one block for each variable. The variable block contains the variable name, most importantly, and then often includes additional information such as the type, a description, a default value, and other options.

The value of a Terraform variable can be set multiple ways, including setting a default value, interactively passing a value when executing a terraform plan and apply, using an environment variable, or setting the value in a `.tfvars` file. Each of these different options follows a strict order of precedence that Terraform uses to set the value of a variable.

A huge benefit of using Terraform is the ability to reference other resources throughout your configuration for other functions. These might include getting certain values needed to create other resources, creating an output to export a specific value, or using data retrieved from a data block. Most of these use dot-separated paths for elements of object values.

The following represents the kinds of named values available in Terraform:

    * <RESOURCE TYPE>.<NAME> represents a managed resource of the given type and name.

    * var.<NAME> is the value of the input variable of the given name.

    * local.<NAME> is the value of the local value of the given name.

    * module.<MODULE NAME> is a value representing the results of a module block.

    * data.<DATA TYPE>.<NAME> is an object representing a data resource of a given type and name

    * Additional named values include ones for filesystem and workspace info and block-local values



https://developer.hashicorp.com/terraform/language/expressions/references#input-variables



Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 30
Skipped
Which of the following are collection or structural types that can be used when declaring a variable in order to group values together? (select four)

Correct selection
list

Explanation
The 'list' type in Terraform allows you to create an ordered collection of values. It is useful for storing multiple values of the same type and accessing them by index.
Correct selection
object

Explanation
The 'object' type in Terraform allows you to create a complex data structure with multiple attributes. It is useful for grouping related data together in a hierarchical manner.
string

Explanation
The 'string' type in Terraform is used to represent text values. It is not a collection or structural type used for grouping values together.
Correct selection
map

Explanation
The 'map' type in Terraform allows you to create a collection of key-value pairs, where each key is unique. It is useful for grouping related data together and accessing it using keys.
bool

Explanation
The 'bool' type in Terraform is a boolean type that represents true or false values. It is not a collection or structural type used for grouping values together.
Correct selection
tuple

Explanation
The 'tuple' type in Terraform allows you to create an ordered collection of elements of different types. It is useful for grouping related values together in a specific order.
number

Explanation
The 'number' type in Terraform is used to represent numerical values. It is not a collection or structural type used for grouping values together.
Overall explanation
As you continue to work with Terraform, you're going to need a way to organize and structure data. This data could be input variables that you are giving to Terraform, or it could be the result of resource creation, like having Terraform create a fleet of web servers or other resources. Either way, you'll find that data needs to be organized yet accessible so it is referenceable throughout your configuration. The Terraform language uses the following types for values:

    * string: a sequence of Unicode characters representing some text, like "hello".

    * number: a numeric value. The number type can represent both whole numbers like 15 and fractional values like 6.283185.

    * bool: a boolean value, either true or false. bool values can be used in conditional logic.

    * list (or tuple): a sequence of values, like ["us-west-1a", "us-west-1c"]. Elements in a list or tuple are identified by consecutive whole numbers, starting with zero.

    * map (or object): a group of values identified by named labels, like {name = "Mabel", age = 52}. Maps are used to store key/value pairs.

Strings, numbers, and bools are sometimes called primitive types. Lists/tuples and maps/objects are sometimes called complex types, structural types, or collection types.



https://developer.hashicorp.com/terraform/language/expressions/types#types-and-values

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 31
Skipped
Which of the following code snippets will ensure you're using a specific version of the AWS provider?

provider "aws" {
  region = "us-east-2"  
  required_version ">= 5.66.0"
}
Explanation
This code snippet incorrectly uses the required_version argument within the provider block for AWS. This argument is used to specify the minimum version of Terraform required, not the provider version. It does not ensure the use of a specific version of the AWS provider.

terraform { 
  required_version = ">= 1.16.0"
}
Explanation
This code snippet uses the required_version argument within the terraform configuration to specify the minimum version of Terraform required. It does not address the version of the AWS provider specifically, so it does not ensure the use of a specific version of the AWS provider.

provider "aws" {
  region = "us-east-1"  
  required_provider ">= 5.66.0"
}
Explanation
This code snippet contains a typo in the required_provider argument within the provider block for AWS. The correct argument should be required_version to specify the provider version. This snippet does not ensure the use of a specific version of the AWS provider.

Correct answer
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.66.0"
    }
  }
}
Explanation
This code snippet correctly specifies the required version of the AWS provider using the required_providers block within the terraform configuration. It explicitly defines the source as hashicorp/aws and sets the version to 5.66.0, ensuring that the specific version of the provider is used.

Overall explanation
To specify the version of Terraform provider that is required, you need to use the required_providers block parameter under the terraform block. HashiCorp recommends that you explicitly set the version of both Terraform and the required providers/plugins to avoid issues when upgrading to the latest versions.



WRONG ANSWERS:

None of the incorrect answers provide valid configuration blocks for Terraform to set the specific version of Terraform.



https://developer.hashicorp.com/terraform/language/settings#specifying-a-required-terraform-version

Domain
Objective 3 - Understand Terraform Basics
Question 32
Skipped
When working with Terraform CLI/Community workspaces, what command can you use to display the current workspace you are working in?

terraform workspace

Explanation
The `terraform workspace` command without any additional arguments does not display the current workspace. It is used to interact with workspaces in Terraform, but it does not specifically show the current workspace you are working in.
terraform workspace new

Explanation
The `terraform workspace new` command is used to create a new workspace in Terraform, not to display the current workspace. It is used when you want to create a new isolated workspace for managing infrastructure configurations.
terraform workspace select

Explanation
The `terraform workspace select` command is used to switch to a different workspace in Terraform, not to display the current workspace. It allows you to select a specific workspace to work with, but it does not provide information about the current workspace.
Correct answer
terraform workspace show

Explanation
The `terraform workspace show` command is used to display the current workspace you are working in when using Terraform CLI/Community workspaces. It provides information about the currently selected workspace, allowing you to confirm the context of your operations.
Overall explanation
The terraform workspace show command is used to output the current workspace.



WRONG ANSWERS:

terraform workspace new will create a new workspace

terraform workspace select will tell Terraform what workspace to change to and use

terraform workspace is just a container that requires additional subcommands



https://developer.hashicorp.com/terraform/cli/commands/workspace

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 33
Skipped
You have infrastructure deployed with Terraform. A developer recently submitted a support ticket to update a security group to permit a new port. To satisfy the ticket, you update the Terraform configuration to reflect the changes and run a terraform plan. However, a co-worker has since logged into the console and manually updated the security group to the same configuration.

What will happen when you run a terraform apply?

the terraform apply command will require you to re-run the terraform plan command first

Explanation
Terraform does not require you to re-run the terraform plan command before applying changes. The plan command is used to preview the changes that Terraform will make, but once you have made the necessary adjustments to the configuration, you can directly run terraform apply to apply those changes to the infrastructure.
the security group will be changed back to the original configuration

Explanation
Terraform follows the principle of desired state configuration management. When you run a terraform apply, Terraform will compare the current state of the infrastructure with the desired state defined in the configuration. Since the manually updated security group matches the desired state in the Terraform configuration, Terraform will recognize that no changes are needed and will not modify the infrastructure.

Correct answer
Nothing will happen. Terraform will validate that the infrastructure matches the desired state.

Explanation
Terraform follows the principle of desired state configuration management. When you run a terraform apply, Terraform will compare the current state of the infrastructure with the desired state defined in the configuration. Since the manually updated security group matches the desired state in the Terraform configuration, Terraform will recognize that no changes are needed and will not modify the infrastructure.
Terraform will detect the drift and return an error.

Explanation
Terraform follows the principle of desired state configuration management. When you run a terraform apply, Terraform will compare the current state of the infrastructure with the desired state defined in the configuration. Since the manually updated security group matches the desired state in the Terraform configuration, Terraform will recognize that no changes are needed and will not modify the infrastructure.

Overall explanation
A terraform apply will run its own state refresh and see the configuration matches the deployed infrastructure, so no changes will be made to the infrastructure.



WRONG ANSWERS:

Terraform will detect the drift and return an error - since terraform apply will refresh state, it will see that the configuration has changed and now meets the desired state, therefore it won't do anything.

the security group will be changed back to the original configuration - this won't happen because the Terraform configuration now states it should have the new port. If Terraform changed it back to the original configuration, the real-world resources would NOT match the desired state

the terraform apply command will require you to re-run the terraform plan command first - terraform plan is not a requirement of the terraform apply command, so this won't happen



https://developer.hashicorp.com/terraform/cli/commands/apply

Domain
Objective 6 - Use the Core Terraform Workflow
Question 34
Skipped
Rather than having to scan and inspect every resource on every run, Terraform relies on what feature to help manage resources?

environment variables

Explanation
Environment variables are used to pass configuration information to Terraform, such as authentication credentials or custom settings. While environment variables are important for configuring Terraform, they do not directly help manage resources or optimize resource scanning and inspection.
local variables

Explanation
Local variables in Terraform are used to store and reuse values within a configuration file. While local variables can help simplify configurations and make them more readable, they do not play a direct role in optimizing resource management or reducing the need to scan and inspect resources on every run.
Correct answer
state

Explanation
Terraform relies on the state feature to help manage resources efficiently. The state file keeps track of the current state of the infrastructure, including the resources that have been created, updated, or deleted. By using the state file, Terraform can determine the differences between the desired state (defined in the configuration) and the actual state of the infrastructure, allowing it to make targeted changes without scanning and inspecting every resource on every run.
providers

Explanation
Providers in Terraform are responsible for managing the lifecycle of resources, such as creating, updating, and deleting them. While providers are essential for interacting with different cloud providers and services, they do not specifically help Terraform manage resources more efficiently by reducing the need to scan and inspect every resource on every run.
Overall explanation
Terraform must store state about your managed infrastructure and configuration. This state is used by Terraform to map real-world resources to your configuration, keep track of metadata, and improve performance for large infrastructures.

This state is stored by default in a local file named terraform.tfstate, but it can also be stored remotely, which works better in a team environment.



WRONG ANSWERS:

Environment variables can supply values for variables or other Terraform configurations, but this is not how Terraform manages resources.

Providers are Terraform plugins that enable communication with a platform's API to allow Terraform to provision resources, but they are not the features used to manage the resources themselves.

Local variables—these supply values for deploying and managing resources in Terraform. They are not used to manage resources directly.



https://developer.hashicorp.com/terraform/language/state

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 35
Skipped
After deploying a new virtual machine using Terraform, you find that the local script didn't run properly. However, Terraform reports the virtual machine was successfully created. How can you force Terraform to replace the virtual machine without impacting the rest of the managed infrastructure?

run a terraform destroy and then run terraform import to pull in the other resources under Terraform management

Explanation
Running a terraform destroy followed by terraform import for the other resources is not the most efficient solution in this scenario. This approach would remove all resources managed by Terraform, including the virtual machine, and then re-import them, which could lead to unnecessary complexity and potential data loss.

update the virtual machine resource and run a terraform init

Explanation
Updating the virtual machine resource and running terraform init will not force Terraform to replace the virtual machine. The terraform init command initializes the Terraform working directory, and updating the resource configuration alone will not trigger a replacement. To specifically replace the virtual machine, the terraform apply -replace command should be used instead.

Correct answer
Use terraform apply -replace=<resource> to force Terraform to replace the resource during apply

Explanation
Using the terraform apply -replace command allows you to tag the specific resource (in this case, the virtual machine) for replacement without impacting the rest of the managed infrastructure. This ensures that only the virtual machine is recreated, potentially resolving any issues with the local script execution.

execute a terraform debug command to see why the script failed to run

Explanation
Executing a terraform debug command to investigate why the script failed to run is helpful for troubleshooting the issue, but it does not directly address the need to replace the virtual machine. Debugging can provide insights into the script execution process, but it does not offer a solution for forcing the replacement of the virtual machine.

Overall explanation
Using terraform apply -replace is how you tag a resource for replacement.



IMPORTANT - PLEASE READ BELOW

The terraform taint command is deprecated. However, you may still see terraform taint on the real exam. Please note the information below and be prepared to understand both options.

For Terraform v0.15.2 and later, we recommend using the -replace option with terraform apply instead. Check out this link for more details.

https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 36
Skipped
After hours of development, you've created a new Terraform configuration from scratch and now you want to test it. Before you can provision the resources, what is the first command that you should run?

Correct answer
terraform init

Explanation
Running `terraform init` is the first command you should execute after creating a new Terraform configuration from scratch. This command initializes the working directory and downloads any necessary plugins for the configuration. It ensures that Terraform is ready to create and manage your infrastructure.
terraform apply

Explanation
The `terraform apply` command is used to apply the changes required to reach the desired state of the configuration. While this command is essential for provisioning resources, it should not be the first command you run when testing a new Terraform configuration. Running `terraform apply` without initializing the configuration with `terraform init` may lead to errors.
terraform import

Explanation
The `terraform import` command is used to import existing infrastructure into your Terraform state. It is not the first command you should run when testing a new Terraform configuration from scratch. This command is typically used after you have defined your resources in Terraform and want to import them into your state.
terraform validate

Explanation
The `terraform validate` command is used to check the syntax and validity of the Terraform configuration files. While it is important to validate your configuration, running `terraform validate` should not be the first command you run when testing a new Terraform configuration. Initializing the configuration with `terraform init` is necessary before validating or applying any changes.
Overall explanation
When you develop new Terraform code, and you're ready to test it out, the first thing you need to do is run terraform init in order to initialize the working directory and download any required providers or referenced modules. Even if you're in a directory that has some of these plugins, you should still run terraform init to make sure all the providers have been downloaded. You could even run a terraform init -upgrade to ensure you have the latest versions of the plugins that meet your requirements.



WRONG ANSWERS:

None of these commands would work if you haven't initialized the working directory yet. You would get an error similar to this:



│ Error: Could not load plugin
│ 
│ 
│ Plugin reinitialization required. Please run "terraform init".
│ 
│ Plugins are external binaries that Terraform uses to access and manipulate
│ resources. The configuration provided requires plugins which can't be located,
│ don't satisfy the version constraints, or are otherwise incompatible.
│ 
│ Terraform automatically discovers provider requirements from your
│ configuration, including providers used in child modules. To see the
│ requirements and constraints, run "terraform providers".
│ 
│ failed to instantiate provider "registry.terraform.io/hashicorp/aws" to obtain schema:
│ unknown provider "registry.terraform.io/hashicorp/aws"


https://developer.hashicorp.com/terraform/cli/commands/init

Domain
Objective 6 - Use the Core Terraform Workflow
Question 37
Skipped
You need to input variables that follow a key/value type structure. What type of variable would be used for this use case?

use a string variable to accomplish this task

Explanation
Using a string variable is not the best option for inputting variables that follow a key/value type structure. Strings are typically used for single values, not for organizing data in a key/value format.
Correct answer
use a map to satisfy this requirement

Explanation
Using a map variable is the correct choice for inputting variables that follow a key/value type structure. Maps allow you to define key/value pairs, making them ideal for organizing and accessing structured data in Terraform.
use a list of strings for this use case

Explanation
Using a list of strings is not the most appropriate choice for this use case. Lists are more suitable for storing ordered collections of items, whereas maps are better suited for key/value pairs and structured data.
use an array to satisfy the requirement

Explanation
Using an array is not the most suitable choice for this use case. Arrays are used for storing ordered collections of items, while maps are better suited for key/value pairs and structured data.
Overall explanation
Map is the best choice for this use case because it allows you to create a key/value structure that can easily be referenced in your Terraform configuration.



WRONG ANSWERS:

  - use a list of strings for this use case - nope, this is just a list of strings that wouldn't create a key/value structure. '

  - use a string variable to accomplish this task - nope, this would allow you to just create a single string value

  - use an array to satisfy the requirement - array isn't a valid Type constraint in Terraform



https://developer.hashicorp.com/terraform/language/expressions/types#maps-objects

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 38
Skipped
True or False? You can use a combination of HCP Terraform's cost estimation feature and Sentinel policies to ensure your organization doesn't apply changes to your environment that would result in exceeding your monthly operating budget.

False

Explanation
False. The statement is incorrect because using a combination of HCP Terraform's cost estimation feature and Sentinel policies can indeed help ensure that changes made to your environment do not exceed your monthly operating budget. By leveraging these tools together, you can proactively manage costs and enforce budget limits within your organization's infrastructure deployment processes.

Correct answer
True

Explanation
True. By utilizing HCP Terraform's cost estimation feature, you can get an estimate of the cost impact of the changes you are about to apply to your infrastructure. This, combined with Sentinel policies, which allow you to define and enforce rules for your infrastructure deployments, can help prevent changes that would lead to exceeding your budget.

Overall explanation
HCP Terraform provides cost estimates for many resources found in your Terraform configuration. For each resource, an hourly and monthly cost is shown, along with the monthly delta. The total cost and delta of all estimable resources is also shown.

Since Sentinel policies are run AFTER cost estimation, you can take cost into account when evaluating Sentinel policies before the run is executed.

https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation#verifying-costs-in-policies

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 39
Skipped
Your colleague provided you with a Terraform configuration file and you're having trouble reading it because parameters and blocks are not properly aligned. What command can you run to quickly update the file configuration file to make it easier to consume?

terraform state

Explanation
The `terraform state` command is used to interact with Terraform state files, allowing you to inspect and modify the state of your infrastructure. It does not address the issue of aligning parameters and blocks in the configuration file.
terraform workspace

Explanation
The `terraform workspace` command is used to manage workspaces in Terraform, allowing you to switch between different sets of infrastructure resources. It does not help in formatting or aligning parameters and blocks in the configuration file.
terraform init

Explanation
The `terraform init` command is used to initialize a Terraform working directory and download any necessary plugins. It is not related to formatting or aligning parameters and blocks in the configuration file.
Correct answer
terraform fmt

Explanation
The `terraform fmt` command is used to automatically format Terraform configuration files according to the Terraform style conventions. Running this command will align parameters and blocks properly, making the file easier to read and consume.
Overall explanation
The terraform fmt command is used to rewrite Terraform configuration files to a canonical format and style. This command applies a subset of the Terraform language style conventions, along with other minor adjustments for readability.

Other Terraform commands that generate Terraform configuration will produce configuration files that conform to the style imposed by terraform fmt, so using this style in your own files will ensure consistency.

The canonical format may change in minor ways between Terraform versions, so after upgrading Terraform we recommend to proactively run terraform fmt on your modules along with any other changes you are making to adopt the new version.

If you want to format ALL of your .tf files, you can use terraform fmt -recursive and it'll format all files in the current and all subdirectories.



WRONG ANSWERS:

terraform init - this is used to initialize and work with the Terraform backend

terraform state - this command is for working with and viewing Terraform state

terraform workspace - this command is used to create and manage Terraform Community workspaces



https://developer.hashicorp.com/terraform/cli/commands/fmt

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 40
Skipped
What feature does Terraform use to map configuration to resources in the real world?

parallelism

Explanation
Parallelism in Terraform refers to the ability to execute multiple operations simultaneously, which can speed up the deployment process. While parallelism is important for efficiency, it is not directly related to mapping configuration to resources in the real world.
local variables

Explanation
Local variables in Terraform are used to store values that can be reused within a configuration file. While local variables are useful for organizing and reusing values, they are not the feature that Terraform uses to map configuration to resources in the real world.
resource blocks

Explanation
Resource blocks in Terraform are used to define the desired state of a resource that Terraform will manage. While resource blocks are essential for declaring and configuring resources, they are not the feature that Terraform uses to map configuration to resources in the real world.
Correct answer
state

Explanation
Terraform uses the state feature to map configuration to resources in the real world. The state file keeps track of the current state of the infrastructure and helps Terraform understand which resources are currently managed and what changes need to be applied.
Overall explanation
Terraform requires some sort of database to map Terraform config to the real world. When you have a resource resource "aws_instance" "foo" in your configuration, Terraform uses this map to know that instance i-abcd1234 is represented by that resource.

For some providers like AWS, Terraform could theoretically use something like AWS tags. Early prototypes of Terraform actually had no state files and used this method. However, we quickly ran into problems. The first major issue was a simple one: not all resources support tags, and not all cloud providers support tags.

Therefore, for mapping configuration to resources in the real world, Terraform uses its own state structure.



WRONG ANSWERS:

Parallelism is the way Terraform can deploy many resources at the same time to speed up the deployment

Local variables are used to reduce repeating the same expressions or values over and over in your code

Resource blocks are the block type that deploys actual resources



https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 41
Skipped
You have an existing Google Cloud Compute Engine instance with ID my-instance that was created manually. Now, you want to manage this resource using Terraform.

Which command would you use to import the existing instance into your Terraform state?

terraform init google_compute_instance.my_instance my-instance

Explanation
The 'terraform init' command is used to initialize a Terraform configuration. It is not the correct command to import an existing resource into Terraform state. The 'init' command is typically used to set up your working directory for Terraform.
terraform state show google_compute_instance.my_instance my-instance

Explanation
The 'terraform state show' command is used to show the attributes of a specific resource in the Terraform state. It is not the correct command to import an existing resource into Terraform state. The 'show' command is used to display information about the current state of a resource, not to import it.
Correct answer
terraform import google_compute_instance.my_instance my-instance

Explanation
The correct command to import an existing resource into Terraform state is 'terraform import'. In this case, you would use terraform import google_compute_instance.my_instance my-instance to import the existing Google Cloud Compute Engine instance with ID 'my-instance' into your Terraform state to bring it under management.

terraform apply google_compute_instance.my_instance my-instance

Explanation
The 'terraform apply' command is used to apply changes to your infrastructure as defined in your Terraform configuration. It is not the correct command to import an existing resource into Terraform state. The 'apply' command is used to create, update, or delete resources based on your configuration.
Overall explanation
In the context of this question, the terraform import command allows you to bring an existing resource, like the Google Cloud Compute Engine instance, under Terraform management. It adds the resource to Terraform's state file without modifying the infrastructure itself. After the import, you need to manually update your configuration (.tf file) to match the resource's actual settings, ensuring that future terraform apply runs work correctly.

https://developer.hashicorp.com/terraform/cli/import

Domain
Objective 3 - Understand Terraform Basics
Question 42
Skipped
Given the code snippet below, how would you identify the arn to be used in the output block that was retrieved by the data block?



data "aws_s3_bucket" "data_bucket" {
  bucket = "my-data-lookup-bucket-btk"
}
...
 
output "s3_bucket_arn" {
  value = ????
}
data.aws_s3_bucket.arn

Explanation
This choice is incorrect because it does not follow the correct syntax to reference the ARN retrieved by the data block. The reference should include the data block name "data_bucket" to access the ARN value correctly.

data.aws_s3_bucket.data_bucket

Explanation
This choice is incorrect because it does not include the correct syntax to reference the ARN retrieved by the data block. The reference should include both the data block name "data_bucket" and the data block itself "data.aws_s3_bucket" to access the ARN value correctly.

Correct answer
data.aws_s3_bucket.data_bucket.arn

Explanation
The correct way to reference the ARN retrieved by the data block is by using the syntax data.aws_s3_bucket.data_bucket.arn. This ensures that the output block correctly accesses the ARN value from the data block for the specified S3 bucket.

aws_s3_bucket.data_bucket

Explanation
This choice is incorrect as it does not include the correct syntax to reference the ARN retrieved by the data block. The reference should start with "data.aws_s3_bucket" to access the ARN value for the specified S3 bucket.
Overall explanation
To refer to a resource, you'd use <block type>.<resource type>.<name> . In this case, the <block type> is data, the <resource type> is aws_s3_bucket, <name> is data_bucket, and then you'd add the arn attribute at the end.



https://developer.hashicorp.com/terraform/cli/state/resource-addressing

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 43
Skipped
You are managing multiple resources using Terraform running in AWS. You want to destroy all the resources except for a single web server. How can you accomplish this?

change to a different workspace and run a terraform destroy

Explanation
Changing to a different workspace and running terraform destroy will not specifically target the removal of all resources except for the web server. It will destroy all resources in the current workspace, including the web server.
run a terraform import command against the web server and then execute a terraform destroy

Explanation
Running a terraform import command against the web server will bring that resource under Terraform management, but it will not help in excluding it from the destruction process. Executing terraform destroy after importing the web server will result in the removal of all resources, including the web server.
delete the web server resource block from the configuration file and run a terraform apply

Explanation
Deleting the web server resource block from the configuration file and running terraform apply will not delete the web server.

Correct answer
run a terraform state rm to remove it from state and then destroy the remaining resources by running terraform destroy

Explanation
Running a terraform state rm command will remove the specified resource from the Terraform state, allowing you to then run terraform destroy to remove all remaining resources except for the web server that was removed from the state. This approach effectively excludes the specified web server from the destruction process.
Overall explanation
To accomplish this, you can delete the resource from state so Terraform no longer knows anything about it. Then you can run a terraform destroy to destroy the remaining resources. During the destroy, Terraform won't touch the web server since it is no longer managing it. This is similar to how Terraform won't impact existing resources that it does not know about when creating, modifying, and destroying resources in your local or public cloud infrastructure.

To delete a resource from state, you can use the terraform state rm <address> command, which will effectively make Terraform "forget" the object while it continues to exist in the remote system.



WRONG ANSWERS:

change to new workspace and run terraform destroy - changing to a different workspace would have no impact on any resources in the current workspace. It could, however, impact any resources that were provisioned with the second workspace that you change to

terraform import & terraform destroy - using the import command here is basically the opposite of what we want to do. We want Terraform to "forget" about a particular resource, and the import command pulls existing resources under Terraform management

delete the block and run terraform apply - this would actually destroy ONLY the web server that we want to keep, so essentially doing the exact opposite of what we're trying to accomplish



https://developer.hashicorp.com/terraform/cli/commands/state/rm

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 44
Skipped
As you are developing new Terraform code, you are finding that you are constantly repeating the same expression over and over throughout your code, and you are worried about the effort that will be needed if this expression needs to be changed. What feature of Terraform can you use to avoid repetition and make your code easier to maintain?

Correct answer
locals block

Explanation
Using locals in Terraform allows you to define reusable values or expressions within your configuration. By defining the repeated expression as a local variable, you can easily reference it throughout your code without having to repeat it multiple times. This not only reduces duplication but also makes your code more maintainable and easier to update if the expression needs to be changed in the future.

terraform graph

Explanation
The terraform graph command in Terraform is used to generate a visual representation of the dependency graph of your infrastructure. While understanding the dependency graph is important for troubleshooting and optimizing your infrastructure, it does not directly help with avoiding repetition in your code. It is not the feature you would use to make your code easier to maintain by reducing duplication of expressions.

remote backend

Explanation
The remote backend in Terraform is used to store the state file remotely, rather than locally on your machine. While the remote backend is important for state management and collaboration, it does not directly address the issue of repeating the same expression in your code. It is not the feature you would use to avoid repetition and improve code maintainability.

data block

Explanation
The data block in Terraform is used to fetch and use data from outside sources, such as APIs or other Terraform configurations. While the data block is useful for integrating external data into your Terraform code, it does not specifically address the issue of repetition within your code. It is not the feature you would use to avoid repeating the same expression and improve code maintainability.

Overall explanation
A local value assigns a name to an expression, so you can use it multiple times within a configuration without repeating it. The expressions in local values are not limited to literal constants; they can also reference other values in the configuration in order to transform or combine them, including variables, resource attributes, or other local values.

You can use local values to simplify your Terraform configuration and avoid repetition. Local values (locals) can also help you write a more readable configuration by using meaningful names rather than hard-coding values. If overused they can also make a configuration hard to read by future maintainers by hiding the actual values used.

Use local values only in moderation, in situations where a single value or result is used in many places and that value is likely to be changed in the future. The ability to easily change the value in a central place is the key advantage of local values.



https://developer.hashicorp.com/terraform/language/values/locals

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 45
Skipped
True or False? When referencing a module, you must specify the version of the module in the calling module block.

True

Explanation
When referencing a module in Terraform, specifying the version of the module in the calling module block is not a mandatory requirement. Terraform allows you to reference modules without specifying a version, and it will default to using the latest version available in the module registry. This flexibility allows for easier module management and updates without the need to constantly modify version numbers in the calling module block.
Correct answer
False

Explanation
It is false that you must specify the version of the module in the calling module block when referencing a module in Terraform. While it is recommended to pin module versions for reproducibility and stability, it is not a strict requirement. Terraform provides the flexibility to reference modules without specifying a version, making it easier to work with modules and manage dependencies.
Overall explanation
While it's not required, we recommend explicitly constraining the acceptable version numbers to avoid unexpected or unwanted changes. Use the version argument in the module block to specify versions.



module "consul" {
  source  = "hashicorp/consul/aws"
  version = "0.11.0"
 
  servers = 3
}


https://developer.hashicorp.com/terraform/language/expressions/version-constraints

Domain
Objective 5 - Interact with Terraform Modules
Question 46
Skipped
You have a configuration file that you've deployed to one AWS region already but you want to deploy the same configuration file to a second AWS region without making changes to the configuration file. What feature of Terraform can you use to accomplish this?

terraform plan

Explanation
The terraform plan command is used to create an execution plan for Terraform. While it is an essential step before applying changes to infrastructure, it does not directly help in deploying the same configuration file to a different AWS region without modifications.
Correct answer
terraform workspace

Explanation
Using Terraform workspaces allows you to manage multiple environments, such as different AWS regions, with the same configuration file. By creating a new workspace for the second AWS region, you can deploy the same configuration file without making any changes to it.
terraform get

Explanation
The terraform get command is used to download and update modules mentioned in the root module. It does not directly assist in deploying the same configuration file to a different AWS region without changes.
terraform import

Explanation
The terraform import command is used to import existing infrastructure into Terraform. While it can be useful for managing existing resources, it does not directly address the scenario of deploying the same configuration file to a different AWS region without modifications.
Overall explanation
Workspaces should be used in this scenario to create separate state files for each regional deployment. When you use a workspace in Terraform Community, you get a brand new state file to work with that is completely separate from the original. Therefore, you can modify environment variables or other values and use the same Terraform without negatively impacting resources that were deployed in any other workspace.

To create a new workspace, you can use the command terraform workspace new <name>



WRONG ANSWERS:

terraform plan - this command compares the current infrastructure against the desired state (configuration file) and proposes changes to your infrastructure. This is also commonly referred to as a dry run.

terraform get - this command is used to download modules

terraform import - this command can be used to import existing resources and pull them under Terraform management



https://developer.hashicorp.com/terraform/language/state/workspaces

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 47
Skipped
What is NOT a benefit of using Infrastructure as Code?

the ability to programmatically deploy infrastructure

Explanation
The ability to programmatically deploy infrastructure is a significant benefit of using Infrastructure as Code. By defining infrastructure configurations in code, teams can automate the deployment process, making it repeatable, scalable, and less error-prone compared to manual deployments.
Correct answer
reducing vulnerabilities in your publicly-facing applications

Explanation
Using Infrastructure as Code does not directly reduce vulnerabilities in publicly-facing applications. While it can help in creating consistent and secure infrastructure configurations, the security of the applications themselves is not solely dependent on IaC.
your infrastructure configurations can be version controlled and stored in a code repository alongside the application code

Explanation
Storing infrastructure configurations in a version-controlled code repository alongside application code is a key advantage of using Infrastructure as Code. This practice enables teams to track changes, collaborate effectively, and maintain a history of infrastructure changes, enhancing overall visibility and control.
the reduction of misconfigurations that could lead to security vulnerabilities and unplanned downtime

Explanation
One of the key benefits of using Infrastructure as Code is the reduction of misconfigurations that could lead to security vulnerabilities and unplanned downtime. By defining infrastructure configurations in code, human errors and inconsistencies are minimized, leading to a more secure and stable environment.
Overall explanation
Although Infrastructure as Code (IaC) tools allow you to programmatically deploy and manage your applications, they do NOT guarantee that your applications have fewer vulnerabilities. This security feature is not the responsibility of IaC, and you need to pair IaC with another tool to scan your code for security vulnerabilities.



WRONG ANSWERS:

All of the wrong answers in this question are actually the primary use cases of Infrastructure as Code tools.

Infrastructure as code (IaC) tools allow you to manage infrastructure with configuration files rather than through a graphical user interface. IaC allows you to build, change, and manage your infrastructure in a safe, consistent, and repeatable way by defining resource configurations that you can version, reuse, and share.



https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 48
Skipped
Based on the code snippet below, where is the module that the code is referencing?



module "server_subnet_1" {
  source          = "./modules/web_server"
 
  ami             = data.aws_ami.ubuntu.id
  key_name        = aws_key_pair.generated.key_name
  user            = "ubuntu"
  private_key     = tls_private_key.generated.private_key_pem
  subnet_id       = aws_subnet.public_subnets["public_subnet_1"].id
  security_groups = [aws_security_group.vpc-ping.id, aws_security_group.vpc-web.id]
}
stored in the Terraform public registry

Explanation
The code snippet does not reference a module stored in the Terraform public registry. Instead, it specifies a local path "./modules/web_server" as the source of the module, indicating that it is located in a subdirectory within the current working directory.
Correct answer
in the modules subdirectory in the current working directory where Terraform is being executed

Explanation
The code snippet specifies the source of the module as "./modules/web_server", which indicates that the module is located in the modules subdirectory within the current working directory where Terraform is being executed. This is the correct location for referencing modules in Terraform.
stored in a private registry managed by the organization

Explanation
The code snippet does not indicate that the module is stored in a private registry managed by the organization. Instead, it specifies a local path "./modules/web_server" as the source of the module, indicating that it is located in a subdirectory within the current working directory where Terraform is being executed.
the same working directory where Terraform is being executed

Explanation
The code snippet does not indicate that the module is located in the same working directory where Terraform is being executed. Instead, it explicitly specifies the source path as "./modules/web_server", indicating that the module is in a subdirectory within the current working directory.
Overall explanation
In this example, the user created a `modules` directory and then saved the module in that new directory. Therefore, the answer is in the modules subdirectory in the current working directory where Terraform is being executed. 

Anytime you have a local path as the source, the module will be sourced from the referenced directory. You could also put the path of a VCS repository here or a reference to a private or public registry.

For example, if you wanted to reference a public module, you could use something like this:



module "network" {
  source  = "Azure/network/azurerm"
  version = "3.5.0"
  # insert the 1 required variable here
}


https://developer.hashicorp.com/terraform/internals/module-registry-protocol#module-addresses

Domain
Objective 5 - Interact with Terraform Modules
Question 49
Skipped
You need to start managing an existing AWS S3 bucket with Terraform that was created manually outside of Terraform. Which block type should you use to incorporate this existing resource into your Terraform configuration? (select two answers)

terraform block

Explanation
The terraform block in Terraform is used to configure global settings for the Terraform configuration. It is not the block type used for incorporating existing resources into your Terraform configuration.

Correct selection
resource block

Explanation
The resource block in Terraform is used to define and manage resources within your Terraform configuration. By using the resource block, you can declare the configuration for the existing AWS S3 bucket that was created manually and start managing it with Terraform. The resource block is required to use the import block or the terraform import command since Terraform needs the resource block to start managing the resource moving forward.

Correct selection
import block

Explanation
The import block in Terraform is used to import existing resources into the Terraform state. By using the import block, you can manage resources that were created manually outside of Terraform within your Terraform configuration.

data block

Explanation
The data block in Terraform is used to define and retrieve data from existing resources. While the data block is useful for querying information about resources, it is not the appropriate block type for managing an existing resource that was created manually outside of Terraform.

Overall explanation
The import block in Terraform is used to bring an existing resource into Terraform’s state file. By specifying the resource and its ID, you can manage the resource with Terraform without recreating it. This is especially useful for incorporating resources that were created manually or by other means.

https://developer.hashicorp.com/terraform/language/import

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 50
Skipped
Beyond storing state, what capability can an enhanced storage backend, such as the remote backend, provide your organization?

replicate your state to a secondary location for backup

Explanation
Replicating your state to a secondary location for backup is not a capability provided by an enhanced storage backend like the remote backend. While backups are important for data integrity, this specific functionality is not directly related to the capabilities of the storage backend in Terraform.
Correct answer
execute your Terraform on infrastructure either locally or in HCP Terraform

Explanation
An enhanced storage backend like the remote backend allows you to execute your Terraform operations on infrastructure either locally or in HCP Terraform. This flexibility enables you to work seamlessly across different environments and collaborate with team members using different setups.

allow multiple people to execute operations on the state file at the same time

Explanation
An enhanced storage backend, like the remote backend, does not inherently allow multiple people to execute operations on the state file at the same time. While collaboration features may exist in HCP Terraform or other platforms, this specific capability is not a standard feature of the storage backend itself.

provides versioning capabilities on your state file in the event it becomes corrupted

Explanation
Providing versioning capabilities on your state file in the event it becomes corrupted is not a direct capability of an enhanced storage backend like the remote backend. Versioning and backup features are typically managed separately from the storage backend in Terraform.
Overall explanation
Using an enhanced storage backend allows you to execute your Terraform on infrastructure either locally or in HCP Terraform. Note that this enhanced storage backend term has now been deprecated by Terraform but it's likely to show up in the test for a while. See the note below from this site:

Note: In Terraform versions prior to 1.1.0, backends were also classified as being 'standard' or 'enhanced', where the latter term referred to the ability of the remote backend to store state and perform Terraform operations. This classification has been removed, clarifying the primary purpose of backends. Refer to Using HCP Terraform for details about how to store state, execute remote operations, and use HCP Terraform directly from Terraform.



https://developer.hashicorp.com/terraform/language/settings/backends/configuration#what-backends-do

Domain
Objective 7 - Implement and Maintain State
Question 51
Skipped
You want to restrict your team members to specific modules that are approved by the organization's security team when using HCP Terraform. What feature should you use?

HCP Terraform Organizations

Explanation
HCP Terraform Organizations provide a way to organize workspaces, users, and permissions within HCP Terraform. While organizations are essential for managing team access and permissions, they do not specifically address the need to restrict team members to specific approved modules.

Terraform Workspaces

Explanation
Terraform Workspaces are used to isolate different environments or projects within HCP Terraform. While workspaces are crucial for organizing and managing infrastructure configurations, they do not offer the functionality to restrict team members to specific approved modules as required in this scenario.

Terraform Registry (public)

Explanation
The Terraform Registry (public) is a public repository of Terraform modules that anyone can access. While it provides a wide range of modules to choose from, it does not offer the ability to restrict team members to specific approved modules as required in this scenario.
Correct answer
HCP Terraform Private Registry

Explanation
The HCP Terraform Private Registry allows organizations to host and manage their own private modules within HCP Terraform. This feature enables teams to restrict access to approved modules and ensures that only authorized modules are used in infrastructure provisioning.

Overall explanation
Private providers and private modules are hosted on an organization's private registry and are only available to members of that organization.

https://developer.hashicorp.com/terraform/cloud-docs/registry

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 52
Skipped
Your organization has multiple engineers that have permission to manage Terraform as well as administrative access to the public cloud where these resources are provisioned. If an engineer makes a change outside of Terraform, what command can you run to detect drift and update the state file?

terraform state list

Explanation
The "terraform state list" command is used to list all resources that are being tracked by Terraform in the state file. While it can provide information about the current state of resources, it does not specifically detect drift or update the state file after changes made outside of Terraform.
Correct answer
terraform apply -refresh-only

Explanation
The "terraform apply -refresh-only" command is used to detect drift between the Terraform configuration and the actual state of the resources in the cloud provider. It will update the state file with any changes made outside of Terraform, ensuring that the configuration remains in sync with the actual resources.
terraform get

Explanation
The "terraform get" command is used to download and update modules mentioned in the root module. It is not directly related to detecting drift or updating the state file after changes made outside of Terraform.
terraform init

Explanation
The "terraform init" command is used to initialize a Terraform configuration, download providers, and set up the working directory. It is not specifically designed to detect drift or update the state file after changes made outside of Terraform.
Overall explanation
To instruct Terraform to refresh the state file based on the current configuration of managed resources, you can use the terraform apply -refresh-only command. If Terraform discovers drift, it will update the state file with the changes.

Note that terraform refresh used to be the correct command here, but that command is deprecated. It might show up on the exam though.



https://learn.hashicorp.com/tutorials/terraform/refresh

Domain
Objective 7 - Implement and Maintain State
Question 53
Skipped
True or False? Infrastructure as code (IaC) tools allow you to manage infrastructure with configuration files rather than through a graphical user interface.

False

Explanation
This answer is incorrect because Infrastructure as code (IaC) tools are specifically designed to manage infrastructure using configuration files rather than relying on a graphical user interface for manual interactions. By using IaC tools like Terraform, you can define, provision, and manage infrastructure resources in a consistent and automated manner through code.

Correct answer
True

Explanation
True. Infrastructure as code (IaC) tools, such as Terraform, allow you to define and manage infrastructure using configuration files written in a declarative language. This approach enables you to treat infrastructure as code, version control it, and automate its provisioning and management, all without the need for manual intervention through a graphical user interface.
Overall explanation
This is true, although there are tools out there that have UIs to deploy IaC. However, the goal is to reduce or eliminate the need to use a UI to deploy infrastructure and applications.



https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 54
Skipped
Which of the following is an advantage of using Infrastructure as Code?

increase the time to market for application deployment

Explanation
Increasing the time to market for application deployment is not a direct benefit of using Infrastructure as Code. IaC can actually reduce the time to market by enabling organizations to deploy infrastructure quickly for testing and production workloads.

elimination of security vulnerabilities in your application deployment workflow

Explanation
While using Infrastructure as Code can help improve the security of your application deployment workflow by enabling version control, automated testing, and consistent configurations, it does not automatically eliminate all security vulnerabilities. Security considerations should still be carefully addressed and implemented in conjunction with IaC practices.
simplification of using a user interface to define your infrastructure

Explanation
While Infrastructure as Code simplifies the process of defining and managing infrastructure configurations, it does not necessarily involve using a user interface. IaC typically involves writing code to describe infrastructure resources, which can be more efficient and scalable than using a graphical user interface.
Correct answer
standardize your deployment workflow

Explanation
Using Infrastructure as Code allows you to standardize your deployment workflow by defining infrastructure configurations in code. This helps ensure consistency and repeatability in your deployments, making it easier to manage and scale your infrastructure.
Overall explanation
IaC helps organizations standardize their deployment workflows since they can codify and automate the deployment of applications and underlying infrastructure.



WRONG ANSWERS:

increase the time to market for application deployment - nope, who wants to use a tool that would INCREASE the time to market for application deployment? We want to find tools that DECREASE it.

simplification of using a user interface to define your infrastructure - Nah, we want to move quickly, and using a user interface for any tool likely slows us down and increases our chances of human error. We want to use a CLI or API for our changes so it's quick and predictable.

elimination of security vulnerabilities in your application deployment workflow - while Terraform could help with the security of your workflow, it doesn't guarantee it since Terraform just deploys what you tell it. It's not checking for security requirements or vulnerabilities or anything like that



https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 55
Skipped
Which statement below is true regarding using Sentinel in HCP Terraform?

Sentinel policies can be developed using HCL, JSON, or YAML

Explanation
Sentinel policies can be developed using HCL (HashiCorp Configuration Language) or JSON. This flexibility allows users to define policies in a format that is most comfortable and familiar to them, making it easier to create and manage policies within HCP Terraform.

Sentinel runs before each phase of the Terraform workflow, meaning a terraform init, terraform plan, and terraform apply

Explanation
Sentinel runs before each phase of the Terraform workflow, including terraform init, terraform plan, and terraform apply. By running before each phase, Sentinel can evaluate policies and enforce them at different stages of the workflow, ensuring compliance throughout the entire process.
Sentinel policies are automatically enforced on all workspaces without needing to configure them

Explanation
This is wrong because Sentinel policies must be explicitly configured and applied to specific workspaces or runs.

Correct answer
Sentinel runs before a configuration is applied, therefore potentially reducing cost for public cloud resources

Explanation
Sentinel runs before a configuration is applied in HCP Terraform, allowing it to enforce policies and prevent resources from being provisioned if they do not comply with the defined rules. This can potentially reduce costs by catching and preventing unnecessary or non-compliant resource deployments.

Overall explanation
Sentinel is an embedded policy-as-code framework integrated with the HashiCorp Enterprise products. It enables fine-grained, logic-based policy decisions, and can be extended to use information from external sources.

When using Sentinel policies to define and enforce policies, it (Sentinel) runs after a terraform plan, but before a terraform apply. Therefore, you can potentially reduce costs on public cloud resources by NOT deploying resources that do NOT conform to policies enforced by Sentinel. For example, without Sentinel, your dev group might deploy instances that are too large, or too many of them, by accident or just because they can. Rather than being REACTIVE and shutting them down after they have been deployed, which it would cost you $, you can use Sentinel to prevent those large resources from being deployed in the first place.



https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 56
Skipped
You've included two different modules from the official Terraform registry in a new configuration file. When you run a terraform init, where does Terraform Community download and store the modules locally?

in the /tmp directory of the machine executing Terraform

Explanation
Terraform does not download and store the modules in the /tmp directory of the machine executing Terraform. The modules are specifically stored in the .terraform/modules folder within the working directory for better organization and accessibility.

Terraform stores them in memory on the machine running Terraform

Explanation
Terraform does not store the downloaded modules in memory on the machine running Terraform. The modules are downloaded and stored locally in the .terraform/modules folder within the working directory for persistent access and usage.

in the same root directory where the Terraform configuration files are stored

Explanation
The modules are not stored in the same root directory where the Terraform configuration files are stored. Instead, they are saved in the .terraform/modules folder within the working directory to keep the project structure clean and organized.

Correct answer
in the .terraform/modules folder in the working directory

Explanation
Terraform Community downloads and stores the modules locally in the .terraform/modules folder within the working directory. This allows for easy access and management of the modules within the project structure.

Overall explanation
When plugins and modules are downloaded, they are stored under their respective directory in the .terraform folder within the current working directory. For example, providers/plugins are downloaded to .terraform/providers and modules are downloaded to the .terraform/modules directory.



WRONG ANSWERS:

Terraform doesn't use any of these directories to store any downloaded content when running a terraform init



https://developer.hashicorp.com/terraform/language/providers#provider-installation

Domain
Objective 5 - Interact with Terraform Modules
Question 57
Skipped
You need to set the value for a Terraform input variable. Which of the following allows you to set the value using an environment variable?

export TF_VARIABLE_app=eCommerce01

Explanation
This choice is incorrect because it uses `TF_VARIABLE_` as the prefix for setting the value using an environment variable. Terraform expects input variables to be prefixed with `TF_VAR_` followed by the variable name for proper binding.
export VAR_database=prodsql01

Explanation
This choice is incorrect because it uses the `VAR_` prefix instead of `TF_VAR_` to set the value using an environment variable. Terraform expects input variables to be prefixed with `TF_VAR_` for environment variable binding.
export TF_db-pass=P@ssw0rd01!

Explanation
This choice is incorrect because it uses a different format (`TF_db-pass`) for setting the value using an environment variable. Terraform expects input variables to be prefixed with `TF_VAR_` followed by the variable name for proper binding.
Correct answer
export TF_VAR_user=dbadmin01

Explanation
This choice is correct because it uses the `TF_VAR_` prefix followed by the variable name (`user` in this case) to set the value using an environment variable. By exporting `TF_VAR_user=dbadmin01`, the value of the `user` input variable in Terraform will be set to `dbadmin01`.
Overall explanation
As a fallback for the other ways of defining variables, Terraform searches the environment of its own process for environment variables named TF_VAR_ followed by the name of a declared variable.


WRONG ANSWERS:

None of the other environment variables shown as answers will successfully set a value for a Terraform variable.



https://developer.hashicorp.com/terraform/language/values/variables#environment-variables

Domain
Objective 8 - Read, Generate, and Modify Configuration