HashiCorp Terraform - Practice Exam #6 - Results
Attempt 11





Question 1
Correct
You are developing a new Terraform module to demonstrate features of the most popular HashiCorp products. You need to spin up an AWS instance for each tool, so you create the resource block as shown below using the for_each meta-argument.



resource "aws_instance" "bryan-demo" {
  # ...
  for_each = {
    "terraform": "infrastructure",
    "vault":     "security",
    "consul":    "connectivity",
    "nomad":     "scheduler",
  }
}
After the deployment, you view the state using the terraform state list command. What resource address would be displayed for the instance related to vault?

Your answer is correct
aws_instance.bryan-demo["vault"]

Explanation
The correct resource address format for the instance related to "vault" when using the for_each meta-argument in Terraform is aws_instance.bryan-demo["vault"]. This format allows Terraform to uniquely identify and manage each instance based on the key-value pair provided in the for_each block.

aws_instance.bryan-demo[1]

Explanation
The resource address aws_instance.bryan-demo[1] is not the correct format when using the for_each meta-argument in Terraform. The key-value pairs provided in the for_each block are used as keys to uniquely identify each instance, so the correct format includes the specific key, in this case, "vault".

aws_instance.bryan-demo["2"]

Explanation
The resource address aws_instance.bryan-demo["2"] is not the correct format when using the for_each meta-argument in Terraform. The key-value pairs provided in the for_each block are used as keys to uniquely identify each instance, so the correct format includes the specific key, in this case, "vault".

aws_instance.bryan-demo.vault

Explanation
The resource address format aws_instance.bryan-demo.vault is not valid when using the for_each meta-argument in Terraform. The correct format includes the key enclosed in square brackets, such as aws_instance.bryan-demo["vault"], to properly reference the instance related to "vault".

Overall explanation
In Terraform, when you use the for_each argument in a resource block, Terraform generates multiple instances of that resource, each with a unique address. The address of each instance is determined by the keys of the for_each map, and it is used to identify and manage each instance of the resource.

For example, consider the following resource block in the question:



resource "aws_instance" "bryan-demo" {
  # ...
  for_each = {
    "terraform": "infrastructure",
    "vault":     "security",
    "consul":    "connectivity",
    "nomad":     "scheduler",
  }
}


In this example, Terraform will create four instances of the aws_instance resource, one for each key in the for_each map. The addresses of these instances will be aws_instance.bryan-demo["terraform"] , aws_instance.bryan-demo["vault"],aws_instance.bryan-demo["consul"], and aws_instance.bryan-demo["nomad"].

When you reference the properties of these instances in your Terraform code, you can use the address and property reference syntax to access the properties of each instance. For example, you can access the ID of the first instance using aws_instance.bryan-demo["vault"].id.

Using the for_each argument in a resource block is a powerful way to manage multiple instances of a resource, and it provides a convenient way to reuse the same resource configuration for multiple instances with different properties.



https://developer.hashicorp.com/terraform/cli/v1.1.x/state/resource-addressing

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 2
Correct
Please fill the blank field(s) in the statement with the right words.

What command can you use to display details about the resource as shown below?


resource "aws_internet_gateway" "demo" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = "demo_igw"
  }
}
__

Your answer is correct
terraform state show aws_internet_gateway.demo
Explanation
terraform state show ADDRESS will show the attributes of a single resource, therefore the answer is aws_internet_gateway.demo

Question 3
Correct
Please fill the blank field(s) in the statement with the right words.

The command __ can be used to ensure your code is syntactically valid and internally consistent.

Your answer is correct
terraform validate
Explanation
terraform validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state. It is thus primarily useful for general verification of reusable modules, including the correctness of attribute names and value types.

Question 4
Correct
Please fill the blank field(s) in the statement with the right words.

The command __ is used to extract the output variables defined in the Terraform configuration.

Your answer is correct
terraform output
Explanation
The terraform output command in Terraform is used to display the values of outputs defined in the Terraform configuration. Outputs are a way to extract and display information about your infrastructure after it's been created or modified by Terraform. This command allows you to easily view specific information such as IP addresses, URLs, or other configuration details that are defined as outputs in your Terraform configuration files.

Question 5
Correct
Please fill the blank field(s) in the statement with the right words.

By default, Terraform stores its state in a file named __

Your answer is correct
terraform.tfstate
Explanation
Terraform stores its state in a file called terraform.tfstate

Question 6
Incorrect
Please fill the blank field(s) in the statement with the right words.

You have the following resource block that creates subnets using for_each from a variable. How would you reference subnet_b in an output block?

__



variable "private_subnets" {
  type = map(number)
  default = {
    subnet_a = 1
    subnet_b = 2
  }
}
 
