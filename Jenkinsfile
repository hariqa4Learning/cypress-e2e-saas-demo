pipeline {
  agent any

  tools {
    nodejs 'Node20'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
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

    success {
      echo '✅ Cypress tests passed'
    }

    failure {
      echo '❌ Cypress tests failed'
    }
  }
}
