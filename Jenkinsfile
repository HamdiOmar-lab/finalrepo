pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React app') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run Docker') {
            steps {
                // Construire l'image Docker
                bat 'docker build -t my-react-app .'
                
                // Lancer le container
                bat 'docker run -d -p 3000:3000 --name react-apk-container my-react-app'
            }
        }
    }

    post {
        success {
            echo "✔️ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