resource "aws_subnet" "private_subnets" {
  for_each          = var.private_subnets
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, each.value)
  availability_zone = tolist(data.aws_availability_zones.available.names)[each.value]
 
  tags = {
    Name      = each.key
    Terraform = "true"
  }
}
Your answer is incorrect
aws_subnet.private_subnets["subnet_b"]
Correct answer
aws_subnet.private_subnets["subnet_b"].id
Explanation
Since for_each creates resources as a map, each subnet is referenced using its key instead of an index. To get the ID of a specific subnet, use:

aws_subnet.private_subnets["subnet_b"].id

Here:

aws_subnet.private_subnets is the resource map.

["subnet_b"] accesses the specific subnet by its key.

.id retrieves the subnet’s ID.

This method ensures you correctly reference a specific resource when using for_each.

Question 7
Correct
Please fill the blank field(s) in the statement with the right words.

You need to access the attributes of a data source in your Terraform configuration for the following code. How should you reference the ID of the returned data? __ 



data "aws_ami" "ubuntu" {
  most_recent = true
 
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
 
  owners = ["099720109477"] 
}
Your answer is correct
data.aws_ami.ubuntu.id
Explanation
The expression data.aws_ami.ubuntu.id is used in Terraform to refer to the ID of an Amazon Machine Image (AMI) for Ubuntu retrieved from the AWS data source named aws_ami. In this example, aws_ami is a data source provided by the AWS provider for Terraform, which allows you to fetch information about AMIs available in your AWS account.



This specific expression assumes that you have defined a data source block named aws_ami in your Terraform configuration and configured it to retrieve information about Ubuntu AMIs. The .id part of the expression accesses the ID attribute of the AMI object retrieved by the data source. This ID can then be used elsewhere in your Terraform configuration, such as in resource definitions, to reference the specific AMI you want to use for provisioning instances.

Question 8
Correct
Please fill the blank field(s) in the statement with the right words.

To skip the refresh step during a terraform apply, you can use the command __

Your answer is correct
terraform apply -refresh=false
Explanation
The terraform apply -refresh=false command in Terraform is used to prevent Terraform from refreshing the state of the infrastructure resources before applying changes. By default, Terraform checks the current state of resources in the infrastructure to ensure that it has the latest information before making any modifications. However, using the -refresh=false flag disables this behavior, instructing Terraform to use the existing state without refreshing it. This can be useful in situations where you want to apply changes quickly without waiting for Terraform to check the current state of the infrastructure, especially if you're confident that the state is already up to date. However, it's important to use this option cautiously, as it may lead to unintended consequences if the state of the infrastructure is not accurate.

Question 9
Correct
Please fill the blank field(s) in the statement with the right words.

You can use the command __ to reformat your configuration files in the standard canonical style for HCL.

Your answer is correct
terraform fmt
Explanation
The terraform fmt command in Terraform is used to automatically format Terraform configuration files according to a consistent style defined by the Terraform language. This command helps ensure that your Terraform code follows a standard formatting convention, making it easier to read and maintain.

When you run terraform fmt, Terraform analyzes your configuration files and adjusts indentation, spacing, and other formatting details to comply with the prescribed style. This command is especially useful when working in teams, as it helps enforce a consistent coding style across different contributors.

By using terraform fmt regularly, you can keep your Terraform codebase clean and organized, improving readability and making it easier to collaborate on infrastructure projects.

Question 10
Correct
Please fill the blank field(s) in the statement with the right words.

You have recently added new resource blocks from a different provider to your configuration. Type in the command you need to run before you can run a terraform plan/apply? __

Your answer is correct
terraform init
Explanation
You need to run a terraform init in order to download the provider for the new resource blocks you added

Question 11
Correct
Please fill the blank field(s) in the statement with the right words.

To automatically apply changes without interactive confirmation, you can use the command __

Your answer is correct
terraform apply -auto-approve
Explanation
The terraform apply -auto-approve command in Terraform is used to automatically apply changes to your infrastructure without requiring manual confirmation for each change. When you run terraform apply normally, Terraform prompts you to confirm the planned changes before proceeding. Adding the -auto-approve flag skips this confirmation step and applies the changes immediately. This can be useful in automated or scripted workflows where manual intervention is not desired. However, it's important to use this option with caution, especially in production environments, as it can lead to unintended changes being applied without human oversight.

Question 12
Correct
Please fill the blank field(s) in the statement with the right words.

To specify a specific Terraform workspace named "production" when running commands, you can use the command __

Your answer is correct
terraform workspace select production
Explanation
The terraform workspace select command is used in Terraform to switch to a different workspace. Workspaces in Terraform allow you to manage multiple sets of infrastructure configurations separately within the same directory. When you run terraform workspace select, you specify the name of the workspace you want to switch to, and Terraform will load the configuration associated with that workspace, making it the active workspace for subsequent operations. This command is useful for managing different environments (such as development, staging, and production) or different configurations within the same project.

