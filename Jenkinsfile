pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
