pipeline {
    agent any

    stages {
        stage('Compile Next.js App') {
            steps {
                // Instalar dependencias y compilar el proyecto
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                  echo 'Deploying....'
                sh 'docker ps -a'
                sh 'docker build -t sicei-$GIT_BRANCH:1.0.0-$BUILD_NUMBER .'
            }
        }
    }
}
