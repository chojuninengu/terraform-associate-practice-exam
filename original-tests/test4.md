HashiCorp Terraform - Practice Exam #4 - Results
Attempt 1





Question 1
Skipped
True or False? Running a terraform fmt will modify Terraform configuration files in the current working directory and all subdirectories.

True

Explanation
While it is true that running `terraform fmt` will modify Terraform configuration files in the current working directory to adhere to the standard formatting rules, it will not automatically affect files in all subdirectories. The command specifically targets the files in the directory where it is executed, ensuring consistent formatting within that specific location.

Use the -recursive flag to also process files in subdirectories. By default, only the given or current directory is processed.

Correct answer
False

Explanation
Running a `terraform fmt` command will only format the Terraform configuration files in the current working directory, not in all subdirectories. This command is used to standardize the formatting of Terraform code for consistency and readability, but it does not automatically apply to all directories within the project.

Use the -recursive flag to also process files in subdirectories. By default, only the given or current directory is processed.

Overall explanation
The terraform fmt command is used to rewrite Terraform configuration files to a canonical format and style. This command applies a subset of the Terraform language style conventions, along with other minor adjustments for readability.

Other Terraform commands that generate Terraform configuration will produce configuration files that conform to the style imposed by terraform fmt, so using this style in your own files will ensure consistency.

Use the -recursive flag to also process files in subdirectories. By default, only the given or current directory is processed.

  https://developer.hashicorp.com/terraform/cli/commands/fmt

Domain
Objective 3 - Understand Terraform Basics
Question 2
Skipped
When using Terraform, where can you install providers from? (select four)

Correct selection
plugins directory

Explanation
The plugins directory is a local directory where Terraform looks for provider plugins. By placing provider plugins in this directory, Terraform can use them without needing to download them again.
the provider's source code

Explanation
Installing providers directly from the provider's source code is not a recommended practice as it may introduce compatibility issues and potential security risks. It is best to use official sources like the Terraform registry or HashiCorp releases site for installing providers.
Correct selection
Terraform registry

Explanation
The Terraform registry is the official repository for Terraform providers. It is the recommended source for installing providers as it ensures compatibility and reliability with Terraform configurations.
Correct selection
Terraform plugin cache

Explanation
The Terraform plugin cache is a local cache where Terraform stores downloaded provider plugins. It can be used to install providers that have been previously downloaded and cached for faster access.
Correct selection
official HashiCorp releases site

Explanation
The official HashiCorp releases site is a trusted source for downloading official provider releases. Installing providers from this site ensures that you are using stable and tested versions of the providers.
Overall explanation
Providers can be installed using multiple methods, including downloading from a Terraform public or private registry, the official HashiCorp releases page, a local plugins directory, or even from a plugin cache. Terraform cannot, however, install directly from the source code.

Check out this site for more information on provider installation.

How to find a provider

Domain
Objective 3 - Understand Terraform Basics
Question 3
Skipped
Which of the following code snippets will properly configure a Terraform backend?

Correct answer
terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "btk"
 
  workspaces {
    name = "bryan-prod"
  }
 }
}
Explanation
This code snippet properly configures a Terraform backend using the "remote" backend type with the specified hostname and organization. It also defines a workspace named "bryan-prod" within the backend configuration, allowing Terraform to store state files remotely on the HCP Terraform platform.

provider "consul" {
  address = "consul.btk.com"
  scheme  = "https"
  path    = "terraform/"
  }
}
Explanation
This code snippet defines a provider configuration for Consul, not a Terraform backend configuration. It specifies the address, scheme, and path for the Consul provider, which is used for service discovery and configuration management, not for storing Terraform state files.
data "terraform_remote_state" "btk" {
  backend = "etcd"
  config = {
    path      = "terraform/terraform.tfstate"
    endpoints = "http://server1:4001"
  }
}
Explanation
This code snippet defines a data source configuration for fetching remote state using the "terraform_remote_state" data source type with the "etcd" backend. It specifies the path and endpoints for fetching the remote state file from an etcd server. However, this is not a proper configuration for setting up a Terraform backend for storing state files during Terraform operations.
backend "s3" {
  bucket = "krausen-bucket"
  key    = "terraform/"
  region = "us-west-2"
 }
}
Explanation
This code snippet attempts to configure a Terraform backend using the "s3" backend type, specifying a bucket, key, and region. However, it is missing the necessary "terraform" block to encapsulate the backend configuration. This code snippet is incomplete and will not properly configure a Terraform backend.
Overall explanation
Backends are configured with a nested backend block within the top-level terraform block. There are some important limitations on backend configuration:

  * A configuration can only provide one backend block.

  * A backend block cannot refer to named values (like input variables, locals, or data source attributes).



WRONG ANSWERS:

None of the wrong answers are correct, since the state is ONLY configured inside of the terraform block.



https://developer.hashicorp.com/terraform/language/settings/backends/configuration#using-a-backend-block



Domain
Objective 7 - Implement and Maintain State
Question 4
Skipped
You are worried about unauthorized access to the Terraform state file since it might contain sensitive information. What are some ways you can protect the state file? (select two)

Correct selection
use the S3 backend using the encrypt option to ensure state is encrypted

Explanation
Using the S3 backend with the encrypt option in Terraform helps to ensure that the state file is encrypted while stored in Amazon S3. This encryption adds an additional level of security to protect the sensitive information contained in the state file.
replicate the state file to an encrypted storage device

Explanation
Replicating the state file to an encrypted storage device may provide redundancy but does not directly address the issue of protecting the state file from unauthorized access. Encryption of the storage device alone may not be sufficient to secure the sensitive information in the state file.
enable native encryption in Terraform as configured in the terraform block

Explanation
As of today, Terraform doesn't support any type of native encryption capability when writing and managing state.

Correct selection
store in a remote backend that encrypts state at rest

Explanation
Storing the Terraform state file in a remote backend that encrypts the state at rest ensures that the sensitive information within the state file is protected. This adds an extra layer of security to prevent unauthorized access to the state file.
Overall explanation
If you manage any sensitive data with Terraform (like database passwords, user passwords, or private keys), treat the state itself as sensitive data.

Storing state remotely can provide better security. As of Terraform 0.9, Terraform does not persist state to the local disk when remote state is in use, and some backends can be configured to encrypt the state data at rest.

HCP Terraform always encrypts state at rest and protects it with TLS in transit. HCP Terraform also knows the identity of the user requesting state and maintains a history of state changes. This can be used to control access and track activity. Terraform Enterprise also supports detailed audit logging.

The S3 backend supports encryption at rest when the encrypt option is enabled. IAM policies and logging can be used to identify any invalid access. Requests for the state go over a TLS connection.

WRONG ANSWERS:

Replication? replicating the state file to another location won't prevent the original file from being accessed.

Encryption? As of today, Terraform doesn't support any type of native encryption capability when writing and managing state.

https://developer.hashicorp.com/terraform/language/state/sensitive-data

Domain
Objective 7 - Implement and Maintain State
Question 5
Skipped
You have deployed your network architecture in AWS using Terraform. A colleague recently logged in to the AWS console and made a change manually and now you need to be sure your Terraform state reflects the new change.

What command should you run to update your Terraform state?

Correct answer
terraform apply -refresh-only

Explanation
Running terraform apply -refresh-only will update the Terraform state to reflect any changes made outside of Terraform, such as manual changes made in the AWS console. This command will only refresh the state without applying any new changes, ensuring that the state is up to date with the actual infrastructure.

terraform init -upgrade

Explanation
The terraform init -upgrade command is used to initialize a Terraform configuration and upgrade the Terraform modules to the latest versions. While initialization is important, this command does not specifically address updating the Terraform state to reflect manual changes made outside of Terraform.

terraform plan -out=refresh

Explanation
The terraform plan -out=refresh command is used to generate an execution plan for Terraform, but it does not specifically refresh the state to reflect external changes. It is more focused on providing a preview of changes that Terraform will apply, rather than updating the state to match the current infrastructure.

terraform get -update

Explanation
The terraform get -update command is used to download and update modules referenced in the Terraform configuration. While module management is essential, this command does not directly update the Terraform state to reflect changes made outside of Terraform in the AWS console.

Overall explanation
Terraform includes the ability to use the command terraform apply -refresh-only to refresh the local state based on the changes made outside of the Terraform workflow. Terraform will use the platform's API to query information about each known/managed resource and update any changes it finds.



https://developer.hashicorp.com/terraform/cli/commands/plan#planning-modes

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 6
Skipped
Which of the following best describes the primary use of Infrastructure as Code (IaC)?

ensures that the operations team understands how to develop code

Explanation
Ensuring that the operations team understands how to develop code is not the primary use of Infrastructure as Code (IaC). While IaC does involve writing code to define infrastructure configurations, its main goal is to automate the provisioning and management of resources, not to teach coding skills to the operations team.
combining disparate technologies and various tasks into a single workflow

Explanation
Combining disparate technologies and tasks into a single workflow is not the primary use of Infrastructure as Code (IaC). While IaC can help streamline workflows by defining infrastructure configurations as code, its main purpose is to automate the deployment and management of resources.
Correct answer
the ability to programmatically deploy and configure resources

Explanation
Infrastructure as Code (IaC) primarily focuses on programmatically deploying and configuring resources using code. This approach allows for consistent, repeatable, and automated provisioning of infrastructure, reducing manual errors and increasing efficiency in managing resources.
ensuring that applications remain in the desired state configuration

Explanation
While Infrastructure as Code (IaC) does help ensure that applications remain in the desired state configuration by defining infrastructure configurations in code, this is not its primary use. The main purpose of IaC is to automate the deployment and management of infrastructure resources through code, rather than solely focusing on application configuration.
Overall explanation
The primary use case for IaC is to deploy and configure resources in almost any environment in a single, unified way that also abstracts the user from the APIs.

Wrong Answers:

Combining disparate technologies and tasks is really the job of a pipeline, such as GitLab CI/CD, Jenkins, or Azure DevOps. While Terraform CAN be used with multiple technologies within a single configuration file, it's not really the ideal job for Terraform. Terraform isn't an orchestrator like the aforementioned tools would be used for.

The goal of Terraform is NOT to ensure that operations folks know how to develop code, although I'd say that is somewhat of an end result in most organizations. While developing Java or Golang applications, operations teams often leverage Terraform to explore developer-centric workflows, such as using Git or learning to develop code in a repeatable manner.

When deploying Terraform, it's often a one-time thing, and Terraform doesn't actively monitor applications for changes. That's the job of a configuration management tool, such as Ansible, Chef, Puppet, or SaltStack.

https://developer.hashicorp.com/terraform/intro/use-cases

https://developer.hashicorp.com/terraform/intro/vs/chef-puppet

https://developer.hashicorp.com/terraform/intro/vs

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 7
Skipped
What CLI commands will completely tear down and delete all resources that Terraform is currently managing? (select two)

terraform apply -delete

Explanation
The `terraform apply -delete` command is not a valid Terraform command. There is no `-delete` flag that can be used with the `apply` command to delete all resources. This choice is incorrect as it does not represent a valid option for tearing down and deleting resources managed by Terraform.
Correct selection
terraform destroy

Explanation
The `terraform destroy` command is used to completely tear down and delete all resources that Terraform is currently managing. It is the correct choice for this scenario as it explicitly states the action of destroying resources.
terraform plan -destroy

Explanation
The `terraform plan -destroy` command is used to generate an execution plan for destroying resources, but it does not actually delete the resources. It is more focused on providing a preview of what will be destroyed rather than performing the actual deletion.
Correct selection
terraform apply -destroy

Explanation
The `terraform apply -destroy` command is another way to completely tear down and delete all resources that Terraform is currently managing. By using the `-destroy` flag with the `apply` command, you can achieve the same result as the `destroy` command.
Overall explanation
The terraform destroy command is a convenient way to destroy all remote objects managed by a particular Terraform configuration.

While you will typically not want to destroy long-lived objects in a production environment, Terraform is sometimes used to manage ephemeral infrastructure for development purposes, in which case you can use terraform destroy to conveniently clean up all of those temporary objects once you are finished with your work.

This command is just a convenience alias for the following command:

terraform apply -destroy

For that reason, this command accepts most of the options that terraform apply accepts, although it does not accept a plan file argument and forces the selection of the "destroy" planning mode.



WRONG ANSWERS:

While terraform plan -destroy is a valid command, it only creates a speculative destroy plan to see what the effect of destroying would be

terraform apply -delete  is not a valid Terraform command



https://developer.hashicorp.com/terraform/cli/commands/destroy

Domain
Objective 6 - Use the Core Terraform Workflow
Question 8
Skipped
You need to use Terraform to destroy and recreate a single database server that was deployed alongside other resources. You don't want to modify the Terraform code. What command can accomplish this task?

terraform plan -destroy="aws_instance.database"