Question 13
Correct
Please fill the blank field(s) in the statement with the right words.

To list all resources in the current state, you can use the command __

Your answer is correct
terraform state list
Explanation
The terraform state list command is used in Terraform, an infrastructure as code tool, to list all the resources currently being managed by Terraform within a particular state file. This command provides a quick overview of the resources that Terraform is aware of and managing. It's particularly useful for understanding what infrastructure resources have been provisioned and are being tracked by Terraform for any given project or environment.

Question 14
Incorrect
Please fill the blank field(s) in the statement with the right words.

You want Terraform to redeploy a specific resource that it is managing. Type the command you should use to mark the resource for replacement. __

Your answer is incorrect
terraform apply -replace=
Correct answer
terraform apply -replace
Explanation
You would mark the resource for replacement using terraform apply -replace.

NOTE: This used to be terraform taint and has been replaced with terraform apply -replace

Question 15
Correct
Which configuration block type is used to declare settings and behaviors specific to Terraform?

Your answer is correct
terraform block

Explanation
The terraform block is used to declare settings and behaviors specific to Terraform itself. This block is typically used to set the Terraform version, define backend configurations, and specify provider requirements for the entire configuration.

data block

Explanation
The data block is used to define data sources that Terraform uses to fetch information that is not directly managed by Terraform. Data blocks allow you to query external systems, such as AWS S3 buckets or Azure SQL databases, and use that information within your Terraform configuration.

provider block

Explanation
The provider block is used to configure a specific provider, such as AWS, Azure, or Google Cloud, within a Terraform configuration. This block specifies the provider type, version, and any required authentication details to interact with the provider's API.

resource block

Explanation
The resource block defines the infrastructure components that Terraform will manage, such as virtual machines, storage buckets, or databases. It specifies the resource type, name, and any configuration settings needed to create or manage the resource.

Overall explanation
In Terraform, the terraform block is used to configure Terraform settings and to specify a required version constraint for the Terraform CLI.

The terraform block is optional and is typically placed at the top of a Terraform configuration file. Here is an example of a terraform block:



terraform {
  required_version = ">= 1.12.0, < 1.13.0"
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}


In this example, the terraform block specifies that the Terraform configuration requires a version of at least 1.12.0 but less than 1.13.0. The block also contains a backend block, which configures the backend where the Terraform state is stored. In this case, the backend is an S3 bucket in the us-west-2 region.

The terraform block can also be used to configure other settings, such as the maximum number of concurrent operations (max_parallelism), the number of retries for failed operations (retryable_errors), and the default input values for variables (default).

By including a terraform block in the Terraform configuration, you can ensure that the correct version of Terraform is used and that the configuration is validated against the correct syntax and semantics for that version. This helps to ensure that the configuration will run correctly and consistently across different environments.

https://developer.hashicorp.com/terraform/language/settings

Domain
Objective 3 - Understand Terraform Basics
Question 16
Correct
Please fill the blank field(s) in the statement with the right words.

By default, Terraform stores its state in a file named __

Your answer is correct
terraform.tfstate
Explanation
Terraform stores its state in a file called terraform.tfstate

Question 17
Correct
Please fill the blank field(s) in the statement with the right words.

You have the following code snippet as part of your Terraform configuration. How would you reference the id of the s3_bucket?



data "aws_s3_bucket" "data_bucket" {
  bucket = "my-data-lookup-bucket-bk"
}


__

Your answer is correct
data.aws_s3_bucket.data_bucket.id
Explanation
You would use data.<resource type>.<resource name>.id

Question 18
Correct
Which of the following commands can be used to detect configuration drift?

Your answer is correct
terraform apply -refresh-only

Explanation
The command terraform apply -refresh-only can be used to detect configuration drift by refreshing the state of the infrastructure without making any changes. It compares the current state with the desired state defined in the configuration files and highlights any differences, indicating potential drift.

terraform fmt

Explanation
The command terraform fmt is used to format the Terraform configuration files to ensure consistent styling and readability. It does not detect configuration drift but helps maintain a clean and organized codebase.

terraform get

Explanation
The command terraform get is used to download and update modules and plugins referenced in the Terraform configuration. It does not directly detect configuration drift, but it helps manage dependencies in the project.

terraform init

Explanation
The command terraform init is used to initialize a Terraform working directory, download providers, and initialize backend settings. While it is an essential step in setting up a Terraform project, it does not specifically detect configuration drift in the infrastructure.

Overall explanation
If the state has drifted from the last time Terraform ran,terraform plan -refresh-only or terraform apply -refresh-only allows drift to be detected.

https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform

Domain
Objective 7 - Implement and Maintain State
Question 19
Correct
Please fill the blank field(s) in the statement with the right words.

To skip the refresh step during a terraform apply, you can use the command __

