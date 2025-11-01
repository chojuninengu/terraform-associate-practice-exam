HashiCorp Terraform - Practice Exam #3 - Results
Attempt 3





Question 1
Incorrect
All of your infrastructure is managed by Terraform. Despite requests to avoid changes outside Terraform, engineers sometimes make minor updates directly in the cloud platform. What Terraform command can reconcile the state with the actual infrastructure to detect any drift from the last-known state?

terraform graph

Explanation
The "terraform graph" command is used to generate a visual representation of the Terraform configuration and its dependencies. It does not reconcile the state with the real-world infrastructure or detect any drift from the last-known state.
Correct answer
terraform apply -refresh-only

Explanation
The "terraform apply -refresh-only" command is used to reconcile the state with the real-world infrastructure by refreshing the state without making any changes. It detects any drift from the last-known state by comparing the current state with the actual infrastructure, highlighting any differences that need to be addressed.
Your answer is incorrect
terraform state show

Explanation
The "terraform state show" command is used to show the attributes of a specific resource in the Terraform state. While it can provide information about the current state of a resource, it does not reconcile the state with the real-world infrastructure to detect drift or differences.
terraform validate

Explanation
The "terraform validate" command is used to validate the configuration files for syntax errors and other issues. It does not reconcile the state with the actual infrastructure or detect any drift from the last-known state.
Overall explanation
The terraform apply -refresh-only command is used to reconcile the state Terraform knows about (via its state file) with the real-world infrastructure. This can be used to detect any drift from the last-known state, and to update the state file.

https://learn.hashicorp.com/tutorials/terraform/refresh

Domain
Objective 7 - Implement and Maintain State
Question 2
Incorrect
You have a Terraform configuration file defining resources to deploy on VMware, yet there is no related state file. You have successfully run terraform init already. What happens when you run a terraform apply?

Terraform will produce an error since there is no state file

Explanation
Terraform will not produce an error simply because there is no state file associated with the configuration. It will still attempt to create the defined resources on the VMware infrastructure, but it won't be able to manage them effectively without a state file.
Your answer is incorrect
Since there is no state file associated with this configuration file, the defined resources will be not created on the VMware infrastructure.

Explanation
Without a state file, Terraform will not be able to track the resources it manages. However, running `terraform apply` will still attempt to create the defined resources on the VMware infrastructure, even though it won't be able to manage them without a state file.
Correct answer
Terraform will scan the VMware infrastructure, create a new state file, and deploy the new resources as defined in the configuration file.

Explanation
When you run `terraform apply` without a state file, Terraform will scan the VMware infrastructure, create a new state file to track the resources, and then deploy the new resources as defined in the configuration file. This allows Terraform to manage and track the resources going forward.
All existing infrastructure on VMware will be deleted, and the resources defined in the configuration file will be created.

Explanation
Running `terraform apply` without a state file will not result in the deletion of all existing infrastructure on VMware. Instead, Terraform will attempt to create the new resources defined in the configuration file without being able to manage them properly.
Overall explanation
If there is no state file associated with a Terraform configuration file, a terraform apply will create the resources defined in the configuration file. This is a normal workflow during the first terraform apply that is executed against a configuration file. This, of course, assumes that the directory has been initialized using a terraform init

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 7 - Implement and Maintain State
Question 3
Incorrect
Margaret is calling a child module to deploy infrastructure for her organization. Just as a good architect does (and suggested by HashiCorp), she specifies the module version she wants to use even though there are newer versions available. During a terrafom init, Terraform downloads v0.0.5 just as expected.

What would happen if Margaret removed the version parameter in the module block and ran a terraform init again?



module "consul" {
  source  = "hashicorp/consul/aws"
  version = "0.0.5"
 
  servers = 3
}
Correct answer
Terraform would use the existing module already downloaded

Explanation
Terraform would use the existing module already downloaded because once a specific version is downloaded, Terraform caches it locally. If the version parameter is removed, Terraform will continue to use the cached version unless explicitly updated.
Terraform would skip the module

Explanation
Terraform would not skip the module if the version parameter is removed. It will continue to use the previously downloaded version unless the version is explicitly updated or changed.
Your answer is incorrect
Terraform would download the latest version of the module

Explanation
Terraform would not download the latest version of the module automatically. It will continue to use the previously downloaded version unless the version parameter is updated to specify a different version.
Terraform would return an error, as the version parameter is required

Explanation
Terraform would not return an error if the version parameter is removed from the module block. While it is recommended to specify a version for consistency and reproducibility, it is not mandatory for Terraform to run successfully.
Overall explanation
When using modules installed from a registry, HashiCorp recommends explicitly constraining the acceptable version numbers to avoid unexpected or unwanted changes. The version argument accepts a version constraint string. Terraform will use the newest installed version of the module that meets the constraint; if no acceptable versions are installed, it will download the newest version that meets the constraint.

A version number that meets every applicable constraint is considered acceptable.

Terraform consults version constraints to determine whether it has acceptable versions of itself, any required provider plugins, and any required modules. For plugins and modules, it will use the newest installed version that meets the applicable constraints.

To test this, I ran a terraform init with the code as shown in the file:

$ terraform init
Initializing modules...
Downloading hashicorp/consul/aws 0.0.5 for consul...
- consul in .terraform\modules\consul
- consul.consul_clients in .terraform\modules\consul\modules\consul-cluster
- consul.consul_clients.iam_policies in .terraform\modules\consul\modules\consul-iam-policies
- consul.consul_clients.security_group_rules in .terraform\modules\consul\modules\consul-security-group-rules
- consul.consul_servers in .terraform\modules\consul\modules\consul-cluster
- consul.consul_servers.iam_policies in .terraform\modules\consul\modules\consul-iam-policies
- consul.consul_servers.security_group_rules in .terraform\modules\consul\modules\consul-security-group-rules
Then I removed the constraint from the configuration file and ran a terraform init again:

$ terraform init
Initializing modules...
 
Initializing the backend...
 
Initializing provider plugins...
- Reusing previous version of hashicorp/aws from the dependency lock file
- Reusing previous version of hashicorp/template from the dependency lock file
Terraform did not download a newer version of the module. It reused the existing one.

https://developer.hashicorp.com/terraform/language/modules/syntax#version

https://developer.hashicorp.com/terraform/language/expressions/version-constraints

Domain
Objective 5 - Interact with Terraform Modules
Question 4
Incorrect
Philip works at a payment processing company and manages the organization's VMware environment. He recently provisioned a new cluster for a production environment. To ensure everything is working as expected, Philip has been using Terraform and the VMware vSphere client to create and destroy new virtual machines. Currently, there are three virtual machines running on the new cluster, so Philip runs terraform destroy to remove the remaining virtual machines from the cluster. However, Terraform only removes two of the virtual machines, leaving one virtual machine still running.

Why would Terraform only remove two of the three virtual machines?

Your answer is incorrect
the virtual machine was marked with vSphere tags to prevent it from being destroyed

Explanation
While vSphere tags can be used to organize and manage resources, they do not inherently prevent Terraform from destroying a virtual machine. If the virtual machine was marked with tags, it would not be the reason why Terraform did not remove it during the destroy operation.
Correct answer
the remaining virtual machine was not created by Terraform, therefore Terraform is not aware of the virtual machine and cannot destroy it

Explanation
Terraform can only manage resources that it is aware of and has created. If the remaining virtual machine was not provisioned by Terraform, it will not be included in the destroy operation as Terraform has no knowledge of its existence.
the vSphere provider credentials are invalid, and therefore Terraform cannot reach the third virtual machine

Explanation
If the vSphere provider credentials were invalid, Terraform would not be able to communicate with the vSphere environment at all. In this case, none of the virtual machines would have been removed, rather than just one remaining. Invalid credentials are not the reason why Terraform only removed two out of the three virtual machines.
Terraform can only destroy a maximum of 2 resources per terraform destroy execution

Explanation
Terraform does not have a limitation on the number of resources it can destroy per execution of terraform destroy. Therefore, the fact that only two out of three virtual machines were removed is not due to a restriction on the number of resources that can be destroyed.
Overall explanation
The terraform destroy command terminates resources defined in your Terraform configuration. This command is the reverse of terraform apply in that it terminates all the resources specified by the configuration. It does not destroy resources running elsewhere that are not described in the current configuration.

https://learn.hashicorp.com/tutorials/terraform/aws-destroy

Domain
Objective 6 - Use the Core Terraform Workflow
Question 5
Correct
Based on the Terraform code below, what block type is used to define the VPC?



vpc_id = aws_vpc.main.id
...
data block

Explanation
The data block in Terraform is used to retrieve and reference existing data sources, such as AMIs, subnets, or VPCs. It is not used to define new infrastructure components like VPCs. If a data block was used to reference an existing VPC, then the value would start with data, like this: data.aws_vpc.xxx

Your answer is correct
resource block

Explanation
The VPC in the Terraform code is defined using a resource block. Resource blocks are used to define and manage infrastructure components such as VPCs, EC2 instances, and security groups in Terraform configurations.
provider block

Explanation
The provider block in Terraform is used to configure the provider that interacts with the API to manage resources. It is not used to define specific infrastructure components like VPCs.
locals block

Explanation
The locals block in Terraform is used to define local variables within a configuration. It is not used to define infrastructure components like VPCs.

Overall explanation
Based on the Terraform code provided in the question, the VPC is defined in a resource block, meaning that there is a VPC resource being defined, such as:



resource "aws_vpc" "main" {
  cidr_block = var.base_cidr_block
}
If it were locals, the resource would be referred to as local.aws_vpc

If it were in a data block, it would be referred to as data.aws_vpc.i.main.id

https://developer.hashicorp.com/terraform/language/resources

Domain
Objective 3 - Understand Terraform Basics
Question 6
Incorrect
Fill in the correct answers below:

Infrastructure as Code (IaC) makes infrastructure changes _______, ________, ________, and __________. (select four)

Your selection is correct
repeatable

Explanation
Repeatability in IaC means that infrastructure changes can be easily replicated across different environments or instances. This allows for consistent deployment and management of infrastructure resources.
Your selection is correct
predictable

Explanation
Predictability is essential in IaC as it enables users to anticipate the outcome of infrastructure changes before they are applied. This helps in avoiding unexpected issues and ensures a smooth deployment process.
Your selection is correct
consistent

Explanation
Consistency is crucial in IaC as it ensures that infrastructure changes are applied uniformly across different environments. This helps in maintaining a standardized and reliable infrastructure configuration.
Correct selection
idempotent

Explanation
Idempotent means that the outcome of applying the same configuration multiple times will always result in the same desired state. This is a key principle of Infrastructure as Code (IaC) as it ensures that infrastructure changes are reliable and consistent.
Your selection is incorrect
highly-available

Explanation
While high availability is an important aspect of infrastructure design, it is not directly related to the core principles of IaC such as idempotency, consistency, repeatability, and predictability. High availability focuses on ensuring that systems are always accessible and operational, which is a separate concern from the principles of IaC.
Overall explanation
IaC makes changes idempotent, consistent, repeatable, and predictable. Without IaC, scaling up infrastructure to meet increased demand may require an operator to remotely connect to each machine and then manually provision and configure many servers by executing a series of commands/scripts. They might open multiple sessions and move between screens, which often results in skipped steps or slight variations between how work is completed, necessitating rollbacks. Perhaps a command was run incorrectly on one instance and reverted before being re-run correctly.