Explanation
The command terraform plan -destroy="aws_instance.database" is used to generate an execution plan for destroying the specified resource, but it does not actually perform the destruction and recreation of the resource. It is used for planning purposes and does not directly accomplish the task of destroying and recreating the database server.

terraform state rm aws_instance.database

Explanation
The command terraform state rm aws_instance.database is used to remove a resource from the Terraform state, but it does not actually destroy or recreate the resource in the infrastructure. It only removes the resource from the state file, which can lead to inconsistencies if not handled properly.

terraform state show aws_instance.database

Explanation
The command terraform state show aws_instance.database is used to display the current state of the specified resource, but it does not have the functionality to destroy and recreate the resource. It is a read-only command that provides information about the resource's state in the Terraform configuration.

Correct answer
terraform apply -replace="aws_instance.database"

Explanation
The correct command to destroy and recreate a single resource without modifying the Terraform code is terraform apply -replace="aws_instance.database. This command will replace the specified resource with a new one, effectively destroying and recreating it within the infrastructure.

Overall explanation
When working with resources, there may be times when a particular resource didn't deploy correctly, even though Terraform thinks it did. An example of this might be a script that runs in the background on a virtual machine. The virtual machine started successfully, so Terraform believes the deployment was successful, but the script didn't perform the tasks you needed, so you need Terraform to destroy and recreate that resource. In this case, you can use to have Terraform replace this resource on the next .

https://developer.hashicorp.com/terraform/cli/commands/apply

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 9
Skipped
After using Terraform locally to deploy cloud resources, you have decided to move your state file to an Amazon S3 remote backend. You configure Terraform with the proper configuration as shown below. What command should be run in order to complete the state migration while copying the existing state to the new backend?



terraform {
  backend "s3" {
    bucket = "tf-bucket"
    key = "terraform/krausen/"
    region = "us-east-1"
  }
}
terraform apply -refresh-only

Explanation
The command "terraform apply -refresh-only" is used to apply changes to the infrastructure while only refreshing the state without making any actual changes. It does not relate to migrating the state file to a new backend.
terraform plan -replace

Explanation
The command "terraform plan -replace" is used to generate an execution plan that shows what actions Terraform will take to change the infrastructure. It does not relate to migrating the state file to a new backend.
Correct answer
terraform init -migrate-state

Explanation
Running "terraform init -migrate-state" is the correct command to migrate the state file to the new Amazon S3 remote backend. This command initializes the backend configuration and migrates the existing state to the specified backend.
terraform state show

Explanation
The command "terraform state show" is used to show the attributes of a specific resource in the Terraform state. It does not relate to migrating the state file to a new backend.
Overall explanation
Whenever a configuration's backend changes, you must run terraform init again to validate and configure the backend before you can perform any plans, applies, or state operations. Re-running init with an already-initialized backend will update the working directory to use the new backend settings. Either -reconfigure or -migrate-state must be supplied to update the backend configuration.

When changing backends, Terraform will give you the option to migrate your state to the new backend. This lets you adopt backends without losing any existing state.

WRONG ANSWERS:

None of the wrong answers would allow you to migrate state. They are simply other CLI commands that are commonly used with Terraform.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration

https://developer.hashicorp.com/terraform/cli/commands/init#backend-initialization

Domain
Objective 7 - Implement and Maintain State
Question 10
Skipped
If supported by your backend, Terraform will lock your state for all operations that could write state. What purpose does this serve?

Prevents concurrent writes to the state and restricts manual changes via console or CLI.

Explanation
State locking in Terraform primarily serves to prevent concurrent writes to the state, but it doesn't restrict manual changes via console or CLI to maintain data consistency.

Prevents others from committing Terraform code that could override your updates.

Explanation
Preventing others from committing Terraform code that could override your updates is not the primary purpose of state locking. State locking is specifically designed to prevent concurrent writes to the state file and ensure data consistency, rather than controlling code changes.
Ensures the state file cannot be moved after the initial terraform apply

Explanation
Ensuring the state file cannot be moved after the initial terraform apply is not the main purpose of state locking. State locking is primarily used to prevent concurrent writes to the state file and maintain data integrity, rather than controlling the movement of the state file.
Correct answer
This prevents others from acquiring the lock and potentially corrupting your state.

Explanation
Terraform locking the state prevents others from acquiring the lock and potentially corrupting your state by making conflicting changes. This ensures that only one operation can write to the state at a time, maintaining its integrity and consistency.
Overall explanation
State locking prevents others from acquiring the lock and potentially corrupting your state. If Terraform didn't use state locking, multiple people could try to make changes to your infrastructure and corrupt the state file. At that point, Terraform would no longer understand how to manage the resources deployed since the state file wouldn't be consistent.

State locking happens automatically on all operations that could write state. You won't see any message that it is happening. If state locking fails, Terraform will not continue.

WRONG ANSWERS:

Committing code? State locking wouldn't prevent somebody from committing code to your code repository.

Moving the state file!..Even after you run your first terraform apply, you can move the state file by modifying your state block and running a terraform init. State locking does not prevent you from moving state in the future.

Changing Infrastructure Even with state locking, somebody could make manual changes to your infrastructure using the API, CLI, or console if they wanted to. State locking doesn't prevent this.

https://developer.hashicorp.com/terraform/language/state/locking

https://developer.hashicorp.com/terraform/language/state

Domain
Objective 7 - Implement and Maintain State
Question 11
Skipped
True or False? min, max, format, join, trim, and length are examples of different expressions in Terraform.

True

Explanation
These are actually examples of Terraform functions, not expressions. Expressions would be something more in the line of string, number, bool, null, etc.

Correct answer
False

Explanation
False. While min, max, format, join, trim, and length are valid functions in Terraform, they are not examples of different expressions. They are specific functions used for various purposes such as string manipulation, formatting, and working with collections, but they do not represent different types of expressions in Terraform.

Overall explanation
These are actually examples of Terraform functions, not expressions. Expressions would be something more in the line of string, number, bool, null, etc.

For the exam, you should go through these and understand what they do at a high level as you could get questions on using a few of them. Check out the built-in functions for Terraform here - https://developer.hashicorp.com/terraform/language/functions

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 12
Skipped
Which common action does not cause Terraform to refresh its state?

terraform destroy

Explanation
Running terraform destroy instructs Terraform to destroy all the resources defined in the configuration. This action will cause Terraform to refresh its state to reflect the changes made during the destruction process.

Correct answer
terraform state list

Explanation
Running terraform state list does not cause Terraform to refresh its state. This command simply lists the resources in the state file without making any changes to the infrastructure. It is a read-only operation and does not trigger a state refresh.

terraform apply

Explanation
terraform apply is the command used to apply the changes described in the Terraform configuration to the real-world infrastructure. When you run terraform apply, Terraform will refresh its state to reflect the changes made during the apply process.

terraform plan

Explanation
When you run terraform plan, Terraform generates an execution plan showing what actions it will take to change the infrastructure to match the current configuration.

Overall explanation
Running a terraform state list does not cause Terraform to refresh its state. This command simply reads the state file but it will not modify it.

terraform plan will refresh the current state of any existing remote objects to make sure that the Terraform state is up-to-date --> see information here

WRONG ANSWERS:

When running a plan, apply, or destroy, Terraform needs to refresh state to ensure that it has the latest information about the managed resources so it understands what changes should be made when applying the desired state configuration.

https://developer.hashicorp.com/terraform/cli/commands/init

Domain
Objective 7 - Implement and Maintain State
Question 13
Skipped
True or False? Terraform can only manage dependencies between resources if the depends_on argument is explicitly set for the dependent resources.

Correct answer
False

Explanation
False. While the depends_on argument can be used to explicitly set dependencies between resources in Terraform, it is not the only way to manage dependencies. Terraform also automatically detects implicit dependencies based on resource references in the configuration, allowing it to handle resource dependencies without the need for explicit depends_on declarations.

True

Explanation
While the depends_on argument can be used to explicitly set dependencies between resources in Terraform, it is not the only way to manage dependencies. Terraform also automatically detects implicit dependencies based on resource references in the configuration, allowing it to handle resource dependencies without the need for explicit depends_on declarations.

Overall explanation
The most common source of dependencies is an implicit dependency between two resources or modules. That means that Terraform builds a dependency map (aka resource graph) to help determine what resources it can create in parallel, and what resources are dependent on others based on interpolation used within the configuration.

https://developer.hashicorp.com/terraform/internals/graph

https://www.youtube.com/watch?v=Ce3RNfRbdZ0

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 14
Skipped
Which of the following statements are true about using the terraform import command? (select three)

the terraform import command will automatically update the referenced Terraform resource block after the resource has been imported to ensure consistency

Explanation
The terraform import command does not automatically update the referenced Terraform resource block after importing the resource. It is the responsibility of the user to ensure that the Terraform configuration is updated and aligned with the imported resource to maintain consistency and avoid conflicts.
Correct selection
the resource address (example: aws_instance.web) and resource ID (example: i-abdcef12345) must be provided when importing a resource

Explanation
When importing a resource using terraform import, you need to provide both the resource address (e.g., aws_instance.web) and the resource ID (e.g., i-abdcef12345) to uniquely identify the resource being imported. This information is crucial for Terraform to manage the imported resource correctly.

Correct selection
using terraform import will bring the imported resource under Terraform management and add the new resource to the state file

Explanation
By using terraform import, you can bring the imported resource under Terraform management and add the new resource to the state file. This allows Terraform to track and manage the imported resource along with other resources defined in the configuration.

Correct selection
you must update your Terraform configuration for the imported resource before attempting to import the resource

Explanation
When using terraform import, it is essential to update your Terraform configuration to reflect the imported resource's details before attempting to import the resource. This ensures that the configuration is in sync with the actual resource being managed by Terraform.

Overall explanation
terraform import can be used to import resources into Terraform so they can be managed by Terraform moving forward. Any resources that are imported will be added to Terraform state so they can be managed like any other resource. Before you can use the terraform import command, you must develop the resource block for the resource that will be imported. For example, if you are planning to import an Azure virtual machine, you must add an azurerm_virtual_machine block with the proper configurations.

When you run the terraform import command, you will need to reference the resource address - like azure_virtual_machine.web-server - and the resource ID - like the ID of the virtual machine in Azure - as the two required parameters.

terraform import azurerm_virtual_machine.web-server 090556DA-D4FA-764F-A9F1-63614EDA019A



WRONG ANSWER:

IMPORTANT - terraform import will NOT create the resource block for you. You must create the resource block in your Terraform configuration before using the import command



https://developer.hashicorp.com/terraform/cli/commands/import

https://developer.hashicorp.com/terraform/cli/import

https://developer.hashicorp.com/terraform/cli/import/usage

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 15
Skipped
Steve is a developer who is deploying resources to AWS using Terraform. Steve needs to gather detailed information about an EC2 instance that he deployed earlier in the day. What command can Steve use to view this detailed information?

terraform state pull

Explanation
The command "terraform state pull" is used to download and output the state from a remote state file. It does not provide detailed information about a specific resource like an EC2 instance. Steve needs to use the "terraform state show" command to view detailed information about the EC2 instance he deployed.
terraform state list

Explanation
The command "terraform state list" does not provide detailed information about a specific resource like an EC2 instance. Instead, it lists all the resources managed by Terraform in the state file. It does not fulfill Steve's requirement of viewing detailed information about a specific EC2 instance.
Correct answer
terraform state show aws_instance.frontend

Explanation
The command "terraform state show aws_instance.frontend" is the correct choice as it allows Steve to view detailed information about a specific resource, in this case, an EC2 instance named "frontend" that he deployed earlier. This command displays the attributes and current state of the resource in Terraform.
terraform state rm aws_instance.frontend

Explanation
The command "terraform state rm aws_instance.frontend" is used to remove a resource from the Terraform state. It does not help Steve in gathering detailed information about the EC2 instance he deployed earlier. Using this command would result in the deletion of the resource from the state file.
Overall explanation
All resources that are managed by Terraform are referenced in the state file, including detailed information about the resource. Terraform uses the state to map your configuration to the real-world resources that are deployed and managed on the backend platform (AWS, GCP, F5, Infoblox, etc.). You can use the terraform state commands to view and manipulate Terraform state if needed.

terraform state show <resource address> will show you a lot of details on the resource, including things like the ID, IP address, the state of the resource, and lots more.



WRONG ANSWERS:

terraform state list will just show you a list of the resources being managed by Terraform, but it won't show you details on each of those resources

terraform state rm aws_instance.frontend would remove the resource from state. This would not destroy the resource on the public cloud, but it would tell Terraform to stop managing it.

terraform state pull will download the state from its current location, upgrade the local copy to the latest state file version that is compatible with locally-installed Terraform, and output the raw format to stdout