Your answer is correct
terraform apply -refresh=false
Explanation
The terraform apply -refresh=false command in Terraform is used to prevent Terraform from refreshing the state of the infrastructure resources before applying changes. By default, Terraform checks the current state of resources in the infrastructure to ensure that it has the latest information before making any modifications. However, using the -refresh=false flag disables this behavior, instructing Terraform to use the existing state without refreshing it. This can be useful in situations where you want to apply changes quickly without waiting for Terraform to check the current state of the infrastructure, especially if you're confident that the state is already up to date. However, it's important to use this option cautiously, as it may lead to unintended consequences if the state of the infrastructure is not accurate.

Question 20
Correct
Please fill the blank field(s) in the statement with the right words.

What command can be used to perform a dry-run of your changes and save the proposed changes to a file named bryan for future use? __

Your answer is correct
terraform plan -out=bryan
Explanation
Make sure to know that you need to use the flag -out to save a terraform plan output so you can execute it later

Question 21
Correct
Please fill the blank field(s) in the statement with the right words.

In order to check the current version of Terraform you have installed, you can use the command __

Your answer is correct
terraform version
Explanation
The terraform version command is used to display the currently installed version of Terraform on your system. When you run this command in your terminal or command prompt, Terraform will output information about the installed version, including the version number and additional details such as the Terraform CLI and Go runtime versions. This command is helpful for verifying which version of Terraform you have installed, which can be important for ensuring compatibility with Terraform configurations and understanding the features available in your environment.

Question 22
Correct
Please fill the blank field(s) in the statement with the right words.

You have the following resource block that creates subnets using for_each from a variable. How would you reference the ID for subnet_b in an output block?

__



variable "private_subnets" {
  type = map(number)
  default = {
    subnet_a = 1
    subnet_b = 2
  }
}
 
resource "aws_subnet" "private_subnets" {
  for_each          = var.private_subnets
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, each.value)
  availability_zone = tolist(data.aws_availability_zones.available.names)[each.value]
 
  tags = {
    Name      = each.key
    Terraform = "true"
  }
}
Your answer is correct
aws_subnet.private_subnets["subnet_b"].id
Explanation
Since for_each creates resources as a map, each subnet is referenced using its key instead of an index. To get the ID of a specific subnet, use:

aws_subnet.private_subnets["subnet_b"].id

Here:

aws_subnet.private_subnets is the resource map.

["subnet_b"] accesses the specific subnet by its key.

.id retrieves the subnet’s ID.

This method ensures you correctly reference a specific resource when using for_each.

Question 23
Correct
Please fill the blank field(s) in the statement with the right words.

You are using Terraform Cloud to store your state file. Before you can use Terraform Cloud, you should run the command __ to obtain and save credentials for the remote backend.

Your answer is correct
terraform login
Explanation
The terraform login command can be used to automatically obtain and save an API token for Terraform Cloud, Terraform Enterprise, or any other host that offers Terraform services.

Question 24
Correct
Please fill the blank field(s) in the statement with the right words.

To automatically apply changes without interactive confirmation, you can use the command __

Your answer is correct
terraform apply -auto-approve
Explanation
The terraform apply -auto-approve command in Terraform is used to automatically apply changes to your infrastructure without requiring manual confirmation for each change. When you run terraform apply normally, Terraform prompts you to confirm the planned changes before proceeding. Adding the -auto-approve flag skips this confirmation step and applies the changes immediately. This can be useful in automated or scripted workflows where manual intervention is not desired. However, it's important to use this option with caution, especially in production environments, as it can lead to unintended changes being applied without human oversight.

Question 25
Incorrect
Please fill the blank field(s) in the statement with the right words.

You want Terraform to redeploy a specific resource that it is managing. Type the command you should use to mark the resource for replacement. __

Your answer is incorrect
terraform apply -replace=
Correct answer
terraform apply -replace
Explanation
You would mark the resource for replacement using terraform apply -replace.

NOTE: This used to be terraform taint and has been replaced with terraform apply -replace

Question 26
Correct
Please fill the blank field(s) in the statement with the right words.

You have recently added new resource blocks from a different provider to your configuration. Type in the command you need to run before you can run a terraform plan/apply? __

Your answer is correct
terraform init
Explanation
You need to run a terraform init in order to download the provider for the new resource blocks you added

Question 27
Correct
Please fill the blank field(s) in the statement with the right words.

You need to access the attributes of a data source in your Terraform configuration for the following code. How should you reference the ID of the returned data? __ 



data "aws_ami" "ubuntu" {
  most_recent = true
 
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
 
  owners = ["099720109477"] 
}
Your answer is correct
data.aws_ami.ubuntu.id
Explanation
The expression data.aws_ami.ubuntu.id is used in Terraform to refer to the ID of an Amazon Machine Image (AMI) for Ubuntu retrieved from the AWS data source named aws_ami. In this example, aws_ami is a data source provided by the AWS provider for Terraform, which allows you to fetch information about AMIs available in your AWS account.



