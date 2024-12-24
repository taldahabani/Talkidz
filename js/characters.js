// characters.js

export const characters = [
    {
        id: 'eva',
        name: 'Eva The Robot',
        assets: {
            idleVideo: '/characters/eva/assets/eva-idle.mp4',
            speakingVideo: '/characters/eva/assets/eva-talking.mp4',
            image: '/characters/eva/assets/eva.jpg'
        },
        agentIds: {
            'en-US': 'UWxUKTTWxyHwoEfDDic2-eva-en-US',
            'en-GB': 'UWxUKTTWxyHwoEfDDic2-eva-en-GB',
            'fr-FR': 'UWxUKTTWxyHwoEfDDic2-eva-fr-FR',
            // Add more language-specific agent IDs as needed
        }
    },
    {
        id: 'robo',
        name: 'Robo The Android',
        assets: {
            idleVideo: '/characters/robo/assets/robo-idle.mp4',
            speakingVideo: '/characters/robo/assets/robo-talking.mp4',
            image: '/characters/robo/assets/robo.jpg'
        },
        agentIds: {
            'en-US': 'UWxUKTTWxyHwoEfDDic2-robo-en-US',
            'en-GB': 'UWxUKTTWxyHwoEfDDic2-robo-en-GB',
            'fr-FR': 'UWxUKTTWxyHwoEfDDic2-robo-fr-FR',
            // Add more language-specific agent IDs as needed
        }
    },
    // Add more characters as needed
];