https://developer.hashicorp.com/terraform/cli/commands/state/show#example-show-a-resource

https://developer.hashicorp.com/terraform/cli/commands/state/rm

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 16
Skipped
True or False? terraform validate will validate the syntax of your HCL files.

Correct answer
True

Explanation
True. The `terraform validate` command is used to validate the syntax of your HashiCorp Configuration Language (HCL) files. It checks for any syntax errors or incorrect configurations in your Terraform code before attempting to apply or plan changes.
False

Explanation
The `terraform validate` command is specifically designed to validate the syntax of your HCL files in Terraform. It does not perform other types of validation such as checking for resource dependencies or configuration errors.

Overall explanation
The terraform validate command validates the configuration files in a directory, referring only to the configuration and not accessing any remote services such as remote state, provider APIs, etc.

Validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state. It is thus primarily useful for general verification of reusable modules, including the correctness of attribute names and value types.

https://developer.hashicorp.com/terraform/cli/commands/validate



Domain
Objective 6 - Use the Core Terraform Workflow
Question 17
Skipped
Thomas has recently developed a new Terraform configuration in a new working directory and is very cost-conscious. After running a terraform init, how can Thomas perform a dry run to ensure Terraform will create the right resources without deploying real-world resources?

run terraform show

Explanation
Running 'terraform show' is used to display the current state of the Terraform-managed infrastructure. It does not perform a dry run or show the execution plan of the configuration. It is not the correct command for Thomas to use to preview the changes that Terraform will make.
run terraform apply -refresh-only

Explanation
Running 'terraform apply -refresh-only' is not the correct choice for performing a dry run. The '-refresh-only' flag is used to only update the state file without making any changes to the real-world resources. It does not provide a preview of the changes that Terraform will make.
Correct answer
run terraform plan -out=thomas

Explanation
Running 'terraform plan -out=thomas' allows Thomas to perform a dry run of the Terraform configuration. This command generates an execution plan showing what actions Terraform will take when applying the configuration, without actually deploying any real-world resources. The '-out' flag saves the plan to a file for later use.
run terraform output

Explanation
Running 'terraform output' is used to display the output values of resources in the Terraform configuration. It does not perform a dry run or show the execution plan of the configuration. It is not the appropriate command for Thomas to use to ensure the right resources will be created.
Overall explanation
To perform a dry-run of your Terraform configuration, you should run a terraform plan. The entire purpose of running a terraform plan is to validate the change(s) to your infrastructure before you apply the change. In this case, Thomas could see what resources would be created without actually deploying the resources and costing him money.

WRONG ANSWERS:

Running a terraform apply -refresh-only would not give you the desired output. This command is used to update the state file for existing resources deployed with Terraform. This would be useful if somebody made a change outside of Terraform, and you needed to reflect that change in the state file.

Using terraform output wouldn't work because this command is used to view any outputs defined in your Terraform code. You can also use terraform output <output name> to view more detailed information about a particular output.

Running a terraform show would not give you what you're looking for here. This command displays the output from a state or plan file.

https://developer.hashicorp.com/terraform/cli/commands/plan

https://learn.hashicorp.com/tutorials/terraform/aws-build?in=terraform/aws-get-started

https://developer.hashicorp.com/terraform/intro/core-workflow#plan

Domain
Objective 6 - Use the Core Terraform Workflow
Question 18
Skipped
Your co-worker has decided to migrate Terraform state to a remote backend. They configure Terraform with the backend configuration, including the type, location, and credentials. However, you want to secure this configuration better.

Rather than storing them in plaintext, where should you store the credentials for the remote backend? (select two)

Correct selection
environment variables

Explanation
Storing credentials in environment variables is a common practice for securing sensitive information in Terraform configurations. This approach helps prevent accidental exposure of credentials in version control systems and provides an additional layer of security by keeping them separate from the code.
on the remote system

Explanation
Storing credentials for the remote backend directly on the remote system is not a secure practice. This approach exposes the credentials to potential unauthorized access and increases the risk of security breaches. It is important to avoid storing sensitive information in plaintext on remote systems to maintain the security of the Terraform configuration.
Correct selection
credentials file

Explanation
Using a credentials file to store sensitive information for the remote backend is a recommended practice in Terraform. This file can be encrypted or secured with proper access controls, ensuring that the credentials are not exposed in plaintext within the configuration files.
use a variable

Explanation
Using a variable to store credentials for the remote backend is not a recommended practice in Terraform. Variables are typically used for configuration settings that may change frequently, but storing sensitive information like credentials in variables can lead to potential security risks if not handled properly.
Overall explanation
Some backends allow providing access credentials directly as part of the configuration for use in unusual situations, for pragmatic reasons. However, in normal use, HashiCorp does not recommend including access credentials as part of the backend configuration. Instead, leave those arguments completely unset and provide credentials via the credentials files or environment variables that are conventional for the target system, as described in the documentation for each backend.

WRONG ANSWERS:

Use a variable? Well, you could use a variable but that wouldn't really improve security here, since variable defaults or configurations are also stored in plaintext.

On the remote system? I don't think this is even a viable option. The creds would need to be read by the local system that is executing Terraform.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration

Domain
Objective 7 - Implement and Maintain State
Question 19
Skipped
Which of the following Terraform editions provides the ability to create and use a private registry?

Correct answer
HCP Terraform

Explanation
HCP Terraform is a Terraform platform that offers a centralized space for collaboration, automation, and management of Terraform infrastructure. A key feature of HCP Terraform is the use of a private registry, which enables users to securely store and handle their Terraform modules and configurations. This helps ensure that sensitive infrastructure code and configurations are not exposed publicly.

Terraform Community/CLI

Explanation
Terraform Community/CLI is the free version of Terraform available to users. While it provides many features and functions, it does not include the ability to use a private registry. Private registry features are usually found in more advanced or enterprise-level Terraform products.

Overall explanation
You can use Terraform Private Registry with HCP Terraform (and Enterprise), but not when using Terraform Community/CLI.

WRONG ANSWER:

You do not have the ability to use a private registry with Terraform Community.

https://developer.hashicorp.com/terraform/cloud-docs/registry

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 20
Skipped
You are using Terraform Community and need to spin up a copy of your GCP infrastructure in a second region to test some new features. You create a new workspace. Which of the following is true about this new workspace? (select four)

it uses a different Terraform backend

Explanation
Workspaces in Terraform Community share the same Terraform backend

Correct selection
changes to this workspace won't impact other workspaces

Explanation
Changes made to resources in a specific workspace do not impact resources in other workspaces. This isolation allows for independent testing and development of infrastructure configurations without interfering with existing environments.
Correct selection
you can use a different variables file for this workspace if needed

Explanation
Workspaces in Terraform Community can utilize different variable files, enabling the customization of configurations for specific environments. This flexibility allows for the testing of different configurations and variables without affecting other workspaces.

Correct selection
it has its own state file

Explanation
Each workspace in Terraform Community has its own state file, allowing for isolation and independent management of resources. This ensures that changes made in one workspace do not affect the state of resources in other workspaces.
Correct selection
it uses the same Terraform code in the current directory

Explanation
Each workspace in Terraform Community can use the same Terraform code located in the current directory. This allows for easy replication of configurations across different environments for testing and development purposes.
Overall explanation
Terraform workspaces (Community) allow you to create a new workspace to execute the same Terraform, but with a different state file. This feature allows you to run the same Terraform with different configurations without modifying the Terraform code or impacting any existing workspaces. Terraform starts out with the default workspace, and that's the workspace you are using unless you create and switch to a new workspace.

IMPORTANT - PLEASE READ:

Remember that HCP Terraform and Terraform Enterprise also have Workspaces, but they behave slightly differently. In HCP Terraform and Enterprise, each workspace remains isolated from others, maintaining its own state. Still, often these workspaces point to different code repositories and use completely different Terraform configuration files.



To create a new workspace, you'd run:

$ terraform workspace new btk
 
Created and switched to workspace "btk"! 
 
You're now on a new, empty workspace. Workspaces isolate their state, so if you run "terraform plan" Terraform will not see any existing state for this configuration.


To list all of the existing workspaces, you can run (note the * indicates the workspace you are using):

$ terraform workspace list 
 
default*
btk
bryan-dev
temp-workspace


WRONG ANSWER:

When using workspaces, you're essentially using the same Terraform configuration files. Therefore the backend will remain the same for all of your workspaces. That makes this answer incorrect.

https://developer.hashicorp.com/terraform/language/state/workspaces

https://developer.hashicorp.com/terraform/cli/commands/workspace/list

https://developer.hashicorp.com/terraform/cli/commands/workspace/new

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 21
Skipped
Which of the following is true about working with modules?

every module that is called from a parent module must output values

Explanation
Not every module that is called from a parent module must output values. Modules can be used for various purposes, including creating resources, defining configurations, or organizing code. Output values are optional and depend on the specific requirements of the infrastructure being managed.
a module can only contain a single resource to be deployed or managed

Explanation
A module in Terraform can contain multiple resources to be deployed or managed. There is no restriction on the number of resources a module can include, allowing for flexibility in defining the infrastructure components within a module.
Correct answer
a single module can be called many times in a single configuration file

Explanation
In Terraform, a single module can indeed be called multiple times within a single configuration file. This allows for reusability and modularity in the infrastructure code, making it easier to manage and maintain configurations.
modules must be published to the Terraform registry before they can be used

Explanation
Modules do not necessarily have to be published to the Terraform registry before they can be used. While the Terraform registry is a convenient way to share and discover modules, modules can also be stored locally or in version control systems for use within a Terraform configuration.
Overall explanation
Ok, so there's a lot to unpack for this question here. First, let's talk about the correct answer. Modules can be called one or more times by a parent module. The configuration file/module that calls a module is often called the parent, root,or calling module. The module that is called is the child module, or sometimes just "module". The whole point of using a module is to be able to call it one or many times to create resources without having to rewrite the same code over and over.

WRONG ANSWERS:

Where do modules live? While modules can be published to the Terraform registry, they don't have to be. They can be simply stored locally on your machine or in a private code repository. Publishing them to the public registry, or using a private registry, is completely optional.

Module outputs: While modules are often more valuable when they output values, they don't necessarily have to output values. They can be used to simply manage resources. If you do need values from the module, that's when you'd create outputs. Those outputs can be used just for informational purposes or they can be used as inputs for other modules. For example, you might create a subnet in a public cloud in one module and need to output the subnet ID so you can use it as an input on a second module to deploy application workloads.

Resources in Modules: Modules can be used to deploy and manage one or more resources within the module. For example, you might need to deploy multiple resources needs for a specific application or requirements.

https://developer.hashicorp.com/terraform/language/modules/syntax

https://developer.hashicorp.com/terraform/language/values/outputs

Domain
Objective 5 - Interact with Terraform Modules
Question 22
Skipped
True or False? Official Terraform providers and modules are owned and maintained by HashiCorp.

False

Explanation
This statement is incorrect. Official Terraform providers and modules are owned and maintained by HashiCorp to provide users with trusted and reliable resources for infrastructure management using Terraform.

Correct answer
True

Explanation
True. Official Terraform providers and modules are indeed owned and maintained by HashiCorp. These providers and modules are developed and supported directly by HashiCorp to ensure compatibility, reliability, and security for Terraform users.
Overall explanation
This is true. If a module or provider is marked as official, it is owned and maintained by HashiCorp themselves. In fact, I copied the sentence in the question straight off the official Terraform registry page :)

There are other modules/providers available in the registry that are maintained by third-party partners, or even individuals. This also means that not all of the modules published to the Terraform registry are validated or verified by HashiCorp. Many folks will use the public registry as a starting place to create their own custom modules needed to meet requirements.

https://registry.terraform.io/

https://registry.terraform.io/browse/modules

https://developer.hashicorp.com/terraform/internals/module-registry-protocol

Domain
Objective 5 - Interact with Terraform Modules
Question 23
Skipped
A new variable has been created using the list type as shown below. How would you reference the element terraform in your configuration?



variable "products" {
    type = list(string)
    default = [
        "vault",
        "consul",
        "terraform",
        "boundary",
        "nomad"
    ]
}
Correct answer
var.products[2]

Explanation
To reference the terraform element in the list variable products, you would use the syntax var.products[2]. This is because the index of the terraform element in the list starts at 0, so it is located at index 2.

var.products[3]

Explanation
To reference the terraform element in the list variable products, you would use the syntax var.products[2]. This is because the index of the terraform element in the list starts at 0, so it is located at index 2.

var.list.products[2]

Explanation
The syntax var.list.products[2] is incorrect. When referencing elements in a list variable in Terraform, you should use the syntax var.products[index]. In this case, the correct way to reference the terraform element is var.products[2].

var.default.products["terraform"]

