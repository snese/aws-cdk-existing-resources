# aws-cdk-existing-resources
This lab walks you through building sample services on existing AWS resources with AWS CDK.

## Scenario
You want your environment to achieve IaC (Infrastructure as Code) but find already established resources in the existing AWS environment, such as VPC, Subnets, Load Balancer, Security Groups, IAM Role, etc.

For some reason, you cannot directly delete these resources and re-create new ones. Like these established resources were
1. created by another team, and you don't have permission to make changes. 
2. already bound to the configuration files of other services, and you cannot easily change them. 
3. legacy products, and you are not familiar with the ins and outs and dare not make changes quickly.

## Stacks

### Base Stack
- VPC
- Load Balancer
- IAM
- RDS (TBD)
- Security Group (TBD)

### Configuration Stack
- SSM Parameter
- IAM

### Application Stack
- EC2
- SES (TBD)