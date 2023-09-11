import { atom } from 'recoil';
// import image files
import avatar1 from './../images/sub/avatar_smoke.jpg';
import avatar2 from './../images/sub/avatar_girl2.jpg';
import jeans from './../images/sub/jeans.jpg';
import girl_hat from './../images/sub/avatar_girl2.jpg';
import team1 from './../images/sub/team1.jpg';
import team4 from './../images/sub/team4.jpg';
import smoke from './../images/sub/avatar_smoke.jpg';
import band from './../images/sub/bandmember.jpg';
import workshop from './../images/sub/workshop.jpg';
import man_hat from './../images/side/man_hat.jpg';
import runway from './../images/side/runway.jpg';

// Comment Data
export const comment = atom({
    key: 'comment_data',
    default: [
        {
            id: 'comment_01',
            avatar: avatar1,
            name: 'Jason',
            date: 'April 26, 2015, 10:52 PM',
            content:
                'Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 'comment_02',
            avatar: avatar2,
            name: 'Anja',
            date: 'April 7, 2015, 9:12 PM',
            content: 'That was a great runway show! Thanks for everything.',
        },
    ],
});

// Inspiration Data
export const inspiration = atom({
    key: 'inspiration_data',
    default: [
        {
            image_path: jeans,
            id: 0,
        },
        {
            image_path: girl_hat,
            id: 1,
        },
        {
            image_path: team1,
            id: 2,
        },
        {
            image_path: team4,
            id: 3,
        },
    ],
});

// Popular Data
export const popular = atom({
    key: 'popular_data',
    default: [
        {
            id: 0,
            title: 'Denim',
            context: 'Sed mattis nunc',
            image_path: smoke,
        },
        {
            id: 1,
            title: 'Sweaters',
            context: 'Praes tinci sed',
            image_path: band,
        },
        {
            id: 2,
            title: 'Workshop',
            context: 'Ultricies congue',
            image_path: workshop,
        },
        {
            id: 3,
            title: 'Trends',
            context: 'Lorem ipsum dipsum',
            image_path: smoke,
        },
    ],
});

// Post Data
export const post = atom({
    key: 'post_data',
    default: [
        {
            id: 0,
            title: 'TITLE HEADING',
            title_description: 'Title description,',
            date: 'May 2, 2016',
            image_path: girl_hat,
            description1:
                'More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
            description2:
                'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            reply: '2',
        },
        {
            id: 1,
            title: 'TITLE HEADING',
            title_description: 'Title description,',
            date: 'April 23, 2016',
            image_path: man_hat,
            description1: 'Hats! The trend this summer is hats for men!',
            description2:
                'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
            reply: '2',
        },
        {
            id: 2,
            title: 'TITLE HEADING',
            title_description: 'Title description,',
            date: 'April 7, 2016',
            image_path: runway,
            description1:
                'Dont miss! The runway in New York City this weekend is gonna be legendary!',
            description2:
                'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
            reply: '2',
        },
    ],
});
