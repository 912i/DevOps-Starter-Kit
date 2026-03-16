pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'myregistry.azurecr.io'
        ENV_NAME = 'staging'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build & Test .NET API') {
            steps {
                dir('Api') {
                    sh 'dotnet build'
                    sh 'dotnet test || echo "No tests written yet, skipping"'
                }
            }
        }

        stage('Build Angular UI') {
            steps {
                dir('ui') {
                    sh 'npm install'
                    sh 'npm run build -- --configuration production'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Infrastructure (Ansible)') {
            when {
                branch 'main'
            }
            steps {
                dir('ansible') {
                    sh 'ansible-playbook -i inventory deploy-azure.yml'
                }
            }
        }
    }
}