https://www.hashicorp.com/blog/infrastructure-as-code-in-a-private-or-public-cloud

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 7
Correct
Given a Terraform config that includes the following code, how would you reference the instance associated with the last key in the map as written?



resource "aws_instance" "database" {
  # ...
  for_each = {
    "vault":     "secrets",
    "terraform": "infrastructure",
    "consul":    "networking",
    "nomad":     "scheduler"
  }
}
aws_instance.nomad

Explanation
The choice `aws_instance.nomad` is incorrect because the instances are defined under the `aws_instance.database` resource block, not directly under the `aws_instance` resource block. The correct way to reference a specific instance created using the `for_each` meta-argument is by using the resource name followed by the key in square brackets, as in `aws_instance.database["nomad"]`.
Your answer is correct
aws_instance.database["nomad"]

Explanation
In the given Terraform configuration, the instances are being created using the `for_each` meta-argument with a map of key-value pairs. The key represents the instance name, and the value represents the purpose of the instance. To reference the last instance that will be created, you would use the syntax `aws_instance.database["nomad"]` since "nomad" is the last key in the map.
aws_instance.database[2]

Explanation
The syntax `aws_instance.database[2]` is not valid in this context because the instances are being created using a map with key-value pairs, not an array. The reference to instances should be based on the keys in the map, not numerical indices.
aws_instance.database[4]

Explanation
Similarly, the syntax `aws_instance.database[4]` is not applicable in this scenario because the instances are being created using a map with specific keys. Since there are only four keys in the map provided in the `for_each` block, referencing an index of 4 would be out of bounds and not valid.
Overall explanation
The following specifications apply to index values on modules and resources with multiple instances:

[N] where N is a 0-based numerical index into a resource with multiple instances specified by the count meta-argument. Omitting an index when addressing a resource where count > 1 means that the address references all instances.

["INDEX"] where INDEX is an alphanumerical key index into a resource with multiple instances specified by the for_each meta-argument.

https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#referring-to-instances

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 8
Incorrect
Your organization requires that no security group in your public cloud environment includes "0.0.0.0/0" as a source of network traffic. How can you proactively enforce this control and prevent Terraform configurations from being executed if they contain this specific string?

Correct answer
Create a Sentinel or OPA policy that checks for the string and denies the Terraform apply if the string exists

Explanation
Creating a Sentinel or OPA policy that specifically checks for the presence of "0.0.0.0/0" in security group configurations allows for proactive enforcement of the control. By denying the Terraform apply if the string exists, you can prevent any configurations that violate the organization's security requirements from being executed.
Perform a terraform validate on the local workstation before committing the code to the code repository linked to HCP Terraform workspace

Explanation
Performing a terraform validate on the local workstation before committing the code to the repository linked to the HCP Terraform workspace is a good practice for catching syntax errors and basic configuration issues. However, it does not specifically target the presence of "0.0.0.0/0" in security group configurations and may not prevent its inclusion in Terraform code.

Your answer is incorrect
Configure a rule in your public cloud provider to scan for security groups and alert you if a security group contains the string

Explanation
Configuring a rule in your public cloud provider to scan for security groups containing the "0.0.0.0/0" string can help identify existing violations of the security requirement. However, this approach is reactive and does not prevent the execution of Terraform configurations containing the string. It may help in identifying and remedying existing issues but does not proactively enforce the control.
Configure the user's HCP Terraform organization permissions to not allow any variables or Terraform configuration that contain this string

Explanation
Configuring the user's HCP Terraform organization permissions to disallow any variables or Terraform configurations containing the "0.0.0.0/0" string may restrict the use of this specific string, but it does not proactively enforce the control. It relies on manual oversight and may not catch all instances of the string in configurations.

Overall explanation
To prevent a Terraform configuration from being executed if it contains a specific string, you can use Sentinel or Open Policy Agent (OPA) to enforce policy checks. Both tools allow you to define custom policies to evaluate and control Terraform configurations before they are applied. Both offer powerful capabilities to enforce custom policies on your Terraform configurations, providing an additional layer of security and governance. By leveraging these tools, you can prevent sensitive information or undesired strings from being present in your infrastructure code, reducing the risk of accidental misconfigurations and potential security vulnerabilities.

Wrong Answers:

- there are no user settings in HCP Terraform that would prevent the use of a specific string in your Terraform configuration

- a terraform validate would not prevent specific strings from being used in Terraform

- while you could use another service to manage your environment and scan for security groups that permit "0.0.0.0/0" in your environment, it is a REACTIVE control, and not preventative.



https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel

https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/opa

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 9
Correct
What happens if multiple users attempt to run a terraform apply simultaneously when using a remote backend? (select two)

Your selection is correct
if the backend does not support locking, the state file could become corrupted

Explanation
If the remote backend does not support locking mechanisms, multiple users running terraform apply simultaneously can lead to conflicts and potential corruption of the state file. Without proper locking, changes made by one user may overwrite or conflict with changes made by another user, leading to an inconsistent state file.
the Terraform apply will work for both users

Explanation
If the backend does not support locking and multiple users run terraform apply simultaneously, the changes made by both users may be applied concurrently without proper synchronization. This can lead to conflicts, inconsistencies, and unexpected behavior in the infrastructure managed by Terraform.
Your selection is correct
if the backend supports locking, the first terraform apply will lock the file for changes, preventing the second user from running the apply

Explanation
When using a remote backend, if the backend supports locking, the first user to run a terraform apply will lock the state file, preventing any other users from making changes simultaneously. This ensures that only one user can apply changes at a time to prevent conflicts and inconsistencies in the state.
both users will get an error

Explanation
When using a remote backend, if the backend supports locking, the first user to run a terraform apply will lock the state file, preventing any other users from making changes simultaneously. This ensures that only one user can apply changes at a time to prevent conflicts and inconsistencies in the state.

Overall explanation
If the state is configured for remote state, the backend selected will determine what happens. If the backend supports locking, the file will be locked for the first user, and that user's configuration will be applied. The second user's terraform apply will return an error that the state is locked.

If the remote backend does not support locking, the state file could become corrupted, since multiple users are trying to make changes at the same time.

https://developer.hashicorp.com/terraform/language/state/locking

Domain
Objective 7 - Implement and Maintain State
Question 10
Correct
Michael has deployed many resources in AWS using Terraform and can easily update or destroy resources when required by the application team. A new employee, Dwight, is working with the application team and deployed a new EC2 instance through the AWS console. When Michael finds out, he decided he wants to manage the new EC2 instance using Terraform moving forward. He opens his terminal and types:

$ terraform import aws_instance.web_app_42 i-b54a26b28b8acv7233

However, Terraform returns the following error: Error: resource address "aws_instance.web_app_42" does not exist in the configuration.

What does Michael need to do first in order to manage the new Amazon EC2 instance with Terraform?

import the configuration of the EC2 instance called web_app_42 from AWS first

Explanation
Importing the configuration of the EC2 instance from AWS first is not the correct approach in this scenario. Terraform requires the resource to be defined in the configuration file before it can manage it, so creating the configuration in the Terraform file is necessary before importing the resource.
Your answer is correct
create a configuration for the new resource in the Terraform configuration file, such as:



resource "aws_instance" "web_app_42" {
  # (resource arguments)
}
Explanation
In order to manage the new EC2 instance with Terraform, Michael needs to first create a configuration for the new resource in the Terraform configuration file. This configuration should define the resource type (aws_instance), the resource name (web_app_42), and any necessary arguments or settings for the resource to be managed effectively by Terraform.
configure the appropriate tags on the Amazon EC2 resource so Terraform knows that it should manage the resource moving forward

Explanation
Configuring appropriate tags on the Amazon EC2 resource is not the immediate step needed to manage the resource with Terraform. While tags can be useful for organizing and identifying resources, the first step is to define the resource in the Terraform configuration file to enable Terraform to manage it effectively.
Terraform cannot manage resources that were provisioned manually

Explanation
While it is true that Terraform prefers to manage all resources through its configuration files, it is not accurate to say that Terraform cannot manage resources that were provisioned manually. By defining the resource in the Terraform configuration file, Terraform can manage and update the resource moving forward.
Overall explanation
The terraform import command is used to import existing resources into Terraform. However, Terraform will not create a configuration for the imported resource. The Terraform operator must create/add a configuration for the resource that will be imported first. Once the configuration is added to the configuration file, the terraform import command can be executed to manage the resource using Terraform.

https://developer.hashicorp.com/terraform/cli/commands/import

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 11
Correct
Ralphie has executed a terraform apply using a complex Terraform configuration file. However, a few resources failed to deploy due to incorrect variables. After the error is discovered, what happens to the resources that were successfully provisioned?

Terraform deletes the resources on the next run

Explanation
Terraform does not automatically delete resources that were successfully provisioned on the next run, even if there were errors in other parts of the configuration. It only manages the resources specified in the configuration file and does not perform any automatic cleanup.
resources successfully deployed are marked for replacement

Explanation
Resources that are successfully deployed are not automatically marked for replacement in Terraform. Replacement only occurs when a resource's configuration is changed in a way that requires it to be recreated.
Terraform rolls back the configuration due to the error, therefore the resources are automatically destroyed

Explanation
Terraform does not automatically roll back the configuration and destroy resources that were successfully provisioned when an error occurs. It only affects the resources related to the error, allowing the successfully provisioned resources to remain deployed.
Your answer is correct
the resources that were successfully provisioned will remain as deployed

Explanation
This choice is correct because Terraform follows a declarative approach, where it only manages the resources specified in the configuration file. Once a resource is successfully provisioned, it will remain deployed unless explicitly destroyed or modified in the configuration.
Overall explanation
During a terraform apply, any resources that are successfully provisioned are maintained as deployed.

On the other hand, resources that failed during the provisioning process, such as a provisioner, will be tainted to be recreated during the next run. https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#creation-time-provisioners

Domain
Objective 7 - Implement and Maintain State
Question 12
Correct
Aaron is new to Terraform and has a single configuration file ready for deployment. What can be true about this configuration file? (select three)

Your selection is correct
the configuration file can deploy both QA and Staging infrastructure for applications

Explanation
The configuration file can deploy both QA and Staging infrastructure for applications is correct. Terraform allows users to define and manage multiple environments within the same configuration file, enabling the deployment of different infrastructure setups.
Your selection is correct
Aaron's configuration file can deploy applications in both AWS and GCP

Explanation
Aaron's configuration file can deploy applications in both AWS and GCP is correct because Terraform supports multi-cloud deployments, allowing users to manage resources across different cloud providers within the same configuration file.
the state can be disabled when deploying to multiple clouds to prevent sensitive data from being shared across cloud platforms

Explanation
The statement that the state can be disabled when deploying to multiple clouds to prevent sensitive data from being shared across cloud platforms is incorrect. Disabling the state file is not recommended as it is essential for tracking the state of the infrastructure and managing resources effectively in Terraform.
Your selection is correct
the state file can be stored in Azure but provision applications in AWS

Explanation
The statement that the state file can be stored in Azure but provision applications in AWS is correct. Terraform allows users to store the state file in a separate location from where the resources are provisioned, providing flexibility in managing infrastructure.
Overall explanation
There are a ton of benefits of deploying with Terraform and the solution is very capable of managing deployments across multiple clouds. However, state is still required and cannot be disabled.

https://developer.hashicorp.com/terraform/intro/use-cases#multi-cloud-deployment

