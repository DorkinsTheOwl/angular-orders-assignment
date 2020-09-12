const names = [
  'Aaron Paul', 'Aaron Taylor-Johnson', 'Abigail Breslin', 'Abigail Spencer',
  'Abraham Lincoln', 'AC/DC', 'Adam Sandler', 'Addison Timlin', 'Adolf Hitler',
  'Adrianne Palicki', 'Adrien Brody', 'Aerosmith', 'Akbar', 'Al Gore',
  'Al Green', 'Al Pacino', 'Albert Einstein', 'Alejandro González Iñárritu',
  'Alex Pettyfer', 'Alexa PenaVega', 'Alexander Skarsgård',
  'Alexander the Great', 'Alexandra Breckenridge', 'Alexandra Daddario',
  'Alexis Bledel', 'Alexis Knapp', 'Alfred Hitchcock', 'Alice Eve',
  'Alice Greczyn', 'Alicia Vikander', 'Alicia von Rittberg', 'Alicia Witt',
  'Alison Brie', 'Allison Williams', 'Alycia Debnam Carey', 'Alyson Stoner',
  'Amanda Bynes', 'Amanda Schull', 'Amanda Seyfried', 'Amber Heard',
  'Amelia Earhart', 'Amy Adams', 'Ana Alexander', 'Ana de Armas',
  'Analeigh Tipton', 'Andie MacDowell', 'Andrea Riseborough',
  'Andrew Garfield', 'Andrew Lincoln', 'Andy Wachowski', 'Angelina Jolie',
  'Anna Faris', 'Anna Kendrick', 'Anna Paquin', 'Annabelle Wallis',
  'AnnaLynne McCord', 'AnnaSophia Robb', 'Anne Frank', 'Anne Hathaway',
  'Ansel Elgort', 'Archimedes', 'Aretha Franklin', 'Ariana Grande',
  'Ariel Winter', 'Aristotle', 'Arnold Schwarzenegger', 'Ashton Kutcher',
  'Ataturk', 'Attila the Hun', 'Aubrey Plaza', 'Audrey Hepburn',
  'Aung San Suu Kyi', 'Babe Ruth', 'Babur', 'Barack Obama', 'Beastie Boys',
  'Bella Thorne', 'Ben Affleck', 'Ben Barnes', 'Benazir Bhutto',
  'Benedict Cumberbatch', 'Beyonce', 'Bill Gates', 'Bill Murray',
  'Billie Holiday', 'Billie Jean King', 'Black Sabbath', 'Blake Lively',
  'Bo Diddley', 'Bob Dylan', 'Bob Geldof', 'Bob Marley', 'Bob Odenkirk',
  'Bobbi Kristina Brown', 'Booker T. and the MGs', 'Brad Pitt',
  'Bradley Cooper', 'Brandon Routh', 'Brandy Ledford', 'Brenton Thwaites',
  'Bridget Moynahan', 'Bridget Regan', 'Brie Larson', 'Britt Robertson',
  'Brittany Murphy', 'Brittany Snow', 'Bruce Jenner', 'Bruce Springsteen',
  'Bruce Willis', 'Bryan Cranston', 'Bryce Dallas Howard', 'Buddy Holly',
  'Bárbara Mori', 'Bérénice Marlohe', 'C.S. Lewis', 'Caity Lotz',
  'Cam Gigandet', 'Cameron Diaz', 'Camilla Belle', 'Camren Bicondova',
  'Carey Mulligan', 'Carl Lewis', 'Carl Perkins', 'Carla Gugino',
  'Carlos Santana', 'Carrie Fisher', 'Carrie-Anne Moss', 'Cate Blanchett',
  'Catherine the Great', 'Chad Michael Murray', 'Chairman Mao',
  'Channing Tatum', 'Charlemagne', 'Charles Dance', 'Charles Darwin',
  'Charles de Gaulle', 'Charlie Cox', 'Charlie Hunnam', 'Charlize Theron',
  'Charlotte Rampling', 'Chloë Grace Moretz', 'Chris Evans',
  'Chris Hemsworth', 'Chris Pine', 'Chris Pratt', 'Jesus',
  'Homer', 'Christian Bale', 'Christiano Ronaldo', 'Christie Brinkley',
  'Christina Hendricks', 'Christina Ricci', 'Christoph Waltz',
  'Christopher Columbus', 'Christopher Nolan', 'Chuck Berry',
  'Cillian Murphy', 'Claire Danes', 'Clark Gable', 'Cleopatra',
  'Clint Eastwood', 'Cobie Smulders', 'Coco Chanel', 'Colin Farrell',
  'Colin Firth', 'Colin O\'Donoghue', 'Confucius', 'Connie Nielsen',
  'Constance Wu', 'Courteney Cox', 'Cream', 'Creedence Clearwater Revival',
  'Crystal Reed', 'Curtis Mayfield', 'Dakota Fanning', 'Dakota Johnson',
  'Dalai Lama', 'Dan Stevens', 'Dane DeHaan', 'Daniel Craig', 'Daniel Henney',
  'Daniel Radcliffe', 'Danielle Campbell', 'Danielle Panabaker',
  'Dave Bautista', 'Dave Franco', 'David Beckham', 'David Bowie',
  'David Fincher', 'David Schwimmer', 'David Tennant', 'Deborah Ann Woll',
  'Denise Richards', 'Denzel Washington', 'Desmond Tutu', 'Diana Bang',
  'Diana Ross and the Supremes', 'Diane Kruger', 'Dianna Agron',
  'Domhnall Gleeson', 'Dominic Cooper', 'Dominik García-Lorido',
  'Douglas Booth', 'Dr. Dre', 'Drew Barrymore', 'Dustin Diamond',
  'Dwayne Johnson', 'Dwight Eisenhower', 'Dylan O\'Brien', 'Eagles',
  'Eddie Redmayne', 'Eden Sher', 'Edward Norton', 'Eleanor of Aquitaine',
  'Elisha Cuthbert', 'Eliza Taylor', 'Elizabeth Banks', 'Elizabeth Berkley',
  'Elizabeth Hurley', 'Elizabeth Olsen', 'Ellar Coltrane', 'Elle Fanning',
  'Ellen Page', 'Eloise Mumford', 'Elsa Pataky', 'Elton John',
  'Elvis Costello', 'Elvis Presley', 'Elvis Presley', 'Emile Zatopek',
  'Emilia Clarke', 'Emily Bett Rickards', 'Emily Blunt', 'Emily Browning',
  'Emily Kinney', 'Emily Ratajkowski', 'Emily Rose', 'Emily VanCamp', 'Eminem',
  'Emma Roberts', 'Emma Stone', 'Emma Watson', 'Emmanuelle Chriqui',
  'Emmeline Pankhurst', 'Emmy Rossum', 'Emperor Constantine', 'Eric Clapton',
  'Ernest Hemingway', 'Ethan Hawke', 'Eva Green', 'Eva Peron', 'Evan Peters',
  'Evan Rachel Wood', 'Evangeline Lilly', 'Ewan McGregor', 'Ezra Miller',
  'Famke Janssen', 'Farrah Fawcett', 'Fats Domino', 'Felicity Jones',
  'Fidel Castro', 'Florence Nightingale', 'Frank Zappa', 'Franklin D. Roosevelt',
  'Freddie Highmore', 'Gabriel Macht', 'Gabrielle Anwar', 'Gal Gadot',
  'Galileo Galilei', 'Garrett Hedlund', 'Gary Oldman', 'Gemma Arterton',
  'Genesis Rodriguez', 'Genghis Kahn', 'George Bush jnr', 'George Clooney',
  'George Orwell', 'George Washington', 'Geraldine McEwan', 'Gerard Butler',
  'Gillian Anderson', 'Ginnifer Goodwin', 'Gisele Bündchen', 'Grace Kelly',
  'Gram Parsons', 'Grant Gustin', 'Grateful Dead', 'Gugu Mbatha-Raw',
  'Guns n\' Roses', 'Guru Nanak', 'Gwendoline Christie', 'Gwyneth Paltrow',
  'Haile Selassie', 'Hailee Steinfeld', 'Haley Joel Osment', 'Hank Williams',
  'Harrison Ford', 'Hayden Christensen', 'Hayden Panettiere', 'Hayley Atwell',
  'Heath Ledger', 'Heather Graham', 'Heather Morris', 'Helena Bonham Carter',
  'Henry Cavill', 'Henry Ford', 'Hope Davis', 'Howlin\' Wolf', 'Hugh Jackman',
  'Ian Somerhalder', 'Idina Menzel', 'Idris Elba', 'Imogen Poots',
  'Indira Gandhi', 'Ingrid Bergman', 'Isabel Lucas', 'Isla Fisher',
  'Ivana Milicevic', 'J.K. Simmons', 'J.K.Rowling', 'J.R.R. Tolkien',
  'Jack Nicholson', 'Jack O\'Connell', 'Jackie Wilson', 'Jacqueline Kennedy Onassis',
  'Jada Pinkett Smith', 'Jai Courtney', 'Jaime King', 'Jake Gyllenhaal',
  'James Brown', 'James D\'Arcy', 'James Franco', 'James Marsden',
  'James McAvoy', 'James Norton', 'James Spader', 'James Taylor', 'Jamie Bell',
  'Jamie Brewer', 'Jamie Chung', 'Jamie Dornan', 'Janis Joplin', 'Jared Leto',
  'Jason Momoa', 'Jason Statham', 'Jawaharlal Nehru', 'Jay-Z', 'Jeff Bridges',
  'Jena Malone', 'Jenna Dewan Tatum', 'Jennifer Aniston', 'Jennifer Connelly',
  'Jennifer Ehle', 'Jennifer Garner', 'Jennifer Grey', 'Jennifer Jason Leigh',
  'Jennifer Lawrence', 'Jennifer Lopez', 'Jennifer Love Hewitt',
  'Jennifer Morrison', 'Jensen Ackles', 'Jeremy Renner', 'Jeremy Sumpter',
  'Jerry Lee Lewis', 'Jesse Owens', 'Jessica Alba', 'Jessica Barth',
  'Jessica Biel', 'Jessica Brown Findlay', 'Jessica Chastain',
  'Jessica Lange', 'Jessica Parker Kennedy', 'Jim Carrey', 'Jimi Hendrix',
  'Jimmy Fallon', 'Jimmy Wales', 'Joan of Arc', 'Joaquin Phoenix',
  'Joe Manganiello', 'Joel Kinnaman', 'Joelle Carter', 'Johann Gutenberg',
  'John Cusack', 'John F. Kennedy', 'John Krasinski', 'John Lennon',
  'John Lennon', 'John M Keynes', 'John Travolta', 'Johnny Cash',
  'Johnny Depp', 'Jon Bernthal', 'Jon Favreau', 'Jon Stewart', 'Jonah Hill',
  'Jonathan Rhys Meyers', 'Joni Mitchell', 'Jonny Weston', 'Jordana Brewster',
  'Joseph Gordon-Levitt', 'Joseph Stalin', 'Josh Hutcherson', 'Jude Law',
  'Judy Greer', 'Julia Roberts', 'Julia Stiles', 'Julianne Hough',
  'Julianne Moore', 'Julie Andrews', 'Julius Caesar', 'Juno Temple',
  'Jussie Smollett', 'Justin Timberlake', 'Kaley Cuoco-Sweeting',
  'Karen Gillan', 'Karl Marxwriter', 'Karla Souza', 'Kat Dennings',
  'Kate Beckinsale', 'Kate Mara', 'Kate Upton', 'Kate Winslet',
  'Katharine McPhee', 'Katherine Heigl', 'Katherine Hepburn',
  'Katheryn Winnick', 'Kathryn Eastwood', 'Katie Cassidy', 'Katy Perry',
  'Kaya Scodelario', 'Keanu Reeves', 'Keira Knightley', 'Kelly Lynch',
  'Keri Russell', 'Kerry Washington', 'Kevin Costner', 'Kevin Hart',
  'Kevin Spacey', 'Kirsten Dunst', 'Kit Harington', 'Konrad Adenauer',
  'Kristen Bell', 'Kristen Stewart', 'Kristen Wiig', 'Krysten Ritter',
  'Kylie Minogue', 'Lady Gaga', 'Lana Wachowski', 'Lance Armstrong',
  'Lark Voorhies', 'Larry Page', 'Laura Linney', 'Laura Prepon',
  'Laura Vandervoort', 'Lauren Cohan', 'Lauren Conrad', 'Lauren Graham',
  'Lech Walesa', 'Led Zeppelin', 'Lee Pace', 'Leighton Meester', 'Lena Headey',
  'Lenny Kravitz', 'Leo Tolstoy', 'Leon Trotsky', 'Leonardo da Vinci',
  'Leonardo DiCaprio', 'Leslie Mann', 'Liam Hemsworth', 'Liam Neeson',
  'Liana Liberato', 'Lili Simmons', 'Lily Collins', 'Lily James',
  'Linda Cardellini', 'Lindsay Lohan', 'Lionel Messi', 'Lisa Kudrow',
  'Lisa Marie Presley', 'Little Richard', 'Lizzy Caplan', 'Logan Lerman',
  'Lord Baden Powell', 'Lord Buddha', 'Lorelei Linklater', 'Louis Pasteur',
  'Lucas Black', 'Lucy Lawless', 'Ludwig Beethoven', 'Luke Bracey',
  'Luke Evans', 'Luke Grimes', 'Lyndon Johnson', 'Lyndsy Fonseca',
  'Lynyrd Skynyrd', 'Léa Seydoux', 'Mackenzie Foy', 'Madonna', 'Madonna',
  'Mads Mikkelsen', 'Mae Whitman', 'Maggie Grace', 'Maggie Lawson', 'Maggie Q',
  'Maggie Smith', 'Mahatma Gandhi', 'Maisie Williams', 'Maitland Ward',
  'Malala Yousafzai', 'Malcolm X', 'Malese Jow', 'Manu Bennett', 'Mao Zedong',
  'Marco Polo', 'Marcus Aurelius', 'Margaret Thatcher', 'Margarita Levieva',
  'Margot Robbie', 'Marie Antoinette', 'Marie Avgeropoulos', 'Marie Curie',
  'Marilyn Monroe', 'Mario Lopez', 'Marion Cotillard', 'Mariska Hargitay',
  'Mark Hamill', 'Mark Ruffalo', 'Mark Strong', 'Mark Wahlberg',
  'Mark-Paul Gosselaar', 'Marlon Brando', 'Martin Luther',
  'Martin Luther King', 'Martin Scorsese', 'Marton Csokas', 'Marvin Gaye',
  'Mary Elizabeth Winstead', 'Mary Magdalene', 'Mary-Louise Parker',
  'Mata Hari', 'Matt Bomer', 'Matt Damon', 'Matt LeBlanc', 'Matthew Goode',
  'Matthew Gray Gubler', 'Matthew McConaughey', 'Matthew Perry',
  'Maura Tierney', 'Maureen McCormick', 'Mayim Bialik', 'Megan Boone',
  'Megan Fox', 'Meghan Markle', 'Mel Gibson', 'Melissa Benoist',
  'Melissa McCarthy', 'Melissa Rauch', 'Mena Suvari', 'Meryl Streep',
  'Metallica', 'Mia Kirshner', 'Mia Wasikowska', 'Michael B. Jordan',
  'Michael C. Hall', 'Michael Fassbender', 'Michael Jackson',
  'Michael Jackson', 'Michael Jordon', 'Michael Keaton', 'Michael Sheen',
  'Michelle Dockery', 'Michelle Fairley', 'Michelle Monaghan',
  'Michelle Pfeiffer', 'Michelle Trachtenberg', 'Mickey Rourke',
  'Mikhail Gorbachev', 'Mila Kunis', 'Miles Teller', 'Miley Cyrus',
  'Milla Jovovich', 'Milo Ventimiglia', 'Minka Kelly', 'Minnie Driver',
  'Mireille Enos', 'Monica Bellucci', 'More famous people', 'Morena Baccarin',
  'Morgan Fairchild', 'Morgan Freeman', 'Mother Teresa', 'Mozart',
  'Muddy Waters', 'Muhammad', 'Muhammad Ali', 'Naomi Grossman', 'Naomi Watts',
  'Napoleon Bonaparte', 'Natalie Dormer', 'Natalie Imbruglia',
  'Natalie Portman', 'Natalie Wood', 'Neil Armstrong', 'Neil Young',
  'Nelson Mandela', 'Nicholas Hoult', 'Nick Offerman', 'Nicola Peltz',
  'Nicolas Cage', 'Nicole Kidman', 'Nikki Reed', 'Nikolaj Coster-Waldau',
  'Nina Dobrev', 'Nine Inch Nails', 'Nirvana', 'Noomi Rapace', 'Norman Reedus',
  'Odette Annable', 'Olga Kurylenko', 'Oliver Cromwell', 'Olivia Munn',
  'Olivia Thirlby', 'Olivia Wilde', 'Oprah Winfrey', 'Orlando Bloom',
  'Oscar Isaac', 'Oscar Wilde', 'Otis Redding', 'Pablo Picasso',
  'Parliament and Funkadelic', 'Patricia Arquette', 'Patricia Velasquez',
  'Patti Smith', 'Paul Krugman', 'Paul McCartney', 'Paul Walker', 'Paz Vega',
  'Pele', 'Penélope Cruz', 'Peter Dinklage', 'Peter Sellers', 'Phil Spector',
  'Pink Floyd', 'Plato', 'Pope Francis', 'Pope John Paul II',
  'Portia de Rossi', 'Preity Zinta', 'Prince', 'Prince Charles',
  'Public Enemy', 'Queen', 'Queen Elizabeth II', 'Queen Victoria',
  'Quentin Tarantino', 'R.E.M.', 'Rachael Taylor', 'Rachel Bilson',
  'Rachel McAdams', 'Rachel Nichols', 'Rachel Weisz', 'Rachelle Lefevre',
  'Radiohead', 'Ralph Fiennes', 'Ramses II', 'Randall Park', 'Randy Quaid',
  'Rashida Jones', 'Ray Charles', 'Rebecca Romijn', 'Rebel Wilson',
  'Reese Witherspoon', 'Rene Descartes', 'Rene Russo', 'Renée Zellweger',
  'Rhona Mitra', 'Ricardo Medina Jr.', 'Richard Armitage', 'Richard Branson',
  'Rinko Kikuchi', 'Rita Ora', 'RJ Mitte', 'Rob Lowe', 'Robbie Amell',
  'Robert De Niro', 'Robert Downey Jr.', 'Robert Pattinson',
  'Robin Lord Taylor', 'Robin Tunney', 'Robin Williams', 'Robin Wright',
  'Roger Federer', 'Roman Abramovich', 'Ron Perlman', 'Ronald Reagan',
  'Rooney Mara', 'Rosa Parks', 'Rosamund Pike', 'Rose Byrne', 'Rose Leslie',
  'Rose McGowan', 'Roy Orbison', 'Run-DMC', 'Rupert Murdoch', 'Russell Crowe',
  'Ruth Wilson', 'Ryan Gosling', 'Ryan Guzman', 'Ryan Hurst', 'Ryan Potter',
  'Ryan Reynolds', 'Sacha Baron Cohen', 'Saladin', 'Salma Hayek',
  'Sam Claflin', 'Sam Cooke', 'Sam Elliott', 'Sam Heughan', 'Sam Rockwell',
  'Sam Taylor-Johnson', 'Samuel L. Jackson', 'Sandra Bullock',
  'Saoirse Ronan', 'Sara Foster', 'Sara Malakul Lane', 'Sarah Gadon',
  'Sarah Hyland', 'Sarah Paulson', 'Sarah Shahi', 'Sarah Snook',
  'Sarah Wayne Callies', 'Sasha Grey', 'Sasha Pieterse', 'Scarlett Johansson',
  'Scott Eastwood', 'Sean Bean', 'Sebastian Stan', 'Selena Gomez',
  'Sergey Brin', 'Seth MacFarlane', 'Seth Rogen', 'Shailene Woodley',
  'Shakira', 'Sherilyn Fenn', 'Shia LaBeouf', 'Sienna Guillory',
  'Sienna Miller', 'Sigmund Freud', 'Simon and Garfunkel', 'Simon Bolivar',
  'Sir Isaac Newton', 'Sir Walter Raleigh', 'Sly and the Family Stone',
  'Smokey Robinson and the Miracles', 'Socrates', 'Sofia Black-D\'Elia',
  'Sofia Boutella', 'Sofía Vergara', 'Sophia Bush', 'Sophie Turner',
  'Sri Krishna', 'Sri Ramachandra', 'St Paul', 'Stana Katic', 'Stanley Tucci',
  'Stephen Amell', 'Stephen Hawking', 'Stephen King', 'Steve Carell',
  'Steve Jobs', 'Steven Spielberg', 'Stevie Wonder', 'Sting', 'Summer Glau',
  'Sylvester Stallone', 'Taissa Farmiga', 'Talking Heads', 'Tania Raymonde',
  'Taraji P. Henson', 'Taron Egerton', 'Taryn Manning', 'Tatiana Maslany',
  'Taylor Kitsch', 'Taylor Lautner', 'Taylor Momsen', 'Taylor Schilling',
  'Taylor Swift', 'Teresa Palmer', 'The Allman Brothers Band', 'The Band',
  'The Beach Boys', 'The Beatles', 'The Byrds', 'The Clash', 'The Doors',
  'The Drifters', 'The Everly Brothers', 'The Four Tops', 'The Kinks',
  'The Police', 'The Ramones', 'The Rolling Stones', 'The Sex Pistols',
  'The Shirelles', 'The Stooges', 'The Temptations', 'The Velvet Underground',
  'The Who', 'The Wright Brothers', 'The Yardbirds', 'Theo James',
  'Thomas Jefferson', 'Thomas Brodie-Sangster', 'Thomas Dekker',
  'Thomas Edison', 'Tiffani Thiessen', 'Tiger Woods', 'Tilda Swinton',
  'Tim Berners Lee', 'Timothy Olyphant', 'Tina Turner', 'Toby Kebbell',
  'Tom Brady', 'Tom Cruise', 'Tom Hanks', 'Tom Hardy', 'Tom Hiddleston',
  'Tom Petty', 'Tom Selleck', 'Travis Fimmel', 'Tupac Shakur',
  'Tuppence Middleton', 'U2', 'Uma Thurman', 'Usain Bolt', 'V.Lenin',
  'Val Kilmer', 'Van Morrison', 'Vanessa Hudgens', 'Vera Farmiga',
  'Victoria Justice', 'Viggo Mortensen', 'Vin Diesel', 'Vincent Van Gogh',
  'Viola Davis', 'Virginia Gardner', 'Voltaire', 'Walt Disney',
  'Walton Goggins', 'Wentworth Miller', 'Wes Anderson', 'Will Ferrell',
  'Will Poulter', 'Will Smith', 'Willa Holland', 'William Shakespeare',
  'William Tyndale', 'William Wilberforce', 'Winona Ryder',
  'Winston Churchill', 'Woodrow Wilson', 'Wright Brothers',
  'writerThomas Aquinas', 'writerTom Paine', 'Yoko Ono', 'Yvonne Strahovski',
  'Zac Efron', 'Zach Galifianakis', 'Zach McGowan', 'Zachary Levi',
  'Zachary Quinto', 'Zoe Saldana', 'Zooey Deschanel', 'Zosia Mamet',
  'Zoë Kravitz', 'Zsa Zsa Gabor'
];

