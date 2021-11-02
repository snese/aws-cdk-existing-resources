import * as ssm from '@aws-cdk/aws-ssm';
import * as cdk from '@aws-cdk/core';

export class ConfigStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new SSM Parameter holding a String
    new ssm.StringParameter(this, 'Parameter-VPC', {
      parameterName: '/project/VPC',
      stringValue: 'Initial parameter value',
      description: 'VPC ID',
    });

    new ssm.StringParameter(this, 'Parameter-AMI', {
      parameterName: '/project/AMI',
      stringValue: 'Initial parameter value',
      description: 'AMI ID',
    });

    new ssm.StringParameter(this, 'Parameter-EC2-Role', {
      parameterName: '/project/EC2-Role',
      stringValue: 'Initial parameter value',
      description: 'Role ARN',
    });
  }
}