Domain
Objective 2 - Understand Terraform's Purpose (vs other IAC)
Question 13
Correct
You have created a new workspace for a project and added all of your Terraform configuration files in the new directory. Before you execute a terraform plan, you want to validate the configuration using the terraform validate command. However, Terraform returns the error:



$ terraform validate
Error: Could not load plugin


What would cause this error when trying to validate the configuration?

Your answer is correct
the directory was not initialized

Explanation
This error occurs when the directory where the Terraform configuration files are located has not been initialized with Terraform. The terraform validate command requires the directory to be initialized with Terraform before it can validate the configuration files.
the configuration is invalid

Explanation
While an invalid configuration could potentially cause issues during validation, the specific error message "Could not load plugin" suggests that the problem lies with loading the Terraform plugin, not with the configuration itself.
the credentials for the provider are invalid

Explanation
Invalid credentials for the provider would not cause the error related to loading a plugin when running the terraform validate command. This error specifically indicates an issue with loading the Terraform plugin, not with provider credentials.
the directory does not contain valid Terraform configuration files

Explanation
The error message "Could not load plugin" is not related to the presence or validity of Terraform configuration files in the directory. This error indicates a problem with loading the Terraform plugin, not with the configuration files themselves.
Overall explanation
terraform validate requires an initialized working directory with any referenced plugins and modules installed. If you don't initiate the directory, you will get an error stating you need to run a terraform init

https://developer.hashicorp.com/terraform/cli/commands/validate

Domain
Objective 6 - Use the Core Terraform Workflow
Question 14
Correct
Given the following snippet of code, what does servers = 4 reference?



module "servers" {
  source = "./modules/aws-servers"
 
  servers = 4
}
the output variable of the module

Explanation
The `servers = 4` line does not reference the output variable of the module. Output variables are used to expose information from a module to other parts of the Terraform configuration, but in this case, `servers = 4` is setting the value of an input variable, not an output variable.
Your answer is correct
the value of an input variable

Explanation
In Terraform, the `servers = 4` line in the code snippet refers to the value of an input variable named `servers`. This input variable is likely defined within the module "aws-servers" and is being set to a value of 4 in this particular instantiation of the module.
the number of times the module will be executed

Explanation
The statement `servers = 4` does not indicate the number of times the module will be executed. Instead, it specifies the value that will be assigned to the input variable named `servers` within the module "aws-servers".
servers is not a valid configuration for a module

Explanation
Contrary to the statement, `servers = 4` is a valid configuration for a module in Terraform. It is a way to pass a specific value (in this case, 4) to an input variable within the module "aws-servers" during its instantiation.
Overall explanation
When calling a child module, values can be passed to the module to be used within the module itself.

https://developer.hashicorp.com/terraform/language/modules/develop/composition

Domain
Objective 5 - Interact with Terraform Modules
Question 15
Correct
Terraform has detailed logs that can be enabled using the TF_LOG environment variable. Which of the following log levels is the most verbose, meaning it will log the most specific logs?

DEBUG

Explanation
The DEBUG log level in Terraform provides detailed information about the actions taken by Terraform, but it is not as specific or detailed as the TRACE level. It is useful for debugging and investigating issues, but it may not provide as much granular detail as the TRACE level.
ERROR

Explanation
The ERROR log level in Terraform only logs critical errors and issues that prevent Terraform from completing an operation successfully. It does not provide detailed information about the actions taken by Terraform, making it less verbose compared to the TRACE and DEBUG levels.
INFO

Explanation
The INFO log level in Terraform provides general information about the actions taken by Terraform, such as resource creation and updates. It is less verbose than the DEBUG and TRACE levels, making it suitable for getting an overview of Terraform operations without diving into detailed logs.
Your answer is correct
TRACE

Explanation
The TRACE log level in Terraform is the most verbose level, providing the most detailed and specific logs. It logs every action taken by Terraform, including individual resource creation, updates, and deletions, making it ideal for troubleshooting and debugging complex issues.
Overall explanation
You can set TF_LOG to one of the log levels TRACE, DEBUG, INFO, WARN or ERROR to change the verbosity of the logs. TRACE is the most verbose and it is the default if TF_LOG is set to something other than a log level name.

https://developer.hashicorp.com/terraform/internals/debugging

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 16
Incorrect
When using a Terraform provider, it's common that Terraform needs credentials to access the API for the underlying platform, such as VMware, AWS, or Google Cloud. While there are many ways to accomplish this, what are three options that you can provide these credentials? (select three)

Your selection is incorrect
using the resources block in your configuration

Explanation
The resources block in Terraform configuration files is used to define the infrastructure components that Terraform manages, not for providing credentials. Storing credentials in the resources block is not a recommended practice for security reasons.
Correct selection
integrated services, such as AWS IAM or Azure Managed Service Identity

Explanation
Integrated services like AWS IAM or Azure Managed Service Identity can be utilized to provide credentials to Terraform. These services offer secure and managed ways to access the API of the underlying platform without exposing sensitive information in the Terraform configuration.
Your selection is correct
directly in the provider block by hardcoding or using a variable

Explanation
Storing credentials directly in the provider block is a common way to provide access to the underlying platform's API. This can be done by hardcoding the credentials or using Terraform variables to keep them secure and manageable.
Your selection is correct
use environment variables

Explanation
Using environment variables is another common method to provide credentials to Terraform. By setting environment variables, Terraform can access the necessary credentials without exposing them directly in the configuration files.
Overall explanation
You can use methods such as static credentials, environment variables, share credentials/configuration file, or other methods. For example, the AWS provider can use many different options as seen here:

https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication

Each provider is different, and you should check the documentation to see what is supported for each one you want to use.

Domain
Objective 3 - Understand Terraform Basics
Question 17
Incorrect
You are working with a cloud provider to deploy resources using Terraform. You've added the following data block to your configuration. When the data block is used, what data will be returned?



data "aws_ami" "amzlinux2" {
  most_recent = true
  owners      = ["amazon"]
 
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-ebs"]
  }
}


resource "aws_instance" "vault" {
  ami                         = data.aws_ami.amzlinux2.id
  instance_type               = "t3.micro"
  key_name                    = "vault-key"
  vpc_security_group_ids      = var.sg
  subnet_id                   = var.subnet
  associate_public_ip_address = "true"
  user_data                   = file("vault.sh")
 
  tags = {
    Name = "vault"
  }
}
the IP address of an EC2 instance running in AWS

Explanation
This choice is incorrect because the data block is used to retrieve information about a specific AMI, not the IP address of an EC2 instance running in AWS. The data returned will be related to the AMI specified in the filter criteria, not instance-specific information like IP addresses.
a custom AMI for Amazon Linux 2

Explanation
This choice is incorrect because the data block is specifically configured to retrieve the AMI with the name "amzn2-ami-hvm-*-x86_64-ebs" from AWS, not a custom AMI for Amazon Linux 2. The filter criteria restrict the data returned to a specific predefined AMI provided by AWS.
Correct answer
all possible data of a specific Amazon Machine Image(AMI) from AWS

Explanation
The data block "aws_ami" with the specified filters will return all possible data of a specific Amazon Machine Image (AMI) from AWS that matches the criteria set in the configuration. This includes information such as the AMI ID, description, architecture, root device type, and more.
Your answer is incorrect
the latest AMI you have previously used for an Amazon Linux 2 image

Explanation
This choice is incorrect because the data block with the filter specified in the configuration will return the AMI that matches the criteria set, not necessarily the latest AMI that you have previously used for an Amazon Linux 2 image. The "most_recent" parameter is set to true to ensure the most recent AMI that meets the filter criteria is returned.
Overall explanation
When you add a data block to your configuration, Terraform will retrieve all of the available data for that particular resource. It is then up to you to reference a specific attribute that can be exported from that data source. For example, if you include a data block for the aws_ami resource, Terraform will get a ton of attributes about that AMI that you can use elsewhere in your code - check out this link to see the list of attributes specific to the aws_ami, for example. https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami#attributes-reference



Within the block body (between { and }) are query constraints defined by the data source. Most arguments in this section depend on the data source, and indeed in this example most_recent, owners and tags are all arguments defined specifically for the aws_ami data source.

https://developer.hashicorp.com/terraform/language/data-sources#using-data-sources

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 18
Correct
What are the benefits of Terraform state? (select three)

Your selection is correct
allows multiple team members to collaborate safely by tracking who is making changes and preventing concurrent modifications

Explanation
By allowing multiple team members to collaborate safely, Terraform state helps in tracking who is making changes and prevents concurrent modifications. This ensures that changes are coordinated and conflicts are avoided during the infrastructure management process.
allows Terraform to automatically update your infrastructure in real-time by continuously monitoring your cloud provider for changes without needing to run a plan or apply

Explanation
The statement is incorrect. Terraform state does not automatically update your infrastructure in real-time by monitoring your cloud provider for changes. Instead, Terraform relies on the plan and apply commands to make intentional changes to the infrastructure based on the desired state configuration.

Your selection is correct
tracks the current state of your infrastructure, enabling it to understand what resources exist and need to change

Explanation
Terraform state tracks the current state of your infrastructure, which is essential for understanding the existing resources and determining necessary changes. This enables Terraform to accurately plan and apply updates to your infrastructure.
Your selection is correct
maintains relationships between resources, helping Terraform understand dependencies and ensure proper resource ordering

Explanation
Terraform state maintains relationships between resources, which is crucial for understanding dependencies and ensuring proper resource ordering. This helps Terraform to manage the infrastructure efficiently and deploy resources in the correct order to avoid errors.
Overall explanation
Terraform state is a record of all resources Terraform manages, recording their current attributes and configuration. It's essential because it helps Terraform track what exists in your infrastructure, understand dependencies between resources, and determine what changes need to be made during the next apply. Without state, Terraform wouldn't know what it has previously created or how to map your configuration to real-world resources.

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's Purpose (vs other IAC)
Question 19
Correct
A startup needs a way to ensure only its engineers and architects can create and publish approved Terraform modules. Which feature can provide this capability?

HCP Terraform Workspaces

Explanation
HCP Terraform Workspaces provide collaboration and management features for Terraform configurations, but do not specifically address the requirement of creating and publishing Terraform modules exclusively for internal use. It focuses more on managing infrastructure as code workflows.

Terraform Registry

Explanation
Terraform Registry is a public repository for Terraform modules that can be accessed by anyone. It does not offer the level of privacy and control needed to restrict module usage to internal team members only.

Your answer is correct
Private Registry

Explanation
Private Registry allows organizations to host their own Terraform modules internally, ensuring that only authorized engineers and architects within the organization can access and use them. This feature provides the necessary security and control over proprietary infrastructure configurations.
HashiCorp Sentinel

Explanation
HashiCorp Sentinel is a policy-as-code framework that helps enforce compliance and security policies within Terraform configurations. While it can enhance security and governance, it does not directly address the need to create and publish Terraform modules for internal use only.

Overall explanation
One feature that can provide this functionality is Terraform's Private Registry. This feature allows organizations to create and manage private modules that authorized users within the organization can access. With Private Registry, the organization can create and publish Terraform modules that are only available to its engineers and architects. This ensures that their proprietary compute stack remains secure while also streamlining the process of provisioning additional resources.

https://developer.hashicorp.com/terraform/cloud-docs/registry

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 20
Correct
True or False? Any sensitive values referenced in the Terraform code, even as variables, will end up in plain text in the state file.

Your answer is correct
True

Explanation
True. Any sensitive values referenced in the Terraform code, including variables, will be stored in plain text in the state file. This poses a security risk as anyone with access to the state file can potentially view these sensitive values, compromising the security of the infrastructure.
False