This specific expression assumes that you have defined a data source block named aws_ami in your Terraform configuration and configured it to retrieve information about Ubuntu AMIs. The .id part of the expression accesses the ID attribute of the AMI object retrieved by the data source. This ID can then be used elsewhere in your Terraform configuration, such as in resource definitions, to reference the specific AMI you want to use for provisioning instances.

Question 28
Correct
Please fill the blank field(s) in the statement with the right words.

The __ or the __ commands are available to delete all of your managed infrastructure.

Your answer is correct
terraform destroy, terraform apply -destroy
Explanation
terraform destroy [options]

This command is just a convenience alias for the following command:



terraform apply -destroy
Question 29
Correct
What feature of HCP Terraform allows you to publish and maintain a set of custom modules that can only be used within your organization?

Terraform registry

Explanation
The Terraform registry is a public repository of modules that can be used by any Terraform user, but it is not specific to an organization and does not provide the same level of control as a private registry.

custom VCS integration

Explanation
Custom VCS integration refers to the ability to connect HCP Terraform to a version control system to manage infrastructure as code, but it does not specifically address the publishing and maintenance of custom modules within an organization.

remote runs

Explanation
Remote runs in HCP Terraform allow users to execute Terraform configurations in a remote environment, but it does not directly relate to the publishing and maintenance of custom modules within an organization.

Your answer is correct
private registry

Explanation
The private registry feature in HCP Terraform allows users to publish and maintain custom modules within their organization, providing a secure and controlled environment for sharing infrastructure configurations.

Overall explanation
You can use modules from a private registry, like the one provided by HCP Terraform. Private registry modules have source strings of the form <HOSTNAME>/<NAMESPACE>/<NAME>/<PROVIDER>. This is the same format as the public registry, but with an added hostname prefix.

https://www.datocms-assets.com/2885/1602500234-terraform-full-feature-pricing-tablev2-1.pdf

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 30
Correct
Oscar is modifying his Terraform configuration file but isn't 100% sure it's correct. He is afraid that changes made could negatively affect production workloads.

How can Oscar validate the changes that will be made without impacting existing workloads?

run terraform plan -refresh-only to compare his existing configuration file against the current one

Explanation
terraform plan -refresh-only is used to update the state file with real-world infrastructure. It does not provide a preview of the changes that will be made, so Oscar cannot validate the changes without impacting existing workloads.

Your answer is correct
run a terraform plan and validate the changes that will be made

Explanation
Running a terraform plan allows Oscar to preview the changes that will be made to the infrastructure without actually applying them. This way, he can validate the changes and ensure they won't negatively impact existing workloads before making any modifications.

run terraform apply -lock=false when executing the changes made to the configuration

Explanation
Running terraform apply -lock=false will instruct Terraform not to hold a state lock during the operation. This is dangerous if others might concurrently run commands against the same workspace. Using this method does not allow Oscar to validate the changes without affecting production workloads.

run a terraform validate to ensure the changes won't impact the production workloads

Explanation
While terraform validate checks the syntax and configuration of the Terraform files, it does not provide a preview of the changes that will be made. Therefore, it is not the best option for Oscar to validate the changes without impacting existing workloads.

Overall explanation
The terraform plan command is used to create an execution plan. Terraform performs a refresh, unless explicitly disabled, and then determines what actions are necessary to achieve the desired state specified in the configuration files.

This command is a convenient way to check whether the execution plan for a set of changes matches your expectations without making any changes to real resources or the state.



https://developer.hashicorp.com/terraform/cli/commands/plan

Domain
Objective 6 - Use the core Terraform workflow
Question 31
Incorrect
Why might users want to utilize Sentinel or OPA with HCP Terraform in their infrastructure workflow? (select three)

To allow users to bypass version control and directly apply changes to production

Explanation
Using Sentinel and OPA does not allow users to bypass version control and directly apply changes to production. These tools are meant to enforce policies and compliance standards, ensuring that changes are made in a controlled and secure manner through the proper workflow processes.
Your selection is incorrect
To provide real-time security risk mitigation in Terraform configurations during the development process

Explanation
While Sentinel and OPA can enhance security and enforce policies, they are not specifically designed to provide real-time security risk mitigation during the development process. Their primary focus is on policy enforcement and compliance checks.
Correct selection
Organizations can enforce resource naming conventions or approved machine images for improved consistency and clarity

Explanation
By utilizing Sentinel and OPA, organizations can enforce resource naming conventions and approved machine images, leading to improved consistency and clarity across the infrastructure. This helps in maintaining a standardized and organized environment.
Your selection is correct
Sentinel and OPA enable automated policy checks to enforce compliance standards before applying changes to production environments

