export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7daea7047ddc010e766b93',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y82dcxej',
                  apiId: 'd2018478-4124-4632-8ccd-64043434bafc'
                },
                {
                  buildHookId: '5f7daea7c95fc8014b074c10',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3zsrw52y',
                  apiId: '116294bf-9ab9-4487-8ac7-a920aa8e41b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomascanham/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3zsrw52y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