Explanation
Incorrect. Any sensitive values referenced in the Terraform code, including variables, will be stored in plain text in the state file. This poses a security risk as anyone with access to the state file can potentially view these sensitive values, compromising the security of the infrastructure.

Overall explanation
Any values that are retrieved in a data block or referenced as variables will show up in the state file.

https://developer.hashicorp.com/terraform/language/state/sensitive-data

Domain
Objective 7 - Implement and Maintain State
Question 21
Correct
When a terraform apply is executed, where is the AWS provider retrieving credentials to create cloud resources in the code snippet below?



provider "aws" {
   region     = us-east-1
   access_key = data.vault_aws_access_credentials.creds.access_key
   secret_key = data.vault_aws_access_credentials.creds.secret_key
}
from a variable called vault_aws_access_credentials

Explanation
There is no direct reference to a variable called vault_aws_access_credentials in the code snippet. The credentials are being retrieved from HashiCorp Vault using a data source, not from a predefined variable.
from a script that is executing commands against Vault

Explanation
The code snippet is not executing any commands against Vault directly. It is utilizing a data source to retrieve AWS credentials securely from HashiCorp Vault for creating cloud resources.
from the .tfvars file called vault

Explanation
The code snippet does not mention any .tfvars file called vault. The AWS credentials are being retrieved from HashiCorp Vault using a data source, not from a specific .tfvars file.
Your answer is correct
from a data source that is retrieving credentials from HashiCorp Vault. Vault is dynamically generating the credentials on Terraform's behalf.

Explanation
The code snippet is using a data source to retrieve AWS credentials from HashiCorp Vault. Vault dynamically generates these credentials on behalf of Terraform, ensuring secure and dynamic access to AWS resources without exposing sensitive information in the code.
Overall explanation
In this case, Terraform is using a data source to gather credentials from Vault. The data block would look something like this:



data "vault_aws_access_credentials" "creds" {
   backend = vault_aws_secret_backend.aws.path
   role    = vault_aws_secret_backend_role.role.name
}
https://developer.hashicorp.com/terraform/language/data-sources

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 22
Correct
True or False? Terraform is designed to work only with public cloud platforms, and organizations that wish to use it for on-premises infrastructure (private cloud) should look for an alternative solution.

True

Explanation
Terraform is not limited to public cloud platforms only. It is a versatile infrastructure as code tool that can be used to manage resources across various cloud providers, on-premises infrastructure, and even hybrid cloud environments. Organizations can use Terraform to manage infrastructure in private clouds, data centers, and any environment that supports the Terraform provider ecosystem.
Your answer is correct
False

Explanation
This choice is correct because Terraform is not exclusively designed for public cloud platforms. It is a flexible tool that can be used to manage infrastructure across different environments, including on-premises infrastructure (private cloud). Organizations looking to automate and manage their on-premises infrastructure can leverage Terraform as a suitable solution.
Overall explanation
Terraform is designed to work with almost any infrastructure that provides an API. Terraform is very frequently used to provision infrastructure atop VMware infrastructure, along with traditional, physical security or infrastructure service solutions.

Additional information can be found in this article - https://www.hashicorp.com/blog/infrastructure-as-code-in-a-private-or-public-cloud

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 23
Correct
What feature of Terraform provides an abstraction above the upstream API and is responsible for understanding API interactions and exposing resources?

Terraform provisioner

Explanation
Terraform provisioner is not the correct choice in this context. Provisioners are used to execute scripts or commands on local or remote machines after a resource is created, but they do not provide an abstraction above the upstream API or handle API interactions like a provider does.
Terraform configuration file

Explanation
Terraform configuration file is not the correct choice in this context. While the configuration file is where you define the infrastructure resources and their relationships, it does not provide an abstraction above the upstream API or handle API interactions like a provider does.
Your answer is correct
Terraform provider

Explanation
Terraform provider is the correct choice because it is a key component of Terraform that acts as an interface between Terraform and the upstream API of a specific service or platform. It abstracts the API interactions, understands how to create, read, update, and delete resources, and exposes those resources to be managed within Terraform configurations.
Terraform backend

Explanation
Terraform backend is not the correct choice in this context. The backend configuration in Terraform defines where state data is stored and how operations are performed, but it does not provide an abstraction above the upstream API or handle API interactions like a provider does.
Overall explanation
Terraform relies on plugins called "providers" to interact with remote systems.

Terraform configurations must declare which providers they require so that Terraform can install and use them. Additionally, some providers require configuration (like endpoint URLs or cloud regions) before they can be used.

https://developer.hashicorp.com/terraform/language/providers

Domain
Objective 3 - Understand Terraform Basics
Question 24
Correct
Larissa is an experienced IT professional and is working to learn Terraform to manage the F5 load balancers that front-end customer-facing applications. Larissa writes great code, but her formatting seldom meets the Terraform canonical formatting and style recommended by HashiCorp. What built-in tool or command can Larissa use to easily format her code to meet the recommendations for formatting Terraform code?

Your answer is correct
terraform fmt

Explanation
The 'terraform fmt' command is the correct choice as it is a built-in tool in Terraform that automatically formats Terraform configuration files to meet the recommended canonical formatting and style. It helps Larissa ensure that her code follows the best practices and standards for Terraform code formatting.
terraform plan

Explanation
The 'terraform plan' command is used to create an execution plan for Terraform, showing what actions Terraform will take to change the infrastructure. It is not related to formatting code and does not help Larissa with aligning her code with Terraform's recommended formatting style.
terraform validate

Explanation
The 'terraform validate' command is used to validate the configuration files for syntax errors and other issues. While it helps ensure the correctness of the code, it does not offer a tool for formatting code to meet the recommended Terraform style guidelines.
terraform env

Explanation
The 'terraform env' command is used to manage Terraform workspaces and environments. It is not related to code formatting and does not provide a tool for Larissa to automatically format her Terraform code according to the recommended style.
Overall explanation
The terraform fmt command is used to rewrite Terraform configuration files to a canonical format and style. This command applies a subset of the Terraform language style conventions, along with other minor adjustments for readability.

https://developer.hashicorp.com/terraform/cli/commands/fmt

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 25
Correct
A provider alias is used for what purpose in a Terraform configuration file?

Your answer is correct
using the same provider with different configurations for different resources

Explanation
A provider alias is used to differentiate between multiple instances of the same provider within a Terraform configuration file. This allows you to configure and use the same provider with different settings for different resources, ensuring flexibility and customization in your infrastructure deployment.
to signify what resources should be deployed to a certain cloud provider

Explanation
Provider aliases do not signify what resources should be deployed to a certain cloud provider. They are used to manage multiple configurations of the same provider within a Terraform configuration file, regardless of the cloud provider being targeted.
to use as shorthand for resources to be deployed with the referenced provider

Explanation
Provider aliases are not used as shorthand for resources to be deployed with the referenced provider. They are specifically used to distinguish between multiple instances of the same provider with different configurations.
alias isn't used with providers, they are used with provisioners

Explanation
Provider aliases are not used with provisioners. They are specifically used with providers to manage different configurations for resource deployment. Provisioners, on the other hand, are used for tasks such as running scripts or executing commands on the deployed resources.
Overall explanation
To create multiple configurations for a given provider, include multiple provider blocks with the same provider name. For each additional non-default configuration, use the alias meta-argument to provide an extra name segment.

https://developer.hashicorp.com/terraform/language/providers/configuration

Domain
Objective 3 - Understand Terraform Basics
Question 26
Incorrect
Please fill the blank field(s) in the statement with the right words.

What CLI command and flag can you use to delete a resource named azurerm_resource_group.production that is managed by Terraform?

__

Your answer is incorrect
terraform state rm azurerm_resource_group.production
Correct answer
terraform destroy -target=azurerm_resource_group.production
Explanation
The terraform destroy command terminates resources managed by your Terraform project. This command is the inverse of terraform apply in that it terminates all the resources specified in your Terraform state. It does not destroy resources running elsewhere that are not managed by the current Terraform project.

You can use the -target option to destroy a particular resource and its dependencies:

https://developer.hashicorp.com/terraform/cli/commands/destroy

Domain
Objective 6 - Use the Core Terraform Workflow
Question 27
Correct
Which of the following best describes a "data source"?

Your answer is correct
enables Terraform to fetch data for use elsewhere in the Terraform configuration

Explanation
A data source in Terraform enables the configuration to fetch data from an external source, such as an API or a cloud provider, to be used elsewhere in the Terraform configuration. This allows Terraform to dynamically retrieve information needed for resource provisioning.
maintains a list of strings to store the values of declared outputs in Terraform

Explanation
Data sources do not maintain a list of strings to store the values of declared outputs in Terraform. Outputs in Terraform are used to expose information about the infrastructure that can be useful for other parts of the configuration or for external systems, but they are not directly related to data sources.
provides required data for declared variables used within the Terraform configuration

Explanation
Data sources are not used to provide required data for declared variables within the Terraform configuration. Variables in Terraform are typically declared separately and can be assigned values from various sources, including data sources, but data sources themselves do not directly provide data for variables.
a file that contains the current working version of Terraform

Explanation
A data source is not a file that contains the current working version of Terraform. Data sources in Terraform are used to fetch external data, such as information from APIs or cloud providers, and are not related to the version control or storage of the Terraform configuration itself.
Overall explanation
Data sources allow data to be fetched or computed for use elsewhere in Terraform configuration. Use of data sources allows a Terraform configuration to make use of information defined outside of Terraform, or defined by another separate Terraform configuration.

https://developer.hashicorp.com/terraform/language/data-sources

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 28
Correct
Variables and their default values are typically declared in a main.tf or variables.tf file. What type of file can be used to set explicit values for the current working directory that will override the default variable values?

.tfstate file

Explanation
The .tfstate file is used to store the state of the infrastructure managed by Terraform. It does not contain explicit values for variables or override default variable values. The .tfstate file is crucial for tracking the current state of resources and managing changes to the infrastructure.
.txt file

Explanation
The .txt file is a plain text file and is not specifically designed for setting explicit values for Terraform variables. While you can store information in a .txt file, it does not have the functionality to override default variable values in Terraform configurations.
.sh file

Explanation
The .sh file is a shell script file and is not used for setting explicit values for Terraform variables. While shell scripts can be used to automate tasks related to Terraform, they are not the appropriate file type for overriding default variable values in the current working directory.
Your answer is correct
.tfvars file

Explanation
The .tfvars file is used to set explicit values for variables in Terraform. By creating a .tfvars file in the current working directory, you can override the default variable values declared in main.tf or variables.tf. This allows for flexibility in providing specific values for variables without modifying the main configuration files.
Overall explanation
To set lots of variables, it is more convenient to specify their values in a variable definitions file (with a filename ending in either .tfvars or .tfvars.json)

https://developer.hashicorp.com/terraform/language/values/variables

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 29
Correct
Pam just finished up a new Terraform configuration file and has successfully deployed the configuration on Azure using Terraform Community. After confirming the configuration on Azure, Pam changes to a new workspace and then heads to lunch. When she arrives back at her desk, Pam decides to destroy the resources to save on cost. When Pam executes a terraform destroy, the output indicates there are no resources to delete.

Why can't Pam delete the newly created resources in Azure?



$ terraform destroy
 
An execution plan has been generated and is shown below.  
Resource actions are indicated with the following symbols:
 
Terraform will perform the following actions:
 