const products = [
  {
    name: 'Snoopy Socks',
    sku: 'SOCK_SNOOPY',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'Star Wars Socks',
    sku: 'SOCK_SW',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'iSock Sock',
    sku: 'SOCK_ISOCK',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'Snoopy Underwear',
    sku: 'UW_SNOOPY',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'Star Wars Underwear',
    sku: 'UW_SW',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'iUW Underwear',
    sku: 'UW_ISOCK',
    variants: [
      {
        material: 'cotton',
        price: 9.99
      },
      {
        material: 'wool',
        price: 19.99
      },
      {
        material: 'linen',
        price: 14.99
      },
    ]
  },
  {
    name: 'Snoopy Pants',
    sku: 'PANTS_SNOOPY',
    variants: [
      {
        material: 'Jean',
        price: 59.99
      },
      {
        material: 'Denim',
        price: 49.99
      },
      {
        material: 'Khaki',
        price: 34.99
      },
    ]
  },
  {
    name: 'Star Wars Pants',
    sku: 'PANTS_SW',
    variants: [
      {
        material: 'Jean',
        price: 59.99
      },
      {
        material: 'Denim',
        price: 49.99
      },
      {
        material: 'Khaki',
        price: 34.99
      },
    ]
  },
  {
    name: 'Plain Pants',
    sku: 'PANTS_PLAIN',
    variants: [
      {
        material: 'Jean',
        price: 59.99
      },
      {
        material: 'Denim',
        price: 49.99
      },
      {
        material: 'Khaki',
        price: 34.99
      },
    ]
  },
  {
    name: 'Snoopy Shirt',
    sku: 'SHIRT_SNOOPY',
    variants: [
      {
        material: 'Wool',
        price: 49.99
      },
      {
        material: 'Cotton',
        price: 39.99
      },
      {
        material: 'Linen',
        price: 24.99
      },
    ]
  },
  {
    name: 'Star Wars Shirt',
    sku: 'SHIRT_SW',
    variants: [
      {
        material: 'Wool',
        price: 49.99
      },
      {
        material: 'Cotton',
        price: 39.99
      },
      {
        material: 'Linen',
        price: 24.99
      },
    ]
  },
  {
    name: 'iShirt',
    sku: 'SHIRT_I',
    variants: [
      {
        material: 'Wool',
        price: 149.99
      },
      {
        material: 'Cotton',
        price: 139.99
      },
      {
        material: 'Linen',
        price: 124.99
      },
    ]
  },
  {
    name: 'Brown Belt',
    sku: 'BELT_BROWN',
    variants: [
      {
        material: 'Leather',
        price: 29.99
      },
      {
        material: 'Fabric',
        price: 14.99
      },
      {
        material: 'Rubber',
        price: 9.99
      },
    ]
  },
  {
    name: 'Black Belt',
    sku: 'BELT_BLACK',
    variants: [
      {
        material: 'Leather',
        price: 29.99
      },
      {
        material: 'Fabric',
        price: 14.99
      },
      {
        material: 'Rubber',
        price: 9.99
      },
    ]
  },
  {
    name: 'Rainbow Belt',
    sku: 'BELT_RAINBOW',
    variants: [
      {
        material: 'Leather',
        price: 29.99
      },
      {
        material: 'Fabric',
        price: 14.99
      },
      {
        material: 'Rubber',
        price: 9.99
      },
    ]
  },
  {
    name: 'Fedora',
    sku: 'HAT_FED',
    variants: [
      {
        material: 'Simple',
        price: 9.99
      },
      {
        material: 'Fancy',
        price: 44.99
      },
      {
        material: 'Extra Fancy',
        price: 69.99
      },
    ]
  },
  {
    name: 'Baret',
    sku: 'HAT_BAR',
    variants: [
      {
        material: 'Simple',
        price: 9.99
      },
      {
        material: 'Fancy',
        price: 44.99
      },
      {
        material: 'Extra Fancy',
        price: 69.99
      },
    ]
  },
  {
    name: 'Baseball Cap',
    sku: 'HAT_BASEBALL',
    variants: [
      {
        material: 'Simple',
        price: 9.99
      },
      {
        material: 'Fancy',
        price: 44.99
      },
      {
        material: 'Extra Fancy',
        price: 69.99
      },
    ]
  },
  {
    name: 'Black Gloves',
    sku: 'GLOVES_BLACK',
    variants: [
      {
        material: 'Cotton',
        price: 29.99
      },
      {
        material: 'Leather',
        price: 34.99
      },
      {
        material: 'Latex',
        price: 19.99
      },
    ]
  },
  {
    name: 'Beige Gloves',
    sku: 'GLOVES_BEIGE',
    variants: [
      {
        material: 'Cotton',
        price: 29.99
      },
      {
        material: 'Leather',
        price: 34.99
      },
      {
        material: 'Latex',
        price: 19.99
      },
    ]
  },
  {
    name: 'Red Gloves',
    sku: 'GLOVES_RED',
    variants: [
      {
        material: 'Cotton',
        price: 29.99
      },
      {
        material: 'Leather',
        price: 34.99
      },
      {
        material: 'Latex',
        price: 19.99
      },
    ]
  }
];

