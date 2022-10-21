
const   books = [
                {
                   'id' : '1',
                    'author': 'David Deustch',
                    'title': 'The beginning of Infinity',
                    'description': 'A book on philosphy about the origins of man',
                    'img_url': 'https://picsum.photos/id/100/300/200'
                },
                {
                   'id' : '2',
                    'author': 'Paul Coelho',
                    'title': 'The Alchemist',
                    'description': 'The true search for one\'s treasure',
                    'img_url': 'https://picsum.photos/id/238/300/200'
                },
                {
                   'id' : '3',
                    'author': 'Susan Kaye Quinn',
                    'title': 'Open Minds',
                    'description': 'Sci-Fi Futuristic book about mind reading',
                    'img_url': 'https://picsum.photos/id/240/300/200'
                },
                {
                   'id' : '4',
                    'author': 'Robert Kiyosaki',
                    'title': 'Rich Dad, Poor Dad',
                    'description': 'Motivational book on wealth building',
                    'img_url': 'https://picsum.photos/id/240/300/200'
                },
                {
                   'id' : '5',
                    'author': 'Dan Brown',
                    'title': 'The Da Vinci Code',
                    'description': 'Conspiracy theories about secrets of the holy grail',
                    'img_url': 'https://picsum.photos/id/241/300/200'
                },
                {
                   'id' : '6',
                    'author': 'Arthur Hailey',
                    'title': 'The money changers',
                    'description': 'Travel back in time and experience the banking system',
                    'img_url': 'https://picsum.photos/id/242/300/200'
                },
                {
                  'id' : '7',
                   'author': 'Rejtő Jenő',
                   'title': 'Piszkos Fred a kapitány',
                   'description': 'Kés...',
                   'img_url': 'https://picsum.photos/id/243/300/200'
               }
            ]
      

export default {
   getBooks(){
      return books;
   }
}