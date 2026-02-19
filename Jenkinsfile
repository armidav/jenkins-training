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
                    bat '''
                    chcp 65001
                    set CI=true
                    npx cypress run
                    '''
            }
        }
    }
}
