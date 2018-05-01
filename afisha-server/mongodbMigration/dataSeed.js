const mongoose = require('mongoose');

// Data array containing seed data - documents organized by Model
const dataSeed = () => {
    return [
        {
            'model': 'Event',
            'documents': [
                {
                    'title': 'Odessa music festival',
                    'abstract': 'The annual Odessa music festival that takes place in July hosting by IBIZA club',
                    'description': 'A music festival is a community event oriented towards live performances of singing and instrument playing that is often presented with a theme such as musical genre (e.g., blues, folk, jazz, classical music), nationality, or locality of musicians, or holiday. Some festivals are focused on women’s music.',
                    'date': new Date,
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '12 am',
                    'views': 129,
                    'attends': 123000,
                    'images': 123123123,
                    'author': new mongoose.Types.ObjectId,
                    'comments': []
                },
                {
                    'title': 'Movie challenge',
                    'abstract': 'Movie outside of the theater 3 days',
                    'description': 'Sadly, drive-in movies venues are dying a slow and painful death, but you can create an awesome outdoor cinema experience in your own backyard if you have the right gear. For the frequent movie-goer—or person that just loves watching films on the big screen—invest in a home theater system that can be used both indoors and out.',
                    'date': new Date,
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '9 pm',
                    'views': 564,
                    'attends': 15000,
                    'images': 1221212121,
                    'author': new mongoose.Types.ObjectId,
                    'comments': []
                },
                {
                    'title': 'Best weekend',
                    'abstract': 'Just because you didn’t work last weekend doesn’t mean you had a good weekend.',
                    'description': 'White-collar workers are logging longer hours than a generation ago, and Americans excel at the losing game of competitive busyness. In this context, a weekend without email and spreadsheets might seem like a victory in and of itself—and it is, kind of. But if you don’t feel rejuvenated and keen to face Monday after two work-free days, there might be a reason: You’re doing your weekend wrong.',
                    'date': new Date,
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '10 pm',
                    'views': 1564,
                    'attends': 21000,
                    'images': 1221212121,
                    'author': new mongoose.Types.ObjectId,
                    'comments': []
                }
            ]
        },
        {
            'model': 'Author',
            'documents': [
                {
                    'name': 'Author1',
                    'email': 'author1@mail.com',
                    'password': 'qwerqwerqwerqwer',
                    'avatar': 2342341241234,
                    'role': 1,
                    'socials': ['Facebook', 'Instagram']
                },
                {
                    'name': 'Author2',
                    'email': 'author2@mail.com',
                    'password': 'qwerqwerqwerqwer',
                    'avatar': 2342341241234,
                    'role': 1,
                    'socials': ['Facebook', 'Instagram']
                },
                {
                    'name': 'Author3',
                    'email': 'author3@mail.com',
                    'password': 'qwerqwerqwerqwer',
                    'avatar': 2342341241234,
                    'role': 1,
                    'socials': ['Facebook', 'Instagram']
                }
            ]
        },
        {
            'model': 'Comment',
            'documents': [
                {
                    text: 'It is an amazing event, I love it',
                    createdAt: new Date,
                    updatedAt: new Date,
                    authorOfComment: new mongoose.Types.ObjectId
                },
                {
                    text: 'It is awful',
                    createdAt: new Date,
                    updatedAt: new Date,
                    authorOfComment: new mongoose.Types.ObjectId
                },
                {
                    text: 'It will be so packed, do not recommend',
                    createdAt: new Date,
                    updatedAt: new Date,
                    authorOfComment: new mongoose.Types.ObjectId
                },
                {
                    text: 'I wanna kill you all',
                    createdAt: new Date,
                    updatedAt: new Date,
                    authorOfComment: new mongoose.Types.ObjectId
                }
            ]
        },
        {
            'model': 'User',
            'documents': [
                {
                    name: 'User1',
                    email: 'user1@mail.com',
                    password: 'qwerqwer',
                    avatar: 234123434212,
                    role: 0,
                    attends: [new mongoose.Types.ObjectId]
                },
                {
                    name: 'User2',
                    email: 'user2@mail.com',
                    password: 'asdfaasdf',
                    avatar: 356346346,
                    role: 0,
                    attends: [new mongoose.Types.ObjectId]
                }
            ]
        }
    ];
};

module.exports = dataSeed;