const getRandomProduct = () => products[Math.floor(Math.random() * products.length)];

const getFulfillment = n => {
  const x = n % 6;
  switch (x) {
    case 0:
      return 'Ordered';
    case 1:
      return 'Processing';
    case 2:
      return 'In Production';
    case 3:
      return 'Quality Control';
    case 4:
      return 'Shipped';
    case 5:
      return 'Completed';
  }
};

export const internalOrders = names.slice(0, names.length / 2).map((customer, index) => {
    const price = Math.floor(Math.random() * 1000 + 358);
    const cost = Math.floor(Math.random() * 357);
    const revenue = price - cost;
    const created = new Date();
    created.setDate(created.getDate() - index % 10);

    return {
      id: index + 1,
      customer,
      created,
      revenue,
      cost,
      price,
      fulfillment: getFulfillment(index)
    };
  }
);

export const externalOrders = names.slice(names.length / 2).map((customer, index) => {
  const order = [...Array(Math.ceil(Math.random() * 5))].map((_, id) => {
    const product = getRandomProduct();
    return {
      id,
      ...product,
      selectedVariant: product.variants[Math.floor(Math.random() * product.variants.length)]
    };
  });

  return {
    id: index + 1,
    customer,
    order,
    amount: order.length,
    volume: +order.reduce((acc, item) => acc + item.selectedVariant.price, 0).toFixed(2),
    sku: order[0].sku,
  };
});
