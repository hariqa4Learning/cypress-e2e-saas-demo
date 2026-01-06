pipeline {
  agent any

  options {
    timestamps()
    retry(1)
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Clean Reports') {
      steps {
        sh 'rm -rf cypress/reports || true'
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

    failure {
      echo '❌ Cypress E2E tests failed'
    }

    success {
      echo '✅ Cypress E2E tests passed'
    }
  }
}