Plan: 0 to add, 0 to change, 0 to destroy.
the Terraform state was deleted when she created the new workspace

Explanation
When Pam created a new workspace, the Terraform state associated with the previously deployed resources may have been deleted or overwritten. Without the correct Terraform state information, Terraform cannot identify the resources to delete, leading to the output showing no resources to destroy.
an Azure administrator manually deleted the resources

Explanation
If an Azure administrator manually deleted the resources outside of Terraform, the Terraform state would not be aware of this change. When Pam tries to destroy the resources using Terraform, it will not find the resources in the state file, resulting in no resources to delete.
Your answer is correct
there is no Terraform state in the current workspace she is working in

Explanation
The Terraform state file contains information about the resources managed by Terraform, including their current state and configuration. If Pam changed to a new workspace without properly switching the Terraform state to the new workspace, Terraform will not be able to find the resources to delete, resulting in the output showing no resources to destroy.
Terraform reached the maximum timeout while Pam was away from lunch, therefore the resources were automatically destroyed

Explanation
Terraform does not automatically destroy resources based on a timeout. Pam would need to explicitly run the terraform destroy command to remove the resources. The absence of resources to delete in the output indicates that the resources were not successfully managed by Terraform in the current workspace.
Overall explanation
Workspaces isolate their state, so if Pam runs a terraform destroy, Terraform will not see any existing state for this configuration. Pam may use the command terraform workspace select <name> to choose the original workspace where the Azure resources were provisioned in order to properly destroy them in Azure.

https://developer.hashicorp.com/terraform/cli/workspaces

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 30
Correct
You have deployed your production environment with Terraform, and a developer has requested that you update a load balancer configuration to improve its compatibility with their application. Once you have modified your Terraform configuration, how can you conduct a dry run to verify that no unexpected changes will be made?

Your answer is correct
run  terraform plan and inspect the proposed changes

Explanation
Running `terraform plan` allows you to preview the changes that Terraform will make to your infrastructure without actually applying them. This is a dry run that shows you the proposed modifications so you can inspect them and ensure they align with your expectations before making any actual changes.
run terraform plan -auto-approve to push the changes

Explanation
Running `terraform plan -auto-approve` will automatically apply the changes without giving you the opportunity to review them beforehand. This is not suitable for conducting a dry run to verify that no unexpected changes will be made, as it skips the preview step.
run  terraform state list to view the existing resources and ensure they won't conflict with the new changes

Explanation
Running `terraform state list` will only show you the existing resources in your Terraform state. It does not provide a way to preview the changes or conduct a dry run to verify the impact of the modifications you are about to make to your infrastructure.
run terraform console and validate the result of any expressions

Explanation
Running `terraform console` allows you to interactively explore your Terraform configuration and state, but it does not provide a way to conduct a dry run or preview changes. It is more useful for debugging and exploring the Terraform environment rather than verifying changes before applying them.
Overall explanation
The ultimate goal of a terraform plan is to compare the configuration file against the current state and propose any changes needed to apply the desired configuration.

https://developer.hashicorp.com/terraform/cli/commands/plan

Domain
Objective 6 - Use the Core Terraform Workflow
Question 31
Correct
Which of the following Terraform CLI commands are valid? (select five)

terraform delete

Explanation
The terraform delete command is not a valid Terraform CLI command. The correct command for deleting resources managed by Terraform is terraform destroy.

Your selection is correct
terraform workspace select

Explanation
The terraform workspace select command is valid as it allows you to switch between different workspaces in a Terraform project. Workspaces are useful for managing different sets of infrastructure configurations within the same project.

Your selection is correct
terraform login

Explanation
The terraform login command is valid as it allows you to authenticate with HCP Terraform or Terraform Enterprise. This is necessary for securely managing remote state and for collaborating with other team members on the same project.

terraform initialize

Explanation
The terraform initialize command is NOT a valid Terraform CLI command. However, terraform init is a valid command, and it's used to initialize a Terraform working directory. It prepares the directory for use with Terraform by downloading the necessary provider plugins and modules.

Your selection is correct
terraform apply -refresh-only

Explanation
The terraform apply -refresh-only command is valid as it allows you to sync the state file with the actual state of the resources without making any changes to the infrastructure. This can be useful when you want to ensure that the state file accurately reflects the current state of the resources.

Your selection is correct
terraform fmt

Explanation
The terraform fmt command is valid as it is used to format Terraform configuration files to a standard style. This helps in maintaining a clean and consistent codebase, making it easier to read and understand.

Your selection is correct
terraform show

Explanation
The terraform show command is valid as it provides a detailed view of the current state of the Terraform-managed infrastructure. It is useful for inspecting the resources that have been created and their current state.

Overall explanation
terraform delete and terraform initialize are not valid Terraform CLI commands.

Correct Answers:

The terraform apply -refresh-only command creates a plan whose goal is only to update the Terraform state and any root module output values to match changes made to remote objects outside of Terraform.

The terraform fmt command is used to rewrite Terraform configuration files to a canonical format and style.

The terraform workspace select command is used to choose a different workspace to use for further operations.

The terraform show command is used to provide human-readable output from a state or plan file. This can be used to inspect a plan to ensure that the planned operations are expected or to inspect the current state as Terraform sees it.

The terraform login command can be used to automatically obtain and save an API token for HCP Terraform, Terraform Enterprise, or any other host that offers Terraform services.

https://developer.hashicorp.com/terraform/cli/commands/fmt

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 32
Correct
What happens when you apply a Terraform configuration using terraform apply? (select two)

Your selection is correct
Terraform updates the state file with configuration changes made during the execution

Explanation
Terraform updates the state file with configuration changes made during the execution. The state file keeps track of the current state of your infrastructure and is used to plan and apply changes in subsequent runs.
Terraform downloads any required plugins

Explanation
Terraform downloads any required plugins before applying the configuration. These plugins are necessary to interact with the various infrastructure providers and resources defined in your configuration.
Your selection is correct
Terraform makes infrastructure changes defined in your configuration.

Explanation
When you apply a Terraform configuration using terraform apply, Terraform will make infrastructure changes as defined in your configuration. This includes creating, updating, or deleting resources based on the changes specified in your Terraform files.
Terraform recreates all the infrastructure defined in the configuration file

Explanation
Terraform recreating all the infrastructure defined in the configuration file is not always the case when applying changes. Terraform follows a declarative approach, where it determines the necessary changes to reach the desired state without recreating all resources unless explicitly specified in the configuration.
Terraform formats your configuration to the standard canonical format and style

Explanation
Terraform formatting of the configuration to the standard canonical format and style typically occurs during the terraform plan or terraform validate commands, not during the apply process. This step ensures that the configuration is correctly formatted and adheres to best practices.
Overall explanation
The terraform apply command is used to apply the changes required to reach the desired state of the configuration, or the pre-determined set of actions generated by a terraform plan execution plan.

https://developer.hashicorp.com/terraform/cli/commands/apply

Domain
Objective 6 - Use the Core Terraform Workflow
Question 33
Correct
Jeff is a DevOps Engineer for a large company and is currently managing the infrastructure for many different applications using Terraform. Recently, Jeff received a request to remove a specific VMware virtual machine from Terraform as the application team no longer needs it. Jeff opens his terminal and issues the command:



$ terraform state rm vsphere_virtual_machine.app1
 
Removed vsphere_virtual_machine.app1
Successfully removed 1 resource instance(s).


The next time that Jeff runs a terraform apply, the resource is not marked to be deleted. In fact, Terraform is stating that it is creating another identical resource.



.....
An execution plan has been generated and is shown below.  
Resource actions are indicated with the following symbols:
  + create
 
Terraform will perform the following actions:
 
  # vsphere_virtual_machine.app1 will be created


What would explain this behavior?

the resource was manually deleted within the VMware infrastructure and needs to be recreated

Explanation
The behavior observed is not due to the resource being manually deleted within the VMware infrastructure. Terraform manages resources based on the configuration files and state file, so manual deletion in the VMware infrastructure would not directly impact Terraform's behavior of creating a new resource.
Your answer is correct
Jeff removed the resource from the state file, and not the configuration file. Therefore, Terraform is no longer aware of the virtual machine and assumes Jeff wants to create a new one since the virtual machine is still in the Terraform configuration file

Explanation
By running the `terraform state rm` command, Jeff removed the resource from the Terraform state file, not the configuration file. Since Terraform uses the state file to track the current state of resources, removing it from the state file means Terraform is no longer aware of the virtual machine. As a result, Terraform assumes Jeff wants to create a new resource since it still exists in the Terraform configuration file.
after running the terraform rm command, Jeff needs to run a Terraform plan first to tell Terraform of the updated configuration. A plan will instruct Terraform that the resource should be deleted upon the next terraform apply

Explanation
After removing the resource from the state file, Jeff needs to run a `terraform plan` command to inform Terraform of the updated configuration. Running a plan will show Terraform that the resource should be deleted upon the next `terraform apply` command, ensuring that Terraform takes the correct action.
the state file was not saved before the terraform apply was executed, therefore Terraform sees that the resource is still in the state file

Explanation
If the state file was not saved before executing the `terraform apply` command, Terraform may still have the old state information where the resource exists. This could lead to Terraform thinking the resource is still present and needs to be created, even though Jeff attempted to remove it from the state file.
Overall explanation
Because Jeff manually deleted the resource from the state file, Terraform was no longer aware of the virtual machine. When Jeff ran a terraform apply, it refreshed the state file and discovered that the configuration file declared a virtual machine but it was not in state, therefore Terraform needed to create a virtual machine so the provisioned infrastructure matched the desired configuration, which is the Terraform configuration file.

Hopefully, this isn't a tricky one but I thought it was good to test on, especially since terraform state commands are listed in Objective 4 of the exam. In this case, Jeff should NOT have removed the resource from the state file, but rather remove it from the configuration file and run a terraform plan/apply. In this scenario, Terraform would recognize that the virtual machine was no longer needed and would have destroyed it.

https://developer.hashicorp.com/terraform/cli/commands/state/list

Domain
Objective 4 - Use Terraform Outside of Core Workflow
Question 34
Incorrect
Both Terraform Community/CLI and HCP Terraform offer a feature called "workspaces." Which of the following statements are true regarding workspaces? (select three)

Correct selection
HCP Terraform manages infrastructure collections with a workspace whereas CLI manages collections of infrastructure resources with a persistent working directory

Explanation
HCP Terraform utilizes workspaces to manage collections of infrastructure resources, while Terraform CLI uses workspaces to manage alternative state files within the same working directory. HCP Terraform also maintains state versioning and run history for each workspace, providing a higher level of infrastructure management.
Your selection is correct
HCP Terraform maintains the state version and run history for each workspace

Explanation
This is correct. HCP Terraform workspaces will maintain the state for the resources associated with the workspace. Users can also view a history of runs for each workspace, including the time, result, and who ran the plan/apply/destroy.

Your selection is incorrect
Run history is logged in a file underneath the working directory of a CLI workspace

Explanation
Run history in Terraform CLI workspaces is not logged in a file underneath the working directory. Instead, run history and logs are typically stored in the Terraform state file or in the Terraform Cloud/Enterprise platform for better visibility and tracking of changes.
Each CLI workspace coincides with a different VCS repo

Explanation
Each Terraform CLI workspace does not necessarily coincide with a different version control system (VCS) repository. Workspaces in Terraform CLI are used to manage state files within the same working directory, providing a way to isolate configurations and state data for different environments.

