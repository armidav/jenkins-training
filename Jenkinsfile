pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Run Cypress Tests') {
            steps {
                bat 'set CI=true && npx cypress run --no-color'
            }
        }
        
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