Explanation
The syntax var.default.products["terraform"] is incorrect. When referencing elements in a list variable in Terraform, you should use the syntax var.products[index]. Additionally, since the elements in the list are of type string, you should use the index number to access the element, not the element value itself.

Overall explanation
For a collection type such as a list, the provided values are referenced using an index that starts with [0]. In this case, the strings would be represented as such:

[0] = vault
[1] = consul
[2] = terraform
[3] = boundary
[4] = nomad
When referencing a variable that contains a list, you reference it almost identically to a regular variable, except you just add the index on the end of the variable. So for terraform, it would simply be var.products[2].

WRONG ANSWERS:

var.products[3] = actually equals boundary since an index starts with 0

var.list.products[2] = this isn't a valid way to reference a variable in Terraform

var.default.products["terraform"] = this isn't a valid way to reference a list variable in Terraform. If you remove the default from the answer, it could be a valid option if the variable was of type map, though.



https://developer.hashicorp.com/terraform/language/values/variables

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 24
Skipped
Which of the following is the best description of a dynamic block?

requests that Terraform read from a given data source and export the result under the given local name

Explanation
Requesting Terraform to read from a data source and export the result under a given local name is not the function of a dynamic block. Dynamic blocks are used to generate multiple instances of a block based on a list or map of values, not for reading from data sources.
Correct answer
produces nested configuration blocks instead of a complex typed value

Explanation
A dynamic block in Terraform produces nested configuration blocks instead of a complex typed value. This allows for more flexible and dynamic configurations by generating multiple instances of a block based on a list or map of values.
declares a resource of a given type with a given local name

Explanation
Declaring a resource of a given type with a given local name is not the purpose of a dynamic block in Terraform. Dynamic blocks are used to generate multiple instances of a block based on a list or map of values, rather than declaring a single resource with a specific name.
exports a value exported by a module or configuration

Explanation
Exporting a value exported by a module or configuration is not the role of a dynamic block in Terraform. Dynamic blocks are used to generate multiple instances of a block based on a list or map of values, rather than exporting values from modules or configurations.
Overall explanation
A dynamic block acts much like a for expression, but produces nested blocks instead of a complex typed value. It iterates over a given complex value and generates a nested block for each element of that complex value. You can dynamically construct repeatable nested blocks using a special dynamic block type, which is supported inside resource, data, provider, and provisioner blocks.



WRONG ANSWERS:

* declares a resource of a given type with a given local name = this is the definition of a resource block

* requests that Terraform read from a given data source and export the result under the given local name = this is a data block

* exports a value exported by a module or configuration = this is an output block



https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 25
Skipped
You are working on updating your infrastructure managed by Terraform. Before lunch, you update your configuration file and run a terraform plan to validate the changes. While you are away, a colleague manually updates a tag on a managed resource directly in the console (UI).

What will happen when you run a terraform apply?

Terraform will update the manually changed resource back to the original configuration. It will then apply the new changes defined in the updated configuration file.

Explanation
Terraform does not revert manually changed resources back to their original configuration unless explicitly instructed to do so. In this case, Terraform will recognize the manual change and update the resource based on the desired state defined in the updated configuration file. The manual change will not be reverted back to its original state.
Correct answer
Before applying the new configuration, Terraform will refresh the state and recognize the manual change. It will update the resource based on the desired state as configured in the Terraform configuration. The manual change will no longer exist.

Explanation
Terraform will refresh the state before applying any changes to ensure that it has the latest information about the infrastructure. When it detects the manual change made by the colleague, it will update the resource to match the desired state defined in the Terraform configuration. This means that the manually updated tag will be overwritten by the configuration specified in the Terraform file.
Terraform will recognize the manual change and return an error since the Terraform state no longer matches the real-world infrastructure.

Explanation
Terraform is designed to manage infrastructure as code and maintain the desired state specified in the configuration files. If there are manual changes made outside of Terraform, it may cause a state drift. However, Terraform will not return an error in this scenario. Instead, it will recognize the manual change and update the resource accordingly.
Terraform will destroy the manually-changed resource and recreate it to ensure the infrastructure matches the desired state.

Explanation
Terraform follows the principle of infrastructure as code, where the desired state is defined in configuration files. If a resource is manually changed outside of Terraform, Terraform will aim to bring the infrastructure back to the desired state specified in the configuration. However, it will not destroy and recreate the manually-changed resource unless explicitly instructed to do so in the configuration.
Overall explanation
There's a lot to this question, but the reasoning is pretty basic. Since a resource was manually changed, it means that Terraform state is no longer accurate. However, before a terraform plan or terraform apply is executed, Terraform refreshes its state to ensure it knows the status of all its managed resources. During this process, Terraform would recognize the change, update state, and compare that to the new configuration file. Assuming the change defined in the configuration is identical to the manual change, Terraform would simply apply any changes (if any), update the state file, and complete the terraform apply.

WRONG ANSWERS:

Change the resource back? Terraform relies on state for everything and any changes are a result of comparing the current state of the resource to the desired configuration (the .tf files). Therefore, Terraform won't revert the resource back to the original configuration because the configuration has been updated for the new change, and that's the desired state.

Return an Error? Since Terraform performs a state refresh before executing a plan or apply, Terraform will recognize any configuration changes and then apply any changes. This will not result in an error being returned.

Will Terraform destroy my resources? It won't destroy the resource since the resource is still defined in the configuration file. The only way that TF would destroy your resource is if you actually remove that resource from your configuration file(s).

https://developer.hashicorp.com/terraform/intro/core-workflow

https://learn.hashicorp.com/tutorials/terraform/resource-drift?in=terraform/state

https://learn.hashicorp.com/tutorials/terraform/resource-lifecycle?in=terraform/state

Domain
Objective 6 - Use the Core Terraform Workflow
Question 26
Skipped
True or False? In both Terraform Community and HCP Terraform, workspaces provide similar functionality of using a separate state file for each workspace.

False

Explanation
Workspaces in both Terraform Community and HCP Terraform do provide similar functionality of using separate state files for each workspace. This segregation is crucial for managing different environments and configurations effectively.

Correct answer
True

Explanation
True. In both Terraform Community and HCP Terraform, workspaces allow users to have separate state files for each workspace. This segregation of state files enables users to manage different environments, configurations, and resources independently without interfering with each other.

Overall explanation
This is true. When you create a new workspace using Terraform Community/CLI using the terraform workspace new command, you will be working with a separate state file when working with that workspace. You can easily change between workspaces and their respective state file using the terraform workspace select command.

The same is true in HCP Terraform. When you create a new workspace, you'll be working with a dedicated state file for that particular workspace. It doesn't share a state file with any other workspace.

https://developer.hashicorp.com/terraform/cli/workspaces#the-purpose-of-workspaces

https://developer.hashicorp.com/terraform/cli/workspaces#interactions-with-terraform-cloud-workspaces

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 27
Skipped
You are using Terraform to manage resources in Azure. Due to unique requirements, you need to specify the version of the Azure provider so it remains the same until newer versions are thoroughly tested.

What block would properly configure Terraform to ensure it always installs the same Azure provider version?



required_providers {
  azurerm = {
    source = "hashicorp/azurerm"
    version = "2.90.0"
  }
}
Explanation
This block is incorrect for configuring Terraform to ensure a specific Azure provider version. The `required_providers` block should be within the `terraform` configuration, not as a standalone block. This block lacks the necessary structure to properly lock the Azure provider version.
data "azurerm" {
  source = "hashicorp/azurerm"
  version = 2.90.0
}
Explanation
This block is incorrect for configuring Terraform to ensure a specific Azure provider version. The `data` block is used for querying data sources, not for specifying provider versions. It does not provide the necessary configuration to lock the Azure provider version.
Correct answer
terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "2.90.0"
    }
  }
}
Explanation
This block is the correct way to configure Terraform to ensure it always installs the same Azure provider version. By using the `required_providers` block within the `terraform` configuration, you can specify the provider (`azurerm` in this case), its source, and the exact version (`2.90.0`) that should be used.
provider "azurerm" {
  source = "hashicorp/azurerm"
  version = "2.90.0"
}
Explanation
This block is incorrect for configuring Terraform to ensure a specific Azure provider version. While it specifies the provider (`azurerm`), its source, and version, it is missing the `required_providers` block within the `terraform` configuration, which is essential for locking the provider version.
Overall explanation
When you need to constrain the provider to a specific version, you would do this under the terraform configuration block. Within that block, you would use the required_providers block to set certain configurations, including the version of each provider you want to lockdown.

Note that even though you would add the provider constraint under the terraform block, you may still indeed have a separate provider block to set certain configurations, like credentials, regions, or other settings specific to the provider. Just keep in mind that each distinct block is used for different settings.

Example:

Set the version of the Azure provider:



terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "2.90.0"
    }
  }
}
Configure settings for the Azure provider:



provider "azurerm" {
  features {}
}

https://developer.hashicorp.com/terraform/language/providers/requirements

https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints

Domain
Objective 3 - Understand Terraform Basics
Question 28
Skipped
Which of the following is not true about the terraform.tfstate file used by Terraform?

the file includes information about each resource managed by Terraform

Explanation
The terraform.tfstate file includes information about each resource managed by Terraform, such as resource IDs, attributes, dependencies, and metadata. This information is used by Terraform to track the state of the infrastructure and make decisions about resource creation, updates, and deletions.
Correct answer
it always matches the infrastructure deployed with Terraform

Explanation
The terraform.tfstate file does not always match the infrastructure deployed with Terraform. It reflects the state of the infrastructure at the time of the last Terraform operation, so changes made outside of Terraform will not be reflected in the state file.
the file can potentially contain sensitive values

Explanation
The terraform.tfstate file can potentially contain sensitive values such as passwords, access keys, and other credentials. It is important to secure the state file to prevent unauthorized access to sensitive information.
it is recommended not to modify the file directly

Explanation
It is recommended not to modify the terraform.tfstate file directly because it is managed by Terraform itself. Making manual changes to the state file can lead to inconsistencies and potential issues with the infrastructure management.
Overall explanation
The one thing that cannot be guaranteed is that the terraform.tfstate file ALWAYS matches the deployed infrastructure since changes can easily be made outside of Terraform. For example, if you deploy a bunch of resources in GCP and nobody makes any changes, then yes, the terraform.tfstate file does match the current state of those resources. However, if an engineer makes a change in the GCP console or CLI, then the terraform.tfstate would NOT match the infrastructure deployed until you ran a terraform apply -refresh-only command.

This is why the only false statement in this question is: it always matches the infrastructure deployed with Terraform.



WRONG ANSWERS:

The following statements are TRUE about Terraform, which makes them the incorrect choice for this question.

Terraform uses the terraform.tfstate file to store everything it needs to manage the resources it is managing. This includes a ton of information about each resource it provisions and manages. Because of this, HashiCorp recommends that you DO NOT modify the file directly outside of using the Terraform workflow (terraform init, plan, apply, destroy) and terraform state CLI commands.

Many times, you'll need to provide sensitive values to deploy and manage resources, or Terraform may retrieve sensitive values at your request (like data blocks). In that case, these values may get saved to the state file, therefore you should limit who can access the state file to protect this sensitive data.



https://developer.hashicorp.com/terraform/language/state

https://developer.hashicorp.com/terraform/language/state/sensitive-data

https://developer.hashicorp.com/terraform/language/state/purpose

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 29
Skipped
You are using modules to deploy various resources in your environment and have used a module named web to create the public_dns record. You want to provide a "friendly name" for the DNS of a new web server so you can simply click the CLI output and access the new website.

Which of the following code snippets would satisfy these requirements?

Correct answer
Output the value in the web module and add the following code to the parent module:



output "website" {
  description = "Outputs the URL of the provisioned website" 
  value       = "https://${module.web.public_dns}:8080/index.html"
}
Explanation
This choice is correct because it outputs the URL of the provisioned website with the friendly name specified in the web module. By using the value from the web module's public_dns output, it creates a clickable link to access the new website directly.
Add the following code to the web module:



output "website" {
  description = "Outputs the URL of the provisioned website" 
  value       = "https://${module.web.public_dns}:8080/index.html"
}
Explanation
This choice is incorrect because it adds the output in the web module itself, which does not allow the parent module to access and use the output value for further processing or display.
Add the following code to the web module:



output "website" {
  description = "Outputs the URL of the provisioned website" 
  value       = module.web.public_dns
}
Explanation
This choice is incorrect because it outputs the public_dns value directly from the web module without specifying the full URL or making it clickable. It does not provide the user-friendly approach of directly accessing the new website by clicking the CLI output.
Add the following code to the parent module:



output "website" {
  description = "Outputs the URL of the provisioned website" 
  value       = aws_instance.web.public_dns
}
Explanation
This choice is incorrect because it references the public_dns directly from the aws_instance.web resource, which is not the correct approach when using modules. The correct way is to output the value from the module and then access it in the parent module.
Overall explanation
When working with outputs, you need to determine where the value will be coming from and work your way backward from there. For example, if the resource was created inside of a module, then the module will require an output block to export that value. That said, output blocks that are created in a module aren't displayed on the Terraform CLI. Therefore, you need to create an output block in the parent/calling module to output the value while referencing the output in the module. Because of this, the correct answer requires you to create an output in the parent module and reference the output value from the module.



https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 30
Skipped
What are some of the benefits that Terraform providers offer to users? (select three)

Correct selection
enables the deployment of resources to multiple platforms, such as public cloud, private cloud, or other SaaS, PaaS, or IaaS services

Explanation
Terraform providers enable the deployment of resources to multiple platforms, including public cloud providers like AWS, Azure, and Google Cloud, private cloud environments, and various SaaS, PaaS, or IaaS services. This flexibility allows users to manage infrastructure across different environments using a single tool.
enforces security compliance across multiple cloud providers

Explanation
The choice is incorrect as Terraform providers do not enforce security compliance across multiple cloud providers. While Terraform allows users to define security configurations and policies within their infrastructure code, it is not a built-in feature of providers to enforce security compliance across different cloud platforms.
Correct selection
enables a plugin architecture that allows Terraform to be extensible without having to update Terraform core

Explanation
Terraform providers support a plugin architecture that allows users to extend Terraform's functionality without modifying the core codebase. This extensibility enables users to integrate with new services, customize existing providers, and contribute to the Terraform ecosystem without waiting for official updates.
Correct selection
abstracts the target platform's API from the end-user

Explanation
Terraform providers abstract the target platform's API from the end-user, allowing users to interact with resources using a consistent and simplified interface. This abstraction helps users focus on defining infrastructure as code without needing to understand the intricacies of each platform's API.
Overall explanation
Terraform enables its users to interact with a platform's API without requiring the end-user to understand individual APIs for the targeted platform. This allows a user to easily provision and manage resources across many different platforms without having to understand the API for each individual backend. This benefit makes users more efficient and reduces the administrative burden for understanding and troubleshooting each one.

Terraform can support any platform that has an API, including public, private, and other offerings on the market today. If it has an API, a provider can be written to allow Terraform to manage it. Don't believe me? Check out the Spotify or Domino's Pizza Terraform provider :)

Lastly, by using providers, HashiCorp can enable the extensibility of Terraform without having to modify Terraform core for each supported platform. Each provider, or plugin, can be downloaded as needed to extend the functionality of Terraform itself.

Wrong Answer:

Now, while Terraform can help you standardize security configurations and settings across multiple clouds, it won't enforce it outside of your terraform apply. In other words, it doesn't act like a configuration management tool that can constantly watch for changes to change the configuration back to the desired state.

https://developer.hashicorp.com/terraform/intro/use-cases

https://developer.hashicorp.com/terraform/intro

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 31
Skipped
True or False? If you have properly locked down access to your state file, it is safe to provide sensitive values inside of your Terraform configuration.

True

Explanation
Providing sensitive values inside of your Terraform configuration, even if the state file is properly secured, is not safe practice. Sensitive values should never be hardcoded in configuration files, as they can be exposed in various ways, such as through version control systems or logs, compromising the security of your infrastructure.
Correct answer
False

Explanation
It is false to assume that it is safe to include sensitive values in your Terraform configuration, even if the state file is secure. Best practices dictate that sensitive information should be stored in secure locations such as environment variables, secret management tools, or external vaults, and referenced in your configuration files to maintain security and compliance standards.
Overall explanation
Ok, so this was sort of a trick question because locking down your state file really has nothing to do with storing sensitive values inside of your Terraform configuration. Remember that most, if not all, of your configuration, will likely be committed to a code repository. Anybody, or any machine, with access to that code repo would now be able to read the sensitive values that were hardcoded in your Terraform configuration.

Best practice here is to provide your sensitive values OUTSIDE of Terraform, like storing and retrieving them from a secrets management platform like Vault, or using environment variables.



https://learn.hashicorp.com/tutorials/terraform/sensitive-variables?in=terraform/configuration-language

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 32
Skipped
True or False? The terraform graph command can be used to generate a visual representation of a configuration or execution plan.

Correct answer
True

Explanation
True. The terraform graph command is used to generate a visual representation of either the current configuration or the execution plan. It helps users understand the dependencies between resources and how they are connected in the infrastructure.
False

Explanation
The terraform graph command is specifically designed to generate a visual representation of the configuration or execution plan. It is a useful tool for visualizing the infrastructure layout and resource dependencies, making it easier to troubleshoot and optimize Terraform configurations.

Overall explanation
The terraform graph command is used to generate a visual representation of either a configuration or execution plan. The output is in the DOT format, which can be used by GraphViz to generate charts.

https://developer.hashicorp.com/terraform/cli/commands/graph

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 33
Skipped
True or False? In most cases, you can move Terraform state between supported backends at any time, even after running your first terraform apply.

Correct answer
True

Explanation
True. In most cases, Terraform allows you to move the state between supported backends at any time, even after running the initial terraform apply. This flexibility is useful for changing the backend configuration to meet evolving requirements or to accommodate different infrastructure setups without losing the state data.
False

Explanation
In most cases, Terraform allows you to move the state between supported backends at any time, even after running the initial terraform apply. This flexibility is useful for changing the backend configuration to meet evolving requirements or to accommodate different infrastructure setups without losing the state data.

Overall explanation
You can change your backend configuration at any time. You can change both the configuration itself as well as the type of backend (for example from "consul" to "s3"). However, there may be limitations when migrating certain backends to others. For example, you may not be able to move from HCP Terraform to a local backend as it might not be supported.

Terraform will automatically detect any changes in your configuration and request a reinitialization. As part of the reinitialization process, Terraform will ask if you'd like to migrate your existing state to the new configuration. This allows you to easily switch from one backend to another.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration#changing-configuration

Domain
Objective 7 - Implement and Maintain State
Question 34
Skipped
You have recently cloned a repo containing Terraform that you want to test in your environment. Once you customize the configuration, you run a terraform apply but it immediately fails. Why would the apply fail?

you can't run Terraform code that was cloned from another users code repository

Explanation
There is no inherent restriction in running Terraform code that was cloned from another user's code repository. The failure of terraform apply in this case is more likely related to the initialization of the directory and plugin download process.
Terraform needs to obtain authentication credentials using the terraform login command

Explanation
Terraform does not require authentication credentials using the terraform login command to apply configurations. The failure of terraform apply is typically not related to authentication credentials but rather to the initialization and plugin download process.
you need to run a terraform plan before you can apply the configuration

Explanation
Running a terraform plan is not a prerequisite for applying the configuration. While it is recommended to run a plan to preview the changes before applying them, the failure of terraform apply in this scenario is likely due to the need to initialize the directory and download plugins.
Correct answer
Terraform needs to initialize the directory and download the required plugins

Explanation
Terraform apply fails because when you clone a repo containing Terraform code, you need to initialize the directory first. This process downloads the required plugins and sets up the environment for Terraform to execute the configuration successfully.
Overall explanation
When you're learning the basics of Terraform, one of the critical requirements of executing any Terraform code is running terraform init to download all of the required plugins needed for the resources that will be deployed/managed. If you don't run a terraform init when running code in a new directory, a terraform apply/plan will immediately fail since it needs to download the plugins required to run.



WRONG ANSWERS:

While the traditional Terraform workflow is init --> plan --> apply, running a terraform plan is not required to execute a terraform plan. It's recommended to make changes to real environments, but when I'm testing or building labs for my other courses, I rarely run a terraform plan and go straight to terraform apply.

As for running Terraform cloned from another repo, you can absolutely do this. Many people use existing code as a starting point for their own environment. They will clone the repo, customize it however they need and then run it. This is a perfectly acceptable practice and it prevents you from constantly reinventing the wheel.

Regarding authentication, you only need to use the terraform login command when you are working with HCP Terraform. You don't need authentication credentials outside of that use case unless you are deploying resources to some platform, like AWS, Azure, VMware, etc. There are plenty of use cases for Terraform where you don't need authentication credentials at all, like using the TLS or random provider.



https://developer.hashicorp.com/terraform/intro/core-workflow

https://developer.hashicorp.com/terraform/cli/commands/init

https://developer.hashicorp.com/terraform/cli/init#initialization

Domain
Objective 3 - Understand Terraform Basics
Question 35
Skipped
True or False? When developing Terraform code, you must include a provider block for each unique provider so Terraform knows which ones you want to download and use.

Correct answer
False

Explanation
False. While it is a best practice to include a provider block for each unique provider in Terraform code, it is not a strict requirement. Terraform can automatically detect and use providers based on the resource configurations defined in the code. However, explicitly defining provider blocks enhances code readability and helps avoid potential conflicts or ambiguities in resource management.
True

Explanation
False. While it is a best practice to include a provider block for each unique provider in Terraform code, it is not a strict requirement. Terraform can automatically detect and use providers based on the resource configurations defined in the code. However, explicitly defining provider blocks enhances code readability and helps avoid potential conflicts or ambiguities in resource management.

Overall explanation
Unlike many other objects in the Terraform language, a provider block may be omitted if its contents would otherwise be empty. Terraform assumes an empty default configuration for any provider that is not explicitly configured. In other words, if you don't have any specific configurations for your provider, you may indeed leave it out of your configuration.

To prove this out, I created a .tf file that includes a resource from the RANDOM provider as well as the AWS provider and omitted any provider blocks in my configuration. After running a terraform init, you can clearly see that Terraform understands what providers the resources are from and downloads the correct provider plugins. Thus proving that you do NOT need a Provider block to use Terraform.




https://developer.hashicorp.com/terraform/language/providers/configuration

Domain
Objective 3 - Understand Terraform Basics
Question 36
Skipped
You are using HCP Terraform to manage a new data analytics environment for your organization. You have decided to use Sentinel to enforce standardization and security controls. At what step are the Sentinel policies enforced during a run?

after the apply phase has completed any required changes

Explanation
Enforcing Sentinel policies after the apply phase has completed any required changes would be too late in the process. The purpose of Sentinel is to prevent non-compliant changes from being applied, so enforcing policies after changes have already been made would defeat the purpose of using Sentinel.
before the plan phase has started to compare the changes to the existing infrastructure

Explanation
Sentinel policies are not enforced before the plan phase starts to compare changes to the existing infrastructure. The comparison and evaluation of changes happen during the plan phase, and Sentinel policies are applied after this phase to ensure compliance with the defined policies.
Correct answer
after the plan, run tasks, cost estimation phases but before the apply phase

Explanation
Sentinel policies are enforced after the plan, run tasks, and cost estimation phases but before the apply phase in HCP Terraform. This allows for the policies to be evaluated against the planned changes before they are actually applied to the infrastructure, ensuring standardization and security controls are met.

before the OPA policies have been evaluated

Explanation
Sentinel is a separate policy as code framework from OPA (Open Policy Agent). Sentinel policies are enforced independently of OPA policies in HCP Terraform. Therefore, Sentinel policies are not enforced before the OPA policies have been evaluated.

Overall explanation
Sentinel policy evaluations occur after Terraform completes the plan and after both run tasks and cost estimation. This order lets you write Sentinel policies to restrict costs based on the data in the cost estimates.

OPA policy evaluations are slightly different and occur after Terraform completes the plan and after any run tasks. Unlike Sentinel policies, HCP Terraform evaluates OPA policies immediately before cost estimation.

https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/policy-results

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 37
Skipped
You work for a retail organization that has multiple peak seasons throughout the year. During those peak seasons, your applications need to be scaled up quickly to handle the increased demand. However, the deployment of application servers is manual and new servers are only deployed when problems are reported by users.

How can you reduce the effort required to deploy new resources, increase the speed of deployments, and reduce or eliminate the negative experiences of your customers?

Develop a manual runbook that the developers and operations teams can follow during the peak seasons to reconfigure the compute resources used to serve the primary application.

Explanation
Developing a manual runbook for reconfiguring compute resources during peak seasons is not an efficient solution. Manual intervention is time-consuming, error-prone, and may not be able to keep up with the rapid changes in demand. Automating the deployment process through code and monitoring is a more effective way to handle scaling during peak seasons.
Correct answer
Develop code that provisions new application servers programmatically. Use monitoring software to trigger a pipeline that deploys additional servers during periods of increased demand.

Explanation
Developing code that provisions new application servers programmatically allows for automated scaling of resources based on monitoring data. By using monitoring software to trigger a deployment pipeline during peak seasons, new servers can be deployed quickly without manual intervention, reducing effort and improving deployment speed.
Rather than wait on user reports, implement a ticketing system that alerts the operations team of poor performance or customer errors. Automatically assign the tickets to the on-call team to quickly resolve.

