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

        stage('Build Docker image') {
            steps {
                bat 'docker build -t my-react-app:dev .'
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
