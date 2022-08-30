
pipeline {
    agent any

    environment {
        dockerimagename = 'dhananjay17jan/assessment:latest'
        dockerImage = ''
    }

    options {
        ansiColor('xterm')
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    stages {
        stage('Checkout Source') {
            steps {
                git 'https://github.com/dhananjayasa/domain_assessment.git'
            }
        }

        stage('NPM - Install dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }

        stage('Test - Run linter') {
            steps {
                script {
                    sh 'npm run test:lint'
                }
            }
        }

        stage('Test - Run unit tests') {
            steps {
                script {
                    sh 'npm run test:unit'
                }
            }
        }

        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build dockerimagename
                }
            }
        }

        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploying App to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(configs: 'deployment-service.yml', kubeconfigId: 'kubernetes')
                }
            }
        }
    }
}