Your selection is correct
CLI workspaces are alternative state files in the same working directory

Explanation
In Terraform CLI, workspaces are used to manage multiple state files within the same working directory. This allows users to maintain separate configurations and state data for different environments or configurations without the need for separate directories.
Overall explanation
Workspaces are similar concepts in all versions of Terraform, although they behave differently depending on the platform they are being used on.

https://developer.hashicorp.com/terraform/cloud-docs/workspaces

https://developer.hashicorp.com/terraform/language/state/workspaces

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 35
Correct
Infrastructure as Code (IaC) provides many benefits to help organizations deploy application infrastructure much faster than clicking around in the console. What are the additional benefits of IaC? (select three)

Your selection is correct
code can easily be shared and reused

Explanation
The ability to easily share and reuse code is a significant advantage of IaC. With reusable infrastructure code, teams can collaborate more effectively, reduce duplication of effort, and maintain consistency in deployments.
eliminates parallelism

Explanation
Eliminating parallelism is not a benefit of Infrastructure as Code (IaC). In fact, IaC often leverages parallelism to deploy resources efficiently and quickly.
can always be used to deploy the latest features and services

Explanation
While IaC does enable the deployment of the latest features and services, it is not a universal guarantee. The ability to deploy the latest features and services depends on the implementation and configuration of the IaC scripts and the availability of those features and services in the cloud provider.
Your selection is correct
allows infrastructure to be versioned

Explanation
Allowing infrastructure to be versioned is another important benefit of IaC. Versioning infrastructure code enables tracking changes, rolling back to previous configurations, and ensuring consistency across environments.
Your selection is correct
creates a blueprint of your data center

Explanation
Creating a blueprint of your data center is a key benefit of IaC. By defining infrastructure in code, you can have a clear and documented representation of your entire infrastructure setup.
Overall explanation
Infrastructure is described using a high-level configuration syntax. This allows a blueprint of your datacenter to be versioned and treated as you would any other code. Additionally, infrastructure can be shared and re-used.

Infrastructure as Code almost always uses parallelism to deploy resources faster. And depending on the solution being used, it doesn't always have access to the latest features and services available on cloud platforms or other solutions.

https://developer.hashicorp.com/terraform/intro#infrastructure-as-code

Domain
Objective 1 - Understand Infrastructure as Code concepts
Question 36
Correct
True or False? A remote backend configuration is required for using Terraform.

Your answer is correct
False

Explanation
False. While it is recommended to use a remote backend configuration for Terraform to enhance scalability and collaboration, it is not mandatory. Terraform can function with a local backend configuration, storing state files on the local machine, although using a remote backend offers benefits such as improved security and accessibility.
True

Explanation
False. While it is recommended to use a remote backend configuration for Terraform to enhance scalability and collaboration, it is not mandatory.

Overall explanation
This is false. If you don't provide a backend configuration, Terraform will use the local default backend. Remote Backends are completely optional. You can successfully use Terraform without ever having to learn or use a remote backend. However, they do solve pain points that afflict teams at a certain scale. If you're an individual, you can likely get away with never using backends.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration

Domain
Objective 7 - Implement and Maintain State
Question 37
Correct
Please fill the blank field(s) in the statement with the right words.

The command __ is used to extract the output values defined in the Terraform configuration.

Your answer is correct
terraform output
Explanation
The terraform output command in Terraform is used to display the values of outputs defined in the Terraform configuration. Outputs are a way to extract and display information about your infrastructure after it's been created or modified by Terraform. This command allows you to easily view specific information such as IP addresses, URLs, or other configuration details that are defined as outputs in your Terraform configuration files.

Domain
Objective 6 - Use the Core Terraform Workflow
Question 38
Correct
Teddy is using Terraform to deploy infrastructure using modules. Where is the module below stored?



module "monitoring_tools" {
  source = "./modules/monitoring_tools"
 
  cluster_hostname = module.k8s_cluster.hostname
}
a private registry in HCP Terraform (free)

Explanation
The module is not stored in a private registry in HCP Terraform (free), as the "source" attribute points to a local directory path. Private registries in HCP Terraform are used for storing and sharing modules in a centralized manner, but in this case, the module is being referenced locally.

on the Terraform public registry

Explanation
The module is not stored on the Terraform public registry, as the "source" attribute specifies a relative path to a local directory. Modules stored on the Terraform public registry would have a different format for the "source" attribute, typically starting with a namespace or organization name.
in a public GitLab repository

Explanation
The module is not stored in a public GitLab repository, as the "source" attribute specifies a relative path to a local directory. Modules stored in a public GitLab repository would have a different format for the "source" attribute, typically starting with the GitLab repository URL.
Your answer is correct
locally on the instance running Terraform

Explanation
The module is stored locally on the instance running Terraform, as indicated by the relative path "./modules/monitoring_tools" in the "source" attribute. This means that Terraform will look for the module in the specified directory on the machine where the Terraform configuration is being executed.
Overall explanation
A local path must begin with either ./ or ../ to indicate that a local path is intended, to distinguish from a registry address.

https://developer.hashicorp.com/terraform/language/modules/sources#terraform-registry

Domain
Objective 5 - Interact with Terraform Modules
Question 39
Correct
Using the Terraform code below, where will the resource be provisioned?



provider "aws" {
  region = "us-east-1"
}
 
provider "aws" {
  alias  = "west"
  region = "us-west-2"
}
 
provider "aws" {
  alias  = "eu"
  region = "eu-west-2"
}
 
resource "aws_instance" "vault" {
  ami                    = data.aws_ami.amzlinux2.id
  instance_type          = "t3.micro"
  key_name               = "krausen_key"
  vpc_security_group_ids = var.vault_sg
  subnet_id              = var.vault_subnet
  user_data              = file("vault.sh")
 
  tags = {
    Name = "vault"
  }
}


Your answer is correct
us-east-1

Explanation
The resource "aws_instance" named "vault" will be provisioned in the "us-east-1" region because the default provider configuration specifies this region. Since no alias is provided for this provider, it is the default provider for the resource.
us-west-2

Explanation
The resource "aws_instance" named "vault" will not be provisioned in the "us-west-2" region, even though there is a provider with an alias "west" configured for this region. The resource will be provisioned in the "us-east-1" region as the default provider is set to "us-east-1".
us-west-1

Explanation
The resource "aws_instance" named "vault" will not be provisioned in the "us-west-1" region, as there is no provider configuration for this region in the Terraform code snippet provided. The resource will be provisioned in the "us-east-1" region by default based on the first provider configuration.
Overall explanation
The resource above will be created in the default region of us-east-1, since the resource does signify an alternative provider configuration. If the resource needs to be created in one of the other declared regions, it should have looked like this, where "aws" signifies the provider name and "west" signifies the alias name as such <PROVIDER NAME>.<ALIAS>:



resource "aws_instance" "vault" {
  provider               = aws.west
  ami                    = data.aws_ami.amzlinux2.id
  instance_type          = "t3.micro"
  key_name               = "krausen_key"
  vpc_security_group_ids = var.vault_sg
  subnet_id              = var.vault_subnet
  user_data              = file("vault.sh")
 
  tags = {
    Name = "vault"
  }
}
https://developer.hashicorp.com/terraform/language/providers/configuration#selecting-alternate-provider-configurations

Domain
Objective 3 - Understand Terraform Basics
Question 40
Correct
Which block type is used to assign a name to an expression that can be used multiple times within a module without having to repeat it?

resource {}

Explanation
The resource {} block type is used to define and manage a specific resource within a Terraform configuration. While you can assign a name to a resource, it is not specifically designed for reusing expressions multiple times within a module without repetition.

provider {}

Explanation
The provider {} block type is used to configure the provider that Terraform will use to interact with a particular cloud or infrastructure service. While you can assign a name to a provider configuration, it is not intended for defining and reusing expressions within a module without repetition.

Your answer is correct
locals {}

Explanation
The locals {} block type is used to define local variables within a Terraform module. By assigning a name to an expression using locals {}, you can reuse that expression multiple times within the module without having to repeat it, making your code more concise and maintainable.

terraform {}

Explanation
The terraform {} block type is used to configure global settings for a Terraform configuration, such as backend configuration and required Terraform version. It is not designed for assigning names to expressions for reuse within a module without repetition.

Overall explanation
A local value assigns a name to an expression, so you can use it multiple times within a module without repeating it. These local values are declared within a locals block

https://developer.hashicorp.com/terraform/language/values/locals

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 41
Correct
What is the primary function of HCP Terraform agents?

Your answer is correct
execute Terraform plans and apply changes to infrastructure

Explanation
HCP Terraform agents are primarily responsible for executing Terraform plans and applying changes to infrastructure. They act as the bridge between the HCP Terraform service and the target infrastructure, ensuring that the desired state of the infrastructure is achieved based on the Terraform configuration.

store and manage Terraform state files

Explanation
Storing and managing Terraform state files is handled by HCP Terraform's backend service, not the agents themselves. The state files are stored securely in the HCP Terraform backend to maintain the state of the infrastructure and track changes made by Terraform.

provide remote access to Terraform workspaces

Explanation
Providing remote access to Terraform workspaces is not the primary function of HCP Terraform agents. While HCP Terraform does offer remote access to workspaces for collaboration and management purposes, this specific task is not the main responsibility of the agents.

monitor and troubleshoot Terraform deployments

Explanation
Monitoring and troubleshooting Terraform deployments is not the primary role of HCP Terraform agents. While monitoring and troubleshooting capabilities may be available within HCP Terraform for tracking deployment progress and identifying issues, these tasks are typically handled by other components of the HCP Terraform platform, not the agents.

Overall explanation
HCP Terraform agents are lightweight programs deployed within your target infrastructure environment. Their primary function is to receive Terraform plans from HCP Terraform, execute those plans locally, and apply the desired infrastructure changes. This allows you to manage private or on-premises infrastructure with HCP Terraform without opening your network to public ingress traffic.

********************

WRONG ANSWERS:

Provide remote access to Terraform workspaces: While agents can facilitate communication between your infrastructure and HCP Terraform, they don't directly provide remote access to workspaces themselves.

Store and manage Terraform state files: While agents can interact with state files during execution, their primary role is not state management. State files are typically stored in a separate, centralized location like HCP Terraform or a cloud storage service.

Monitor and troubleshoot Terraform deployments: While agents can be used to gather information for troubleshooting, their core function is not dedicated monitoring.

https://developer.hashicorp.com/terraform/cloud-docs/agents

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 42
Correct
Based on the code provided, how many subnets will be created in the AWS account?

variables.tf

variable "private_subnet_names" {
  type    = list(string)
  default = ["private_subnet_a", "private_subnet_b", "private_subnet_c"]
}
variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}
variable "public_subnet_names" {
  type    = list(string)
  default = ["public_subnet_1", "public_subnet_2"]
}
main.tf

resource "aws_subnet" "private_subnet" {
  count             = length(var.private_subnet_names)
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index)
  availability_zone = data.aws_availability_zones.available.names[count.index]
 
  tags = {
    Name      = var.private_subnet_names[count.index]
    Terraform = "true"
  }
}
1

Explanation
This choice is incorrect as the code snippet explicitly defines the creation of subnets based on the "private_subnet_names" list, which contains 3 elements.

0

Explanation
This choice is incorrect because the code snippet explicitly creates subnets based on the "private_subnet_names" list with 3 elements.

2

Explanation
This choice is incorrect because the code is designed to create subnets based on the number of elements in the "private_subnet_names" list, which contains 3 elements.

