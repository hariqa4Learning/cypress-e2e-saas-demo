pipeline {
  agent any

  stages {

    stage('Verify Runtime') {
      steps {
        sh '''
          which node
          node -v
          which npm
          npm -v
        '''
      }
    }

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
  }
  stage('Clean Reports') {
  steps {
    sh 'rm -rf cypress/reports || true'
  }
}

}
