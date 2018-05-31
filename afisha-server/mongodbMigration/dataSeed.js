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
                    'timeOfEvent': '05:01',
                    'views': 129,
                    'location': 'Odessa',
                    'attends': 123000,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': true
                },
                {
                    'title': 'Movie challenge',
                    'abstract': 'Movie outside of the theater 3 days',
                    'description': 'Sadly, drive-in movies venues are dying a slow and painful death, but you can create an awesome outdoor cinema experience in your own backyard if you have the right gear. For the frequent movie-goer—or person that just loves watching films on the big screen—invest in a home theater system that can be used both indoors and out.',
                    'date': new Date,
                    'location': 'Lviv',
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '05:01',
                    'views': 564,
                    'attends': 15000,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': true
                },
                {
                    'title': 'Best weekend',
                    'abstract': 'Just because you didn’t work last weekend doesn’t mean you had a good weekend.',
                    'description': 'White-collar workers are logging longer hours than a generation ago, and Americans excel at the losing game of competitive busyness. In this context, a weekend without email and spreadsheets might seem like a victory in and of itself—and it is, kind of. But if you don’t feel rejuvenated and keen to face Monday after two work-free days, there might be a reason: You’re doing your weekend wrong.',
                    'date': new Date,
                    'location': 'Lviv',
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '11:00',
                    'views': 1564,
                    'attends': 21001,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': true
                },
                {
                    'title': 'Events only for girls',
                    'abstract': 'Party with a lot of hot girls',
                    'description': 'Americans excel at the losing game of competitive busyness. In this context, a weekend without email and spreadsheets might seem like a victory in and of itself—and it is, kind of. But if you don’t feel rejuvenated and keen to face Monday after two work-free days, there might be a reason: You’re doing your weekend wrong.',
                    'date': new Date,
                    'location': 'Madrid',
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '15:01',
                    'views': 154,
                    'attends': 2123,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': true
                },
                {
                    'title': 'Events only for guys',
                    'abstract': 'Party with a lot of hot guys',
                    'description': 'In this context, a weekend without email and spreadsheets might seem like a victory in and of itself—and it is, kind of. But if you don’t feel rejuvenated and keen to face Monday after two work-free days, there might be a reason: You’re doing your weekend wrong.',
                    'date': new Date,
                    'location': 'Kiev',
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '17:00',
                    'views': 154,
                    'attends': 215,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': true
                },
                {
                    'title': 'Alcohol party',
                    'abstract': 'Everybody is gonna be really drunk on the party',
                    'description': 'Alcohol seems like a victory in and of itself—and it is, kind of. But if you don’t feel rejuvenated and keen to face Monday after two work-free days, there might be a reason: You’re doing your weekend wrong.',
                    'date': new Date,
                    'location': 'London',
                    'createdAt': new Date,
                    'updatedAt': new Date,
                    'timeOfEvent': '19:00',
                    'views': 154111,
                    'attends': 2100,
                    'images': [],
                    'author': new mongoose.Types.ObjectId,
                    'comments': [],
                    'active': false
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