Your answer is correct
3

Explanation
The code snippet creates subnets based on the number of elements in the "private_subnet_names" list, which has 3 elements. Therefore, 3 subnets will be created in the AWS account, each with a unique name and CIDR block within the VPC range.
Overall explanation
The code above will create three subnets. The value of count is determined by the number of strings included in the private_subnet_names variable.

https://developer.hashicorp.com/terraform/language/functions/length

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 43
Correct
When using HCP Terraform, what is the easiest way to ensure the security and integrity of modules when used by multiple teams across different projects?

apply HCP Terraform organization permissions to all workspaces that allow them to only use certain modules

Explanation
Applying HCP Terraform organization permissions to restrict the modules that can be used in workspaces is a step in the right direction. However, it may not provide the same level of control and security as using the HCP Terraform Private Registry, which offers more granular control over module access and usage.

Your answer is correct
Use the HCP Terraform Private Registry to ensure only approved modules are consumed by your organization

Explanation
Using the HCP Terraform Private Registry allows organizations to control and manage the modules that are available for consumption by their teams. This ensures that only approved and verified modules are used in different projects, enhancing security and integrity across the organization.

Create a list of approved modules and send them to your team to ensure they don't use modules that aren't approved by the team

Explanation
Creating a list of approved modules and sending it to the team does not provide a centralized and automated way to ensure the security and integrity of modules. It relies on manual processes and may not be as effective as using a dedicated registry like the HCP Terraform Private Registry.

use only modules that are published to the Terraform public registry

Explanation
Relying solely on modules from the Terraform public registry may introduce security risks as anyone can publish modules to the public registry. It is important to have a more controlled and vetted approach to module usage, which can be achieved through the HCP Terraform Private Registry.

Overall explanation
To simplify the management of approved modules, you can host all the approved Terraform modules in your organization's Private Registry on HCP Terraform. The private registry allows you to control access to the modules and ensures they are not publicly available. By implementing a private registry, your organization can effectively control and restrict module consumption to only approved modules hosted in the Terraform Private Registry. This enhances security, maintains consistency in infrastructure deployments, and reduces the risk of using unverified or potentially harmful modules in your Terraform configurations.

Wrong Answers:

- Creating a list is probably a bad idea as it doesn't simplify the management of modules that can be used

- modules published to the public registry aren't "approved" modules, and these modules may not contain or implement security measures required by your organization

- HCP Terraform permissions wouldn't work here since they wouldn't be used to control access to certain modules

https://developer.hashicorp.com/terraform/cloud-docs/registry

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 44
Correct
True or False? A terraform plan is a required step before running a terraform apply?

Your answer is correct
False

Explanation
Correct. While it is highly recommended to run a terraform plan to preview changes and ensure accuracy, it is not a mandatory step before running a terraform apply. You can directly apply your Terraform configuration without running a plan, but it is considered a best practice to do so to avoid unexpected outcomes.

True

Explanation
False. While it is highly recommended to run a terraform plan to preview changes and ensure accuracy, it is not a mandatory step before running a terraform apply. You can directly apply your Terraform configuration without running a plan, but it is considered a best practice to do so to avoid unexpected outcomes.

Overall explanation
If no explicit plan file is given on the command line, terraform apply will create a new plan automatically and prompt for approval to apply it

https://developer.hashicorp.com/terraform/intro/core-workflow

Domain
Objective 6 - Use the Core Terraform Workflow
Question 45
Correct
Based on the following code, which code block will create a resource first?



resource "aws_instance" "data_processing" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
 
  depends_on = [aws_s3_bucket.customer_data]
}
 
module "example_sqs_queue" {
  source  = "terraform-aws-modules/sqs/aws"
  version = "2.1.0"
 
  depends_on = [aws_s3_bucket.customer_data, aws_instance.data_processing]
}
 
resource "aws_s3_bucket" "customer_data" {
  acl = "private"
}
 
resource "aws_eip" "ip" {
  vpc      = true
  instance = aws_instance.data_processing.id
}
aws_eip.ip

Explanation
The resource block for creating the AWS Elastic IP (EIP) named "ip" has a dependency on the AWS EC2 instance "data_processing." Therefore, it will be created after the "data_processing" instance is successfully created.
aws_instance.data_processing

Explanation
The resource block for creating the AWS EC2 instance named "data_processing" has a dependency on the AWS S3 bucket "customer_data." Therefore, it will be created after the "customer_data" bucket is successfully created.
Your answer is correct
aws_s3_bucket.customer_data

Explanation
The resource block for creating the AWS S3 bucket named "customer_data" is the first resource block in the code provided. It does not have any dependencies on other resources, so it will be created first in the Terraform execution plan.
example_sqs_queue

Explanation
The module block for creating an SQS queue is not a resource block and does not directly create any resources. It depends on both the AWS S3 bucket "customer_data" and the AWS EC2 instance "data_processing," but it is not a resource creation block itself.
Overall explanation
In this example, the only resource that does not have an implicit or an explicit dependency is the aws_s3_bucket.customer_data. Every other resource defined in this configuration has a dependency on another resource.

https://learn.hashicorp.com/tutorials/terraform/dependencies

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 46
Correct
Which feature of HCP Terraform can be used to enforce fine-grained policies to enforce standardization and cost controls before resources are provisioned with Terraform?

remote runs

Explanation
Remote runs in HCP Terraform allow users to trigger Terraform runs remotely from the cloud platform. While remote runs provide visibility and collaboration features, they do not directly enforce fine-grained policies for standardization and cost controls before resource provisioning.

Your answer is correct
sentinel and OPA

Explanation
Sentinel and OPA are both policy as code tools that can be integrated with HCP Terraform to enforce fine-grained policies. These tools allow organizations to define and enforce policies that govern infrastructure provisioning, ensuring standardization and cost controls are in place before resources are provisioned with Terraform.

private registry

Explanation
Private registry in HCP Terraform is used to store and manage private Terraform modules. While it provides a secure way to share and reuse modules within an organization, it does not directly enforce fine-grained policies for standardization and cost controls before resource provisioning.

workspaces

Explanation
Workspaces in HCP Terraform are used to organize and manage Terraform configurations and state files. While workspaces provide isolation and collaboration features, they do not specifically enforce fine-grained policies for standardization and cost controls before resource provisioning.

Overall explanation
Sentinel is an embedded policy-as-code framework integrated with the HashiCorp Enterprise products. It enables fine-grained, logic-based policy decisions and can be extended to use information from external sources.

HashiCorp also supports Open Policy Agent (OPA) in HCP Terraform.

https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 47
Correct
Scenario: You are deploying a new application and want to deploy it to multiple AWS regions within the same configuration file. Which of the following features will allow you to configure this?

a provider with multiple versions defined

Explanation
Defining a provider with multiple versions does not relate to configuring deployment to multiple AWS regions within the same configuration file. The provider version is used to specify the version of the provider plugin to use, and it does not provide the functionality to deploy the application to multiple regions.
Your answer is correct
multiple provider blocks using an alias

Explanation
Using multiple provider blocks with aliases allows you to define multiple AWS providers in the same configuration file, each with a unique alias. This way, you can specify different regions for each provider, enabling you to deploy your application to multiple AWS regions within the same configuration.
one provider block that defines multiple regions

Explanation
Having one provider block that defines multiple regions is not a valid approach in Terraform. The provider block is used to configure a single provider instance, so defining multiple regions within a single provider block would not allow you to deploy the application to multiple AWS regions within the same configuration.
using the default provider along with a single defined provider

Explanation
Using the default provider along with a single defined provider does not provide a mechanism to deploy the application to multiple AWS regions within the same configuration file. The default provider is used when no provider is explicitly specified, and a single defined provider would limit the deployment to a single region.
Overall explanation
You can optionally define multiple configurations for the same provider, and select which one to use on a per-resource or per-module basis. The primary reason for this is to support multiple regions for a cloud platform; other examples include targeting multiple Docker hosts, multiple Consul hosts, etc.

https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations

Domain
Objective 3 - Understand Terraform Basics
Question 48
Correct
What function does the terraform init -upgrade command perform?

upgrades the backend to the latest supported version

Explanation
This choice is incorrect because the terraform init -upgrade command does not upgrade the backend to the latest supported version. It is solely focused on updating installed plugins and modules to the newest compatible versions based on the configuration’s version constraints.
upgrades all of the referenced modules and providers to the latest version of Terraform

Explanation
This choice is incorrect because the terraform init -upgrade command specifically focuses on updating previously installed plugins and modules to the newest version that aligns with the configuration’s version constraints. It does not upgrade all referenced modules and providers to the latest version of Terraform.
Your answer is correct
update all previously installed plugins and modules to the newest version that complies with the configuration’s version constraints

Explanation
The terraform init -upgrade command updates all previously installed plugins and modules to the newest version that complies with the configuration’s version constraints. This ensures that the environment is up to date with the latest compatible versions of the plugins and modules.
upgrades the Terraform configuration file(s) to use the referenced Terraform version

Explanation
This choice is incorrect because the terraform init -upgrade command does not upgrade the Terraform configuration file(s) to use the referenced Terraform version. Its main purpose is to update installed plugins and modules to the latest versions that comply with the configuration’s version constraints.
Overall explanation
The -upgrade flag will upgrade all previously-selected plugins and modules to the newest version that complies with the configuration's version constraints. This will cause Terraform to ignore any selections recorded in the dependency lock file, and to take the newest available version matching the configured version constraints.

https://developer.hashicorp.com/terraform/cli/commands/init#upgrade-1

Domain
Objective 6 - Use the Core Terraform Workflow
Question 49
Correct
Please fill the blank field(s) in the statement with the right words.

To force the destruction of resources without being prompted for confirmation, you can use the command __

Your answer is correct
terraform destroy -auto-approve
Explanation
The terraform destroy -auto-approve command is used in Terraform to automatically destroy all the resources defined in your configuration without requiring manual confirmation for each deletion. When you run terraform destroy, Terraform typically prompts you to confirm the destruction of each resource before proceeding. Adding the -auto-approve flag skips this confirmation step and destroys all resources immediately. This command is particularly useful when you want to tear down your infrastructure quickly and efficiently, such as in testing or cleanup scenarios. However, it's crucial to use this option with caution, especially in production environments, as it can result in irreversible deletion of resources without human oversight.

Domain
Objective 6 - Use the Core Terraform Workflow
Question 50
Correct
When running the terraform validate command, which issue will be brought to your attention?

there is configuration drift within the managed infrastructure

Explanation
Configuration drift refers to the inconsistency between the desired state defined in Terraform configuration files and the actual state of the managed infrastructure. The terraform validate command focuses on syntax and configuration correctness, so it does not specifically address configuration drift issues.

there is no existing state file for the configuration

Explanation
The absence of an existing state file for the configuration is not something that the terraform validate command checks for. The validation process is more concerned with the correctness of the Terraform configuration syntax and structure, rather than the presence of state files.

Your answer is correct
a variable is being used in a resource block but has not been declared

Explanation
When running the terraform validate command, it checks the syntax and configuration of the Terraform files. If a variable is being used in a resource block but has not been declared, Terraform will flag this as an issue because it can lead to errors during the execution of the infrastructure provisioning process.

parameters inside of a resource block are not lined up with spaces

