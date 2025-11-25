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

        stage('Build React apk') {
            steps {
                bat 'npm run build'
            }
        }


      stage('Clean Docker Container') {
          steps {
        bat 'docker rm -f react-apk-container || echo "no container found"'
         }
     }

        

      stage('Run Docker') {
    steps {
        bat 'docker run -d -p 3000:3000 --name react-apk-container my-react-apk'
    }
}





        stage('Smoke Test') {
              steps {
                 script {
                       bat 'curl -I http://localhost:3000'
                 }
            }
      }



      stage('Archive') {
            steps {
                echo "Archiving artifacts..."

                // Archiver le build React
                archiveArtifacts artifacts: 'build/**', fingerprint: true
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
