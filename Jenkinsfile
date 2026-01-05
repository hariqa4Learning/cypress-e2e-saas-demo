pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
      }
    }

    stage('Run Cypress E2E Tests') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/reports/**', fingerprint: true
    }
  }
}