Explanation
Sentinel and OPA enable automated policy checks that can enforce compliance standards before applying changes to production environments. This ensures that any changes made to the infrastructure meet the organization's regulatory and security requirements.
Your selection is correct
Sentinel and OPA can enhance security by preventing unauthorized changes to your managed infrastructure

Explanation
Sentinel and OPA can enhance security by allowing organizations to define and enforce policies that prevent unauthorized changes to the managed infrastructure. This helps in maintaining the integrity and security of the infrastructure environment.
Overall explanation
Using Sentinel and OPA with HCP Terraform provides several benefits that enhance the overall management and security of your infrastructure. Using Sentinel with HCP Terraform provides a powerful mechanism to enforce policies, increase security, and maintain compliance in your infrastructure deployments. It gives you greater control and confidence in managing your cloud resources while promoting best practices and reducing the risk of misconfiguration. Here are some specific reasons and examples on why you would use Sentinel with HCP Terraform:



Policy Enforcement: Sentinel and OPA enable you to define and enforce policies that govern the configurations and changes made to your infrastructure. You can create custom policies tailored to your organization's needs, ensuring compliance with regulatory requirements, security best practices, and internal standards.

Automated Governance: With Sentinel and OPA, you can implement automated governance and compliance checks in your Terraform workflows. This means that every time changes are proposed or applied, Sentinel or OPA evaluates those changes against the defined policies, automatically preventing non-compliant configurations from being deployed.

Enhanced Security: By incorporating Sentinel or OPA into your HCP Terraform environment, you can bolster your infrastructure security. Sentinel can flag and block any potentially risky configurations, helping to minimize security vulnerabilities and ensuring that only approved, secure changes are allowed.

Version-controlled Policies: Sentinel and OPA policies are defined as code, which means they can be stored in version control alongside your Terraform configurations. This allows your policies to be managed, reviewed, and updated through the same version control system, improving collaboration and maintaining a history of policy changes.

Custom Approval Workflows: You can create customized approval workflows based on policy conditions using Sentinel or OPA. This means that changes to the infrastructure can be automatically approved or flagged for manual review, depending on the defined policies, ensuring tighter control over infrastructure modifications.

Preventing Costly Mistakes: Sentinel and OPA policies can help catch potential mistakes or misconfigurations before they impact your infrastructure. By running policy checks in real-time, you can identify issues early on and avoid costly downtime or unexpected behavior caused by incorrect configurations.

Consistency and Best Practices: Utilizing Sentinel/OPA allows you to enforce consistent naming conventions, tagging standards, and other best practices across your infrastructure. This consistency leads to improved manageability and makes it easier for teams to collaborate effectively.

Auditing and Compliance Reporting: With Sentinel's logging and reporting capabilities, you can track policy decisions and changes made to your infrastructure over time. This audit trail is valuable for compliance purposes and can be used to demonstrate adherence to regulatory requirements.

Wrong Answer:

- Using Sentinel or OPA would NOT allow you to bypass version control. In fact, with TFC, your workspace would likely be configured to ONLY manage changes to your environment using code that is committed to a linked code repository.

https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 32
Correct
Please fill the blank field(s) in the statement with the right words.

The __ or the __ commands are available to delete all of your managed infrastructure.

Your answer is correct
terraform destroy, terraform apply -destroy
Explanation
terraform destroy [options]

This command is just a convenience alias for the following command:



terraform apply -destroy
Question 33
Incorrect
Please fill the blank field(s) in the statement with the right words.

What command can you use to display details about the resource as shown below?


resource "aws_internet_gateway" "demo" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = "demo_igw"
  }
}
__

Your answer is incorrect
terraoform  state show aws_internet_gateway.demo
Correct answer
terraform state show aws_internet_gateway.demo
Explanation
terraform state show ADDRESS will show the attributes of a single resource, therefore the answer is aws_internet_gateway.demo

Question 34
Correct
Please fill the blank field(s) in the statement with the right words.

To force the destruction of resources without being prompted for confirmation, you can use the command __

Your answer is correct
terraform destroy -auto-approve
Explanation
The terraform destroy -auto-approve command is used in Terraform to automatically destroy all the resources defined in your configuration without requiring manual confirmation for each deletion. When you run terraform destroy, Terraform typically prompts you to confirm the destruction of each resource before proceeding. Adding the -auto-approve flag skips this confirmation step and destroys all resources immediately. This command is particularly useful when you want to tear down your infrastructure quickly and efficiently, such as in testing or cleanup scenarios. However, it's crucial to use this option with caution, especially in production environments, as it can result in irreversible deletion of resources without human oversight.

