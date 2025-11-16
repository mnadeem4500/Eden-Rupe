pipeline{
    agent any 

    environment{
        VERCEL_TOKEN = credentials('vercel_token')
    }
    stages{
        stage('install'){
            step{
                bat ='npm install'
            }
            
        }
        stage('Test'){
            step{
                echo 'skipping test'
            }
            
        }
        stage('Build'){
            step{
                bat ='npm run build'
            }
            
        }
        stage('Deploye'){
            step{
                bat ='npx vercel  --prod --yes --token=%VERCEL_TOKEN%'
            }
            
        }
    }
}