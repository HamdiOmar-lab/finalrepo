pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

      

        stage('Build React app') {
            steps {
                bat 'npm run build'
            }
        }

      
    }

    post {
        success {
            echo "✔️ Build completed successfully"
        }
        failure {
            echo "❌ Build failed"
        }
    }
}