Question 35
Correct
You have deployed resources to AWS to support your production workloads. Another user modified a tag of a resource in the AWS Management Console (UI). Which of the following statements are true regarding how Terraform manages state?

Your selection is correct
Terraform will update the state file to reflect the new tag only during the next plan or apply

Explanation
Terraform will only update the state file to reflect the new tag after the next plan or apply command is run. This ensures that the state file accurately represents the actual state of the infrastructure and allows Terraform to reconcile any differences during the next execution.
Terraform creates a new state file to record and track the updated changes made by the other user

Explanation
Terraform does not create a new state file every time a change is made outside of Terraform. Instead, it updates the existing state file during the next plan or apply command to track and manage the changes made by other users or processes.
The tag is immediately updated in the Terraform state file after it is changed in the AWS Management Console (UI)

Explanation
The tag changes made in the AWS Management Console (UI) do not immediately reflect in the Terraform state file. Terraform operates based on its own state management system and requires explicit commands to update the state file with any changes made outside of Terraform.
Your selection is correct
Modifying the tag of a resource in the AWS Management Console (UI) does not update the current state file

Explanation
Modifying a resource tag in the AWS Management Console (UI) does not automatically update the Terraform state file. Terraform relies on its own state file to track the desired state of infrastructure, so changes made outside of Terraform are not reflected in the state until the next plan or apply command is executed.
Overall explanation
Terraform uses a state file to keep track of the real-world infrastructure it manages—this includes details like tags, names, IDs, and more. When someone makes changes outside of Terraform—like manually editing a tag in the AWS Console—Terraform doesn’t know about it unless you run terraform plan or terraform apply.

By the way, this is often called Terraform drift.

https://developer.hashicorp.com/terraform/tutorials/state/resource-drift

Domain
Objective 7 - Implement and Maintain State
Question 36
Correct
Please fill the blank field(s) in the statement with the right words.

The command __ can be used to ensure your code is syntactically valid and internally consistent.

Your answer is correct
terraform validate
Explanation
terraform validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state. It is thus primarily useful for general verification of reusable modules, including the correctness of attribute names and value types.

Question 37
Incorrect
Please fill the blank field(s) in the statement with the right words.

You have the following resource block that creates subnets using for_each from a variable. How would you reference subnet_b in an output block?

__



variable "private_subnets" {
  type = map(number)
  default = {
    subnet_a = 1
    subnet_b = 2
  }
}
 
resource "aws_subnet" "private_subnets" {
  for_each          = var.private_subnets
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, each.value)
  availability_zone = tolist(data.aws_availability_zones.available.names)[each.value]
 
  tags = {
    Name      = each.key
    Terraform = "true"
  }
}
Your answer is incorrect
aws_subnet.private_subnets["subnet_b"]
Correct answer
aws_subnet.private_subnets["subnet_b"].id
Explanation
Since for_each creates resources as a map, each subnet is referenced using its key instead of an index. To get the ID of a specific subnet, use:

aws_subnet.private_subnets["subnet_b"].id

Here:

aws_subnet.private_subnets is the resource map.

["subnet_b"] accesses the specific subnet by its key.

.id retrieves the subnet’s ID.

This method ensures you correctly reference a specific resource when using for_each.

Question 38
Correct
Which of the following best describes the default local backend?

The local backend is where Terraform stores logs to be processed by a log collector

Explanation
The local backend in Terraform is not used by a log collector to store or process logs. Its primary purpose is to manage the state file and state locking for Terraform operations.

The local backend is the directory where resources deployed by Terraform have direct access to in order to update their current state

Explanation
This choice does not accurately describe the default local backend in Terraform. The local backend is not a directory where resources have direct access; it is specifically related to storing the state file and managing state locking for Terraform operations.

Your answer is correct
The local backend stores state on the local filesystem, locks the state using system APIs, and performs operations locally

Explanation
The default local backend in Terraform stores the state file on the machine's local filesystem where Terraform is being run. It uses system APIs to lock the state file to prevent concurrent modifications and performs all operations locally without the need for external services.

The local backend is how Terraform connects to public cloud services, such as AWS, Azure, or GCP

Explanation
The local backend is not how Terraform connects to public cloud services like AWS, Azure, or GCP. It is used for storing the state file locally and managing state locking for Terraform operations rather than handling connections to external cloud providers.

Overall explanation
Information on the default local backend can be found at this link.

Example:



terraform {
  backend "local" {
    path = "relative/path/to/terraform.tfstate"
  }
}
Domain
Objective 7 - Implement and Maintain State
Question 39
Correct
You have a Terraform configuration file with no defined resources. However, there is a related state file for resources that were created on AWS. What happens when you run a terraform apply?

Terraform will produce an error since there are no resources defined

Explanation
Terraform will not produce an error since there are no resources defined in the configuration file. Terraform will simply report that there are no changes to be made based on the current state file and configuration. It is not an error to have no defined resources in the configuration file when running terraform apply.

