export const characters = {
    jonny: {
        id: 'jonny',
        name: 'Jonny',
        assets: {
            idle: '/assets/characters/jonny/idle.mp4',
            talking: '/assets/characters/jonny/talking.mp4',
            preview: '/assets/characters/jonny/preview.jpg'
        },
        agents: {
            'en-US': 'xiC8L3SOeHwYyCLLnYxF',
            'es-ES': 'spanish-agent-id',
            'fr-FR': 'french-agent-id'
        }
    },
    eva: {
        id: 'eva',
        name: 'Eva',
        assets: {
            idle: '/assets/characters/eva/idle.mp4',
            talking: '/assets/characters/eva/talking.mp4',
            preview: '/assets/characters/eva/preview.jpg'
        },
        agents: {
            'en-US': 'UWxUKTTWxyHwoEfDDic2',
            'es-ES': 'eva-spanish-id',
            'fr-FR': 'eva-french-id'
        }
    }
};

export const languages = {
    'en-US': { name: 'English (US)', flag: '🇺🇸', default: true },
    'es-ES': { name: 'Spanish', flag: '🇪🇸' },
    'fr-FR': { name: 'French', flag: '🇫🇷' }
};