Explanation
The alignment of parameters inside a resource block with spaces is a formatting issue and not directly related to the validation of the Terraform configuration. While it may affect readability, it is not a critical issue that the terraform validate command would highlight.
Overall explanation
The terraform validate command validates the configuration files in a directory, referring only to the configuration and not accessing any remote services such as remote state, provider APIs, etc.

Validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state. It is thus primarily useful for general verification of reusable modules, including correctness of attribute names and value types.



https://developer.hashicorp.com/terraform/cli/commands/validate

Domain
Objective 6 - Use the Core Terraform Workflow
Question 51
Correct
HCP Terraform provides organizations with many features not available to those running Terraform Community to deploy infrastructure. Select the ADDITIONAL features that organizations can take advantage of by moving to HCP Terraform. (select three)

Your selection is correct
remote runs

Explanation
Remote runs in HCP Terraform allow organizations to execute Terraform plans and applies in a remote environment, providing scalability, collaboration, and enhanced security. This feature is not available in Terraform Community and offers organizations the ability to run infrastructure deployments more efficiently and securely.

providers

Explanation
Providers in Terraform are responsible for interacting with APIs of various cloud providers and services. While HCP Terraform supports providers like Terraform Community, the availability of providers is not an additional feature exclusive to HCP Terraform.

Your selection is correct
private registry

Explanation
Moving to HCP Terraform allows organizations to utilize a private registry, which enables them to securely store and manage their Terraform modules and configurations. This feature is not available in Terraform Community and provides enhanced security and control over infrastructure deployments.

Terraform registry

Explanation
The Terraform registry is a centralized repository for Terraform modules that is available to both HCP Terraform and Terraform Community users. This feature is not exclusive to HCP Terraform and does not provide additional benefits to organizations that choose to move to HCP Terraform.

Your selection is correct
VCS connection

Explanation
By connecting HCP Terraform to a Version Control System (VCS), organizations can automate the process of syncing infrastructure code with their repositories. This integration streamlines collaboration, version control, and change management, offering a more efficient workflow compared to using Terraform Community.

Overall explanation
HCP Terraform offers many features, even in the free version, that organizations can quickly take advantage of. This is the best table that compares the features available in Terraform Community vs. HCP Terraformand Terraform Enterprise.

https://www.datocms-assets.com/2885/1602500234-terraform-full-feature-pricing-tablev2-1.pdf

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 52
Correct
True or False? A main.tf file is always required when using Terraform?

Your answer is correct
False

Explanation
False. While a main.tf file is often used to contain the primary configuration in Terraform projects, it is not always necessary. Terraform allows for modular and flexible file structures, so the configuration can be spread across multiple files or organized in a different way based on the project's needs. As long as the Terraform code can locate and interpret the configuration files, the presence of a main.tf file is not mandatory.
True

Explanation
False. While a main.tf file is a common convention in Terraform projects, it is not a strict requirement. The main.tf file is used to define the primary configuration for Terraform resources, but Terraform allows for flexibility in file naming and organization. Other file names can be used to define resources as long as they are referenced correctly in the Terraform code.

Overall explanation
Although main.tf is the standard name, it's not necessarily required. Terraform will look for any file with a .tf or .tf.json extension when running terraform commands.

https://developer.hashicorp.com/terraform/language#code-organization

Domain
Objective 3 - Understand Terraform Basics
Question 53
Correct
Rigby is implementing Terraform and was given a configuration that includes the snippet below. Where is this particular module stored?



module "consul" {
  source  = "hashicorp/consul/aws"
  version = "0.1.0"
}
locally in the hashicorp/consul/aws directory

Explanation
Storing the module locally in the hashicorp/consul/aws directory would not be the correct location based on the configuration provided. The source attribute specifies a module location in a registry, not a local directory on the user's machine. Modules stored locally would typically be referenced using a local file path, not a registry source.
a private registry supported by your organization

Explanation
While it is possible to store modules in a private registry supported by your organization, the configuration provided in the snippet specifies the source as "hashicorp/consul/aws," indicating that the module is stored in the public Terraform registry. Using a private registry would require a different source URL in the module configuration.
locally but a directory back from the current directory

Explanation
Storing the module locally but in a directory back from the current directory would not align with the source attribute "hashicorp/consul/aws" provided in the module configuration. The source attribute specifies a specific location in a registry where the module is stored, not a relative directory path on the user's machine. Modules stored locally would typically be referenced using a local file path, not a registry source.
Your answer is correct
public Terraform registry

Explanation
The source "hashicorp/consul/aws" in the module configuration indicates that the module is stored in the public Terraform registry. This means that the module can be accessed and downloaded by anyone using Terraform, making it a convenient and widely available option for sharing and reusing modules.
Overall explanation
Modules on the public Terraform Registry can be referenced using a registry source address of the form <NAMESPACE>/<NAME>/<PROVIDER>, with each module's information page on the registry site including the exact address to use.

https://developer.hashicorp.com/terraform/language/modules/sources#terraform-registry

Domain
Objective 5 - Interact with Terraform Modules
Question 54
Incorrect
Which of the following are the benefits of using modules in Terraform? (select three)

Your selection is incorrect
allows modules to be stored anywhere accessible by Terraform

Explanation
While Terraform allows modules to be stored locally or remotely, it is not accurate to say that modules can be stored anywhere accessible by Terraform. Modules need to be stored in locations that Terraform can access and retrieve during the configuration process, whether that is on a local file system, in a version control system, or a module registry.
Your selection is correct
supports modules stored locally or remotely

Explanation
Terraform supports modules stored locally or remotely, giving you the flexibility to organize and manage your modules in a way that best suits your workflow. Whether you prefer to store modules locally within your project directory or remotely in a version control system or module registry, Terraform provides options for both.
Your selection is correct
enables code reuse

Explanation
Using modules in Terraform enables code reuse, allowing you to define and manage infrastructure components as reusable modules that can be easily shared and included in multiple configurations. This helps in reducing duplication and maintaining consistency across different projects.
Correct selection
supports versioning to maintain compatibility

Explanation
Modules in Terraform support versioning, which allows you to maintain compatibility and manage changes to infrastructure configurations over time. By specifying version constraints for modules, you can ensure that your infrastructure remains stable and predictable.
Overall explanation
All of these are examples of the benefits of using Terraform modules except where they can be stored. Modules can only be supported in certain sources found at the following link:

https://developer.hashicorp.com/terraform/language/modules/sources

Domain
Objective 5 - Interact with Terraform Modules
Question 55
Correct
Given the following snippet of code, what will the value of the "Name" tag equal after a terraform apply?



variable "name" {
  description = "The username assigned to the infrastructure"
  default = "data_processing"
}
 
variable "team" {
  description = "The team responsible for the infrastructure"
  default = "IS Team"
}
 
locals {
  name  = (var.name != "" ? var.name : random_id.id.hex)
  owner = var.team
  common_tags = {
    Owner = local.owner
    Name  = local.name
  }
}
a random hex value

Explanation
If the "Name" variable is not provided or is an empty string, the local variable "name" will default to a random hex value generated by the random_id function. Therefore, the "Name" tag will not equal a random hex value in this scenario.

an empty string

Explanation
If the "Name" variable is not provided or is an empty string, the local variable "name" will default to a random hex value generated by the random_id function. Therefore, the "Name" tag will not equal an empty string in this scenario.

IS Team

Explanation
The "Name" tag is derived from the local variable "name," which is determined by the value of the "name" variable provided in the Terraform configuration. Since the default value of the "name" variable is "data_processing," the "Name" tag will equal "data_processing."
Your answer is correct
data_processing

Explanation
The "Name" tag is derived from the local variable "name," which is determined by the value of the "name" variable provided in the Terraform configuration. Since the default value of the "name" variable is "data_processing," the "Name" tag will equal "data_processing." This choice is correct.
Overall explanation
The syntax of a conditional expression first names the condition. In this example, if var.name is not (!=) empty, assign the var.name value; else, assign the new random_id resource as the name value. Since var.name equals data_processing, then the value of Name will equal data_processing.

https://developer.hashicorp.com/terraform/language/expressions/conditionals

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 56
Correct
There are multiple ways to provide sensitive values when using Terraform. However, sensitive information provided in your configuration can be written to the state file, which is not desirable. Which method below will not result in sensitive information being written to the state file?

using a tfvars file

Explanation
Using a tfvars file is a common method to provide sensitive values in Terraform configurations. However, the values provided in a tfvars file can still be written to the state file, making them potentially accessible to unauthorized users.
Your answer is correct
none of the above

Explanation
When using sensitive values in your Terraform configuration, all of the configurations mentioned above will result in the sensitive value being written to the state file.

retrieving the credentials from a data source, such as HashiCorp Vault

Explanation
Retrieving credentials from a secure data source like HashiCorp Vault is a recommended practice for managing sensitive information in Terraform. By using Vault, sensitive values are not directly exposed in the configuration files, however, they are still written to the state file.

using a declared variable

Explanation
Declared variables in Terraform can be used to provide sensitive information without directly exposing it in the configuration files. However, these variables are still stored in the state file by default, which may not be ideal for sensitive data.
Overall explanation
When using sensitive values in your Terraform configuration, all of the configurations mentioned above will result in the sensitive value being written to the state file. Terraform stores the state as plain text, including variable values, even if you have flagged them as sensitive. Terraform needs to store these values in your state so that it can tell if you have changed them since the last time you applied your configuration.

Terraform runs will receive the full text of sensitive variables and might print the value in logs and state files if the configuration pipes the value through to an output or a resource parameter. Additionally, Sentinel mocks downloaded from runs will contain the sensitive values of Terraform (but not environment) variables. Take care when writing your configurations to avoid unnecessary credential disclosure. (Environment variables can end up in log files if TF_LOG is set to TRACE.)

https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables#sensitive-values

https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables

Domain
Objective 7 - Implement and Maintain State
Question 57
Correct
There are an endless number of benefits to using Terraform within your organization. Which of the following are true statements regarding Terraform? (select three)

Your selection is correct
Terraform is cloud-agnostic but requires a specific provider for the cloud platform

Explanation
Terraform is indeed cloud-agnostic, meaning it can work with multiple cloud providers. However, in order to interact with a specific cloud platform, Terraform requires a provider that acts as an interface between Terraform and the cloud API.
Your selection is correct
A single Terraform configuration file can be used to manage multiple providers

Explanation
This statement is true. A single Terraform configuration file can include multiple provider blocks, allowing users to manage resources across different cloud providers within the same configuration. This feature enhances flexibility and simplifies the management of multi-cloud environments.
Your selection is correct
Terraform can simplify both management and orchestration of deploying large-scale, multi-cloud infrastructure

Explanation
This statement is correct. Terraform can streamline the management and orchestration of deploying large-scale, multi-cloud infrastructure. By defining infrastructure as code, Terraform enables automation, consistency, and scalability in deploying and managing infrastructure across various cloud platforms.
Terraform can manage dependencies within a single cloud, but not cross-cloud

Explanation
This statement is incorrect. Terraform is capable of managing dependencies within a single cloud environment as well as across multiple cloud platforms. It allows for the creation of infrastructure that spans multiple clouds, making it a versatile tool for managing complex environments.
Overall explanation
All of the answers are benefits to using Terraform, except Terraform can manage dependencies within a single cloud, but not cross-cloud. Terraform isn't limited to only managing dependencies for a single cloud, it can manage dependencies across multiple cloud providers as well.

https://developer.hashicorp.com/terraform/intro/use-cases#multi-cloud-deployment

Domain
Objective 2 - Understand Terraform's Purpose (vs other IAC)