Terraform will scan the AWS infrastructure and create a new configuration file based on the state file.

Explanation
Terraform will not scan the AWS infrastructure and create a new configuration file based on the state file. Terraform applies changes based on the configuration file provided, not by scanning the existing infrastructure. Since there are no defined resources in the configuration file, Terraform will not create any new resources based on the state file.

Your answer is correct
Terraform will destroy all of the resources

Explanation
Terraform will destroy all of the resources because the state file contains information about the resources that were previously created on AWS. When you run terraform apply without any defined resources in the configuration file, Terraform will compare the state file with the configuration and realize that there are no corresponding resources defined, leading to the conclusion that the existing resources should be destroyed.

Terraform will not perform any operations.

Explanation
Incorrect. Terraform will destroy all of the resources because the state file contains information about the resources that were previously created on AWS.

Overall explanation
In this case, since there is a state file with resources, Terraform will match the desired state of no resources since the configuration file doesn't include any resources. Therefore, all resources defined in the state file will be destroyed.

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 7 - Implement and Maintain State
Question 40
Correct
Please fill the blank field(s) in the statement with the right words.

You have the following code snippet as part of your Terraform configuration. How would you reference the id of the s3_bucket?



data "aws_s3_bucket" "data_bucket" {
  bucket = "my-data-lookup-bucket-bk"
}


__

Your answer is correct
data.aws_s3_bucket.data_bucket.id
Explanation
You would use data.<resource type>.<resource name>.id

Question 41
Correct
When running a terraform plan, how can you save the plan so it can be applied at a later time?

Your answer is correct
use the -out flag

Explanation
The -out flag in Terraform is used to save the plan generated by the terraform plan command. By specifying this flag followed by a file path, you can save the plan to a file that can be applied later using the terraform apply command. This is the correct way to save a plan for future application.

use the -save flag

Explanation
The -save flag is not a valid flag in Terraform for saving a plan to be applied at a later time. This flag does not exist in Terraform commands and does not serve the purpose of saving a plan for future application.

you cannot save a plan

Explanation
Contrary to this choice, you can save a plan in Terraform using the -out flag. By using this flag, you can save the plan to a file and apply it at a later time. Therefore, it is incorrect to say that you cannot save a plan in Terraform.

use the -file flag

Explanation
The -file flag is not used in Terraform for saving a plan to be applied at a later time. This flag does not serve the purpose of saving a plan and is not recognized as a valid flag in Terraform commands for this specific task.

Overall explanation
The optional -out flag can be used to save the generated plan to a file for later execution with terraform apply, which can be useful when running Terraform in automation.

https://developer.hashicorp.com/terraform/cli/commands/plan

Domain
Objective 6 - Use the core Terraform workflow
Question 42
Correct
Please fill the blank field(s) in the statement with the right words.

The __ command can be used to get an interactive console to evaluate expressions in your Terraform code.

Your answer is correct
terraform console
Explanation
terraform console [options]

This command provides an interactive command-line console for evaluating and experimenting with expressions.

Question 43
Correct
What does the command terraform fmt do?

deletes the existing configuration file

Explanation
The command terraform fmt does not delete the existing configuration file. Its purpose is to format it, not to remove it.

Your answer is correct
rewrite Terraform configuration files to a canonical format and style

Explanation
The command terraform fmt rewrites Terraform configuration files to a canonical format and style. This helps maintain consistency in the codebase, making it easier to read and manage.

formats the state file to ensure the latest state of resources can be obtained

Explanation
The command terraform fmt does not format the state file. It is specifically used for formatting Terraform configuration files to ensure they are consistent in style and format.

updates the font of the configuration file to the official font supported by HashiCorp

Explanation
The command terraform fmt does not update the font of the configuration file. Its primary function is to format the configuration file to a standard style, not to change the font.

Overall explanation
The terraform fmt command is a formatting tool in Terraform that helps to automatically format Terraform configuration files to follow a consistent style and make them more readable.

Running terraform fmt will parse the configuration files in the current directory and recursively in subdirectories and rewrite them using a standard formatting style, including indentation, spacing, and line breaks. It will modify the original files in place, so it's vital to ensure that the files are backed up or committed to a version control system before running this command.

By running terraform fmt, it helps to ensure that the Terraform configuration files are consistent across the project and easy to read, especially when working with large and complex infrastructure codebases. Consistent code style makes it easier for multiple people to collaborate on a project and makes it easier to understand the configuration files when returning to the project after an extended period.

It's best practice to run terraform fmt Before committing any changes to the configuration files, ensure that all changes have the same formatting style and are easy to read.



https://developer.hashicorp.com/terraform/cli/commands/fmt

Domain
Objective 4 - Use Terraform Outside of Core Workflow
