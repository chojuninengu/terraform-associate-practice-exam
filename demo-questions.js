// Demo questions for the interactive exam interface
const demoQuestions = [
    {
        number: 1,
        topic: "Infrastructure as Code Concepts",
        domain: "Objective 1",
        question: "What is Infrastructure as Code (IaC)?",
        options: [
            "A method of managing infrastructure through code and automation",
            "A way to write application code for cloud services", 
            "A programming language for infrastructure",
            "A cloud provider service"
        ],
        correct: 0,
        explanation: "Infrastructure as Code (IaC) is a method of managing and provisioning infrastructure through code and automation, rather than manual processes. This approach enables version control, repeatability, and consistency in infrastructure management.",
        reference: "https://developer.hashicorp.com/terraform/intro"
    },
    {
        number: 2,
        topic: "Terraform Basics",
        domain: "Objective 3", 
        question: "What is the primary purpose of the `terraform init` command?",
        options: [
            "To apply infrastructure changes",
            "To initialize a working directory containing Terraform configuration files",
            "To destroy all resources",
            "To validate the configuration syntax"
        ],
        correct: 1,
        explanation: "The `terraform init` command initializes a working directory containing Terraform configuration files. This is the first command that should be run after writing a new Terraform configuration.",
        reference: "https://developer.hashicorp.com/terraform/cli/commands/init"
    },
    {
        number: 3,
        topic: "Terraform State",
        domain: "Objective 7",
        question: "Where does Terraform store state by default?",
        options: [
            "In the cloud provider",
            "In a local file called terraform.tfstate",
            "In memory only",
            "In a remote database"
        ],
        correct: 1,
        explanation: "By default, Terraform stores state locally in a file named `terraform.tfstate`. This file contains the current state of your infrastructure and is used by Terraform to map real-world resources to your configuration.",
        reference: "https://developer.hashicorp.com/terraform/language/state"
    },
    {
        number: 4,
        topic: "Terraform Modules",
        domain: "Objective 5",
        question: "What is a Terraform module?",
        options: [
            "A single Terraform configuration file",
            "A container for multiple resources that are used together",
            "A cloud provider service",
            "A Terraform command"
        ],
        correct: 1,
        explanation: "A module is a container for multiple resources that are used together. Modules can be used to create lightweight, reusable components and to organize configuration into logical components.",
        reference: "https://developer.hashicorp.com/terraform/language/modules"
    },
    {
        number: 5,
        topic: "HCP Terraform",
        domain: "Objective 9",
        question: "What is a key benefit of using HCP Terraform (formerly Terraform Cloud)?",
        options: [
            "It's completely free for all users",
            "It only works with AWS",
            "It provides remote state management and collaboration features",
            "It replaces the need for Terraform CLI"
        ],
        correct: 2,
        explanation: "HCP Terraform provides remote state management, collaboration features, policy enforcement, and remote execution capabilities that enhance team workflows and infrastructure management.",
        reference: "https://developer.hashicorp.com/terraform/cloud-docs"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = demoQuestions;
}
