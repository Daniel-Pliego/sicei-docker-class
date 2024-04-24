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
                // Construir la imagen Docker
                script {
                    docker.build('daniel/sicei')
                }
            }
        }
    }
}
