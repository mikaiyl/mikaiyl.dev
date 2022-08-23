const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mikaiyl/mikaiyl.dev.git',
        user: {
            name: 'Mikaiyl D',
            email: 'mikaiyl.davis@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)