Explanation
Implementing a ticketing system to wait for user reports of poor performance or errors is reactive and may lead to delays in addressing issues. Relying on user reports for scaling resources during peak seasons can result in negative customer experiences. Automating the deployment process based on monitoring data is a proactive approach to quickly respond to increased demand and ensure a seamless customer experience.
Deploy new IaC code that automatically shuts down existing application servers and scales the resources down during periods of high demand.

Explanation
Deploying new IaC code to automatically shut down existing application servers and scale resources down during high demand periods may not be the best approach. Scaling down resources during peak seasons can lead to performance issues and negatively impact customer experience. It is important to scale up resources to meet increased demand instead of scaling down.
Overall explanation
In this case, automation is key. And considering that this is a course/question focused on Infrastructure as Code, developing IaC to trigger automatically based on workloads is the best answer here.

Wrong Answers:

While the others sound like a great idea or an improvement in the troubleshooting process, they wouldn't resolve the errors with their customers.

https://developer.hashicorp.com/terraform/intro

https://developer.hashicorp.com/terraform/intro/use-cases

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 38
Skipped
Which of the following are true regarding Terraform variables? (select two)

Correct selection
variables marked as sensitive are still stored in the state file, even though the values are obfuscated from the CLI output

Explanation
Variables marked as sensitive are indeed stored in the state file, even though their values are obfuscated from the CLI output. This is important to remember when handling sensitive information in Terraform configurations.
the variable name can be found in the state file to allow for easy searching

Explanation
The variable name itself is not stored in the state file. The state file contains information about the resources managed by Terraform, not the variables used in the configuration. Therefore, the variable name cannot be found in the state file for easy searching.
the description of a variable will be written to state to help describe the contents of the state file

Explanation
The description of a variable is not written to the state file. The state file primarily contains information about the resources created and managed by Terraform, not the variables used in the configuration. Descriptions are helpful for documentation and understanding the purpose of variables, but they are not stored in the state file.
Correct selection
the default value will be found in the state file if no other value was set for the variable

Explanation
If no other value is set for a variable, the default value will be used and stored in the state file. This ensures that the configuration remains consistent and predictable even if specific values are not provided.
Overall explanation
When it comes to working with variables, the value that is used in the Terraform configuration will be stored in the state file, regardless of whether the sensitive argument was set to true. However, the value will not be shown in the CLI output if the value was to be exported by an output block.

WRONG ANSWERS:

Beyond the value, you won't find the variable name or description in the state file because they are simply used on the development side of Terraform, and not the backend operational aspect of how Terraform works.

https://developer.hashicorp.com/terraform/language/values/variables

https://learn.hashicorp.com/tutorials/terraform/outputs

https://learn.hashicorp.com/tutorials/terraform/variables

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 39
Skipped
You have declared a variable named db_connection_string inside of the app module. However, when you run a terraform apply, you get the following error message:



Error: Reference to undeclared input variable
 
on main.tf line 35:
4: db_path = var.db_connection_string
 
An input variable with the name "db_connection_string" has not been declared. This variable can be declared with a variable "db_connection_string" {} block.
Why would you receive such an error?

input variables are not referenced using the var prefix

Explanation
In Terraform, input variables are referenced using the var prefix. The error message indicates that the variable db_connection_string was referenced without the var prefix, leading to the "Reference to undeclared input variable" error. To resolve this, the variable should be referenced as var.db_connection_string to access its value correctly.

an output block was not created in the module, and therefore the variable cannot be referenced

Explanation
The error message is related to the undeclared input variable db_connection_string, not the absence of an output block. While creating an output block could potentially allow the variable to be accessed outside of the module, the primary issue here is that the input variable itself has not been declared.

Correct answer
since the variable was declared within the module, it cannot be referenced outside of the module

Explanation
Variables declared within a module are scoped to that module and cannot be directly referenced outside of it. In this case, the variable db_connection_string was declared inside the app module, so it cannot be accessed outside of the module without proper scoping or passing it as an output.

the variable should be referenced as var.module.app.db_connection_string

Explanation
Variables declared within a module are scoped to that module and cannot be directly referenced outside of it. In this case, the variable db_connection_string was declared inside the app module, so it cannot be accessed outside of the module without proper scoping or passing it as an output.

Overall explanation
When using modules, it's common practice to declare variables outside of the module and pass the value(s) to the child module when it is called by the parent/root module. However, it's perfectly acceptable to declare a variable inside of a module if you need. Any variables declared inside a module are only directly referenceable within that module. You can't directly reference that variable outside of the module. You can, however, create an output in the module to export any values that might be needed outside of the module.

WRONG ANSWERS:

Output block? While an output block would allow you to get information from within the module, creating an output block still wouldn't allow you to reference the variable directly using the var.<name> nomenclature.

Referencing a Variable. You can't reference a variable declared inside of a module; therefore, the name shown in this incorrect answer wouldn't work. Ideally, you would create an output inside the module and reference the output rather than the variable inside the module itself.

Using Interpolation in Terraform. This incorrect answer is just plain wrong. In fact, you would reference an accessible variable using the var prefix. Interpolation is the ability to reference data or values within your Terraform code using specific formats. For variables, that format is var.<name>.

https://developer.hashicorp.com/terraform/language/values/variables

https://developer.hashicorp.com/terraform/language/modules/syntax

Domain
Objective 5 - Interact with Terraform Modules
Question 40
Skipped
Your team is using Terraform, and multiple team members need to be able to manage the infrastructure. You need to support sharing state across team members. What backends can you use to meet these requirements? (select three)

Correct selection
consul backend

Explanation
The consul backend in Terraform allows for storing the state in Consul, a distributed key-value store. This backend is suitable for sharing state across team members as Consul can be accessed by multiple users simultaneously.

local backend

Explanation
The local backend in Terraform stores the state file on the local disk of the machine running Terraform. While this backend is not suitable for sharing state across team members, it can be useful for individual development or testing environments.

Correct selection
kubernetes backend

Explanation
The kubernetes backend in Terraform allows for storing the state in a Kubernetes cluster. This backend is suitable for sharing state across team members who are working within a Kubernetes environment, providing a centralized location for managing infrastructure state.

Correct selection
s3 backend (with DynamoDB)

Explanation
The s3 backend in Terraform allows for storing the state in an S3 bucket, which can be shared across team members. By using DynamoDB as a locking mechanism, you can ensure that only one team member can modify the state at a time, preventing conflicts.

Overall explanation
When working with Terraform in a team environment, sharing state effectively is crucial for collaboration and avoiding conflicts. The local backend stores state in a file on your local machine, making it unsuitable for sharing across team members. Instead, use a remote backend like Terraform Cloud, HCP Terraform, or Amazon S3 with DynamoDB for state locking. These backends centralize the state, ensuring all team members have access to the latest state, enabling collaboration, and preventing simultaneous changes that could corrupt the state.

WRONG ANSWER:

The local backend does support locking via system APIs, but you can't use it to share the state with your team.



https://developer.hashicorp.com/terraform/language/backend#default-backend

Domain
Objective 7 - Implement and Maintain State
Question 41
Skipped
After running terraform apply, you notice some odd behavior and need to investigate. Which of the following environment variables will configure Terraform to write more detailed logs to assist with troubleshooting?

Correct answer
TF_LOG=TRACE

Explanation
Setting the TF_LOG environment variable to TRACE will configure Terraform to write detailed logs, including debug information, to assist with troubleshooting. This level of logging is helpful when investigating odd behavior after running terraform apply.
TF_LOG_CONFIG=WARN

Explanation
The TF_LOG_CONFIG environment variable is not a valid option for configuring Terraform logging. Setting TF_LOG_CONFIG=WARN will not provide the detailed logs needed to investigate odd behavior after running terraform apply.
LOG_CONFIG=INFO

Explanation
The LOG_CONFIG environment variable is not recognized by Terraform for configuring logging. Setting LOG_CONFIG=INFO will not enable the detailed logging necessary for troubleshooting odd behavior in Terraform.
TF_LOGS=ERROR

Explanation
The TF_LOGS environment variable does not exist in Terraform configuration. Therefore, setting TF_LOGS=ERROR will not configure Terraform to write more detailed logs for troubleshooting purposes.
Overall explanation
Terraform has detailed logs which can be enabled by setting the TF_LOG environment variable to any value. This will cause detailed logs to appear on stderr.

You can set TF_LOG to one of the log levels TRACE, DEBUG, INFO, WARN or ERROR to change the verbosity of the logs.



WRONG ANSWERS:

None of the incorrect answers are valid environment variables that you can use to configure Terraform logs.



https://developer.hashicorp.com/terraform/internals/debugging

https://developer.hashicorp.com/terraform/cli/config/environment-variables#tf_log

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 42
Skipped
Your organization currently provisions all infrastructure on Microsoft Azure using ARM templates, but is considering expanding to AWS for new workloads.

Which of the following best explains a challenge the team will face with this new organizational strategy?

Correct answer
the team will need to rewrite all of its infrastructure as code to work with AWS, since ARM templates are specific to Azure

Explanation
This choice is correct because ARM templates are specific to Microsoft Azure and cannot be directly used to provision infrastructure on AWS. The team will need to rewrite all infrastructure code to work with AWS's infrastructure provisioning tools, like Terraform.

the team won’t be able to define reusable infrastructure modules for different cloud environments

Explanation
This choice is incorrect as defining reusable infrastructure modules for different cloud environments is a common practice in infrastructure as code, regardless of the cloud provider. This challenge is not specific to transitioning from Azure to AWS.
the team won’t be able to use version control systems to manage infrastructure changes

Explanation
This choice is incorrect as version control systems like Git can be used to manage infrastructure changes regardless of the cloud provider. This challenge is not specific to transitioning from Azure to AWS.
the team won’t be able to apply role-based access controls across multiple environments

Explanation
This choice is incorrect as role-based access controls can be applied across multiple environments using various identity and access management (IAM) solutions provided by cloud providers like AWS. This challenge is not directly related to transitioning from Azure to AWS.
Overall explanation
While each of the leading public cloud providers has its own Infrastructure as Code offering (ARM, AWS CloudFormation, etc.), adopting the native solution can be limiting as the organization matures its cloud capabilities and offerings. If the organization only learns the native solution, what happens if they decide to use a different public cloud provider or acquire a company that uses a different one? While the developer mindset would still apply, the skillset used to deploy ARM doesn't necessarily apply one-to-one for writing AWS CloudFormation, for example. Each solution handles development and deployment differently, and the engineers have to learn a second solution.

By using Terraform, engineers and developers can focus on learning a single solution that applies to all the public cloud providers and other SaaS, PaaS, and IaaS offerings available on the market.

https://developer.hashicorp.com/terraform/intro/use-cases#multi-cloud-deployment

https://developer.hashicorp.com/terraform/intro/vs/cloudformation

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 43
Skipped
By default, Terraform Community stores its state file in what type of backend?

shared backend

Explanation
Shared backend is not a specific type of backend for storing Terraform state files. While a remote backend can be considered a shared backend in the sense that it allows multiple users to access and modify the state file, shared backend is not a standard term used in the context of Terraform state file storage.
remote backend

Explanation
Remote backend is not the default backend for Terraform Community. While it is recommended for team collaboration and production environments due to its ability to store the state file in a centralized location accessible to multiple users, it is not the default choice for storing the state file.
encrypted backend

Explanation
Encrypted backend is not a specific type of backend for storing Terraform state files. Encryption can be applied to the state file regardless of the backend type being used, but it is not a separate backend option in itself.
Correct answer
local backend

Explanation
By default, Terraform Community stores its state file in a local backend, which means the state file is stored on the local disk of the machine where Terraform is being run. This backend is simple and easy to set up but may not be suitable for team collaboration or production environments where a remote backend is recommended.
Overall explanation
The default local backend will be used if you don't specify a backend at all in your Terraform configuration. The local backend stores state on the local filesystem, locks that state using system APIs, and performs operations locally.

Note that you can define the backend to be local by using the backend "local" {} block.

WRONG ANSWERS:

While remote is a valid backend type, shared or encrypted is not a valid backend type. Local is the default and a remote backend must be explicitly configured in your configuration file.

https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-configuration

Domain
Objective 7 - Implement and Maintain State
Question 44
Skipped
True or False? When using HCP Terraform, creating a pull request on the branch of the workspace's linked repository will automatically trigger a speculative plan on a workspace.

Correct answer
True

Explanation
True. When using HCP Terraform, creating a pull request on the branch of the workspace's linked repository will indeed automatically trigger a speculative plan on the workspace. This allows for changes to be previewed and evaluated before merging them into the main branch, ensuring smooth and controlled deployment processes.
False

