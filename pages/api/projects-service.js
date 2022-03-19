export const getAllProjects = () => (
    [
        {
            icon: 'data:image/png;base64,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',
            name: 'The Retro App',
            description: 'The Retro App is an open source application developed by a bunch on enthusiatic developers (Bored Engineers) in order to provide a solution to online Retrospective Meetings. To use this application you can navigate to https://theretroapp.com',
            links: {
                github: 'https://github.com/bored-engineers/the-retro-app',
                website: 'https://theretroapp.com'
            }
        },
        {
            icon: 'images/no-icon-1.svg',
            name: 'Nodlex',
            description: 'Nodlex is a CLI tool that can generate boilerplate code for Alexa Skill Developement. Nodlex generates boilerplate code based on the repository alexa-nodejs-boilerplate, for more details on how to use this boiler plate follow the link. Nodlex also provides functionality to Add Intent from CLI itself. So no overhead of writing basic code everytime you add a new intent to your skill.',
            links: {
                github: 'https://github.com/as-ajitsingh/nodlex',
                website: 'https://www.npmjs.com/package/nodlex'
            }
        },
        {
            icon: 'images/bucketed-icon.svg',
            name: 'Bucketed',
            description: 'Bucketed allows a simple and elegant way of deploying your static websites to cloud storage/bucket providers. As many of the cloud providers give the facility of hosting a static website through cloud storages such as Google Cloud Storage, AWS S3 etc. You can also integrate Bucketed with your CD tool for autonomous deployment of your site generated through Angular, React etc.',
            links: {
                github: 'https://github.com/as-ajitsingh/bucketed',
                website: 'https://www.npmjs.com/package/bucketed'
            }
        },
        {
            icon: 'images/media-icon.svg',
            name: 'MAPS',
            description: 'MAPS stands for Media Anti Piracy System. MAPS uses technologies such as EME-Encrypted Media Extention and Blockchain - Public Ethereum Network to minimize the losses that occur due to Piracy.',
            links: {
                github: 'https://github.com/as-ajitsingh/maps-project',
                video: 'https://drive.google.com/open?id=1PO40VQzTTzjAdVSanR75QcuYRSxe0ljh'
            }
        },
        {
            icon: 'images/book-icon.svg',
            name: 'Bedside Kindle',
            description: 'Converting Kindle E-Reader into Bedside Clock, IOT Button and TO-DO List Display at same time.',
            weblink: 'https://theretroapp.com',
            links: {
                video: 'https://drive.google.com/file/d/12SoYUEXLGPL0i6vgso5vbfACrU3ByJav/view'

            }
        }
    ]
)