Explanation
False. Creating a pull request on the branch of the workspace's linked repository in HCP Terraform does not automatically trigger a speculative plan on the workspace. This means that changes made through pull requests need to be manually applied and verified in the workspace before deployment.
Overall explanation
In the UI and VCS workflow, every workspace is associated with a specific branch of a VCS repo of Terraform configurations. HCP Terraform registers webhooks with your VCS provider when you create a workspace, then automatically queues a Terraform run whenever new commits are merged to that branch of workspace's linked repository.

HCP Terraform also performs a speculative plan when a pull request is opened against that branch. HCP Terraform posts a link to the plan in the pull request and re-runs the plan if the pull request is updated.

The Terraform code for a normal run always comes from version control and is always associated with a specific commit.

https://developer.hashicorp.com/terraform/cloud-docs/run/ui

https://developer.hashicorp.com/terraform/cloud-docs/vcs

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 45
Skipped
Which of the following tasks does terraform init perform? (select three)

Correct selection
downloads required providers used in your configuration file

Explanation
Terraform init downloads the required providers used in your configuration file. Providers are plugins that Terraform uses to interact with APIs and services, so downloading them ensures that Terraform can communicate with the necessary resources during the deployment process.
Correct selection
caches the source code locally for referenced modules

Explanation
Terraform init caches the source code locally for referenced modules, allowing Terraform to work offline and reducing the need to repeatedly download module dependencies. This helps in speeding up the Terraform execution process.
updates your state file based on any new changes

Explanation
Terraform init does not update your state file based on any new changes. The state file is managed separately and is updated when you apply changes to your infrastructure using Terraform.
creates a sample Terraform configuration file in the working directory

Explanation
Terraform init does not create a sample Terraform configuration file in the working directory. Instead, it focuses on setting up the environment for Terraform usage and downloading necessary dependencies.
Correct selection
prepares the working directory for use with Terraform

Explanation
Terraform init prepares the working directory for use with Terraform by initializing the Terraform environment, setting up the necessary directories and files, and ensuring that all prerequisites are met for running Terraform commands. This step is essential before applying any changes to your infrastructure.
Overall explanation
The terraform init command performs several different initialization steps in order to prepare the current working directory for use with Terraform. Some of these steps include downloading any referenced providers (like AWS, Azure, GCP, etc.), caching the source code for modules in the local directory so they can be used, and other steps to prepare the working directory to be used with Terraform.

Note that there are quite a few options that you can use with terraform init to perform operations that you might need when using Terraform. These operations might include state migrations or upgrading providers.

WRONG ANSWERS:

terraform init does NOT create a sample Terraform configuration file. Actually, I don't know if there are any native Terraform commands that will create a .tf file for you.

You can run terraform init over and over again and it will not change/modify your state file.

https://developer.hashicorp.com/terraform/cli/commands/init

https://learn.hashicorp.com/collections/terraform/aws-get-started

Domain
Objective 6 - Use the Core Terraform Workflow
Question 46
Skipped
You need to ensure your Terraform is easily readable and follows the HCL canonical format and style. In the current directory, you have a main.tf that calls modules stored in a modules directory. What command could you run to easily rewrite your Terraform to follow the HCL style in both the current directory and all sub-directories?

terraform fmt -check

Explanation
The "terraform fmt -check" command is used to check if the Terraform configuration files are formatted according to the HCL style without making any changes. It is useful for verifying the current formatting but does not rewrite the files to adhere to the canonical format and style.
Correct answer
terraform fmt -recursive

Explanation
The "terraform fmt -recursive" command will recursively format all Terraform configuration files in the current directory and all sub-directories to follow the HCL canonical format and style. This ensures consistency and readability across all files within the project.
terraform fmt -list=false

Explanation
The "terraform fmt -list=false" command is used to format the Terraform configuration files in the current directory but does not apply the formatting recursively to sub-directories. This option is not suitable for ensuring consistency in formatting across all files within the project.
terraform fmt -diff

Explanation
The "terraform fmt -diff" command is used to show the differences between the current Terraform configuration and the formatted version without actually making any changes. It does not apply the formatting changes to the files, so it is not suitable for rewriting the Terraform files to follow the HCL style.
Overall explanation
By default, fmt scans the current directory for configuration files and formats them according to the HCP canonical style and format. However, if you need it to also scan and format files in sub-directories, you can use the -recursive flag to instruct terraform fmt to also process files in subdirectories.

WRONG ANSWERS:

None of the wrong answers would instruct terraform fmt to scan subdirectories. All of these are, however, other valid flags that you can use with terraform fmt.

https://developer.hashicorp.com/terraform/cli/commands/fmt#usage

https://developer.hashicorp.com/terraform/language/syntax/style

https://developer.hashicorp.com/terraform/cli/commands/fmt#command-fmt

Domain
Objective 4 - Use the Terraform Outside Core Workflow
Question 47
Skipped
What Terraform command can be used to evaluate and experiment with expressions in your configuration?

Correct answer
terraform console

Explanation
The 'terraform console' command allows you to interactively evaluate and experiment with expressions in your Terraform configuration. It provides a way to test and validate the output of expressions before applying them to your infrastructure.
terraform env

Explanation
The 'terraform env' command is used to manage Terraform execution environments and is not specifically designed for evaluating or experimenting with expressions in your configuration. It focuses on managing environment variables and settings for Terraform.
terraform get

Explanation
The 'terraform get' command is used to download and install modules needed for your configuration. It is not intended for evaluating or experimenting with expressions in your configuration, but rather for managing dependencies and module installations.
terraform plan

Explanation
The 'terraform plan' command is used to generate an execution plan showing what actions Terraform will take to change the infrastructure. While it provides insight into the changes that will be made, it does not directly evaluate or experiment with expressions in your configuration.
Overall explanation
The terraform console command provides an interactive command-line console for evaluating and experimenting with expressions. This is useful for testing interpolations before using them in configurations, and for interacting with any values currently saved in state.

Example from the Terraform documentation:

echo 'split(",", "foo,bar,baz")' | terraform console



https://developer.hashicorp.com/terraform/cli/commands/console

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 48
Skipped
Which of the following are true about Terraform providers? (select four)

Correct selection
some providers are maintained by HashiCorp

Explanation
Some Terraform providers are indeed maintained by HashiCorp, the company behind Terraform. These official providers are typically well-supported and regularly updated to align with Terraform's latest features and changes.
Correct selection
providers can be written and maintained by an outside organization, such as AWS, F5, or Microsoft

Explanation
Providers in Terraform can be written and maintained by external organizations, such as AWS, F5, or Microsoft. This allows for a diverse set of providers to be available, catering to different cloud providers, services, and tools.
all providers are automatically included when downloading Terraform

Explanation
This statement is incorrect as not all providers are automatically included when downloading Terraform. Providers need to be explicitly defined in the Terraform configuration to be used in infrastructure management.
Correct selection
some providers are community-supported

Explanation
Community-supported providers are also a common occurrence in the Terraform ecosystem. These providers are developed and maintained by the community, offering additional options for integrating with various services and platforms.
Correct selection
they allow anybody to write a provider and publish it to the registry

Explanation
This statement is correct as Terraform allows anyone to write a provider and publish it to the Terraform registry. This flexibility enables a wide range of providers to be available for different services and platforms.
Overall explanation
The cool part about providers is that anybody can write or contribute to them. This includes individuals would just want to contribute to open-source projects, manufacturers/platform vendors that want to ensure providers are up to date, or HashiCorp themselves. If you find that a provider doesn't provide the capabilities you need, you can develop the new capabilities and submit a PR for review. If approved, those changes would now become part of the Terraform provider that millions of people could use. Pretty cool!





Wrong Answer:

Providers are treated as plugins for Terraform, and during a terraform init process, the required providers are downloaded to the local machine that is executing Terraform so they can be used. Therefore, not all providers are included with Terraform when you download the latest version from terraform.io.

https://learn.hashicorp.com/collections/terraform/aws-get-started

https://developer.hashicorp.com/terraform/plugin/how-terraform-works

Domain
Objective 2 - Understand Terraform's purpose (vs other IaC)
Question 49
Skipped
When initializing Terraform, you notice that Terraform's CLI output states it is downloading the modules referenced in your code. Where does Terraform download and cache these modules?

in the /tmp directory on the machine executing Terraform

Explanation
Terraform does not cache the downloaded modules in the /tmp directory on the machine executing Terraform. The .terraform/modules subdirectory within the current working directory is the designated location for caching modules.

Correct answer
in the .terraform/modules subdirectory in the current working directory

Explanation
Terraform caches the modules it downloads in the .terraform/modules subdirectory within the current working directory. This allows Terraform to reuse the downloaded modules for future runs, reducing the need to download them again and improving performance.

in the /downloads directory for the user running the terraform init

Explanation
Terraform does not cache the downloaded modules in the /downloads directory for the user running the terraform init command. The .terraform/modules subdirectory within the current working directory is where Terraform stores the cached modules.

in a /modules directory in the current working directory

Explanation
Terraform does not cache the downloaded modules in a /modules directory in the current working directory. The correct location for caching modules is the .terraform/modules subdirectory within the current working directory.

Overall explanation
The .terraform directory contains the modules and plugins used to provision your infrastructure. These files are specific to a specific instance of Terraform when provisioning infrastructure, not the configuration of the infrastructure defined in .tf files.





https://learn.hashicorp.com/tutorials/terraform/module-create?in=terraform/modules

https://developer.hashicorp.com/terraform/language/modules/syntax

Domain
Objective 5 - Interact with Terraform Modules
Question 50
Skipped
When using collection types for variables in Terraform, which of the following two statements are true? (select two)

lists are defined inside of curly braces, like this: {"value1", "value2", "value3"}

Explanation
Lists in Terraform are not defined inside curly braces. Using curly braces for defining lists will result in a syntax error in Terraform configurations. The correct format for defining lists is inside square brackets, as shown in the correct choice A.
Correct selection
maps are defined inside of curly braces, like this: { name = "John" age = 52 }

Explanation
Maps in Terraform are defined inside curly braces, with key-value pairs separated by an equal sign. This format allows for creating a collection of key-value pairs, where each key is unique and can be used to access the corresponding value in Terraform configurations.
maps are defined inside of square brackets, like this: [ name = "John" age = 52 ]

Explanation
Maps in Terraform are not defined inside square brackets. Using square brackets for defining maps will result in a syntax error in Terraform configurations. The correct format for defining maps is inside curly braces, as shown in the correct choice B.
Correct selection
lists are defined inside of square brackets, like this: ["value1", "value2", "value3"]

Explanation
Lists in Terraform are defined inside square brackets, with each element separated by a comma. This format allows for creating a list of values that can be easily accessed and iterated over in Terraform configurations.
Overall explanation
Lists/tuples are represented by a pair of square brackets containing a comma-separated sequence of values, like ["a", 15, true].

Maps/objects are represented by a pair of curly braces containing a series of <KEY> = <VALUE> pairs.



https://developer.hashicorp.com/terraform/language/expressions/types#lists-tuples

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 51
Skipped
Which of the following are advantages of using infrastructure as code (IaC) for your day-to-day operations? (select three)

Correct selection
provides the ability to version control the infrastructure and application architecture

Explanation
Version controlling infrastructure and application architecture is a crucial benefit of IaC. It allows teams to track changes, collaborate effectively, and roll back to previous states if needed. This ensures consistency, reliability, and reproducibility in managing infrastructure configurations and deployments.
Correct selection
enables self-service for developers and operators alike

Explanation
IaC enables self-service for developers and operators by providing them with the ability to define and deploy infrastructure resources using code. This empowers teams to quickly spin up environments, test new features, and iterate on infrastructure changes without relying on manual processes or waiting for centralized IT teams.
ensures the security of applications provisioned on managed infrastructure

Explanation
Ensuring the security of applications provisioned on managed infrastructure is not a direct advantage of using infrastructure as code (IaC). While IaC can help enforce security best practices through automated configuration management, the primary focus is on automation, scalability, and consistency in managing infrastructure resources.
Correct selection
API-driven workflows

Explanation
API-driven workflows are a key advantage of using infrastructure as code (IaC) as they allow for automation and programmability of infrastructure provisioning and management. This enables seamless integration with other tools and systems, improving efficiency and reducing manual errors in day-to-day operations.
Overall explanation
Using Infrastructure as Code (IaC) like Terraform, CloudFormation, etc. enables organizations to completely change the way they deploy applications and the underlying infrastructure to support them. Rather than click around in a console, IaC enables API-driven workflows for deploying resources in public clouds, private infrastructure, and other SaaS and PaaS services.

When developing IaC, organizations can now use a Version Control System, such as GitHub, GitLab, Bitbucket, etc. to store and version its code. When changes are needed, the existing code can be cloned, modified, and merged back into the main repository by way of a pull or merge request. These requests can follow a traditional workflow where approvals are needed before they are deployed to a production environment.

By moving your configurations to code and publishing them to a shared repository, or registry, different operators in the organization can now easily consume this code without even knowing how to write Terraform. They can simply provide the required values by way of variables and entire environments can be provisioned to support their application(s).

WRONG ANSWER:

While Terraform can indeed help with the security of your applications, it won't guarantee it. You can combine Terraform with other tools, such as LaunchDarkly, SonarQube, DeepScan, and more using a CI/CD pipeline, but again, it doesn't guarantee the security of your application. Security is the responsibility of everybody involved in the deployment of an application, starting with the developer(s) themselves all the way to the people responsible for the day-to-day operations of the application.

https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code

https://developer.hashicorp.com/terraform/intro

https://developer.hashicorp.com/terraform/intro/use-cases

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 52
Skipped
You have a module named prod_subnet that outputs the subnet_id of the subnet created by the module. How would you reference the subnet ID when using it for an input of another module?

subnet = module.outputs.prod_subnet.subnet_id

Explanation
The syntax module.outputs.prod_subnet.subnet_id is incorrect because it incorrectly references the outputs of the module named prod_subnet. The correct way to access the output variable is by using module.prod_subnet.subnet_id without the additional outputs keyword.

Correct answer
subnet = module.prod_subnet.subnet_id

Explanation
The correct way to reference the subnet ID output from the module named prod_subnet is by using the syntax module.prod_subnet.subnet_id. This syntax directly accesses the output variable subnet_id from the prod_subnet module for use as an input in another module.

subnet = prod_subnet.outputs.subnet_id

Explanation
The syntax prod_subnet.outputs.subnet_id is incorrect because it does not follow the correct format for referencing outputs from a module. The correct way to reference the subnet ID output is by using module.prod_subnet.subnet_id.

subnet = prod_subnet.subnet_id

Explanation
The syntax prod_subnet.subnet_id is incorrect because it does not specify the module from which the subnet ID output should be accessed. The correct way to reference the subnet ID output from the module named prod_subnet is by using module.prod_subnet.subnet_id.

Overall explanation
Using interpolation, you can reference the output of an exported value by using the following syntax: module.<module name>.<output name>

Don't forget that before you can reference data/values from a module, the module has to have an output declared that references the desired value(s).

WRONG ANSWERS:

None of the wrong answers are valid interpolation syntax to reference an output that originates from a module.

https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values

https://learn.hashicorp.com/collections/terraform/modules

Domain
Objective 5 - Interact with Terraform Modules
Question 53
Skipped
Given the code snippet below, how would you refer to the value of ip  of an environment when using a for_each argument in a resource block?



variable "env" {
  type = map(any)
  default = {
    prod = {
      ip = "10.0.150.0/24"
      az = "us-east-1a"
    }
    dev  = {
      ip = "10.0.250.0/24"
      az = "us-east-1e"
    }
  }
}
Correct answer
each.value.ip

Explanation
When using a for_each argument in a resource block, you can refer to the value of the ip attribute of an environment by using each.value.ip. This syntax allows you to access the value of the ip attribute for each element in the map variable defined in the env variable.

each.dev.ip

Explanation
each.dev.ip is incorrect because it attempts to directly access the ip attribute of the dev environment within the for_each loop. When using for_each with a map variable, you should use each.value.ip to access the ip attribute of each element in the map.

var.env["dev.ip"]

Explanation
var.env["dev.ip"] is incorrect because it tries to access the ip attribute of the dev environment using a string key within the env variable. However, the correct syntax to access the value of the ip attribute for each element in the map variable is each.value.ip.

var.env.dev.ip

Explanation
var.env.dev.ip is incorrect because it directly references the ip attribute of the dev environment within the env variable. When using for_each with a map variable, you need to iterate over each element in the map, not directly access a specific attribute of a single element.

Overall explanation
Sort of testing two different things here - a complex map variable plus the for_each argument.

A for_each argument will iterate over a map or set of strings and create a similar instance/resource for each item in the map or set. In our case, the map is the input variable and the "each" would be the higher-level map, so prod and dev.  Underneath each value, there are two arguments, both az and ip that you can choose from.

The input variable that is shown in this example is essentially a map of maps.



WRONG ANSWERS:

None of the wrong answers are valid ways to reference the values provided by the input variable.



https://developer.hashicorp.com/terraform/language/meta-arguments/for_each

https://learn.hashicorp.com/tutorials/terraform/for-each

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 54
Skipped
True or False? You can continue using your local Terraform CLI to execute terraform plan and terraform apply operations while using HCP Terraform as the backend.

False

Explanation
You can continue using your local Terraform CLI to execute terraform plan and terraform apply operations while using HCP Terraform as the backend. HCP Terraform serves as a centralized location for storing state files and managing infrastructure, but it does not replace the functionality of the local Terraform CLI.

Correct answer
True

Explanation
True. You can continue using your local Terraform CLI to execute terraform plan and terraform apply operations while using HCP Terraform as the backend. HCP Terraform acts as a remote backend where state files are stored and managed, but it does not restrict you from using your local Terraform CLI for executing Terraform commands.

Overall explanation
If you have migrated or configured your state to use HCP Terraform using the backend configuration, you can continue using your local Terraform CLI to execute operations while using HCP Terraform. You can even specify the workspace in which you want to execute the operation.

To configure the backend to use HCP Terraform, you can add something like this:

terraform {
  cloud {
    organization = "bryan"
 
    workspaces {
      tags = ["app"]
    }
  }
}


https://developer.hashicorp.com/terraform/language/settings/terraform-cloud

Domain
Objective 9 - Understand HCP Terraform Capabilities
Question 55
Skipped
Your organization uses IaC to provision and manage resources in a public cloud platform. A new employee has developed changes to existing code and wants to push it into production.

What best practice should the new employee follow to submit the new code?

Submit the change to the change control board and wait for the approval. Commit the code directly to the main repository.

Explanation
Submitting changes to a change control board for approval is a good practice, but committing code directly to the main repository without validation or review can lead to potential issues in production. It is important to have a review process in place to ensure the quality and correctness of the code changes.
Make the change directly using the cloud provider's API to ensure the changes are valid. Store the code locally and email a copy of the code to a teammate so they have an extra copy.

Explanation
Making changes directly using the cloud provider's API and storing code locally without proper version control and collaboration can lead to issues such as code loss, lack of traceability, and difficulty in managing changes. It is essential to follow version control practices and involve team members in the review and approval process for code changes.
Correct answer
Submit a merge/pull request of the proposed changes. Have a team member validate the changes and approve the request.

Explanation
Submitting a merge/pull request is a common best practice in version control systems like Git. This allows for code review by team members, validation of changes, and approval before merging the code into the main branch. It ensures that changes are thoroughly reviewed and tested before being deployed to production.
Execute the code locally on the developer's machine to make the changes directly to the infrastructure.

Explanation
Executing code locally and making changes directly to the infrastructure without proper version control and review processes can introduce risks and inconsistencies in the infrastructure. It is important to follow a structured approach like submitting a merge/pull request for code changes to ensure proper validation and review.
Overall explanation
Following best practices for code, the new changes should be submitted as a pull/merge request in the existing code repository. A teammate, or the security team, should validate the changes and approve the request, ultimately merging the new changes into the existing codebase

Wrong Answers:

None of these follow best practices for managing code. Please don't do any of these things :)

https://learn.hashicorp.com/collections/terraform/aws-get-started

https://developer.hashicorp.com/terraform/intro/vs.

Domain
Objective 1 - Understand Infrastructure as Code Concepts
Question 56
Skipped
You have an existing resource in your public cloud that was deployed manually, but you want the ability to reference different attributes of that resource throughout your configuration without hardcoding any values. How can you accomplish this?

Run a terraform state list to find the resource_id of the resource you need the attributes from. Reference that resource_id throughout your configuration to get the exported attributes as needed.

Explanation
Running terraform state list to find the resource_id of the existing resource and referencing it throughout your configuration is not the recommended way to access attributes of an existing resource. This method does not provide a dynamic way to reference different attributes and can lead to manual errors in managing the configuration.
Correct answer
Add a data block to your configuration to query the existing resource. Use the available exported attributes of that resource type as needed throughout your configuration to get the values you need.

Explanation
Adding a data block to your configuration allows you to query the existing resource and access its exported attributes. By using these attributes throughout your configuration, you can dynamically reference different values without hardcoding them, providing flexibility and maintainability.
Create a new resource block that matches the exact configuration of the existing resource. Run a terraform apply to import the resource. Use the available exported attributes of that resource throughout your configuration as needed.

Explanation
Creating a new resource block that matches the existing resource's configuration and importing it using terraform apply is not the correct approach for referencing attributes of an existing resource. This method is used for importing existing infrastructure into Terraform, not for dynamically accessing attributes within the configuration.
Create a new variable block within your configuration. Add the resource_id as the default value and reference the variable using var.<name> throughout your configuration as needed.

Explanation
Creating a new variable block with the resource_id as the default value and referencing it using var. throughout the configuration is not the ideal way to access attributes of an existing resource. Variables are typically used for parameterizing configurations, not for dynamically querying and using attributes of existing resources.
Overall explanation
Anytime you need to reference a resource that is NOT part of your Terraform configuration, you need to query that resource using a data block - assuming a data source is available for that resource_type. Once you add the data block to your configuration, you will be able to export attributes from that data block using interpolation like any other resource in Terraform. For example, if you had an AWS S3 bucket, you could get information using a data block that looked like this:

data "aws_s3_bucket" "data_bucket" {
  bucket = "my-data-lookup-bucket-btk"
}
Once you add the data block, you can refer to exported attributes like this: data.aws_s3_bucket.data_bucket.arn



WRONG ANSWERS:
None of the wrong answers would allow you to import or query information so that Terraform can use it through interpolation.



https://learn.hashicorp.com/tutorials/terraform/data-sources

https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_bucket

Domain
Objective 8 - Read, Generate, and Modify Configuration
Question 57
Skipped
You need to use multiple resources from different providers in Terraform to accomplish a task. Which of the following can be used to configure the settings for each of the providers?

terraform {
  providers {
    consul {
      address = "https://consul.krausen.com:8500"  
      namespace = "developer"
      token = "45a3bd52-07c7-47a4-52fd-0745e0cfe967"
    }
    vault {
      address = "https://vault.krausen.com:8200"
      namespace = "developer"
    }
  }
}
Explanation
This choice incorrectly uses the terraform block to configure providers, which is not the correct syntax for defining provider configurations in Terraform. The correct way is to use separate provider blocks for each provider, as shown in Choice A.

required_providers {
  consul {
    address = "https://consul.krausen.com:8500"  
    namespace = "developer"
    token = "45a3bd52-07c7-47a4-52fd-0745e0cfe967"
  }
  vault {
    address = "https://vault.krausen.com:8200"
    namespace = "developer"
  }
}
Explanation
This choice incorrectly uses the required_providers block, which is used to declare the required providers for the configuration but not to configure the settings for each provider. The required_providers block is used to specify the providers that are needed for the Terraform configuration, not to define their settings.

Correct answer
provider "consul" {
  address = "https://consul.krausen.com:8500"  
  namespace = "developer"
  token = "45a3bd52-07c7-47a4-52fd-0745e0cfe967"
}
 
provider "vault" {
  address = "https://vault.krausen.com:8200"
  namespace = "developer"
}
Explanation
This choice correctly configures the settings for each provider by using the provider block for each provider separately. It specifies the address, namespace, and token for the "consul" provider and the address and namespace for the "vault" provider, allowing you to define the necessary configurations for each provider individually.

data "consul" {
  address = "https://consul.krausen.com:8500"  
  namespace = "developer"
  token = "45a3bd52-07c7-47a4-52fd-0745e0cfe967"
}
 
data "vault" {
  address = "https://vault.krausen.com:8200"
  namespace = "developer"
}
Explanation
This choice incorrectly uses the data block, which is used to define data sources in Terraform for fetching information but not for configuring provider settings. The data block is used to retrieve data from external sources, such as APIs or databases, and is not used to configure provider settings.

Overall explanation
To configure each provider, you need to define a provider block and provide the configuration within that block. You would need to do this for each provider that you need to configure. For example, if you needed to customize the aws, gcp, and vault provider, you'd need to create three separate provider blocks, one for each provider.

Additional Clarity: While you can configure parameters inside a provider block, the provider block is not needed to use Terraform successfully. The most common configurations within a provider block are credentials to access the platform, which should be placed in environment variables rather than inside a provider block. In my examples above, I am providing custom configurations for my needs. But, if I were using the defaults, I wouldn't need to add a provider block for my project to be successfully deployed.

Don't forget that configurations for a provider go inside of a provider block, but any provider constraints go inside of the terraform --> required_providers block.

https://developer.hashicorp.com/terraform/language/providers

https://developer.hashicorp.com/terraform/language/providers/configuration#provider-configuration-1

Domain
Objective 3 - Understand Terraform Basics